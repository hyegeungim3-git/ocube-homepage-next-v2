// 한국어·영어 두 벌을 같은 화면 구조로 서비스하기 위한 기준.
//
// 주소 규칙: 한국어는 지금 그대로 `/about.html`, 영어는 `/en/about.html`.
// 화면 안의 링크는 상대 경로(`about.html`)라 영어 화면에서도 그대로 영어 화면으로 이어진다.
// 반대로 자산(`assets/...`)은 한 단계 위에 있으므로 영어 화면에서만 `../` 를 붙인다.

export type Lang = "ko" | "en";

export const OTHER_LANG: Record<Lang, Lang> = { ko: "en", en: "ko" };

/** 화면 코드(파일 이름 없는 형태) → 언어별 주소 */
export function pageHref(slug: string, lang: Lang): string {
  const file = slug === "index" || slug === "" ? "index.html" : `${slug}.html`;
  return lang === "en" ? `en/${file}` : file;
}

/** 같은 화면의 반대 언어 주소. 토글 버튼이 쓴다. */
export function counterpartHref(slug: string, from: Lang): string {
  const file = slug === "index" || slug === "" ? "index.html" : `${slug}.html`;
  // 영어 화면(/en/x.html)에서 한국어로 갈 때는 한 단계 위로 나가야 한다
  return from === "en" ? `../${file}` : `en/${file}`;
}

/** 영어 화면에서만 자산 경로를 한 단계 위로 올린다. */
export function assetPath(path: string, lang: Lang): string {
  return lang === "en" ? `../${path}` : path;
}

/** 화면 껍데기(메뉴·푸터·버튼)에 쓰는 문구 */
export const ui = {
  ko: {
    skip: "본문 바로가기",
    home: "오큐브 홈",
    mainNav: "주 메뉴",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    contact: "문의하기",
    langLabel: "언어 선택",
    toKorean: "한국어로 보기",
    toEnglish: "View in English",
  },
  en: {
    skip: "Skip to content",
    home: "OCUBE home",
    mainNav: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "Contact us",
    langLabel: "Select language",
    toKorean: "View in Korean",
    toEnglish: "View in English",
  },
} as const;
