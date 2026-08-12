import type { JSX } from "react";
import { Fragment } from "react";

// 문구 안에 섞인 인라인 마크업을 토큰으로 다룬다.
// 문자열은 그대로, "br" 은 문장 구분 줄바꿈, "wbr" 은 줄바꿈 기회,
// { b } 는 굵은 라벨, { em } 은 보조 표기(연혁의 진행 중 표시 등).
export type RichToken = string | { b: readonly RichToken[] } | { em: readonly RichToken[] };

export function RichText({ value }: { value: readonly RichToken[] }): JSX.Element {
  return (
    <>
      {value.map((t, i) =>
        t === "br" ? (
          <br className="sb" key={i} />
        ) : t === "wbr" ? (
          <wbr key={i} />
        ) : typeof t === "string" ? (
          <Fragment key={i}>{t}</Fragment>
        ) : "b" in t ? (
          <b key={i}>
            <RichText value={t.b} />
          </b>
        ) : (
          <em key={i}>
            <RichText value={t.em} />
          </em>
        ),
      )}
    </>
  );
}
