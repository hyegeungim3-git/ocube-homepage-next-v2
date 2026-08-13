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

  // 메가 메뉴가 펼쳐지면 메뉴가 양쪽으로 벌어진다. 그때 오른쪽의 KR/EN 을 침범하면
  // 마지막 항목(Company)과 알약이 겹쳐 보인다 — 실제로 27px 겹쳐 있었다.
  // 그리고 헤더가 흰색이 되므로 KR/EN 도 '흰 헤더' 색을 써야 한다(안 그러면 흰 위에 흰 글자).
  for (const width of [1280, 1440, 1920]) {
    test(`${width}px 에서 펼쳐도 메뉴가 KR/EN 을 침범하지 않는다`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      // 메뉴 폭은 전환 애니메이션을 타므로, 끄지 않으면 '아직 안 벌어진' 중간값을 잰다
      // (이걸 빠뜨려 처음엔 일부러 되돌려도 통과했다 — docs/pitfalls.md 6절)
      await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important}" });
      await page.locator(".gnb .nav-menu").hover();
      await expect(page.locator(".gnb")).toHaveClass(/gnb-mega/);

      const gap = await page.evaluate(() => {
        const items = [...document.querySelectorAll(".nav-item")];
        const last = items[items.length - 1]!.getBoundingClientRect();
        const lang = document.querySelector(".lang")!.getBoundingClientRect();
        return Math.round(lang.left - last.right);
      });
      expect(gap, "마지막 메뉴 항목과 KR/EN 사이 간격").toBeGreaterThanOrEqual(16);
    });
  }

  test("펼친 상태의 KR/EN 은 흰 헤더용 색을 쓴다", async ({ page }) => {
    await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important}" });
    await page.locator(".gnb .nav-menu").hover();
    await expect(page.locator(".gnb")).toHaveClass(/gnb-mega/);

    // 헤더 배경은 전환 애니메이션을 타므로 최종값이 될 때까지 기다린다
    // (바로 읽으면 rgba(0,0,0,0) 이 나온다 — docs/pitfalls.md 6절의 그 함정이다)
    await expect
      .poll(() =>
        page.evaluate(() => getComputedStyle(document.querySelector(".gnb")!).backgroundColor),
      )
      .toContain("255, 255, 255");

    const seen = await page.evaluate(() => {
      const [kr, en] = [...document.querySelectorAll(".lang-btn")];
      const s = (el: Element) => getComputedStyle(el);
      return {
        header: s(document.querySelector(".gnb")!).backgroundColor,
        krBg: s(kr!).backgroundColor,
        enColor: s(en!).color,
      };
    });
    // 헤더는 흰색이 된다 → 지금 언어(KR)는 잉크로 채우고, 나머지(EN)는 어두운 글자여야 한다
    expect(seen.header).toContain("255, 255, 255");
    expect(seen.krBg, "지금 언어 알약이 흰 헤더 위에서 보여야 한다").not.toContain("255, 255, 255");
    expect(seen.enColor, "다른 언어 글자가 흰 헤더 위에서 보여야 한다").not.toContain(
      "255, 255, 255",
    );
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
