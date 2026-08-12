"use client";

import { useEffect } from "react";
import type { JSX } from "react";
import { usePrefersReducedMotion } from "@/components/behavior/use-media-query";

// 시연 영상 — 화면에 들어와 있을 때만 재생한다.
// 6단계에서 site2.js 의 18-demo-videos.js 를 대신한다.
// 모션을 줄여 달라고 한 사용자에게는 포스터만 보여 준다(재생하지 않는다).

/** 이만큼 보여야 재생한다 */
const VISIBLE = 0.35;

export function DemoVideos(): JSX.Element | null {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const videos = [...document.querySelectorAll<HTMLVideoElement>("video.demovid")];
    if (videos.length === 0) return;

    const play = (v: HTMLVideoElement): void => {
      void v.play().catch(() => {
        /* 자동 재생을 막는 브라우저가 있다 — 조용히 넘어간다 */
      });
    };
    if (!("IntersectionObserver" in window)) {
      videos.forEach(play);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= VISIBLE) play(video);
          else video.pause();
        }
      },
      { threshold: [0, VISIBLE] },
    );
    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [reduced]);

  return null;
}
