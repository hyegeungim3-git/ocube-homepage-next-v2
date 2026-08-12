// 화면 메타(검색·공유용)의 공통 값과 주소 규칙.
//
// 48쪽이 같은 모양의 <title>·<meta>·<link> 스무 줄을 각자 들고 있었다. 값이 다른 것은
// 제목·설명·주소뿐이고 나머지는 전부 같다. 그 "같은 것" 을 여기 한 곳에 둔다.
import type { Lang } from "@/config/i18n";
import { withBase } from "@/config/site";

/** 언어별로 다른 고정값 */
type SiteIdentity = {
  name: string;
  locale: string;
};

export const siteIdentity = {
  ko: { name: "오큐브(주)", locale: "ko_KR" },
  en: { name: "OCUBE CO., LTD.", locale: "en_US" },
} satisfies Record<Lang, SiteIdentity>;

/** 공유 이미지는 두 언어가 같은 것을 쓴다 (주소도 en/ 을 타지 않는다) */
export const shareImage = { path: "og-codex.png", width: "1200", height: "630" } as const;

/** 파비콘 — 인라인 SVG. 원본 문자열을 그대로 옮긴다(재인코딩하면 게이트가 잡는다). */
export const faviconHref =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E";

/**
 * 같은 화면의 두 언어 주소. 홈은 파일명 없이 디렉터리 주소를 쓴다(`path` 가 빈 문자열).
 * hreflang 은 어느 언어 화면에서 보든 같은 값이어야 하므로 여기서 한 번에 만든다.
 */
export function pageUrls(path: string): { ko: string; en: string } {
  return { ko: withBase(path), en: withBase(`en/${path}`) };
}
