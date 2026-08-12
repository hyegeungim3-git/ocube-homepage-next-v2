import type { JSX } from "react";
import { RichText } from "@/components/rich-text";
import type { SolutionIntro } from "@/data/solution-intro";

// 솔루션 상단의 이동 문구 — 스크롤하면 히어로에서 밝은 영역으로 옮겨 오는 블록.
// 7개 솔루션이 같은 구조를 쓴다. DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
export function SolCopy({ intro }: { intro: SolutionIntro }): JSX.Element {
  return (
    <div className="sol-copy-zone">
      <div className="sol-copy page-hero">
        <div className="wrap">
          {" "}
          <span className="hero-badge">{intro.badge}</span> <h1>{intro.name}</h1>
          <p className="sol-desc">
            <span>
              <RichText value={intro.lines[0]} />
            </span>{" "}
            <span>
              <RichText value={intro.lines[1]} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
