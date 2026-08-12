import { RichText } from "@/components/rich-text";
import type { RefCard } from "@/data/refs";

// 주요 구축 사례 카드 그리드의 항목들 — references 페이지 전용.
// DOM 은 이관 전 마크업 그대로다. 래퍼를 추가하지 않는다(그리드 div 는 페이지에 남아 있다).
export function RefCards({
  items,
  labels,
}: {
  items: readonly RefCard[];
  labels: { client: string; sector: string };
}) {
  return (
    <>
      {items.map((c, i) => (
        <article className={c.cls} data-cat={c.cat} key={i}>
          <div className="ref-tags">
            <span className={"rbadge " + c.badgeCls}>{c.badge}</span>
          </div>
          <h3>
            <RichText value={c.title} />
          </h3>
          <dl className="ref-meta">
            <div>
              <dt>{labels.client}</dt>
              <dd>{c.client}</dd>
            </div>
            <div>
              <dt>{labels.sector}</dt>
              <dd>{c.sector}</dd>
            </div>
          </dl>
          <p>
            <RichText value={c.desc} />
            {c.note != null && (
              <>
                {" "}
                <em>{c.note}</em>
              </>
            )}
          </p>
        </article>
      ))}
    </>
  );
}
