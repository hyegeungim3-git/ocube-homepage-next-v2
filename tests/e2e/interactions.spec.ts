import { expect, test } from "@playwright/test";

// site2.js 가 만들어 넣는 나머지 동작들. 로드맵 6단계에서 하나씩 React 로 옮길 대상이라
// "지금 무엇이 어떻게 보이고 어떤 이름으로 읽히는지" 를 먼저 기록해 둔다.

test.describe("맨 위로 버튼(FAB)", () => {
  test("500px 아래로 내려가면 나타나고, 누르면 맨 위로 돌아온다", async ({ page }) => {
    await page.goto("/references.html");
    const fab = page.locator(".fab-stack");
    await expect(fab).toHaveCount(1);
    await expect(fab).not.toHaveClass(/show/);

    await page.mouse.wheel(0, 1200);
    await expect(fab).toHaveClass(/show/);

    await page.locator(".fab-top").click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(10);
  });

  test("읽어주는 이름이 화면 언어를 따른다", async ({ page }) => {
    await page.goto("/references.html");
    await expect(page.locator(".fab-top")).toHaveAttribute("aria-label", "맨 위로");
    await page.goto("/en/references.html");
    await expect(page.locator(".fab-top")).toHaveAttribute("aria-label", "Back to top");
  });
});

test.describe("연락처 복사", () => {
  test("누르면 클립보드에 담기고 안내가 뜬다", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/contact.html");

    const button = page.locator('[data-copy="sales@ocube.co.kr"]').first();
    await button.click();

    const toast = page.locator(".toast");
    await expect(toast).toHaveClass(/show/);
    await expect(toast).toHaveText("복사되었습니다 — sales@ocube.co.kr");
    await expect(toast).toHaveAttribute("role", "status");

    const clip = await page.evaluate(() => navigator.clipboard.readText());
    expect(clip).toBe("sales@ocube.co.kr");
  });

  test("영어 화면에서는 안내도 영어다", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/en/contact.html");
    await page.locator('[data-copy="sales@ocube.co.kr"]').first().click();
    await expect(page.locator(".toast")).toHaveText("Copied — sales@ocube.co.kr");
  });
});

test.describe("제품 화면 확대(라이트박스)", () => {
  test("이미지를 누르면 열리고 Esc 로 닫히며 초점이 돌아온다", async ({ page }) => {
    await page.goto("/solution-cubeon.html");
    const shot = page.locator("img.shot").first();
    await shot.scrollIntoViewIfNeeded();

    // 접근성: 이미지가 버튼 역할을 갖는다
    await expect(shot).toHaveAttribute("role", "button");
    await expect(shot).toHaveAttribute("tabindex", "0");

    await shot.click();
    const dialog = page.locator(".lightbox");
    await expect(dialog).toHaveClass(/open/);
    await expect(dialog).toHaveAttribute("aria-modal", "true");
    await expect(dialog).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator(".lb-close")).toBeFocused();
    await expect(page.locator("body")).toHaveClass(/lb-open/);

    await page.keyboard.press("Escape");
    await expect(dialog).not.toHaveClass(/open/);
    await expect(page.locator("body")).not.toHaveClass(/lb-open/);
    await expect(shot).toBeFocused();
  });

  test("Enter 로도 열린다", async ({ page }) => {
    await page.goto("/solution-cubeon.html");
    const shot = page.locator("img.shot").first();
    await shot.scrollIntoViewIfNeeded();
    await shot.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".lightbox")).toHaveClass(/open/);
  });
});

test.describe("가로로 넓은 표", () => {
  test("스크롤 가능한 껍데기로 감싸고 이름을 붙인다", async ({ page }) => {
    // table.cmp 가 남아 있는 화면은 QFactory·QDrive 두 곳뿐이다
    await page.goto("/solution-factoryq.html");
    const wrap = page.locator(".cmp-scroll").first();
    await expect(wrap).toHaveCount(1);
    await expect(wrap).toHaveAttribute("tabindex", "0");
    expect(await wrap.getAttribute("aria-label")).toContain("가로로 스크롤할 수 있습니다");
    await expect(wrap.locator("table.cmp")).toHaveCount(1);
  });
});

test.describe("시연 영상", () => {
  test("화면에 들어오면 재생되고 벗어나면 멈춘다", async ({ page }) => {
    await page.goto("/solution-qdrive.html");
    const video = page.locator("video.demovid").first();
    await video.scrollIntoViewIfNeeded();
    await expect
      .poll(() => video.evaluate((v: HTMLVideoElement) => v.paused), { timeout: 8_000 })
      .toBe(false);

    await page.evaluate(() => window.scrollTo(0, 0));
    await expect
      .poll(() => video.evaluate((v: HTMLVideoElement) => v.paused), { timeout: 8_000 })
      .toBe(true);
  });
});

test.describe("솔루션 이동 문구", () => {
  test("스크롤하면 히어로에서 밝은 영역으로 옮겨오며 글자색이 뒤집힌다", async ({ page }) => {
    await page.goto("/solution-dataq.html");
    const copy = page.locator(".sol-copy");
    await expect(copy).not.toHaveClass(/on-light/);

    // 실제로 스크롤 위치가 도달할 때까지 기다린다 (부드러운 스크롤 때문에 즉시 측정은 빗나간다)
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 700);
    });
    await expect.poll(() => page.evaluate(() => Math.round(window.scrollY))).toBeGreaterThan(600);
    await expect(copy).toHaveClass(/on-light/);
  });
});
