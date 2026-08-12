import { RichText } from "@/components/rich-text";
import type { RichToken } from "@/components/rich-text";

// 히어로 스탯 항목(값 + 라벨) — 컨테이너는 페이지에 남고 항목만 데이터로 든다.
export function StatItems({
  items,
}: {
  items: readonly { value: readonly RichToken[]; label: readonly RichToken[] }[];
}) {
  return (
    <>
      {items.map((s, i) => (
        <div className="stat" key={i}>
          <b>
            <RichText value={s.value} />
          </b>
          <span>
            <RichText value={s.label} />
          </span>
        </div>
      ))}
    </>
  );
}
