import { RichText } from "@/components/rich-text";
import type { CtaCopy } from "@/data/cta";

// 푸터 CTA 밴드의 상단 블록 — 16쪽이 같은 템플릿을 쓰고 문구 4개(킥커·헤드라인·
// 리드·버튼 라벨)와 배지 읽어주는 이름만 다르다. DOM 은 이관 전 마크업 그대로.
export function FctaTop({ copy }: { copy: CtaCopy }) {
  return (
    <div className="fcta-top">
      <div>
        {" "}
        <span className="kicker">{copy.kicker}</span>{" "}
        <h2 className="fcta-h">
          <RichText value={copy.heading} />
        </h2>
        <p className="fcta-p">
          <RichText value={copy.lead} />
        </p>{" "}
        <a href="contact.html" className="btn btn-primary fcta-btn" style={{ marginTop: "26px" }}>
          {copy.button}
        </a>{" "}
      </div>
      <div className="cta-badge">
        {" "}
        <svg
          className="cta-badge-ring"
          viewBox="0 0 200 200"
          width="180"
          height="180"
          aria-hidden="true"
        >
          {" "}
          <defs>
            <path
              id="ctaBadgePath"
              d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
            ></path>
          </defs>{" "}
          <text fontSize="14" fontWeight="700" letterSpacing="2.4">
            <textPath href="#ctaBadgePath">
              OCUBE · PROJECT INQUIRY · OCUBE · PROJECT INQUIRY ·{" "}
            </textPath>
          </text>{" "}
        </svg>{" "}
        <a href="contact.html" className="cta-badge-core" aria-label={copy.badgeLabel}>
          {" "}
          <svg viewBox="0 0 19 17" width="19" height="17" aria-hidden="true">
            <path
              d="M10.7 1 17.7 8.3 10.7 15.6M17.7 8.3H1"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
        </a>{" "}
      </div>
    </div>
  );
}
