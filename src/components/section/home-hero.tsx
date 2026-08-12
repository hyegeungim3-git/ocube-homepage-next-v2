"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import type { HomeSlide } from "@/data/home-hero";
import { HomeSlides } from "@/components/section/home-slides";
import { usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 홈 히어로 4배너. 6단계에서 site2.js 의 08-hero-slider.js 를 대신한다.
//
// 슬라이드는 HomeSlides 가, 좌우 버튼·진행 바는 여기가 그린다. 어느 장이 보이는지는
// 이 컴포넌트의 상태다 — 예전에는 스크립트가 class 와 aria 를 붙여 주었다.
//
// ⚠️ 문구는 번역해서 props 로 받는다. 여기서 사전을 부르면 사전 전체가 브라우저 번들에 실린다.

/** 자동 전환 주기. 홈 타자기(home-refresh.js)가 window.__heroSlideMs 로 이 값을 참조한다. */
const SLIDE_MS = 6500;

export type HeroLabels = {
  prev: string;
  next: string;
  /** 자동 전환이 도는 중일 때 일시정지 버튼에 읽어 줄 이름 */
  pause: string;
  /** 멈춰 있을 때 읽어 줄 이름 */
  play: string;
  tablist: string;
  bars: readonly { no: string; name: string; label: string }[];
};

export function HomeHero({
  items,
  labels,
  lang = "ko",
}: {
  items: readonly HomeSlide[];
  labels: HeroLabels;
  lang?: Lang;
}): JSX.Element {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // 사용자가 직접 멈춘 상태
  const [hovering, setHovering] = useState(false); // 컨트롤 위에 포인터가 있는 동안
  const [hidden, setHidden] = useState(false); // 다른 탭으로 갔을 때
  const bars = useRef<(HTMLButtonElement | null)[]>([]);

  const running = !reduced && !paused && !hovering && !hidden;
  // 돌던 것을 멈춘 상태 — 진행 바 애니메이션도 함께 멈춰야 표시와 실제가 어긋나지 않는다
  const held = paused || hovering || hidden;

  const go = useCallback(
    (next: number): void => setIndex(((next % items.length) + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    window.__heroSlideMs = SLIDE_MS;
  }, []);

  // 자동 전환. index 가 바뀔 때마다 다시 세므로 간격이 일정하다.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [running, index, go]);

  // 다른 탭으로 가면 멈춘다
  useEffect(() => {
    const onVisibility = (): void => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // 보이는 장의 영상만 재생한다
  useEffect(() => {
    if (reduced) return;
    const videos = document.querySelectorAll<HTMLVideoElement>(".hslide video");
    videos.forEach((v, i) => {
      if (i === index) void v.play().catch(() => undefined);
      else v.pause();
    });
  }, [index, reduced]);

  const onBarKeyDown = (e: React.KeyboardEvent, i: number): void => {
    const { key } = e;
    if (key !== "ArrowLeft" && key !== "ArrowRight" && key !== "Home" && key !== "End") return;
    e.preventDefault();
    const last = items.length - 1;
    const next =
      key === "Home"
        ? 0
        : key === "End"
          ? last
          : (i + (key === "ArrowLeft" ? -1 : 1) + items.length) % items.length;
    setIndex(next);
    bars.current[next]?.focus();
  };

  const heroClass = ["hero", paused ? "paused" : "", held ? "hero-hold" : ""]
    .filter(Boolean)
    .join(" ");

  /* ⚠️ 히어로는 화면을 꽉 채운다. 히어로 전체에 hover 정지를 걸면 포인터가 사실상 늘 안에
     있어 자동 전환이 영구히 멈춘다(실측으로 확인된 함정). 정지는 컨트롤 위에서만 건다. */
  const hoverGuard = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };

  return (
    <section id="top" className={heroClass}>
      <div className="home-hero-shell">
        <div className="hslides">
          <HomeSlides lang={lang} items={items} activeIndex={index} />
        </div>
        <div className="hero-ctrl">
          <div className="wrap">
            <div className="hctrl" {...hoverGuard}>
              {" "}
              <button
                className="hnav"
                type="button"
                data-act="prev"
                aria-label={labels.prev}
                onClick={() => go(index - 1)}
              >
                {" "}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M15 5l-7 7 7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
              </button>{" "}
              <button
                className="hnav"
                type="button"
                data-act="toggle"
                aria-label={paused ? labels.play : labels.pause}
                aria-pressed={paused}
                onClick={() => setPaused((p) => !p)}
              >
                {" "}
                <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9.5 5.5v13M14.5 5.5v13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  ></path>
                </svg>{" "}
                <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.5 5.6l10 6.4-10 6.4z" fill="currentColor"></path>
                </svg>{" "}
              </button>{" "}
              <button
                className="hnav"
                type="button"
                data-act="next"
                aria-label={labels.next}
                onClick={() => go(index + 1)}
              >
                {" "}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M9 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
              </button>{" "}
            </div>
            <div className="hpag" role="tablist" aria-label={labels.tablist} {...hoverGuard}>
              {" "}
              {labels.bars.map((bar, i) => (
                // 원본은 버튼 사이에 공백 한 칸이 있었다 — 인라인 요소라 그 한 칸이 간격이다
                <Fragment key={bar.no}>
                  <button
                    className={i === index ? "hbar hpag-item on" : "hbar hpag-item"}
                    type="button"
                    data-i={String(i)}
                    id={`hero-tab-${i + 1}`}
                    role="tab"
                    aria-controls={`hero-panel-${i + 1}`}
                    aria-selected={i === index}
                    aria-label={bar.label}
                    tabIndex={i === index ? 0 : -1}
                    ref={(el) => {
                      bars.current[i] = el;
                    }}
                    onClick={() => setIndex(i)}
                    onKeyDown={(e) => onBarKeyDown(e, i)}
                  >
                    <i></i>
                    <span>{bar.no}</span>
                    <b>{bar.name}</b>
                  </button>{" "}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
