// 사이트의 정식 주소. canonical·og:url·og:image·JSON-LD·sitemap 이 모두 이 값을 쓴다.
// 실도메인이 정해지면 NEXT_PUBLIC_SITE_URL 로 덮거나 이 기본값을 바꾸면 된다.
export const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyegeungim3-git.github.io/ocube-homepage-next/";

/** 사이트 루트 기준 경로를 절대 URL 로 만든다. */
export function withBase(path: string): string {
  return siteBaseUrl + path.replace(/^\//, "");
}

/** 문자열 안의 주소 자리표시자를 실제 주소로 바꾼다 (JSON-LD 용). */
export function applyBase(text: string): string {
  return text.split("@@BASE@@").join(siteBaseUrl);
}
