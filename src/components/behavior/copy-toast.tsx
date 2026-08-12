"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";

// [data-copy] 를 누르면 클립보드에 담고 안내를 띄운다.
// 6단계에서 site2.js 의 13-copy-toast.js 를 대신한다.
//
// 버튼은 화면 곳곳(문의 화면의 연락처)에 있고 여기서 만드는 것이 아니다 —
// 그래서 클릭은 document 에서 위임으로 받는다. 안내 상자만 이 컴포넌트가 그린다.
// 서버에서는 그리지 않는다(원래 스크립트도 하이드레이션 뒤에 만들어 넣던 요소다).

const COPIED: Record<Lang, (value: string) => string> = {
  ko: (v) => `복사되었습니다 — ${v}`,
  en: (v) => `Copied — ${v}`,
};

/** 클립보드 API 가 막힌 환경(비보안 컨텍스트 등)을 위한 예비 경로 */
function copyFallback(value: string): void {
  const area = document.createElement("textarea");
  area.value = value;
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
  } catch {
    /* 복사에 실패해도 안내는 띄운다 — 원래 스크립트와 같은 동작 */
  }
  area.remove();
}

export function CopyToast({ lang = "ko" }: { lang?: Lang }): JSX.Element | null {
  const [message, setMessage] = useState<string | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest("[data-copy]");
      const value = button?.getAttribute("data-copy");
      if (!value) return;

      const announce = (): void => {
        setMessage(COPIED[lang](value));
        setShown(true);
      };
      if (navigator.clipboard?.writeText) {
        void navigator.clipboard.writeText(value).then(announce, announce);
      } else {
        copyFallback(value);
        announce();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lang]);

  useEffect(() => {
    if (!shown) return;
    const timer = window.setTimeout(() => setShown(false), 1800);
    return () => window.clearTimeout(timer);
  }, [shown, message]);

  if (message === null) return null;
  return (
    <div className={shown ? "toast show" : "toast"} role="status">
      {message}
    </div>
  );
}
