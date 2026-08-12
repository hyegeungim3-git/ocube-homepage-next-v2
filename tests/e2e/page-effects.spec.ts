import { expect, test } from "@playwright/test";

// 화면 콘텐츠에 붙는 동작들 — 6단계에서 site2.js 로부터 옮길 대상이다.
// 옮기기 전에 지금 동작을 못 박아 둔다. 시각 검사는 감축 모션으로 찍기 때문에
// (CSS 가 전부 보이게 만든다) 리빌·도트가 깨져도 스크린샷으로는 안 잡힌다.

test.describe("스크롤 리빌", () => {
  test("모션 준비 표시가 붙는다", async ({ page }) => {
    await page.goto("/business-ax.html", { waitUntil: "load" });
    await expect(page.locator("html")).toHaveClass(/motion-ready/);
  });

  test("아래쪽 요소는 스크롤해서 올라오면 드러난다", async ({ page }) => {
    await page.goto("/business-ax.html", { waitUntil: "load" });
    // 히어로가 화면을 꽉 채우므로 첫 리빌 요소도 처음에는 화면 밖이다
    const last = page.locator(".rv, .reveal").last();
    await expect(last).not.toHaveClass(/\bin\b/);
    await last.scrollIntoViewIfNeeded();
    await expect(last).toHaveClass(/\bin\b/);
  });

  test("지나간 요소도 드러난 채로 남는다 (한 번 드러나면 되돌아가지 않는다)", async ({ page }) => {
    await page.goto("/business-ax.html", { waitUntil: "load" });
    const item = page.locator(".rv, .reveal").first();
    await item.scrollIntoViewIfNeeded();
    await expect(item).toHaveClass(/\bin\b/);
    await page.evaluate(() => window.scrollTo(0, 0));
    await expect(item).toHaveClass(/\bin\b/);
  });
});

test.describe("What We Do 진행 도트", () => {
  test("항목이 올라온 만큼 도트가 채워진다", async ({ page }) => {
    await page.goto("/business-ax.html", { waitUntil: "load" });
    const dots = page.locator(".pinsec .pin-progress i");
    await expect(dots).toHaveCount(6);
    await expect(page.locator(".pinsec .pin-progress i.on")).toHaveCount(0);

    await page.locator(".pinsec .pin-item").nth(3).scrollIntoViewIfNeeded();
    await expect
      .poll(() => page.locator(".pinsec .pin-progress i.on").count())
      .toBeGreaterThanOrEqual(3);
  });
});

test.describe("가로로 넓은 표", () => {
  test("스크롤 껍데기로 감싸고 읽어주는 이름을 붙인다", async ({ page }) => {
    await page.goto("/solution-factoryq.html", { waitUntil: "load" });
    const wrap = page.locator(".cmp-scroll").first();
    await expect(wrap).toHaveCount(1);
    await expect(wrap).toHaveAttribute("tabindex", "0");
    expect(await wrap.getAttribute("aria-label")).toContain("가로로 스크롤할 수 있습니다");

    await page.goto("/en/solution-factoryq.html", { waitUntil: "load" });
    expect(await page.locator(".cmp-scroll").first().getAttribute("aria-label")).toContain(
      "scrolls sideways",
    );
  });
});
