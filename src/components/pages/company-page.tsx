import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { historyGroups } from "@/data/history";
import { HistRows } from "@/components/section/hist-rows";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";
import { T, localizeLd, t } from "@/i18n/translate";

export function CompanyPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="company.html"
        title={t(lang, "연혁 — 오큐브(주)")}
        description={t(
          lang,
          "오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 산업 AI까지 걸어온 주요 이정표.",
        )}
        ogDescription={t(
          lang,
          "오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 SI와 산업 AI까지 이어온 주요 이정표.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"연혁","item":"@@BASE@@company.html"}]}',
            ),
          ),
        }}
      />
      <PageShell lang={lang} slug="company" footerId="contact">
        {" "}
        <PageHero lang={lang} data={heroes[lang]["company"]} />{" "}
        <nav className="subnav" aria-label={t(lang, "회사 섹션")}>
          <div className="wrap">
            {" "}
            <a href="about.html">
              <T l={lang}>회사소개</T>
            </a>{" "}
            <a href="#history">History</a>{" "}
            <a href="location.html">
              <T l={lang}>오시는 길</T>
            </a>{" "}
          </div>
        </nav>
        {/* 회사소개 */}
        <section id="history" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">History</span>{" "}
              <h2 className="loc-h">
                <T l={lang}>설립부터 지금까지</T>
              </h2>
              <p className="lead">
                <T l={lang}>
                  임베디드에서 출발해 SI와 산업 AI로 넓혀온 과정을 이정표로 정리했습니다.
                </T>
              </p>
            </div>
            <div className="hist">
              <HistRows groups={historyGroups[lang]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
