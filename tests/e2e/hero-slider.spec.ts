import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

// 홈 히어로 4배너 슬라이더. 로드맵 6단계에서 React 로 옮길 대상 중 가장 상태가 많다.
// 자동 전환은 6.5초 주기라 그대로 두면 검사가 흔들린다 — 먼저 일시정지시켜 고정한 뒤
// 사용자 조작(이전·다음·바 클릭·방향키)만 본다.

test.describe("홈 히어로 슬라이더", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/index.html");
    await expect(page.locator(".hslide")).toHaveCount(4);
  });

  const pauseAuto = async (page: Page): Promise<void> => {
    const toggle = page.locator('.hctrl .hnav[data-act="toggle"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
  };

  test("첫 화면은 1번 슬라이드가 활성이고 나머지는 화면에서 숨겨진다", async ({ page }) => {
    const slides = page.locator(".hslide");
    await expect(slides.nth(0)).toHaveClass(/\bon\b/);
    await expect(slides.nth(0)).toHaveAttribute("aria-hidden", "false");
    for (const i of [1, 2, 3]) {
      await expect(slides.nth(i)).toHaveAttribute("aria-hidden", "true");
      await expect(slides.nth(i)).toHaveAttribute("inert", "");
    }
  });

  test("탭 바에 tablist ARIA 가 붙는다", async ({ page }) => {
    const bars = page.locator(".hbar");
    await expect(bars).toHaveCount(4);
    await expect(bars.nth(0)).toHaveAttribute("role", "tab");
    await expect(bars.nth(0)).toHaveAttribute("aria-selected", "true");
    await expect(bars.nth(1)).toHaveAttribute("aria-selected", "false");
    // 활성 탭만 Tab 순서에 남는다
    await expect(bars.nth(0)).toHaveAttribute("tabindex", "0");
    await expect(bars.nth(1)).toHaveAttribute("tabindex", "-1");
  });

  test("다음·이전 버튼이 순환한다", async ({ page }) => {
    await pauseAuto(page);
    const slides = page.locator(".hslide");
    await page.locator('.hctrl .hnav[data-act="next"]').click();
    await expect(slides.nth(1)).toHaveClass(/\bon\b/);
    await page.locator('.hctrl .hnav[data-act="prev"]').click();
    await expect(slides.nth(0)).toHaveClass(/\bon\b/);
    // 첫 슬라이드에서 이전을 누르면 마지막으로 감긴다
    await page.locator('.hctrl .hnav[data-act="prev"]').click();
    await expect(slides.nth(3)).toHaveClass(/\bon\b/);
  });

  test("바를 누르면 그 슬라이드로 간다", async ({ page }) => {
    await pauseAuto(page);
    await page.locator(".hbar").nth(2).click();
    await expect(page.locator(".hslide").nth(2)).toHaveClass(/\bon\b/);
    await expect(page.locator(".hbar").nth(2)).toHaveAttribute("aria-selected", "true");
  });

  test("방향키로 이동한다", async ({ page }) => {
    await pauseAuto(page);
    const bars = page.locator(".hbar");
    await bars.nth(0).focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.locator(".hslide").nth(1)).toHaveClass(/\bon\b/);
    await expect(bars.nth(1)).toBeFocused();
    await page.keyboard.press("End");
    await expect(page.locator(".hslide").nth(3)).toHaveClass(/\bon\b/);
    await page.keyboard.press("Home");
    await expect(page.locator(".hslide").nth(0)).toHaveClass(/\bon\b/);
  });

  test("일시정지 버튼은 상태와 읽어주는 이름을 함께 바꾼다", async ({ page }) => {
    const toggle = page.locator('.hctrl .hnav[data-act="toggle"]');
    const hero = page.locator(".hero").first();
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await expect(toggle).toHaveAttribute("aria-label", "자동 전환 재생");
    await expect(hero).toHaveClass(/paused/);
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await expect(toggle).toHaveAttribute("aria-label", "자동 전환 일시정지");
    await expect(hero).not.toHaveClass(/paused/);
  });

  test("영어 화면에서는 읽어주는 이름도 영어다", async ({ page }) => {
    await page.goto("/en/index.html");
    const toggle = page.locator('.hctrl .hnav[data-act="toggle"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-label", "Resume auto-rotation");
  });

  test("자동 전환이 실제로 다음 슬라이드로 넘긴다", async ({ page }) => {
    // 6.5초 주기. 느린 검사지만 '자동 전환' 자체가 이 기능의 핵심이라 한 번은 확인한다.
    await expect(page.locator(".hslide").nth(1)).toHaveClass(/\bon\b/, { timeout: 12_000 });
  });
});
