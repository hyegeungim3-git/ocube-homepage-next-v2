"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import type { Lang } from "@/config/i18n";

// 제품 화면 확대 보기. 6단계에서 site2.js 의 14-lightbox.js 를 대신한다.
//
// 여는 쪽(img.shot · [data-shot] 버튼)은 화면 곳곳의 마크업이라 여기서 그리지 않는다 —
// 붙은 뒤에 역할과 손잡이를 달아 준다. 확대 창은 이 컴포넌트가 그린다.
//
// 같은 파일에 있던 '포인터 미리보기'는 옮기지 않고 지웠다 — 대상 [data-preview] 가
// 사이트 전체에 0개다(마크업이 사라진 뒤 남아 있던 코드).

const TEXT: Record<
  Lang,
  { dialog: string; close: string; shot: string; open: (n: string) => string }
> = {
  ko: {
    dialog: "제품 화면 확대 보기",
    close: "확대 화면 닫기",
    shot: "제품 화면",
    open: (n) => `${n} 확대 보기`,
  },
  en: {
    dialog: "Enlarged product screen",
    close: "Close enlarged view",
    shot: "product screen",
    open: (n) => `${n} — view larger`,
  },
};

type Shown = { src: string; alt: string };

export function Lightbox({ lang = "ko" }: { lang?: Lang }): JSX.Element | null {
  // 원래 스크립트는 한 번 만든 확대 창을 지우지 않고 열림 표시만 껐다 켰다.
  // 그 동작을 그대로 둔다 — 닫힌 창이 DOM 에 남아 있는 것까지 같아야 기존 TC 가
  // 기대값 수정 없이 통과한다.
  const [content, setContent] = useState<Shown | null>(null);
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback((): void => {
    setOpen(false);
    lastFocused.current?.focus();
  }, []);

  // 여는 쪽에 역할·손잡이를 달고 클릭·엔터를 받는다
  useEffect(() => {
    const t = TEXT[lang];
    const show = (src: string, alt: string, from: HTMLElement): void => {
      lastFocused.current = from;
      setContent({ src, alt });
      setOpen(true);
    };

    const images = [...document.querySelectorAll<HTMLImageElement>("img.shot")].filter(
      (img) => !img.closest("a,button"),
    );
    const cleanups: (() => void)[] = [];

    for (const img of images) {
      img.classList.add("zoomable");
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", t.open(img.alt || t.shot));
      const openImage = (): void => show(img.currentSrc || img.src, img.alt, img);
      const onKey = (e: KeyboardEvent): void => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        openImage();
      };
      img.addEventListener("click", openImage);
      img.addEventListener("keydown", onKey);
      cleanups.push(() => {
        img.removeEventListener("click", openImage);
        img.removeEventListener("keydown", onKey);
        img.classList.remove("zoomable");
        img.removeAttribute("role");
        img.removeAttribute("aria-label");
      });
    }

    for (const button of document.querySelectorAll<HTMLElement>("[data-shot]")) {
      const onClick = (): void =>
        show(
          button.getAttribute("data-shot") ?? "",
          button.getAttribute("data-shot-alt") ?? "",
          button,
        );
      button.addEventListener("click", onClick);
      cleanups.push(() => button.removeEventListener("click", onClick));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [lang]);

  // 열려 있는 동안: 배경 잠금 · 닫기 버튼으로 초점 이동
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("lb-open");
    closeButton.current?.focus();
    return () => document.body.classList.remove("lb-open");
  }, [open, content]);

  if (!content) return null;
  const t = TEXT[lang];
  return (
    <div
      className={open ? "lightbox open" : "lightbox"}
      role="dialog"
      aria-modal="true"
      aria-label={t.dialog}
      aria-hidden={open ? "false" : "true"}
      onClick={(e) => {
        // 배경을 누르면 닫는다 (그림 위를 누른 것은 아니다)
        if (e.target === e.currentTarget) close();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          close();
        } else if (e.key === "Tab") {
          // 확대 창 안에서는 닫기 버튼 하나만 오간다
          e.preventDefault();
          closeButton.current?.focus();
        }
      }}
    >
      <button
        className="lb-close"
        type="button"
        aria-label={t.close}
        ref={closeButton}
        onClick={close}
      >
        ×
      </button>
      <img className="lb-img" alt={content.alt} src={content.src} />
    </div>
  );
}
