import type { JSX } from "react";
import { RichText } from "@/components/rich-text";
import type { HistoryGroup } from "@/data/history";

// 연혁 타임라인의 연도 그룹 행 — 컨테이너(.hist)는 페이지에 남는다.
// cls 는 리빌 스태거까지 실측값 그대로(공식이 아니다 — 계산하지 말 것).
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
export function HistRows({ groups }: { groups: readonly HistoryGroup[] }): JSX.Element {
  return (
    <>
      {groups.map((g, i) => (
        <div className={g.cls} key={i}>
          <div className="hist-yr">
            <b>{g.year}</b>
            <span>{g.sub}</span>
          </div>
          <div className="hist-line" aria-hidden="true">
            <i className="hist-dot"></i>
          </div>
          <div className="hist-era">
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
          </div>
          <ul className="hist-items">
            {g.items.map((it, j) => (
              <li key={j}>
                <RichText value={it} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
