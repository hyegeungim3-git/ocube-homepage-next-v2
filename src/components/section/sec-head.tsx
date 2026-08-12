import { RichText } from "@/components/rich-text";
import type { SecHeadCopy } from "@/data/sec-heads";

// 섹션 머리(킥커·제목·부제) — 표준형만 데이터로 뺐다.
// 변형은 필드로 든다: 래퍼 클래스(cls), h2 흰 글자(titleWhite)·클래스(titleCls), 부제 클래스(subCls).
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
export function SecHead({ copy }: { copy: SecHeadCopy }) {
  return (
    <div className={copy.cls}>
      <span className="kicker">{copy.kicker}</span>
      {" "}
      <h2 style={copy.titleWhite ? { color: "#fff" } : undefined} className={copy.titleCls}>
        <RichText value={copy.title} />
      </h2>
      {copy.sub != null && (
        <p className={copy.subCls}>
          <RichText value={copy.sub} />
        </p>
      )}
    </div>
  );
}
