"use client";

import { useSyncExternalStore } from "react";

// 모바일 메뉴 상태. 여는 버튼은 헤더에, 패널은 그 옆에 있어 **서로 형제**다.
// 상태를 위로 올리려면 PageShell 을 클라이언트 컴포넌트로 바꿔야 하는데, 그러면 화면 본문까지
// 클라이언트 번들로 들어간다. 헤더 스크롤과 같은 방식으로 작은 바깥 저장소를 쓴다.
//
// 아코디언에서 펼친 갈래(section)도 같이 둔다 — 메뉴를 닫으면 함께 접혀야 하기 때문이다.

export type MobileMenuState = {
  open: boolean;
  /** 펼친 갈래 번호. 접혀 있으면 -1 (한 번에 하나만 펼친다) */
  section: number;
};

const CLOSED: MobileMenuState = { open: false, section: -1 };

let state: MobileMenuState = CLOSED;
const listeners = new Set<() => void>();

function emit(next: MobileMenuState): void {
  if (next.open === state.open && next.section === state.section) return;
  state = next;
  for (const listener of listeners) listener();
}

export function setMobileMenu(open: boolean): void {
  emit(open ? { open: true, section: -1 } : CLOSED);
}

export function toggleMobileMenu(): void {
  setMobileMenu(!state.open);
}

/** 갈래를 펼치거나 접는다. 이미 펼친 것을 다시 누르면 접힌다. */
export function toggleMobileSection(index: number): void {
  emit({ open: state.open, section: state.section === index ? -1 : index });
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useMobileMenu(): MobileMenuState {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => CLOSED,
  );
}

/** 닫을 때 초점을 여는 버튼으로 되돌린다. 버튼은 다른 컴포넌트에 있어 DOM 으로 찾는다. */
export function focusMenuToggle(): void {
  document.querySelector<HTMLElement>(".m-toggle")?.focus();
}

const noop = (): (() => void) => () => undefined;

/** 서버에서는 false, 브라우저에 붙은 뒤 true. 효과 안에서 상태를 바꾸지 않고 같은 일을 한다. */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
