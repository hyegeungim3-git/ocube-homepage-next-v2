import type { JSX } from "react";
import { RichText } from "@/components/rich-text";
import { assetPath, type Lang } from "@/config/i18n";
import type { PinStep } from "@/data/steps";

// What We Do 단계 카드. 좌측 고정 영역과 진행 도트는 site2.js 가
// data-i 순서를 읽어 동기화하므로 인덱스를 그대로 부여한다.
export function PinSteps({
  items,
  lang = "ko",
}: {
  items: readonly PinStep[];
  lang?: Lang;
}): JSX.Element {
  return (
    <>
      {items.map((s, i) => (
        <article className="pin-item reveal" data-i={String(i)} key={s.no}>
          <div className="pin-illust pin-illust--art" data-slot={s.slot}>
            {/* img 는 인라인이라 원본의 앞뒤 공백이 렌더에 반영된다 */}{" "}
            <img
              alt={s.image.alt}
              decoding="async"
              height={s.image.height}
              loading="lazy"
              src={assetPath(s.image.src, lang)}
              width={s.image.width}
            />{" "}
          </div>
          <div className="pi-no">{s.no}</div>
          <h3>{s.title}</h3>
          <p>
            <RichText value={s.body} />
          </p>
          <ul className="pi-bul">
            {s.bullets.map((b, j) => (
              <li key={j}>
                <RichText value={b} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
