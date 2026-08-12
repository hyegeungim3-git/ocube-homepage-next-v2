import { expect, test } from "@playwright/test";
import { SITE_SLUGS, allPages } from "../helpers/pages";
import { siteBaseUrl } from "../../src/config/site";

// 로드맵 2단계에서 "반복 metadata·hreflang 을 typed 공통 데이터로 통합" 한다.
// 통합해도 결과가 같아야 하므로, 지금 48쪽이 실제로 내보내는 메타 계약을 고정한다.

/** 홈만 파일명 없이 디렉터리 주소를 쓴다 (ko=`/`, en=`/en/`). 나머지는 `<slug>.html`. */
function canonicalOf(slug: string, lang: "ko" | "en"): string {
  if (slug === "index") return lang === "en" ? `${siteBaseUrl}en/` : siteBaseUrl;
  return lang === "en" ? `${siteBaseUrl}en/${slug}.html` : `${siteBaseUrl}${slug}.html`;
}

test.describe("화면 메타", () => {
  for (const { slug, lang, url } of allPages()) {
    test(`${lang} ${slug} — title·canonical·hreflang`, async ({ page }) => {
      await page.goto(url);

      const title = await page.title();
      expect(title.trim(), "빈 제목").not.toBe("");
      // 한국어는 한글 사명, 영어는 로마자 사명이 들어간다
      expect(title, "제목에 회사명").toContain(lang === "en" ? "OCUBE" : "오큐브");

      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBe(canonicalOf(slug, lang));

      // canonical 은 자기 자신을, alternate 는 양쪽 언어를 가리킨다
      const ko = await page.locator('link[rel="alternate"][hreflang="ko"]').getAttribute("href");
      const en = await page.locator('link[rel="alternate"][hreflang="en"]').getAttribute("href");
      const x = await page
        .locator('link[rel="alternate"][hreflang="x-default"]')
        .getAttribute("href");
      expect(ko).toBe(canonicalOf(slug, "ko"));
      expect(en).toBe(canonicalOf(slug, "en"));
      expect(x).toBe(ko);

      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description?.trim() ?? "", "설명 비어 있음").not.toBe("");
    });
  }

  test("구조화 데이터가 모두 올바른 JSON 이다", async ({ page }) => {
    for (const slug of SITE_SLUGS) {
      await page.goto(`/${slug}.html`);
      const blocks = await page
        .locator('script[type="application/ld+json"]')
        .evaluateAll((els) => els.map((el) => el.textContent ?? ""));
      expect(blocks.length, `${slug}: 구조화 데이터 없음`).toBeGreaterThan(0);
      for (const raw of blocks) {
        expect(() => JSON.parse(raw) as unknown, `${slug}: JSON 파싱 실패`).not.toThrow();
        expect(raw, `${slug}: 주소 자리표시자가 남아 있다`).not.toContain("@@BASE@@");
      }
    }
  });

  test("sitemap 이 46개 주소를 담고 전부 실제 화면이다", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(urls).toHaveLength(SITE_SLUGS.length * 2);
    for (const url of urls) {
      const path = url.replace(siteBaseUrl, "/");
      const page = await request.get(path);
      expect(page.status(), `${path} 없음`).toBe(200);
    }
  });
});
