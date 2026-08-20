// 스크린샷을 결정적으로 만드는 준비 동작.
//
// 이 사이트에는 스크롤 리빌(.rv/.reveal), 무한 마퀴(파트너·구축사례·완성차 로고),
// 자동 전환 히어로, 배경 슬로우 줌, 시연 영상이 있다. 그냥 찍으면 매번 다른 그림이 나온다.
// 플레이북 11절: "visual TC 는 애니메이션·폰트·이미지 로딩을 고정한 뒤 촬영한다."
//
// 애니메이션을 '일시정지' 하지 않고 아예 'none' 으로 끄는 이유: 일시정지는 멈춘 위치가
// 타이밍에 따라 달라져서 결정적이지 않다. none 이면 항상 초기 상태로 고정된다.
import type { Page } from "@playwright/test";

const FREEZE = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  /* 리빌 요소는 최종 상태로 고정 (감축 모션 규칙과 같은 결과) */
  .rv, .reveal { opacity: 1 !important; transform: none !important; }
  /* 커서를 따라가는 CI 로고 기울기는 초기 자세로 */
  .ci-stage, .ci-logo { transform: none !important; }
`;

/**
 * 화면을 찍기 좋은 상태로 만든다.
 * 1) 애니메이션 정지 2) lazy 이미지까지 전부 로드 3) 폰트 로드 대기 4) 영상 첫 프레임 고정
 */
export async function freezeForShot(page: Page): Promise<void> {
  // 감축 모션을 여기서 **직접** 건다.
  //
  // playwright.config 의 visual 프로젝트에도 reducedMotion:"reduce" 가 있고 옵션은 실제로
  // 해석되지만(testInfo.project.use 로 확인), 페이지에서 matchMedia 는 false 로 나왔다.
  // 그 바람에 히어로 타자기가 계속 타이핑 중이었고, 연속 두 장이 매번 달라
  // 스크린샷 허용치를 조이는 순간 "두 장이 안정되지 않는다" 로 실패했다.
  // 설정 배관에 기대지 말고 촬영 직전에 못을 박는다.
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addStyleTag({ content: FREEZE });

  await page.evaluate(async () => {
    document.querySelectorAll("img[loading=lazy]").forEach((img) => {
      img.setAttribute("loading", "eager");
    });
    // 시연 영상은 첫 프레임에서 멈춰야 매번 같은 그림이 된다
    document.querySelectorAll("video").forEach((v) => {
      try {
        v.pause();
        v.currentTime = 0;
        v.removeAttribute("autoplay");
      } catch {
        /* 재생 준비 전이면 무시 */
      }
    });
    // 타자기(home-refresh.js)는 setTimeout 으로 글자를 하나씩 드러낸다 — CSS 로는 못 멈춘다.
    // 남은 타이머를 끄고 전부 드러낸 상태로 고정한다(감축 모션일 때와 같은 결과).
    document.querySelectorAll("[data-typewriter]").forEach((title) => {
      const holder = title as unknown as { __typewriterTimers?: number[] };
      if (holder.__typewriterTimers) {
        holder.__typewriterTimers.forEach((id) => window.clearTimeout(id));
        holder.__typewriterTimers = [];
      }
      title.querySelectorAll(".typewriter-caret").forEach((caret) => caret.remove());
      title.querySelectorAll(".typewriter-character").forEach((span) => {
        span.classList.add("is-visible");
        span.classList.remove("is-current");
      });
    });
    const step = Math.round(window.innerHeight * 0.9);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => requestAnimationFrame(() => r(null)));
    }
    window.scrollTo(0, 0);
    await document.fonts.ready;
  });

  // 이미지가 다 들어왔는지를 직접 기다린다.
  //
  // 전에는 networkidle 을 썼는데, 배경 요청이 끊이지 않으면 영영 idle 이 되지 않아
  // 60초 시한을 넘기며 산발적으로 실패했다(en/index 모바일에서 실제로 났다).
  // '무엇을 기다리는지' 가 분명한 조건으로 바꾼다.
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((done) => {
              img.addEventListener("load", () => done(null), { once: true });
              img.addEventListener("error", () => done(null), { once: true });
            }),
        ),
    ),
  );
  // 스크롤 위치 복귀 후 마지막 레이아웃 확정
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => r(null))));
}

/**
 * 사진 내용을 평평한 색으로 덮는다. **레이아웃 검사용 스크린샷을 가볍게 만들기 위한 것**이다.
 *
 * 왜: 전면 스크린샷을 그대로 저장하면 사진이 많은 화면 한 장이 4MB 다(8쪽 x 2언어 x 2뷰포트
 * = 46MB). 기준선을 갱신할 때마다 그만큼 저장소에 쌓인다. 그런데 리팩터링이 깨뜨리는 것은
 * 사진의 화소가 아니라 **배치·여백·글자** 다. 사진을 평평하게 덮으면 상자의 위치와 크기는
 * 그대로 남으면서 파일은 수십분의 1 로 줄어든다.
 *
 * 사진 자체가 바뀌는 사고(엉뚱한 이미지 교체·깨진 이미지)는 다른 검사가 맡는다 —
 * DOM 게이트(npm run verify)가 src 를, 건강검진이 깨진 이미지를 잡는다.
 */
export async function blankMedia(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      img, video, iframe, svg { visibility: hidden !important; }
      img, video, iframe { background: #c8d0dc !important; }
      svg { background: transparent !important; }
    `,
  });
  await page.evaluate(() => {
    // CSS 배경 사진(히어로 등)도 같은 이유로 평평하게. 그라디언트는 값이 싸고 디자인 신호라 남긴다.
    for (const el of Array.from(document.querySelectorAll<HTMLElement>("*"))) {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg.includes("url(")) el.style.backgroundImage = "none";
    }
  });
}
