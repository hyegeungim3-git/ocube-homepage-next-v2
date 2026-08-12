import { RichText } from "@/components/rich-text";
import type { DepCardItem } from "@/data/cards";

// 제목 + 설명만 있는 카드. 그리드 컨테이너(dep-grid / g2 / reveal)는
// 배치 의도가 담긴 부분이라 페이지에 그대로 둔다.
// 원본이 카드 태그를 div/article 로 섞어 써서 as 로 받는다.
export function DepCards({
  items,
  as: Tag = "div",
}: {
  items: readonly DepCardItem[];
  as?: "div" | "article";
}) {
  return (
    <>
      {items.map((c, i) => (
        <Tag className="dep-card" key={i}>
          <h3>
            <RichText value={c.title} />
          </h3>
          <p>
            <RichText value={c.body} />
          </p>
        </Tag>
      ))}
    </>
  );
}
