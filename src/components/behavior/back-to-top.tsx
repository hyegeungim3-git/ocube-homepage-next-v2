"use client";

import { useSyncExternalStore } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";

// 맨 위로 버튼. 6단계에서 site2.js 의 15-fab.js 를 대신한다.
//
// ⚠️ 서버에서 그리지 않고 브라우저에서만 그린다. 기존 스크립트가 하이드레이션 이후 DOM 을
//    만들어 넣던 것이라, 서버에서 그리면 정적 HTML 이 달라진다(회귀 게이트가 잡는다).
//    자바스크립트가 없으면 어차피 동작하지 않는 버튼이라 없는 편이 정직하다.
//
// 스크롤 위치는 React 밖(브라우저)의 상태다. useEffect + useState 로 흉내 내면
// "효과 안에서 상태를 바꾼다" 는 경고가 붙는다 — 이럴 때 쓰라고 있는 것이
// useSyncExternalStore 다. 서버 스냅샷은 -1 이라 서버에서는 아무것도 그리지 않는다.

const LABEL: Record<Lang, string> = { ko: "맨 위로", en: "Back to top" };

/** 이 높이를 넘겨야 버튼이 나타난다 (기존 스크립트와 같은 값) */
const SHOW_AFTER = 500;

function subscribe(onChange: () => void): () => void {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function BackToTop({ lang = "ko" }: { lang?: Lang }): JSX.Element | null {
  const scrollY = useSyncExternalStore(
    subscribe,
    () => window.scrollY,
    () => -1, // 서버에서는 스크롤이라는 것이 없다
  );
  if (scrollY < 0) return null;

  const toTop = (): void => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className={scrollY > SHOW_AFTER ? "fab-stack show" : "fab-stack"}>
      <button className="fab-btn fab-top" type="button" aria-label={LABEL[lang]} onClick={toTop}>
        <svg viewBox="0 0 17 19" width="16" height="18" aria-hidden="true">
          <path
            d="M1 8l7.3-7 7.3 7M8.3 1v17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
