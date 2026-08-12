import { Fragment } from "react";
import { assetPath, type Lang } from "@/config/i18n";
import type { HeroData } from "@/data/heroes";

// 9개 페이지가 공유하는 서브페이지 히어로.
// 배경 장식(bg/veil/cube)은 페이지마다 구성이 달라 데이터로 받는다.
export function PageHero({ data, lang = "ko" }: { data: HeroData; lang?: Lang }) {
  return (
    <section className="hero page-hero dark" id={data.id}>
      {data.decor.map((d, i) =>
        d.kind === "bg" ? (
          <div
            aria-hidden="true"
            className="hero-bg"
            key={i}
            style={{ backgroundImage: `url('${assetPath(d.image, lang)}')` }}
          ></div>
        ) : d.kind === "veil" ? (
          <div aria-hidden="true" className="hero-veil" key={i}></div>
        ) : (
          <div aria-hidden={d.hidden ? "true" : undefined} className="cube-a" key={i}></div>
        ),
      )}
      <div className="wrap" style={data.wrapStyle}>
        {" "}
        <span className="hero-badge">{data.badge}</span> <h1>{data.title}</h1>
        <p>
          {data.lead.map((t, i) =>
            t === "br" ? (
              <br className="sb" key={i} />
            ) : t === "wbr" ? (
              <wbr key={i} />
            ) : (
              <Fragment key={i}>{t}</Fragment>
            ),
          )}
        </p>
        <ul className="hero-keys">
          {data.keys.map((k) => (
            <li key={k.k}>
              <span className="k">{k.k}</span>
              <span className="v">{k.v}</span>
            </li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className="hero-scroll">
        <div className="wrap">
          <i></i>
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}
