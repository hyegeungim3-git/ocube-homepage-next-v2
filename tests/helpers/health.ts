// 화면 건강검진 — 플레이북 11절이 "실패로 처리" 하라고 정한 항목들.
//
//   콘솔 error · page error · hydration warning · 깨진 이미지 · 가로 오버플로
//
// 여기에 h1 개수도 함께 본다. 이 저장소는 h1 을 화면당 1개로 유지해 왔고(문서 개요),
// 리팩터링 중 셸을 합치다 보면 가장 먼저 깨지는 계약이기 때문이다.
import type { ConsoleMessage, Page } from "@playwright/test";

export type PageProblems = {
  consoleErrors: string[];
  pageErrors: string[];
  hydration: string[];
  failedRequests: string[];
};

/** 하이드레이션 경고는 error 로도 warning 으로도 나온다 — 문구로 잡는다. */
const HYDRATION = /hydrat|did not match|server rendered html/i;

/**
 * 페이지가 만들어내는 오류를 모은다. `page.goto` 전에 붙여야 초기 오류를 놓치지 않는다.
 * 반환된 객체는 이후 계속 채워지므로, 검사 시점에 읽으면 된다.
 */
export function watchProblems(page: Page): PageProblems {
  const problems: PageProblems = {
    consoleErrors: [],
    pageErrors: [],
    hydration: [],
    failedRequests: [],
  };

  page.on("console", (msg: ConsoleMessage) => {
    const text = msg.text();
    if (HYDRATION.test(text)) {
      problems.hydration.push(text);
      return;
    }
    if (msg.type() === "error") problems.consoleErrors.push(text);
  });
  page.on("pageerror", (err: Error) => {
    (HYDRATION.test(err.message) ? problems.hydration : problems.pageErrors).push(err.message);
  });
  page.on("requestfailed", (req) => {
    // 자동화 환경에서 미디어 재생을 막아 생기는 취소는 결함이 아니다
    const failure = req.failure()?.errorText ?? "";
    if (req.resourceType() === "media" && /ABORTED|FAILED/i.test(failure)) return;
    problems.failedRequests.push(`${req.method()} ${req.url()} — ${failure}`);
  });

  return problems;
}

export type DomAudit = {
  h1Count: number;
  brokenImages: string[];
  overflowBy: number;
  langAttr: string;
};

/**
 * 렌더된 DOM 을 읽는다. 이미지는 lazy 라 화면 밖은 아직 안 받았을 수 있으므로,
 * "완료됐는데 자연 크기가 0" 인 것만 깨진 것으로 센다.
 */
export async function auditDom(page: Page): Promise<DomAudit> {
  return page.evaluate(() => {
    const broken = Array.from(document.images)
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.getAttribute("src") ?? "(src 없음)");
    const doc = document.documentElement;
    return {
      h1Count: document.querySelectorAll("h1").length,
      brokenImages: broken,
      // 소수점 반올림 오차를 피해 1px 여유를 둔다
      overflowBy: Math.max(0, Math.round(doc.scrollWidth - doc.clientWidth)),
      langAttr: doc.getAttribute("lang") ?? "",
    };
  });
}

/** 화면 밖 lazy 이미지까지 실제로 받게 만든 뒤 검사하려고 끝까지 훑는다. */
export async function loadEverything(page: Page): Promise<void> {
  await page.evaluate(async () => {
    document.querySelectorAll("img[loading=lazy]").forEach((img) => {
      img.setAttribute("loading", "eager");
    });
    const step = Math.round(window.innerHeight * 0.9);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    }
    window.scrollTo(0, 0);
    await document.fonts.ready;
  });
  await page.waitForLoadState("networkidle");
}

/** 문제 목록을 한 줄짜리 사람 읽는 문장으로. 실패 메시지에 그대로 쓴다. */
export function describe(problems: PageProblems, dom: DomAudit): string[] {
  const out: string[] = [];
  if (problems.consoleErrors.length)
    out.push(`콘솔 오류 ${problems.consoleErrors.length}건: ${problems.consoleErrors[0]}`);
  if (problems.pageErrors.length)
    out.push(`페이지 오류 ${problems.pageErrors.length}건: ${problems.pageErrors[0]}`);
  if (problems.hydration.length)
    out.push(`하이드레이션 경고 ${problems.hydration.length}건: ${problems.hydration[0]}`);
  if (problems.failedRequests.length)
    out.push(`요청 실패 ${problems.failedRequests.length}건: ${problems.failedRequests[0]}`);
  if (dom.brokenImages.length)
    out.push(`깨진 이미지 ${dom.brokenImages.length}건: ${dom.brokenImages[0]}`);
  if (dom.overflowBy > 0) out.push(`가로 오버플로 ${dom.overflowBy}px`);
  if (dom.h1Count !== 1) out.push(`h1 개수 ${dom.h1Count} (1이어야 함)`);
  return out;
}
