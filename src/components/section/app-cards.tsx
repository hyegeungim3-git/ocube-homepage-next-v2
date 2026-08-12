import { RichText } from "@/components/rich-text";
import { assetPath, type Lang } from "@/config/i18n";
import type { AppCard } from "@/data/applications";

// 비즈니스 3쪽의 적용 분야 카드 — 아이콘·제목·2줄 설명이 같은 구조로 반복된다.
// 아이콘 경로는 데이터에 사이트 루트 기준으로 두고, 영어 화면(/en/*)에서는
// assetPath 가 한 단계 위(../)로 바꾼다 (make-en 이 lang="en" 을 주입한다).
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다(그리드 div 는 페이지에 남는다).
export function AppCards({ items, lang = "ko" }: { items: readonly AppCard[]; lang?: Lang }) {
  return (
    <>
      {items.map((c, i) => (
        <article className={c.cardCls} key={i}>
          <div className={c.iconCls}>
            <img src={assetPath(c.icon, lang)} alt="" loading="lazy" width="640" height="640" />
          </div>
          <h3>{c.title}</h3>
          <p>
            <span>
              <RichText value={c.line1} />
            </span>
            <span>
              <RichText value={c.line2} />
            </span>
          </p>
        </article>
      ))}
    </>
  );
}
