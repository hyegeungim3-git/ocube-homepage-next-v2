"use client";

import type { JSX } from "react";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { headerNavigation, headerNavigationEn } from "@/config/navigation";
import { currentMark, isCurrentHref } from "@/config/current-page";
import { ui, type Lang } from "@/config/i18n";
import {
  focusMenuToggle,
  setMobileMenu,
  toggleMobileSection,
  useIsClient,
  useMobileMenu,
} from "@/components/behavior/mobile-menu";
import { useMediaQuery } from "@/components/behavior/use-media-query";

// 좁은 화면의 메뉴 패널. 6단계에서 site2.js 의 06-mobile-menu.js 를 대신한다.
//
// 예전에는 스크립트가 **데스크톱 메뉴의 DOM 을 복제해** 아코디언을 만들었다.
// 이제는 메뉴 데이터(config/navigation.ts)에서 바로 그린다 — 화면을 긁지 않는다.
//
// 자바스크립트가 없으면 예전처럼 납작한 목록이 남는다(서버에서 그리는 것이 그 목록이다).

const DESKTOP_HOVER = "(min-width: 901px) and (hover: hover) and (pointer: fine)";

const PANEL_ID = "mobile-menu";

function focusableIn(panel: HTMLElement): HTMLElement[] {
  const items = Array.from(
    panel.querySelectorAll<HTMLElement>('button:not([disabled]),a[href]:not([tabindex="-1"])'),
  ).filter((el) => el.getClientRects().length > 0);
  const toggle = document.querySelector<HTMLElement>(".m-toggle");
  return toggle ? [toggle, ...items] : items;
}

/** 메뉴가 열려 있는 동안 뒤쪽 화면을 초점 대상에서 뺀다. */
function useBackgroundInert(open: boolean): void {
  useEffect(() => {
    if (!open) return;
    const panel = document.getElementById(PANEL_ID);
    const marked: { el: HTMLElement; was: boolean }[] = [];
    const mark = (el: HTMLElement): void => {
      marked.push({ el, was: el.inert });
      el.inert = true;
    };
    Array.from(document.body.children).forEach((child) => {
      const el = child as HTMLElement;
      if (el === panel || el.classList.contains("gnb") || el.tagName === "SCRIPT") return;
      mark(el);
    });
    // 헤더는 남기되 그 안에서 메뉴 버튼만 닿게 한다
    document.querySelectorAll<HTMLElement>(".gnb .logo,.gnb .nav-menu,.gnb .cta-btn").forEach(mark);
    document.body.classList.add("m-lock");
    return () => {
      marked.forEach(({ el, was }) => {
        el.inert = was;
      });
      document.body.classList.remove("m-lock");
    };
  }, [open]);
}

export function MobilePanel({
  navLabel,
  ctaLabel,
  lang = "ko",
  slug = "index",
}: {
  navLabel?: string;
  ctaLabel?: string;
  lang?: Lang;
  slug?: string;
}): JSX.Element {
  const label = navLabel ?? (lang === "en" ? "Mobile menu" : "모바일 메뉴");
  const cta = ctaLabel ?? ui[lang].contact;
  const nav = lang === "en" ? headerNavigationEn : headerNavigation;

  const { open, section } = useMobileMenu();
  const client = useIsClient();
  const desktop = useMediaQuery(DESKTOP_HOVER, false);
  const panel = useRef<HTMLElement>(null);

  useBackgroundInert(open);

  const close = useCallback((returnFocus: boolean): void => {
    setMobileMenu(false);
    if (returnFocus) focusMenuToggle();
  }, []);

  // 넓은 화면으로 바뀌면 저절로 닫힌다
  useEffect(() => {
    if (desktop) setMobileMenu(false);
  }, [desktop]);

  // Esc 로 닫고, Tab 은 메뉴 안에서만 돈다
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;
      const items = focusableIn(panel.current);
      if (!items.length) return;
      const first = items[0]!;
      const last = items[items.length - 1]!;
      const here = items.indexOf(document.activeElement as HTMLElement);
      if (here === -1 || (event.shiftKey && document.activeElement === first)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <nav
      className={open ? "m-panel open" : "m-panel"}
      id={PANEL_ID}
      aria-label={label}
      ref={panel}
      // 어느 링크를 누르든 메뉴는 닫힌다
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) close(false);
      }}
    >
      {client ? (
        <>
          <div className="m-accordion">
            {nav.map((item, index) => {
              const triggerId = `m-acc-trigger-${index + 1}`;
              const panelId = `m-acc-panel-${index + 1}`;
              const expanded = section === index;
              const here = item.links.some((l) => isCurrentHref(l.href, slug));
              return (
                <section
                  className={"m-acc-item" + (expanded ? " open" : "") + (here ? " is-current" : "")}
                  key={item.label}
                >
                  <button
                    type="button"
                    id={triggerId}
                    className="m-acc-trigger"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => toggleMobileSection(index)}
                  >
                    <span>{item.label}</span>
                    <span className="m-acc-icon" aria-hidden="true"></span>
                  </button>
                  <div
                    id={panelId}
                    className="m-acc-panel"
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!expanded}
                  >
                    <div className="m-acc-group">
                      {item.links.map((l) => (
                        <a key={l.href} href={l.href} aria-current={currentMark(l.href, slug)}>
                          {l.label}
                          <small>{l.description}</small>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <a
            href="contact.html"
            className="m-direct"
            aria-current={currentMark("contact.html", slug)}
          >
            {cta}
          </a>
        </>
      ) : (
        <Fragment>
          {" "}
          <a href="business-ax.html" aria-current={currentMark("business-ax.html", slug)}>
            Business
          </a>{" "}
          <a href="solution-cubeon.html" aria-current={currentMark("solution-cubeon.html", slug)}>
            Solution
          </a>{" "}
          <a href="license-qt.html" aria-current={currentMark("license-qt.html", slug)}>
            Global Partners
          </a>{" "}
          <a href="about.html" aria-current={currentMark("about.html", slug)}>
            Company
          </a>{" "}
          <a href="contact.html" aria-current={currentMark("contact.html", slug)}>
            {cta}
          </a>{" "}
        </Fragment>
      )}
    </nav>
  );
}
