import type { JSX } from "react";
import { RichText } from "@/components/rich-text";
import { assetPath, type Lang } from "@/config/i18n";
import type { BcaseItem, HomeCase } from "@/data/cases";

// 구축 사례 카드 본문. 그리드용과 홈 마퀴용이 이 마크업을 공유한다.
function CardBody({ item, lang = "ko" }: { item: BcaseItem; lang?: Lang }) {
  return (
    <>
      <div className="bcase-visual">
        <img
          alt={item.image.alt}
          height={item.image.height}
          loading="lazy"
          src={assetPath(item.image.src, lang)}
          width={item.image.width}
        />
      </div>
      {/* cat·sum 은 인라인 span 이라 원본의 줄바꿈 공백이 렌더에 반영된다 */}{" "}
      <span className="cat">{item.cat}</span>{" "}
      <h3>
        <RichText value={item.title} />
      </h3>{" "}
      <span className="sum">
        <RichText value={item.sum} />
      </span>{" "}
      <ul>
        {item.bullets.map((b, i) => (
          <li key={i}>
            <i aria-hidden="true">✓</i>
            <RichText value={b} />
          </li>
        ))}
      </ul>
    </>
  );
}

/** 비즈니스 페이지의 대표 프로젝트 그리드 */
export function ProjectCards({
  items,
  lang = "ko",
}: {
  items: readonly BcaseItem[];
  lang?: Lang;
}): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <article className={i ? `bcase-card rv d${i}` : "bcase-card rv"} key={i}>
          <CardBody item={item} lang={lang} />
        </article>
      ))}
    </>
  );
}

/** 홈 마퀴 한 행. 복제 행은 읽어주지 않고 탭 순서에서도 뺀다. */
export function HomeCaseLinks({
  items,
  duplicate = false,
  lang = "ko",
}: {
  items: readonly HomeCase[];
  duplicate?: boolean;
  lang?: Lang;
}): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <a
          aria-label={duplicate ? undefined : item.ariaLabel}
          className="home-case-link"
          href={item.href}
          key={i}
          tabIndex={duplicate ? -1 : undefined}
        >
          <article className="bcase-card">
            <CardBody item={item} lang={lang} />
          </article>
        </a>
      ))}
    </>
  );
}
