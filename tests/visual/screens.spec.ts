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
