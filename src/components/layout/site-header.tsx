"use client";

import type { JSX } from "react";
import { Fragment, useEffect } from "react";
import { headerNavigation, headerNavigationEn } from "@/config/navigation";
import { assetPath, ui, type Lang } from "@/config/i18n";
import { LangToggle } from "@/components/layout/lang-toggle";
import { revealHeader, useHeaderScroll } from "@/components/behavior/header-scroll";

// 현재 사이트의 공통 헤더. 메뉴 항목은 src/config/navigation.ts 에서 온다.
// index.html 만 aria-label 이 영문이라 prop 으로 분리했다(기존 사이트의 표기 불일치 보존).
//
// 스크롤에 따라 달라지는 두 상태(투명↔솔리드 · 하강 시 숨김)를 여기서 들고 있다.
// 6단계에서 site2.js 의 05-gnb-state.js·20-gnb-hide.js 를 대신한다.
// 서버에서 그리는 첫 모습은 예전 정적 HTML 과 같다(class="gnb") — 상태는 붙은 뒤부터 붙는다.
export function SiteHeader({
  navLabel,
  lang = "ko",
  slug = "index",
  hasHero = true,
}: {
  navLabel?: string;
  lang?: Lang;
  slug?: string;
  /** 히어로가 없는 화면(개인정보처리방침)은 처음부터 솔리드다 */
  hasHero?: boolean;
}): JSX.Element {
  const t = ui[lang];
  const nav = lang === "en" ? headerNavigationEn : headerNavigation;
  const scroll = useHeaderScroll();
  const scrolled = hasHero ? scroll.scrolled : true;

  // 히어로가 없으면 본문이 헤더 높이만큼 내려와야 한다 — body 는 레이아웃 소유라 여기서 붙인다
  useEffect(() => {
    if (hasHero) return;
    document.body.classList.add("no-hero");
    return () => document.body.classList.remove("no-hero");
  }, [hasHero]);

  const headerClass = ["gnb", scrolled ? "scrolled" : "", scroll.hidden ? "gnb-hide" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <header className={headerClass} onFocus={revealHeader}>
        <div className="wrap nav">
          {" "}
          <a href="index.html" className="logo" aria-label={t.home}>
            <img src={assetPath("assets/ci_01.avif", lang)} alt="OCUBE" width="462" height="140" />
          </a>{" "}
          <nav className="nav-menu" aria-label={navLabel ?? t.mainNav}>
            {nav.map((item) => (
              <div className="nav-item" key={item.label}>
                <a aria-haspopup="true" role="button" tabIndex={0}>
                  {item.label}{" "}
                  <span aria-hidden="true" className="badge-caret">
                    ▾
                  </span>
                </a>{" "}
                <div className="dropdown">
                  <div className="dd-group">
                    {item.links.map((l) => (
                      <Fragment key={l.href}>
                        <a href={l.href}>
                          {l.label}
                          <small>{l.description}</small>
                        </a>{" "}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>{" "}
          <LangToggle slug={slug} lang={lang} />{" "}
          <a href="contact.html" className="cta-btn">
            {t.contact}
          </a>{" "}
          <button type="button" className="m-toggle" aria-label={t.openMenu} aria-expanded="false">
            Menu
          </button>{" "}
        </div>
      </header>
    </>
  );
}
