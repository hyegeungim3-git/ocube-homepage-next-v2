import type { JSX, ReactNode } from "react";
import type { Lang } from "@/config/i18n";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";

// 22개 하위 화면이 공유하는 골격: 본문 바로가기 + 헤더 + 모바일 폴백 메뉴 + <main> + 푸터.
//
// 이 셋을 각 화면이 따로 부르면 언어를 세 번 넘겨야 하고, 순서가 어긋나도 아무도 못 잡는다.
// 여기로 모으면 언어는 한 번만 넘기면 된다.
//
// ⚠️ 홈은 여기 넣지 않는다. 푸터가 전용 마크업이고 메뉴 aria-label 도 영문이라,
//    억지로 합치면 홈에서만 쓰는 선택 항목이 넷 늘어난다 (플레이북 7절).
//
// ⚠️ DOM 을 바꾸지 않는 것이 이 컴포넌트의 유일한 계약이다. 감싸는 <div> 를 만들지 않는다.

type PageShellProps = {
  /** 언어 전환 버튼이 반대쪽 주소를 만드는 데 쓴다 */
  slug: string;
  lang?: Lang;
  /** id="top" 이 <main> 에 있는 화면과 안쪽 섹션에 있는 화면이 섞여 있다 — 지금 상태를 그대로 둔다 */
  mainId?: string;
  /** CTA 가 있는 화면만 푸터에 id 가 붙는다 */
  footerId?: string;
  /** 히어로가 없는 화면(개인정보처리방침)은 헤더가 처음부터 솔리드다 */
  hasHero?: boolean;
  /** 푸터 위 CTA 블록. 화면마다 문구가 달라 마크업 그대로 받는다 */
  cta?: ReactNode;
  children: ReactNode;
};

export function PageShell({
  slug,
  lang = "ko",
  mainId,
  footerId,
  hasHero = true,
  cta,
  children,
}: PageShellProps): JSX.Element {
  return (
    <>
      <SiteHeader slug={slug} lang={lang} hasHero={hasHero} />
      <MobilePanel lang={lang} />
      <main id={mainId}>{children}</main>
      <SiteFooter lang={lang} id={footerId}>
        {cta}
      </SiteFooter>
    </>
  );
}
