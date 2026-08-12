import { expect, test } from "@playwright/test";

// 구축 사례 필터. 로드맵 6단계에서 이 동작을 React state 로 옮길 예정이라,
// 옮기기 전 지금 동작을 사용자가 보는 결과 기준으로 고정한다.
// (탭 8개 · 카드 20장 · 공공 분야는 아직 0건이라 안내 문구가 뜬다)

const FILTER_COUNTS: Record<string, number> = {
  all: 20,
  mfg: 6,
  energy: 2,
  mobility: 8,
  public: 0,
  fin: 1,
  home: 2,
  enterprise: 1,
};

test.describe("주요 구축 사례 필터", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/references.html");
  });

  test("탭 8개, 처음에는 전체가 눌린 상태", async ({ page }) => {
    const tabs = page.locator(".cert-filter .case-tab");
    await expect(tabs).toHaveCount(8);
    await expect(tabs.first()).toHaveAttribute("aria-pressed", "true");
    await expect(tabs.first()).toHaveClass(/active/);
    await expect(page.locator(".ref-card")).toHaveCount(FILTER_COUNTS.all);
  });

  for (const [cat, expected] of Object.entries(FILTER_COUNTS)) {
    test(`${cat} 분야를 고르면 ${expected}건이 남는다`, async ({ page }) => {
      await page.locator(`.cert-filter .case-tab[data-cat="${cat}"]`).click();
      await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(expected);
      // 눌린 탭만 active
      await expect(page.locator(".cert-filter .case-tab.active")).toHaveCount(1);
      await expect(page.locator(`.cert-filter .case-tab[data-cat="${cat}"]`)).toHaveAttribute(
        "aria-pressed",
        "true",
      );
    });
  }

  test("결과가 0건이면 안내 문구가 뜬다", async ({ page }) => {
    const empty = page.locator("[data-filter-empty]");
    await expect(empty).toBeHidden();
    await page.locator('.cert-filter .case-tab[data-cat="public"]').click();
    await expect(empty).toBeVisible();
    await expect(empty).toContainText("아직 공개된 사례가 없습니다");
  });

  test("전체로 돌아오면 20건이 모두 복귀한다", async ({ page }) => {
    await page.locator('.cert-filter .case-tab[data-cat="fin"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(1);
    await page.locator('.cert-filter .case-tab[data-cat="all"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(20);
    await expect(page.locator("[data-filter-empty]")).toBeHidden();
  });

  test("영어 화면에서도 같은 개수로 걸러진다", async ({ page }) => {
    await page.goto("/en/references.html");
    await page.locator('.cert-filter .case-tab[data-cat="mfg"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(FILTER_COUNTS.mfg);
  });
});
