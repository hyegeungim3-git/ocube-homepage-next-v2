import { RichText } from "@/components/rich-text";
import type { FeatItem } from "@/data/features";

// 라벨 + 설명 한 줄짜리 항목. 목록 컨테이너(feat-list / reveal)는
// 배치 의도가 담긴 부분이라 페이지에 그대로 둔다.
export function FeatItems({ items }: { items: readonly FeatItem[] }) {
  return (
    <>
      {items.map((it, i) => (
        <div className="feat" key={i}>
          <b>
            <RichText value={it.label} />
          </b>
          <span>
            <RichText value={it.body} />
          </span>
        </div>
      ))}
    </>
  );
}
