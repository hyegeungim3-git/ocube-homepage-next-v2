// 지금 보고 있는 화면을 가리키는 링크인지 판정한다.
//
// 6단계 전에는 site2.js(07-nav-current)가 브라우저에서 주소를 읽어 붙여 주던 표시다.
// 화면마다 slug 를 이미 알고 있으므로 서버에서 그려 둔다 — 자바스크립트 없이도 표시된다.

/** slug → 파일 이름. 홈은 주소가 디렉터리(…/)라 index.html 로 본다. */
export function currentFile(slug: string): string {
  return slug === "index" ? "index.html" : `${slug}.html`;
}

/** href 가 지금 화면을 가리키면 true. 앵커(#…)·물음표는 떼고 파일 이름만 본다. */
export function isCurrentHref(href: string | undefined, slug: string): boolean {
  if (!href) return false;
  const path = href.split("#")[0]?.split("?")[0] ?? "";
  const name = path.split("/").pop() || "index.html";
  return name.toLowerCase() === currentFile(slug);
}

/** aria-current 속성값. 아닐 때는 undefined 라 속성 자체가 그려지지 않는다. */
export function currentMark(href: string | undefined, slug: string): "page" | undefined {
  return isCurrentHref(href, slug) ? "page" : undefined;
}
