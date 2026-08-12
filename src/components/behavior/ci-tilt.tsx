"use client";

import { useEffect } from "react";
import type { JSX } from "react";
import { useMediaQuery, usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 홈 CI 로고가 커서를 따라 살짝 기운다.
// 6단계에서 site2.js 의 21-ci-tilt.js 를 대신한다.
// 손가락으로 만지는 화면과 모션을 줄여 달라고 한 사용자에게는 붙이지 않는다.

const MAX_Y = 18; // 좌우 기울기 폭 (±9도)
const MAX_X = 14; // 상하 기울기 폭 (±7도)
const EASE = 0.12; // 목표까지 따라가는 정도 — 클수록 뻣뻣하다
const REST = 0.05; // 이보다 작아지면 멈춘다

export function CiTilt(): JSX.Element | null {
  const finePointer = useMediaQuery("(pointer: fine)", false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!finePointer || reduced) return;
    const stage = document.querySelector<HTMLElement>(".ci-stage");
    const el = document.querySelector<HTMLElement>(".ci-tilt");
    if (!stage || !el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number | null = null;
    let over = false;

    const loop = (): void => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      el.style.transform = `perspective(900px) rotateX(${(-currentY).toFixed(2)}deg) rotateY(${currentX.toFixed(2)}deg)`;
      if (over || Math.abs(currentX) > REST || Math.abs(currentY) > REST) {
        raf = requestAnimationFrame(loop);
      } else {
        el.style.transform = "";
        raf = null;
      }
    };
    const start = (): void => {
      if (raf === null) raf = requestAnimationFrame(loop);
    };
    const onEnter = (): void => {
      over = true;
    };
    const onMove = (e: PointerEvent): void => {
      const r = stage.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width - 0.5) * MAX_Y;
      targetY = ((e.clientY - r.top) / r.height - 0.5) * MAX_X;
      start();
    };
    const onLeave = (): void => {
      over = false;
      targetX = 0;
      targetY = 0;
      start();
    };
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [finePointer, reduced]);

  return null;
}
