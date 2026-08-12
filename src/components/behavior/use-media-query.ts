"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * 미디어 쿼리를 React 값으로 읽는다.
 *
 * `useEffect` + `useState` 로 흉내 내면 "효과 안에서 상태를 바꾼다" 는 린트 규칙
 * (`react-hooks/set-state-in-effect`)에 걸린다. 브라우저가 들고 있는 값을 읽는 일이므로
 * `useSyncExternalStore` 가 제자리다.
 *
 * `serverValue` 는 서버에서 그릴 때 쓸 값이다. 브라우저에서만 만들던 요소라면
 * "서버에서는 안 그린다" 가 되도록 골라 주면 된다.
 */
export function useMediaQuery(query: string, serverValue: boolean): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

/** 모션을 줄여 달라고 한 사용자인가. 서버에서는 "그렇다" 로 보아 움직이는 것을 그리지 않는다. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)", true);
}
