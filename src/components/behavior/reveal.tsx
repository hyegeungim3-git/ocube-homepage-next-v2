"use client";

import { useEffect } from "react";
import type { JSX } from "react";

// 스크롤 리빌 — 화면에 들어온 요소에 `in` 을 붙인다.
// 6단계에서 site2.js 의 03-reveal.js 와 24-motion-ready.js 를 대신한다.
//
// 대상(.rv/.reveal)은 화면 곳곳의 마크업이라 이 컴포넌트가 그리는 것이 아니다.
// 그래서 상태가 아니라 관찰로 다룬다 — 대신 해제까지 책임진다.
//
// `motion-ready` 는 "자바스크립트가 준비됐다" 는 표시다. 이게 붙어야 CSS 가 요소를 숨기므로,
// 스크립트가 실패한 사람에게는 본문이 그냥 보인다. 그 안전장치를 그대로 옮겼다.

/** 요소 윗변이 화면 높이의 이만큼까지 올라오면 드러낸다 */
const TRIGGER = 0.92;
/** 스크롤 폴백을 너무 자주 돌리지 않는다 */
const THROTTLE = 120;

export function Reveal(): JSX.Element | null {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const pending = new Set<Element>(document.querySelectorAll(".rv, .reveal"));
    if (pending.size === 0) return () => document.documentElement.classList.remove("motion-ready");

    const show = (el: Element): void => {
      el.classList.add("in");
      pending.delete(el);
    };

    // 화면에 들어오는 것을 관찰한다. 관찰이 안 먹는 환경을 위해 스크롤 폴백도 함께 둔다.
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                io?.unobserve(entry.target);
                show(entry.target);
              }
            },
            { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
          )
        : null;
    for (const el of pending) io?.observe(el);

    const check = (): void => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of [...pending]) {
        // 지나간 요소도 반드시 드러낸다 (앵커로 건너뛰거나 빠르게 스크롤한 경우)
        if (el.getBoundingClientRect().top < vh * TRIGGER) show(el);
      }
    };
    let last = 0;
    const onScroll = (): void => {
      const now = Date.now();
      if (now - last < THROTTLE) return;
      last = now;
      check();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    check();
    const t1 = window.setTimeout(check, 600);
    const t2 = window.setTimeout(check, 1800);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
