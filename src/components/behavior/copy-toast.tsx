"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";

// [data-copy] 를 누르면 클립보드에 담고 안내를 띄운다.
// 6단계에서 site2.js 의 13-copy-toast.js 를 대신한다.
//
// 버튼은 화면 곳곳(문의 화면의 연락처)에 있고 여기서 만드는 것이 아니다 —
// 그래서 클릭은 document 에서 위임으로 받는다. 안내 상자만 이 컴포넌트가 그린다.
//
// 상자는 **빈 채로 처음부터 그려 둔다.** 원래 스크립트도 로드 시점에 빈 상자를 만들어 두고
// 글자만 갈아 끼웠다. 스크린리더는 이미 있던 live region 의 '내용이 바뀌는 것' 을 읽는다 —
// 글자를 담은 채로 노드를 새로 꽂으면 읽지 않고 지나칠 수 있다.
// (`.toast` 는 position:fixed·opacity:0 이라 빈 상태로 있어도 화면에 영향이 없다)

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

export function CopyToast({ lang = "ko" }: { lang?: Lang }): JSX.Element {
  // seq 는 누를 때마다 늘어난다 — 같은 값을 다시 복사해도 숨김 타이머가 다시 시작되도록.
  const [toast, setToast] = useState({ text: "", seq: 0, visible: false });

  useEffect(() => {
    const onClick = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest("[data-copy]");
      const value = button?.getAttribute("data-copy");
      if (!value) return;

      const announce = (): void =>
        setToast((t) => ({ text: COPIED[lang](value), seq: t.seq + 1, visible: true }));
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

  // seq 가 바뀌면 이전 타이머가 정리되고 1.8초를 다시 센다 (원래 스크립트의 clearTimeout 과 같다)
  useEffect(() => {
    if (!toast.visible) return;
    const timer = window.setTimeout(() => setToast((t) => ({ ...t, visible: false })), 1800);
    return () => window.clearTimeout(timer);
  }, [toast.seq, toast.visible]);

  return (
    <div className={toast.visible ? "toast show" : "toast"} role="status">
      {toast.text}
    </div>
  );
}
