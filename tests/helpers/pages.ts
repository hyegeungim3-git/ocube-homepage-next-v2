// 검사 대상 화면 목록과 뷰포트. 테스트 전체가 이 한 곳을 본다.
import type { Lang } from "../../src/config/i18n";

/** 실제 콘텐츠 화면 23개. 한국어·영어가 같은 목록을 쓴다. */
export const SITE_SLUGS = [
  "index",
  "about",
  "business-ax",
  "business-embedded",
  "business-si",
  "company",
  "contact",
  "license-protopie",
  "license-qt",
  "license-telit",
  "license-toradex",
  "license-tuxera",
  "license-visualon",
  "location",
  "privacy",
  "references",
  "solution-agentq",
  "solution-cubeon",
  "solution-dataq",
  "solution-evcp",
  "solution-factoryq",
  "solution-qdrive",
  "solution-traffic",
] as const;

export type Slug = (typeof SITE_SLUGS)[number];

/** Next 가 자동 생성하는 화면. 사이트 셸이 없으므로 건강검진에서만 가볍게 본다. */
export const FRAMEWORK_PAGES = ["404.html", "_not-found.html"] as const;

export const LANGS: readonly Lang[] = ["ko", "en"];

export type ViewportName = "desktop" | "mobile";

export type Viewport = {
  name: ViewportName;
  width: number;
  height: number;
};

/** 플레이북 11절이 정한 두 기준 뷰포트 */
export const VIEWPORTS: readonly Viewport[] = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 375, height: 812 },
];

/** 테스트 서버 기준 경로. 한국어는 /about.html, 영어는 /en/about.html */
export function pageUrl(slug: Slug, lang: Lang): string {
  return lang === "en" ? `/en/${slug}.html` : `/${slug}.html`;
}

/** 화면 x 언어 조합 46개 */
export function allPages(): { slug: Slug; lang: Lang; url: string }[] {
  return LANGS.flatMap((lang) =>
    SITE_SLUGS.map((slug) => ({ slug, lang, url: pageUrl(slug, lang) })),
  );
}
