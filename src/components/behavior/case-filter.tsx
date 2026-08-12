"use client";

import { useEffect } from "react";
import type { JSX } from "react";

// 주요 구축 사례의 분야 필터. 6단계에서 site2.js 의 12-cert-filter.js 를 대신한다.
//
// 탭과 카드는 화면 마크업(references)이 그리고, 여기서는 고른 분야에 맞춰 표시만 바꾼다.
// ⚠️ 탭·카드·안내를 한 컴포넌트로 묶으면 진짜 React 상태로 옮길 수 있다. 다만 그러려면
//    화면 마크업을 재배치해야 하고, 지금은 정적 HTML 을 1바이트도 바꾸지 않는 쪽을 택했다.
//    references 섹션을 컴포넌트로 묶는 날 함께 정리할 자리다.

export function CaseFilter(): JSX.Element | null {
  useEffect(() => {
    const bar = document.querySelector(".cert-filter");
    if (!bar) return;
    const tabs = [...bar.querySelectorAll<HTMLElement>(".case-tab")];
    const cards = [
      ...document.querySelectorAll<HTMLElement>(".cert-card[data-cat],.ref-card[data-cat]"),
    ];
    if (cards.length === 0) return;
    const count = document.querySelector("[data-cert-count]");
    // 그 분야에 아직 아무것도 없을 때 빈 화면만 남지 않도록 안내를 띄운다
    const empty = document.querySelector<HTMLElement>("[data-filter-empty]");

    const apply = (category: string): void => {
      let shown = 0;
      for (const card of cards) {
        const show = category === "all" || card.getAttribute("data-cat") === category;
        card.classList.toggle("is-hidden", !show);
        if (show) shown += 1;
      }
      if (count) count.textContent = String(shown);
      if (empty) empty.hidden = shown > 0;
    };

    const onClick = (event: Event): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tab = target.closest<HTMLElement>(".case-tab");
      if (!tab) return;
      for (const other of tabs) {
        const active = other === tab;
        other.classList.toggle("active", active);
        other.setAttribute("aria-pressed", active ? "true" : "false");
      }
      apply(tab.getAttribute("data-cat") ?? "all");
    };

    bar.addEventListener("click", onClick);
    apply("all");
    return () => bar.removeEventListener("click", onClick);
  }, []);

  return null;
}
