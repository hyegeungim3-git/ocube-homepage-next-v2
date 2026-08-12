import type { JSX } from "react";
import { Fragment } from "react";
import { assetPath, type Lang } from "@/config/i18n";
import type { HomeSlide } from "@/data/home-hero";

// 홈 히어로 슬라이드 4장. 미디어는 영상(video) 또는 이미지(img) 두 형태다.
// 타자기 문구(data-typewriter)와 읽어주는 문구(aria-label)는 줄바꿈 유무가 달라 각각 데이터로 둔다.
// DOM 은 이관 전 마크업 그대로 — 래퍼를 추가하지 않는다.
//
// 어느 장이 보이는지는 HomeHero 가 정해서 넘긴다(6단계 전에는 site2.js 가 붙여 주던 값이다).
export function HomeSlides({
  items,
  lang = "ko",
  activeIndex = 0,
}: {
  items: readonly HomeSlide[];
  lang?: Lang;
  /** 지금 보이는 장 */
  activeIndex?: number;
}): JSX.Element {
  return (
    <>
      {items.map((s, i) => {
        const active = i === activeIndex;
        return (
          <div
            className={active ? "hslide on" : "hslide"}
            key={i}
            id={`hero-panel-${i + 1}`}
            role="tabpanel"
            aria-labelledby={`hero-tab-${i + 1}`}
            aria-hidden={active ? "false" : "true"}
            inert={!active}
          >
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
                <h1
                  className="h-title"
                  data-typewriter={s.typewriter}
                  aria-label={s.ariaLabel}
                ></h1>
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
        );
      })}
    </>
  );
}
