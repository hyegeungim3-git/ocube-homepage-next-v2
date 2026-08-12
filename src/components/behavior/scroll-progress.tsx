"use client";

import { useEffect, useRef } from "react";
import type { JSX } from "react";
import { usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 화면 맨 위의 읽기 진행 바. 6단계에서 site2.js 의 19-scroll-progress.js 를 대신한다.
//
// 스크롤마다 React 를 다시 그리지 않는다 — 값이 바뀌는 것은 CSS transform 하나뿐이라
// ref 로 직접 쓴다(원래 스크립트와 같은 방식이고, 초당 수십 번 재렌더할 이유가 없다).
// 서버에서는 그리지 않는다: 원래 스크립트도 하이드레이션 뒤에 만들어 넣던 요소다.

export function ScrollProgress(): JSX.Element | null {
  const bar = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let ticking = false;
    const paint = (): void => {
      ticking = false;
      const el = bar.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = (): void => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    paint();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  // 모션을 줄여 달라고 한 사용자에게는 아예 만들지 않는다 (원래 스크립트와 같다)
  if (reduced) return null;
  return <div className="scroll-progress" aria-hidden="true" ref={bar} />;
}
