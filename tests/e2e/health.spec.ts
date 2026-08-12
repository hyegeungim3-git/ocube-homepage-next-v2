import { expect, test } from "@playwright/test";
import { FRAMEWORK_PAGES, VIEWPORTS, allPages } from "../helpers/pages";
import { auditDom, describe, loadEverything, watchProblems } from "../helpers/health";

// 로드맵 1단계가 요구하는 건강검진: 콘솔 오류 · 하이드레이션 · 깨진 이미지 · 가로 오버플로.
// 화면 23개 x 두 언어 x 두 뷰포트 = 92셀. 리팩터링이 어느 화면을 건드리든 여기서 먼저 걸린다.
for (const viewport of VIEWPORTS) {
  test.describe(`건강검진 · ${viewport.name} ${viewport.width}x${viewport.height}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const { slug, lang, url } of allPages()) {
      test(`${lang} ${slug}`, async ({ page }) => {
        const problems = watchProblems(page);
        await page.goto(url, { waitUntil: "load" });
        await loadEverything(page);

        const dom = await auditDom(page);
        expect(dom.langAttr, "html lang 속성").toBe(lang);
        expect(describe(problems, dom).join(" / ")).toBe("");
      });
    }
  });
}

// Next 가 만들어 주는 화면. 사이트 셸이 없으므로 "오류 없이 뜬다" 만 본다.
// (전용 404 화면은 아직 결정 대기 항목이다 — AGENTS.md 11절)
test.describe("프레임워크 기본 화면", () => {
  for (const file of FRAMEWORK_PAGES) {
    test(file, async ({ page }) => {
      const problems = watchProblems(page);
      const response = await page.goto(`/${file}`, { waitUntil: "load" });
      expect(response?.status()).toBe(200);
      expect(problems.pageErrors, "페이지 오류").toEqual([]);
      expect(problems.hydration, "하이드레이션 경고").toEqual([]);
    });
  }
});
