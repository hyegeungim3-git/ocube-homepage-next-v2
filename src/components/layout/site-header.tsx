import type { JSX } from "react";
import { Fragment } from "react";
import { headerNavigation, headerNavigationEn } from "@/config/navigation";
import { assetPath, ui, type Lang } from "@/config/i18n";
import { LangToggle } from "@/components/layout/lang-toggle";

// 현재 사이트의 공통 헤더. 메뉴 항목은 src/config/navigation.ts 에서 온다.
// index.html 만 aria-label 이 영문이라 prop 으로 분리했다(기존 사이트의 표기 불일치 보존).
export function SiteHeader({
  navLabel,
  lang = "ko",
  slug = "index",
}: {
  navLabel?: string;
  lang?: Lang;
  slug?: string;
}): JSX.Element {
  const t = ui[lang];
  const nav = lang === "en" ? headerNavigationEn : headerNavigation;
  return (
    <>
      <a className="skip" href="#top">
        {t.skip}
      </a>
      <header className="gnb">
        <div className="wrap nav">
          {" "}
          <a href="index.html" className="logo" aria-label={t.home}>
            <img src={assetPath("assets/ci_01.avif", lang)} alt="OCUBE" width="462" height="140" />
          </a>{" "}
          <nav className="nav-menu" aria-label={navLabel ?? t.mainNav}>
            {nav.map((item) => (
              <div className="nav-item" key={item.label}>
                <a aria-haspopup="true" role="button" tabIndex={0}>
                  {item.label}{" "}
                  <span aria-hidden="true" className="badge-caret">
                    ▾
                  </span>
                </a>{" "}
                <div className="dropdown">
                  <div className="dd-group">
                    {item.links.map((l) => (
                      <Fragment key={l.href}>
                        <a href={l.href}>
                          {l.label}
                          <small>{l.description}</small>
                        </a>{" "}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>{" "}
          <LangToggle slug={slug} lang={lang} />{" "}
          <a href="contact.html" className="cta-btn">
            {t.contact}
          </a>{" "}
          <button type="button" className="m-toggle" aria-label={t.openMenu} aria-expanded="false">
            Menu
          </button>{" "}
        </div>
      </header>
    </>
  );
}
