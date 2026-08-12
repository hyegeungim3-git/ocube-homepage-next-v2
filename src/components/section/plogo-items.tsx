import type { JSX } from "react";
import { Fragment } from "react";
import { assetPath, type Lang } from "@/config/i18n";
import type { Logo } from "@/data/logos";

// 고객사·기술 파트너 로고 칩 — 그리드 div 는 페이지에 남고 항목만 데이터로 든다.
// 로고 경로는 사이트 루트 기준이고 영어 화면에서는 assetPath 가 ../ 로 바꾼다
// (영어 화면에서는 한 단계 위로). DOM 은 이관 전 마크업 그대로.
export function PlogoItems({
  items,
  lang = "ko",
}: {
  items: readonly Logo[];
  lang?: Lang;
}): JSX.Element {
  return (
    <>
      {items.map((l) => (
        <Fragment key={l.src}>
          {" "}
          <span className="plogo">
            <img
              src={assetPath(l.src, lang)}
              alt={l.alt}
              loading="lazy"
              width={l.width}
              height={l.height}
            />
          </span>
        </Fragment>
      ))}
    </>
  );
}
