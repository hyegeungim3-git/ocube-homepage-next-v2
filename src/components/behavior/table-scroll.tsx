"use client";

import { useEffect } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";

// 가로로 넓은 비교표를 스크롤 껍데기로 감싼다 (좁은 화면에서 화면 밖으로 넘치지 않게).
// 6단계에서 site2.js 의 04-table-scroll.js 를 대신한다.
//
// ⚠️ 표 마크업은 화면 컴포넌트가 그리고, 껍데기는 붙은 뒤에 끼워 넣는다.
//    렌더 시점에 감싸면 정적 HTML 이 달라지므로(회귀 게이트가 잡는다) 지금 방식을 유지했다.
//    표를 데이터로 빼는 날 함께 정리할 자리다.

const LABEL: Record<Lang, { fallback: string; hint: string }> = {
  ko: { fallback: "비교표", hint: " — 가로로 스크롤할 수 있습니다" },
  en: { fallback: "comparison table", hint: " — scrolls sideways" },
};

export function TableScroll({ lang = "ko" }: { lang?: Lang }): JSX.Element | null {
  useEffect(() => {
    const label = LABEL[lang];
    const wrapped: HTMLDivElement[] = [];

    document.querySelectorAll("table.cmp").forEach((table) => {
      if (table.parentElement?.classList.contains("cmp-scroll")) return;
      const wrap = document.createElement("div");
      wrap.className = "cmp-scroll";
      wrap.tabIndex = 0;
      const caption = table.querySelector("caption")?.textContent?.trim();
      wrap.setAttribute("aria-label", (caption || label.fallback) + label.hint);
      table.parentNode?.insertBefore(wrap, table);
      wrap.appendChild(table);
      wrapped.push(wrap);
    });

    return () => {
      // 끼워 넣은 껍데기는 걷어내고 표를 제자리로 돌려놓는다
      for (const wrap of wrapped) {
        const table = wrap.firstElementChild;
        if (table) wrap.parentNode?.insertBefore(table, wrap);
        wrap.remove();
      }
    };
  }, [lang]);

  return null;
}
