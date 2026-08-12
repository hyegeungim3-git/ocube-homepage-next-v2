import { expect, test } from "@playwright/test";
import { headerNavigation } from "../../src/config/navigation";

// 로드맵 2단계에서 Header·MobilePanel·Footer 를 PageShell 로 합친다.
// 합치기 전에 지금 셸이 실제로 어떻게 동작하는지 못 박아 둔다.

test.describe("데스크톱 GNB", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html");
  });

  test("대메뉴 4개는 링크가 아니라 펼침 버튼이다", async ({ page }) => {
    const items = page.locator(".gnb .nav-menu .nav-item > a");
    await expect(items).toHaveCount(headerNavigation.length);
    for (let i = 0; i < headerNavigation.length; i += 1) {
      const item = items.nth(i);
      await expect(item).toHaveAttribute("role", "button");
      await expect(item).toHaveAttribute("aria-haspopup", "true");
      await expect(item).toHaveAttribute("aria-expanded", "false");
      // 대메뉴 자체는 이동하지 않는다 (개요 화면 3개를 내린 뒤의 규칙)
      expect(await item.getAttribute("href")).toBeNull();
    }
  });

  test("중메뉴 20개의 주소가 설정과 일치한다", async ({ page }) => {
    const hrefs = await page
      .locator(".gnb .dropdown a")
      .evaluateAll((els) => els.map((el) => el.getAttribute("href") ?? ""));
    expect(hrefs).toEqual(headerNavigation.flatMap((item) => item.links.map((l) => l.href)));
  });

  test("메뉴에 포인터를 올리면 메가 메뉴가 열리고 벗어나면 닫힌다", async ({ page }) => {
    const gnb = page.locator(".gnb");
    await expect(gnb).not.toHaveClass(/gnb-mega/);
    await page.locator(".gnb .nav-menu").hover();
    await expect(gnb).toHaveClass(/gnb-mega/);
    await expect(page.locator(".gnb .nav-item > a").first()).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    // 펼쳐진 메가 패널의 빈 영역까지 GNB 박스에 포함된다(스크립트 주석 참조).
    // 그래서 헤더 바로 아래가 아니라 화면 맨 아래로 빠져나가야 닫힌다.
    await page.mouse.move(700, 880);
    await expect(gnb).not.toHaveClass(/gnb-mega/);
  });

  test("펼칠 때 가장 긴 갈래의 높이를 재어 패널 높이로 쓴다", async ({ page }) => {
    const gnb = page.locator(".gnb");
    expect(await gnb.evaluate((el) => el.style.getPropertyValue("--mega-h"))).toBe("");
    await page.locator(".gnb .nav-menu").hover();
    await expect(gnb).toHaveClass(/gnb-mega/);
    const h = await gnb.evaluate((el) => parseInt(el.style.getPropertyValue("--mega-h"), 10));
    expect(h).toBeGreaterThan(100);
  });

  test("키보드 포커스로도 열리고 Esc 로 닫힌다", async ({ page }) => {
    const gnb = page.locator(".gnb");
    await page.locator(".gnb .nav-item > a").first().focus();
    await expect(gnb).toHaveClass(/gnb-mega/);
    await page.keyboard.press("Escape");
    await expect(gnb).not.toHaveClass(/gnb-mega/);
  });

  test("본문 바로가기가 Tab 한 번에 나오고 본문으로 이동한다", async ({ page }) => {
    await page.keyboard.press("Tab");
    const skip = page.locator("a.skip");
    await expect(skip).toBeFocused();
    await expect(skip).toHaveAttribute("href", "#top");
    await skip.press("Enter");
    await expect(page).toHaveURL(/#top$/);
    await expect(page.locator("#top")).toHaveCount(1);
  });

  test("현재 화면의 중메뉴에 aria-current 가 붙는다", async ({ page }) => {
    await page.goto("/references.html");
    const current = page.locator('.gnb .dropdown a[aria-current="page"]');
    await expect(current).toHaveCount(1);
    await expect(current).toHaveAttribute("href", "references.html");
  });
});

test.describe("모바일 메뉴", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("열고 닫는 전 과정 — 배경 잠금·ARIA·초점 복귀", async ({ page }) => {
    await page.goto("/index.html");
    const toggle = page.locator(".m-toggle");
    const panel = page.locator(".m-panel");

    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(panel).not.toHaveClass(/open/);

    await toggle.click();
    await expect(panel).toHaveClass(/open/);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("body")).toHaveClass(/m-lock/);

    // 대메뉴 4개가 아코디언으로 다시 그려진다
    await expect(panel.locator(".m-acc-trigger")).toHaveCount(4);

    await page.keyboard.press("Escape");
    await expect(panel).not.toHaveClass(/open/);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("body")).not.toHaveClass(/m-lock/);
    await expect(toggle).toBeFocused();
  });

  test("아코디언은 한 번에 하나만 펼쳐진다", async ({ page }) => {
    await page.goto("/index.html");
    await page.locator(".m-toggle").click();
    const triggers = page.locator(".m-acc-trigger");

    await triggers.nth(0).click();
    await expect(triggers.nth(0)).toHaveAttribute("aria-expanded", "true");

    await triggers.nth(1).click();
    await expect(triggers.nth(1)).toHaveAttribute("aria-expanded", "true");
    await expect(triggers.nth(0)).toHaveAttribute("aria-expanded", "false");
  });

  test("메뉴 링크를 누르면 패널이 닫힌다", async ({ page }) => {
    await page.goto("/index.html");
    await page.locator(".m-toggle").click();
    await page.locator(".m-acc-trigger").first().click();
    await page.locator(".m-acc-panel:not([hidden]) a").first().click();
    await expect(page.locator(".m-panel")).not.toHaveClass(/open/);
  });

  test("데스크톱에서는 모바일 패널이 보이지 않는다", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/index.html");
    await expect(page.locator(".m-panel")).toBeHidden();
    await expect(page.locator(".m-toggle")).toBeHidden();
  });
});
