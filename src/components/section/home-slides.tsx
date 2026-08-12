import type { JSX } from "react";
import { Fragment } from "react";
import { assetPath, type Lang } from "@/config/i18n";
import type { HomeSlide } from "@/data/home-hero";

// 홈 히어로 슬라이드 4장. 첫 장만 활성(on)·h1·preload="auto" 이고,
// 미디어는 영상(video) 또는 이미지(img) 두 형태다. 타자기 문구(data-typewriter)와
// 읽어주는 문구(aria-label)는 줄바꿈 유무가 달라 각각 데이터로 둔다.
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
export function HomeSlides({
  items,
  lang = "ko",
}: {
  items: readonly HomeSlide[];
  lang?: Lang;
}): JSX.Element {
  return (
    <>
      {items.map((s, i) => (
        <div className={i === 0 ? "hslide on" : "hslide"} key={i}>
          {s.media.kind === "video" ? (
            <video
              muted
              loop
              playsInline
              poster={assetPath(s.media.poster, lang)}
              preload={i === 0 ? "auto" : "none"}
              aria-hidden="true"
            >
              <source src={assetPath(s.media.src, lang)} type="video/mp4" />
            </video>
          ) : (
            <Fragment>
              {" "}
              <img
                className="home-hero-poster"
                src={assetPath(s.media.src, lang)}
                alt=""
                width="1920"
                height="1080"
              />{" "}
            </Fragment>
          )}
          <div className="hveil" aria-hidden="true"></div>
          <div className="wrap">
            <p className="h-support">{s.support}</p>
            {i === 0 ? (
              <h1 className="h-title" data-typewriter={s.typewriter} aria-label={s.ariaLabel}></h1>
            ) : (
              <div
                className="h-title"
                role="heading"
                aria-level={1}
                data-typewriter={s.typewriter}
                aria-label={s.ariaLabel}
              ></div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
