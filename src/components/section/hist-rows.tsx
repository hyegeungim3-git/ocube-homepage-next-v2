import type { JSX } from "react";
import { RichText } from "@/components/rich-text";
import type { HistoryGroup } from "@/data/history";

// 연혁 — 시기(1~4기) 문구는 왼쪽에 고정하고, 그 시기의 이정표는 오른쪽에 흐른다.
// 참고한 형태: i-bricks 연혁(좌 605 / 우 605 두 칸, 좌측 시기 문구 + 우측 연도별 항목).
// 그쪽은 구역 전체를 화면에 붙여 두고 양쪽 트랙을 반대로 굴리는 방식인데, 여기서는
// **시기마다 왼쪽 칸을 sticky 로 두는** 방식을 쓴다 — 보이는 결과는 같고 스크롤을 가로채지 않는다.
export function HistRows({ groups }: { groups: readonly HistoryGroup[] }): JSX.Element {
  return (
    <>
      {groups.map((g, i) => (
        <article className={g.cls} key={i}>
          <div className="hist-side">
            <p className="hist-yr">
              <b>{g.year}</b>
              <span>{g.sub}</span>
            </p>
            <h3>{g.title}</h3>
            <p className="hist-desc">{g.desc}</p>
          </div>
          <ul className="hist-items">
            {g.items.map((it, j) => (
              <li key={j}>
                <RichText value={it} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
