import type { JSX, ReactNode } from "react";
import { Fragment } from "react";
import { footerColumns, footerLogo, legal, offices } from "@/data/site";
import { assetPath, type Lang } from "@/config/i18n";

// 푸터 하단(로고·거점·링크·법적 표기)은 22개 페이지가 완전히 동일하다.
// 페이지마다 다른 CTA 블록은 원본 마크업 그대로 children 으로 받는다.
// (CTA 문구에는 <wbr> 같은 인라인 요소가 섞여 있어 문자열로 뽑으면 손상된다)
// CTA 가 없는 5개 페이지는 원본 푸터에 id 가 없다 → 그대로 재현한다.
export function SiteFooter({
  children,
  id,
  lang = "ko",
}: {
  children?: ReactNode;
  id?: string;
  lang?: Lang;
}): JSX.Element {
  return (
    <footer className="fcta" id={id}>
      <div className="fcta-box">
        <div className="wrap">
          {children}
          <div className="fcta-bot">
            <div>
              <img
                alt={footerLogo[lang].alt}
                className="fb-logo"
                height={footerLogo[lang].height}
                src={assetPath(footerLogo[lang].src, lang)}
                width={footerLogo[lang].width}
              />
              <dl className="fb-loc">
                {offices[lang].map((o) => (
                  <div className="row" key={o.code}>
                    <dt>{o.code}</dt>
                    <dd>{o.address}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="fb-links">
              {footerColumns[lang].map((c) => (
                <div className="fb-col" key={c.title}>
                  <p className="f-h">{c.title}</p>
                  {/* 원본은 제목 뒤에만 줄바꿈이 있고 링크 사이에는 공백이 없다 */}{" "}
                  {c.links.map((l) => (
                    <a href={l.href} key={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="fb-legal">
            {" "}
            <span>{legal[lang].copyright}</span>
            {legal[lang].links.map((l) => (
              <Fragment key={l.href}>
                {" "}
                <a href={l.href}>{l.label}</a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
