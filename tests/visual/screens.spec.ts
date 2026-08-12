import { expect, test } from "@playwright/test";
import { LANGS, VIEWPORTS, pageUrl } from "../helpers/pages";
import type { Slug } from "../helpers/pages";
import { blankMedia, freezeForShot } from "../helpers/stabilize";

// 시각 기준선. 플레이북 11절: 1440x900 · 375x812, ko/en, 홈과 대상 화면.
//
// 23쪽을 전부 찍지 않는 이유: 전면 스크린샷은 한 장이 수 MB 라 저장소가 감당하지 못한다.
// 대신 **레이아웃 종류를 모두 덮는 8쪽**을 고른다 — 이 8쪽이 쓰는 컴포넌트가 나머지
// 화면이 쓰는 것의 상위집합이다. 특정 화면을 고치는 단계에서는 그 화면을 여기 추가한다.
//
// 8쪽 x 2언어 x 2뷰포트 = 32장.
const COVERED: { slug: Slug; why: string }[] = [
  { slug: "index", why: "히어로 슬라이더 · CI · 역량 카드 · 블루 사례 밴드 · 통합 푸터" },
  { slug: "about", why: "인사말 · 비전 장면 · 육각 핵심가치 · CI 보드" },
  { slug: "business-ax", why: "고객사 마퀴 · 좌측 고정 6단계 · 적용 분야 · 대표 프로젝트" },
  { slug: "business-embedded", why: "완성차 로고 마퀴 · 3대 역량 다크 카드" },
  { slug: "company", why: "연혁 타임라인" },
  { slug: "references", why: "필터 바 · 대표 사례 · 카드 그리드 · 로고 그리드" },
  { slug: "solution-cubeon", why: "이동 문구 · 교차 행 · 핀드 목록 · 비교표" },
  { slug: "contact", why: "폼 · 연락처 카드" },
];

// 스크롤한 뒤의 헤더는 위 32장 어디에도 없다 — `.gnb` 는 position:fixed 라 전면 스크린샷에도
// 스크롤 전(투명) 모습만 담긴다. 유리 효과(backdrop-filter)가 죽었을 때 시각 검사가 초록으로
// 지나간 구조적 이유가 이것이었다. 헤더 띠만 잘라 한 장 더 찍어 그 자리를 덮는다.
const SCROLLED_HEADER: Slug[] = ["references", "solution-cubeon"];

test.describe("스크롤한 뒤의 헤더", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  for (const slug of SCROLLED_HEADER) {
    test(`ko ${slug}`, async ({ page }) => {
      await page.goto(pageUrl(slug, "ko"), { waitUntil: "load" });
      await freezeForShot(page);
      await blankMedia(page);
      // 아래로 크게 내리면 헤더가 스스로 숨는다(gnb-hide) — 살짝 올려 되띄운 뒤 찍는다
      await page.evaluate(() => window.scrollTo(0, 1200));
      await page.waitForTimeout(120);
      await page.evaluate(() => window.scrollTo(0, 1160));
      // 클래스가 실제로 붙고 헤더가 제자리에 올 때까지 기다린다(스크롤 직후 즉시 재면 오탐)
      await page.waitForFunction(() => {
        const gnb = document.querySelector(".gnb");
        return !!gnb?.classList.contains("scrolled") && gnb.getBoundingClientRect().top === 0;
      });

      // 허용오차를 조인다. 헤더는 93% 불투명이라 뒤 내용의 흐림이 아주 옅게만 비치는데,
      // 기본 threshold(0.2)로는 유리 효과가 통째로 죽어도 '같다' 고 나온다(실제로 그랬다).
      await expect(page).toHaveScreenshot(`${slug}-ko-scrolled-header.png`, {
        clip: { x: 0, y: 0, width: 1440, height: 72 },
        threshold: 0,
        maxDiffPixels: 0,
      });
    });
  }
});

for (const viewport of VIEWPORTS) {
  test.describe(`${viewport.name} ${viewport.width}x${viewport.height}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const { slug } of COVERED) {
      for (const lang of LANGS) {
        test(`${lang} ${slug}`, async ({ page }) => {
          await page.goto(pageUrl(slug, lang), { waitUntil: "load" });
          await freezeForShot(page);
          await blankMedia(page);

          await expect(page).toHaveScreenshot(`${slug}-${lang}-${viewport.name}.png`, {
            fullPage: true,
          });
        });
      }
    }
  });
}
