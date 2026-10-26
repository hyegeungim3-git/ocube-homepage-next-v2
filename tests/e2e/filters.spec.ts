import { expect, test } from "@playwright/test";

// 구축 사례 필터. 로드맵 6단계에서 이 동작을 React state 로 옮길 예정이라,
// 옮기기 전 지금 동작을 사용자가 보는 결과 기준으로 고정한다.
// (탭 8개 · 카드 22장. 2026-08-28 공공·홈 AIoT 에 1건씩 늘어 빈 분야가 없어졌다)

const FILTER_COUNTS: Record<string, number> = {
  all: 22,
  mfg: 6,
  energy: 2,
  mobility: 8,
  public: 1,
  fin: 1,
  home: 3,
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
    // 지금은 비어 있는 분야가 없다. 필터는 누를 때마다 카드의 data-cat 을 다시 읽으므로,
    // 공공 카드의 분야를 지워 빈 분야를 만든 뒤 안내가 뜨는지 본다.
    // (카드를 DOM 에서 빼면 안 된다 — 카드 목록은 처음 그릴 때 한 번만 모은다)
    await page
      .locator('.ref-card[data-cat="public"]')
      .evaluateAll((cards) => cards.forEach((card) => card.setAttribute("data-cat", "none")));
    await page.locator('.cert-filter .case-tab[data-cat="public"]').click();
    await expect(empty).toBeVisible();
    await expect(empty).toContainText("아직 공개된 사례가 없습니다");
  });

  test(`전체로 돌아오면 ${FILTER_COUNTS.all}건이 모두 복귀한다`, async ({ page }) => {
    await page.locator('.cert-filter .case-tab[data-cat="fin"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(FILTER_COUNTS.fin);
    await page.locator('.cert-filter .case-tab[data-cat="all"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(FILTER_COUNTS.all);
    await expect(page.locator("[data-filter-empty]")).toBeHidden();
  });

  test("영어 화면에서도 같은 개수로 걸러진다", async ({ page }) => {
    await page.goto("/en/references.html");
    await page.locator('.cert-filter .case-tab[data-cat="mfg"]').click();
    await expect(page.locator(".ref-card:not(.is-hidden)")).toHaveCount(FILTER_COUNTS.mfg);
  });
});
