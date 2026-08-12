"use client";

import { useEffect } from "react";
import type { JSX } from "react";
import { usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 솔루션 상단: 히어로에 얹혀 있던 문구가 스크롤을 따라 밝은 영역으로 올라오면 색이 뒤집힌다.
// 6단계에서 site2.js 의 23-sol-copy-travel.js 앞부분을 대신한다.
//
// 진행도(--p)는 그리는 값이 아니라 잰 값이라 CSS 사용자 정의 속성으로 직접 넣는다.
// 스크롤마다 React 를 다시 그리면 초당 수십 번 재렌더가 된다.

export function SolCopyTravel(): JSX.Element | null {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const copy = document.querySelector<HTMLElement>(".sol-copy");
    const body = document.querySelector<HTMLElement>(".sol-body");
    if (!copy || !body) return;

    let ticking = false;
    const paint = (): void => {
      ticking = false;
      const c = copy.getBoundingClientRect();
      const b = body.getBoundingClientRect();
      // 본문 상단이 화면 아래에 있을 때 0, 문구 중앙까지 올라오면 1
      const start = c.height;
      const end = c.height / 2;
      const raw = start === end ? 1 : (start - b.top) / (start - end);
      const p = Math.min(1, Math.max(0, raw));
      copy.style.setProperty("--p", reduced ? "1" : p.toFixed(3));
      copy.classList.toggle("on-light", p >= 1);
    };
    const onScroll = (): void => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", paint);
    paint();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", paint);
    };
  }, [reduced]);

  return null;
}
