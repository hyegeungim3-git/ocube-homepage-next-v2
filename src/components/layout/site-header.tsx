"use client";

import type { JSX } from "react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { headerNavigation, headerNavigationEn } from "@/config/navigation";
import { assetPath, ui, type Lang } from "@/config/i18n";
import { LangToggle } from "@/components/layout/lang-toggle";
import { revealHeader, useHeaderScroll } from "@/components/behavior/header-scroll";
import { useMediaQuery } from "@/components/behavior/use-media-query";

// 현재 사이트의 공통 헤더. 메뉴 항목은 src/config/navigation.ts 에서 온다.
// index.html 만 aria-label 이 영문이라 prop 으로 분리했다(기존 사이트의 표기 불일치 보존).
//
// 6단계에서 site2.js 의 세 모듈을 여기로 옮겼다.
//   05-gnb-state  투명 ↔ 솔리드
//   20-gnb-hide   하강 시 숨김 · 상승 시 복귀
//   22-gnb-mega   메뉴에 다가가면 네 갈래가 한꺼번에 펼쳐지는 메가 메뉴
//
// 포인터로 다룰 수 있는 넓은 화면에서만 메가 메뉴를 연다. 좁은 화면은 모바일 메뉴가 맡는다.
const DESKTOP_HOVER = "(min-width: 901px) and (hover: hover) and (pointer: fine)";

/** 포인터가 헤더 밖으로 잠깐 스칠 때 바로 닫히지 않도록 두는 여유 */
const CLOSE_DELAY = 140;
/** 펼친 패널 아래에 두는 여백 */
const MEGA_PADDING = 24;

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
  const hoverDesktop = useMediaQuery(DESKTOP_HOVER, false);

  const gnb = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);
  const measured = useRef(0);
  const [mega, setMega] = useState(false);
  // 창을 좁히면 펼친 것이 저절로 접힌다 — 상태를 되돌리는 효과를 따로 두지 않는다
  const megaOpen = hoverDesktop && mega;

  // 히어로가 없으면 본문이 헤더 높이만큼 내려와야 한다 — body 는 레이아웃 소유라 여기서 붙인다
  useEffect(() => {
    if (hasHero) return;
    document.body.classList.add("no-hero");
    return () => document.body.classList.remove("no-hero");
  }, [hasHero]);

  const clearTimer = (): void => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  /* 가장 긴 갈래의 높이를 한 번만 재어 둔다 — 갈래 사이를 오갈 때 패널이 출렁이지 않게.
     그리는 값이 아니라 잰 값이라 CSS 사용자 정의 속성으로 직접 넣는다. */
  const applyHeight = useCallback((): void => {
    const el = gnb.current;
    if (!el) return;
    if (!measured.current) {
      let tallest = 0;
      el.querySelectorAll(".dropdown").forEach((panel) => {
        tallest = Math.max(tallest, panel.scrollHeight);
      });
      measured.current = Math.ceil(tallest) + MEGA_PADDING;
    }
    el.style.setProperty("--mega-h", `${measured.current}px`);
  }, []);

  const open = useCallback((): void => {
    if (!hoverDesktop) return; // 좁은 화면은 모바일 메뉴가 맡는다
    clearTimer();
    applyHeight();
    revealHeader();
    setMega(true);
  }, [applyHeight, hoverDesktop]);

  const closeNow = useCallback((): void => {
    clearTimer();
    setMega(false);
  }, []);

  const closeSoon = useCallback((): void => {
    clearTimer();
    closeTimer.current = window.setTimeout(() => setMega(false), CLOSE_DELAY);
  }, []);

  // 글꼴이 늦게 오거나 창 크기가 바뀌면 다시 재야 한다
  useEffect(() => {
    const invalidate = (): void => {
      measured.current = 0;
      if (megaOpen) applyHeight();
    };
    let timer: number | null = null;
    const onResize = (): void => {
      if (timer !== null) window.clearTimeout(timer);
      timer = window.setTimeout(invalidate, 120);
    };
    window.addEventListener("resize", onResize, { passive: true });
    void document.fonts?.ready.then(invalidate);
    return () => {
      if (timer !== null) window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [megaOpen, applyHeight]);

  // Esc 로 닫고 초점은 열었던 갈래로 되돌린다
  useEffect(() => {
    if (!megaOpen) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") return;
      const active = document.activeElement;
      const trigger = active?.closest(".nav-item")?.querySelector<HTMLElement>(":scope > a");
      trigger?.focus();
      closeNow();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [megaOpen, closeNow]);

  useEffect(() => clearTimer, []);

  const headerClass = [
    "gnb",
    scrolled ? "scrolled" : "",
    scroll.hidden ? "gnb-hide" : "",
    megaOpen ? "gnb-mega" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <header
        className={headerClass}
        ref={gnb}
        onFocus={revealHeader}
        onBlur={(e) => {
          // 헤더 밖으로 초점이 나갈 때만 닫는다 (갈래 사이 이동은 유지)
          if (!e.currentTarget.contains(e.relatedTarget)) closeSoon();
        }}
        onMouseEnter={hoverDesktop ? clearTimer : undefined}
        onMouseLeave={hoverDesktop ? closeSoon : undefined}
      >
        <div className="wrap nav">
          {" "}
          <a href="index.html" className="logo" aria-label={t.home}>
            <img src={assetPath("assets/ci_01.avif", lang)} alt="OCUBE" width="462" height="140" />
          </a>{" "}
          <nav
            className="nav-menu"
            aria-label={navLabel ?? t.mainNav}
            onMouseEnter={hoverDesktop ? open : undefined}
            onFocus={open}
          >
            {nav.map((item, index) => {
              const panelId = `gnb-panel-${index + 1}`;
              return (
                <div className="nav-item" key={item.label}>
                  <a
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    aria-controls={panelId}
                    role="button"
                    tabIndex={0}
                  >
                    {item.label}{" "}
                    <span aria-hidden="true" className="badge-caret">
                      ▾
                    </span>
                  </a>{" "}
                  <div className="dropdown" id={panelId}>
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
              );
            })}
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
