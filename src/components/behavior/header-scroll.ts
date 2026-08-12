"use client";

import { useSyncExternalStore } from "react";

// 헤더가 스크롤에 따라 갖는 두 가지 상태를 한 곳에서 계산한다.
// 6단계에서 site2.js 의 05-gnb-state.js(투명→솔리드)와 20-gnb-hide.js(하강 시 숨김)를 대신한다.
//
// 왜 컴포넌트 안의 useState 가 아니라 바깥 저장소인가:
//   ① 숨김 여부는 "직전 위치보다 내려갔는가" 라서 **한 스냅샷만으로는 못 구한다** —
//      직전 값을 들고 있어야 한다.
//   ② useEffect 안에서 첫 값을 setState 하면 react-hooks/set-state-in-effect 가 막는다.
// 브라우저가 들고 있는 상태를 읽는 일이므로 useSyncExternalStore 가 제자리다.

export type HeaderScroll = {
  /** 히어로 위 투명 → 스크롤 후 솔리드 */
  scrolled: boolean;
  /** 아래로 내리는 중이면 헤더를 감춘다 */
  hidden: boolean;
};

const SERVER: HeaderScroll = { scrolled: false, hidden: false };

const SOLID_AFTER = 30; // 이만큼 내려가면 솔리드 (원래 스크립트와 같은 값)
const HIDE_AFTER = 320; // 이 아래에서는 숨기지 않는다
const DOWN_STEP = 6; // 이만큼 더 내려가야 숨긴다 (손 떨림 방지)
const UP_STEP = 4; // 이만큼 올리면 즉시 되돌린다

let snapshot: HeaderScroll = SERVER;
let lastY = 0;
let ticking = false;
const listeners = new Set<() => void>();

function emit(next: HeaderScroll): void {
  if (next.scrolled === snapshot.scrolled && next.hidden === snapshot.hidden) return;
  snapshot = next;
  for (const listener of listeners) listener();
}

function measure(): void {
  ticking = false;
  const y = window.scrollY;
  // 모바일 메뉴가 열려 있는 동안에는 헤더를 감추지 않는다 (닫는 버튼이 거기 있다)
  const locked = document.body.classList.contains("m-lock");
  let hidden = snapshot.hidden;
  if (locked) hidden = false;
  else if (y > HIDE_AFTER && y > lastY + DOWN_STEP) hidden = true;
  else if (y < lastY - UP_STEP || y <= HIDE_AFTER) hidden = false;
  lastY = y;
  emit({ scrolled: y > SOLID_AFTER, hidden });
}

function onScroll(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(measure);
}

function subscribe(listener: () => void): () => void {
  if (listeners.size === 0) {
    lastY = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    measure();
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
  };
}

/** 키보드 포커스가 헤더로 들어오면 감춰 두었던 것을 즉시 되돌린다. */
export function revealHeader(): void {
  emit({ scrolled: snapshot.scrolled, hidden: false });
}

export function useHeaderScroll(): HeaderScroll {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => SERVER,
  );
}
