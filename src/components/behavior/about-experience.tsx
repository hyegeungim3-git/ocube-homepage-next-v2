"use client";

import { useEffect } from "react";
import type { JSX } from "react";
import { usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 회사소개 화면의 두 가지 움직임. 6단계에서 site2.js 의 23-sol-copy-travel.js 뒷부분을 대신한다.
//   ① 히어로에서 커서를 따라 배경이 살짝 어긋난다(시차)
//   ② 비전 구역을 스크롤하면 장면이 차례로 바뀌고 머리글이 따라간다
// 모션을 줄여 달라고 한 사용자에게는 둘 다 붙이지 않는다.

const HERO_X = 28; // 좌우로 어긋나는 폭(px)
const HERO_Y = 20; // 상하로 어긋나는 폭(px)
/** 마지막 장면은 구역 끝까지 가지 않고 조금 앞에서 멈춘다 */
const LAST_STOP = 0.92;

function bindHeroParallax(): (() => void) | undefined {
  const hero = document.querySelector<HTMLElement>(".about-hero");
  const orbit = hero?.querySelector<HTMLElement>(".about-hero-orbit");
  if (!hero || !orbit) return;

  let ticking = false;
  const point = { x: 0, y: 0 };
  const paint = (): void => {
    ticking = false;
    orbit.style.setProperty("--about-x", `${point.x.toFixed(1)}px`);
    orbit.style.setProperty("--about-y", `${point.y.toFixed(1)}px`);
  };
  const onMove = (e: PointerEvent): void => {
    const r = hero.getBoundingClientRect();
    point.x = ((e.clientX - r.left) / r.width - 0.5) * HERO_X;
    point.y = ((e.clientY - r.top) / r.height - 0.5) * HERO_Y;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  };
  const onLeave = (): void => {
    point.x = 0;
    point.y = 0;
    paint();
  };
  hero.addEventListener("pointermove", onMove, { passive: true });
  hero.addEventListener("pointerleave", onLeave, { passive: true });
  return () => {
    hero.removeEventListener("pointermove", onMove);
    hero.removeEventListener("pointerleave", onLeave);
  };
}

function bindVisionScenes(): (() => void) | undefined {
  const vision = document.querySelector<HTMLElement>(".about-vision");
  if (!vision) return;
  const panels = [...vision.querySelectorAll<HTMLElement>("[data-vision-panel]")];
  if (panels.length === 0) return;
  const buttons = [...vision.querySelectorAll<HTMLElement>("[data-vision-jump]")];
  const head = vision.querySelector<HTMLElement>(".about-vision-head");
  const headLabel = vision.querySelector<HTMLElement>("[data-vision-head-label]");
  const headTitle = vision.querySelector<HTMLElement>("[data-vision-head-title]");

  let active = -1;
  const setScene = (next: number): void => {
    const index = Math.max(0, Math.min(panels.length - 1, next));
    if (index === active) return;
    active = index;
    const panel = panels[index];
    if (headLabel) headLabel.textContent = panel.getAttribute("data-vision-label") ?? "";
    if (headTitle) headTitle.textContent = panel.getAttribute("data-vision-title") ?? "";
    if (head) {
      // 클래스를 뗐다 붙여야 같은 전환이 다시 재생된다 (그 사이에 강제 리플로우가 필요하다)
      head.classList.remove("is-changing");
      void head.offsetWidth;
      head.classList.add("is-changing");
    }
    panels.forEach((p, i) => {
      p.classList.toggle("is-active", i === index);
      p.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
    buttons.forEach((b, i) => {
      b.classList.toggle("is-active", i === index);
      b.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
  };

  const travel = (): number => Math.max(1, vision.offsetHeight - window.innerHeight);
  let ticking = false;
  const update = (): void => {
    ticking = false;
    const progress = Math.min(1, Math.max(0, -vision.getBoundingClientRect().top / travel()));
    setScene(Math.min(panels.length - 1, Math.floor(progress * panels.length)));
  };
  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const unbindJumps = buttons.map((button, index) => {
    const onClick = (): void => {
      const top = window.scrollY + vision.getBoundingClientRect().top;
      const ratio = index === panels.length - 1 ? LAST_STOP : index / panels.length;
      window.scrollTo({ top: top + travel() * ratio, behavior: "smooth" });
    };
    button.addEventListener("click", onClick);
    return () => button.removeEventListener("click", onClick);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
  return () => {
    unbindJumps.forEach((off) => off());
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", update);
  };
}

export function AboutExperience(): JSX.Element | null {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const offHero = bindHeroParallax();
    const offVision = bindVisionScenes();
    return () => {
      offHero?.();
      offVision?.();
    };
  }, [reduced]);

  return null;
}
