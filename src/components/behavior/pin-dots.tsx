"use client";

import { useEffect } from "react";
import type { JSX } from "react";

// What We Do 의 진행 도트 — 항목이 올라온 만큼 채워진다.
// 6단계에서 site2.js 의 16-pin-dots.js 를 대신한다.
//
// 도트와 항목은 화면 마크업(PinSteps)이 그리고, 여기서는 스크롤 위치에 따라 표시만 바꾼다.

/** 항목 윗변이 화면 높이의 이만큼까지 올라오면 그 번호까지 채운다 */
const TRIGGER = 0.75;
const THROTTLE = 110;

export function PinDots(): JSX.Element | null {
  useEffect(() => {
    const sections = [...document.querySelectorAll(".pinsec")]
      .map((sec) => ({
        items: [...sec.querySelectorAll(".pin-item")],
        dots: [...sec.querySelectorAll(".pin-progress i")],
      }))
      .filter((s) => s.items.length > 0 && s.dots.length > 0);
    if (sections.length === 0) return;

    const sync = (): void => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const { items, dots } of sections) {
        let current = -1;
        items.forEach((item, i) => {
          if (item.getBoundingClientRect().top < vh * TRIGGER) current = i;
        });
        dots.forEach((dot, i) => dot.classList.toggle("on", i <= current));
      }
    };

    let last = 0;
    const onScroll = (): void => {
      const now = Date.now();
      if (now - last < THROTTLE) return;
      last = now;
      sync();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    sync();
    const timer = window.setTimeout(sync, 600);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
