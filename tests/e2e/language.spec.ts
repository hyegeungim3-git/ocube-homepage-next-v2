import { expect, test } from "@playwright/test";
import { SITE_SLUGS } from "../helpers/pages";

// 로드맵 3단계(다국어 통합)에서 가장 위험한 것은 "URL 은 그대로인데 화면 코드만 합치기" 다.
// 두 언어를 오가는 실제 동작과 자산 경로를 지금 못 박아 둔다.

test.describe("언어 전환", () => {
  test("한국어 → 영어 → 한국어 왕복", async ({ page }) => {
    await page.goto("/references.html");
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");

    await page.locator('.lang a[hreflang="en"]').click();
    await expect(page).toHaveURL(/\/en\/references\.html$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.locator('.lang a[hreflang="ko"]').click();
    await expect(page).toHaveURL(/\/references\.html$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
  });

  test("현재 언어 버튼에 active 와 aria-current 가 붙는다", async ({ page }) => {
    await page.goto("/about.html");
    await expect(page.locator('.lang a[hreflang="ko"]')).toHaveClass(/active/);
    await expect(page.locator('.lang a[hreflang="ko"]')).toHaveAttribute("aria-current", "true");
    await expect(page.locator('.lang a[hreflang="en"]')).not.toHaveClass(/active/);

    await page.goto("/en/about.html");
    await expect(page.locator('.lang a[hreflang="en"]')).toHaveClass(/active/);
    await expect(page.locator('.lang a[hreflang="ko"]')).not.toHaveClass(/active/);
  });

  test("영어 화면에서 메뉴를 누르면 영어 화면으로 이어진다", async ({ page }) => {
    await page.goto("/en/index.html");
    // 중메뉴는 메가 메뉴가 열려야 보인다
    await page.locator(".gnb .nav-menu").hover();
    await page.locator('.gnb .dropdown a[href="about.html"]').first().click();
    await expect(page).toHaveURL(/\/en\/about\.html$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("영어 화면의 자산 경로는 한 단계 위를 가리키고 실제로 받아진다", async ({ page }) => {
    const failed: string[] = [];
    page.on("requestfailed", (req) => failed.push(req.url()));
    page.on("response", (res) => {
      if (res.status() >= 400 && /\/assets\//.test(res.url()))
        failed.push(`${res.status()} ${res.url()}`);
    });
    await page.goto("/en/index.html", { waitUntil: "load" });
    // 스타일시트는 4단계에서 Next 가 관리하게 바뀌었다(절대 경로). 우리가 직접 거는 자산만 본다.
    const ours = await page
      .locator('img[src*="assets/"], script[src*="assets/"], video[src*="assets/"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("src") ?? ""));
    expect(ours.length, "영어 화면이 거는 assets/ 참조").toBeGreaterThan(0);
    for (const src of ours) {
      expect(src, "영어 화면은 한 단계 위를 가리켜야 한다").toMatch(/^\.\.\/assets\//);
    }
    expect(failed).toEqual([]);
  });

  // 사전은 못 찾으면 원문을 그대로 돌려준다 — 그래서 번역 누락은 오류 없이 조용히 남는다.
  // 화면 글자뿐 아니라 alt·aria-label 처럼 **보조기술이 읽는 글자**까지 훑는다.
  // (한 번에 131건이 이렇게 숨어 있었다. docs/pitfalls.md 3절 참고)
  test("영어 화면에 한국어가 남아 있지 않다", async ({ page }) => {
    const HANGUL = /[가-힣]/;
    for (const slug of SITE_SLUGS) {
      await page.goto(`/en/${slug}.html`, { waitUntil: "load" });
      const found = await page.evaluate(() => {
        const out: string[] = [];
        const body = document.body;
        for (const el of body.querySelectorAll("[alt],[aria-label],[title],[placeholder]")) {
          for (const name of ["alt", "aria-label", "title", "placeholder"]) {
            const v = el.getAttribute(name);
            if (v) out.push(`${name}="${v}"`);
          }
        }
        out.push(body.innerText);
        return out;
      });
      const leaks = found
        .flatMap((chunk) => chunk.split("\n"))
        .map((line) => line.trim())
        .filter((line) => line && HANGUL.test(line));
      expect(leaks, `${slug}: 영어 화면에 한국어`).toEqual([]);
    }
  });

  test("모든 화면에 두 언어를 잇는 hreflang 이 있다", async ({ page }) => {
    for (const slug of SITE_SLUGS) {
      await page.goto(`/${slug}.html`);
      const alts = await page
        .locator('link[rel="alternate"]')
        .evaluateAll((els) =>
          els.map((el) => `${el.getAttribute("hreflang")}=${el.getAttribute("href")}`),
        );
      expect(
        alts.filter((a) => a.startsWith("ko=")),
        `${slug}: ko`,
      ).toHaveLength(1);
      expect(
        alts.filter((a) => a.startsWith("en=")),
        `${slug}: en`,
      ).toHaveLength(1);
      expect(
        alts.filter((a) => a.startsWith("x-default=")),
        `${slug}: x-default`,
      ).toHaveLength(1);
    }
  });
});
