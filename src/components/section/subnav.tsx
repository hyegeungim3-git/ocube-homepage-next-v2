import { RichText } from "@/components/rich-text";
import type { RichToken } from "@/components/rich-text";

// 섹션 서브 내비게이션(숨김 소스) — 앵커·라벨 목록만 페이지마다 다르다.
// 라벨에 줄바꿈 기회(wbr)가 섞일 수 있어 RichToken 으로 렌더한다.
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
export function Subnav({ items }: { items: readonly { href: string; label: readonly RichToken[] }[] }) {
  return (
    <nav className="subnav" hidden aria-hidden="true">
      <div className="wrap">
        {items.map((it) => (
          <a href={it.href} key={it.href}>
            <RichText value={it.label} />
          </a>
        ))}
      </div>
    </nav>
  );
}
