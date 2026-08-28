import type { JSX } from "react";
import { Fragment } from "react";
import { assetPath, type Lang } from "@/config/i18n";
import type { Logo } from "@/data/logos";

// 파트너 & 고객사 로고 가로 마퀴.
//
// 2026-08-26 리뷰로 Business 세 페이지에서 걷어내고 홈(구축 사례 ↔ 푸터 사이)으로 옮겼다.
// 트랙은 **같은 목록을 4벌** 늘어놓는다 — CSS 가 한 주기를 25%로 잡고 있어서(_partners.scss)
// 벌 수가 달라지면 이음매가 어긋난다. 2~4벌째는 화면에만 있는 사본이라 aria-hidden.
const COPIES = 4;

export function PclMarquee({
  items,
  label,
  lang = "ko",
}: {
  items: readonly Logo[];
  label: string;
  lang?: Lang;
}): JSX.Element {
  return (
    <section className="pcl" aria-label={label}>
      <div className="wrap pcl-head rv">
        {" "}
        <span className="eb">PARTNERS &amp; CLIENTS</span>{" "}
      </div>
      <div className="pcl-mq">
        <div className="pcl-track">
          {Array.from({ length: COPIES }, (_, copy) =>
            items.map((l) => (
              <Fragment key={`${copy}-${l.src}`}>
                <div className="pcl-logo" {...(copy > 0 ? { "aria-hidden": true } : {})}>
                  <img
                    src={assetPath(l.src, lang)}
                    alt={copy > 0 ? "" : l.alt}
                    loading="lazy"
                    width={l.width}
                    height={l.height}
                  />
                </div>
              </Fragment>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
