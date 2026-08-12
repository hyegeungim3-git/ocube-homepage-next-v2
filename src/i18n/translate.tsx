import { Fragment, isValidElement } from "react";
import type { ReactNode } from "react";
import type { Lang } from "@/config/i18n";
import { lookup } from "@/i18n/dictionary";

// 화면 한 벌로 두 언어를 그리기 위한 두 가지 도구.
//
//   <T l={lang}>한국어 문구</T>   화면에 그대로 보이는 글
//   t(lang, "한국어 문구")         속성값·문자열 (alt, aria-label, 제목 …)
//
// 규칙은 예전 생성기(scripts/make-en.mjs)의 applyDict 와 같다.
// "화면에 그대로 보이는 한 덩어리" 전체가 사전의 문장과 같을 때만 바꾼다.
// 사전에 없으면 한국어를 그대로 둔다 — 생성기도 그렇게 했고, 번역이 빠진 자리가
// 갑자기 빈칸이 되는 것보다 낫다.

/** 속성값·문자열 번역. 한국어 화면이면 원문 그대로. */
export function t(lang: Lang, korean: string): string {
  if (lang === "ko") return korean;
  return lookup(korean) ?? korean;
}

/**
 * 자식으로 받은 조각을 한 줄 문자열로 편다.
 * `<wbr />` 는 한국어 줄바꿈 힌트라 영어에는 필요 없다 — 빼고 이어 붙인다
 * (그래야 그 때문에 갈라져 있던 문장이 사전의 한 문장과 맞는다).
 * 글자와 `<wbr />` 말고 다른 것이 섞여 있으면 번역 대상이 아니라고 보고 null 을 준다.
 */
function flatten(node: ReactNode): string | null {
  if (node === null || node === undefined || node === false || node === true) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    let out = "";
    for (const child of node) {
      const part = flatten(child);
      if (part === null) return null;
      out += part;
    }
    return out;
  }
  if (isValidElement(node) && node.type === "wbr") return "";
  return null;
}

type TProps = {
  /** 화면 언어 */
  l: Lang;
  children: ReactNode;
};

/**
 * 화면에 보이는 글 한 덩어리.
 *
 * 한국어면 받은 것을 그대로 돌려준다 — DOM 이 1바이트도 달라지지 않는다.
 * 영어면 앞뒤 여백은 남기고 알맹이만 사전의 문장으로 바꾼다
 * (`<b>설립</b> (2007)` 의 괄호 앞 한 칸 같은 것이 사라지면 안 된다).
 */
export function T({ l, children }: TProps): ReactNode {
  if (l === "ko") return <Fragment>{children}</Fragment>;

  const raw = flatten(children);
  if (raw === null) return <Fragment>{children}</Fragment>;

  const hit = lookup(raw);
  if (hit === undefined) return <Fragment>{children}</Fragment>;

  const lead = raw.match(/^\s*/)?.[0] ?? "";
  const trail = raw.match(/\s*$/)?.[0] ?? "";
  return <Fragment>{lead + hit + trail}</Fragment>;
}

/**
 * 구조화 데이터(JSON-LD) 한 덩어리.
 *
 * 주소 자리표시자는 화면 언어에 맞춰 바꾸고, 따옴표 안의 이름은 사전을 태운다.
 * 생성기가 문자열을 통째로 바꿔 두던 일을 그리는 시점으로 옮긴 것이다.
 */
export function localizeLd(lang: Lang, json: string): string {
  if (lang === "ko") return json;
  const withEnBase = json.split("@@BASE@@").join("@@BASE@@en/");
  // 따옴표로 둘러싸인 값 전체가 사전의 문장과 같을 때만 바꾼다 (applyDict 와 같은 경계)
  return withEnBase.replace(/"([^"{}<>]+)"/g, (whole, body: string) => {
    const hit = lookup(body);
    return hit === undefined ? whole : `"${hit}"`;
  });
}
