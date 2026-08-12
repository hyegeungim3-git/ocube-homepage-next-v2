import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { logoGroups } from "@/data/logos";
import { PlogoItems } from "@/components/section/plogo-items";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";
import { refCards, refMetaLabels } from "@/data/refs";
import { RefCards } from "@/components/section/ref-cards";
import { T, localizeLd, t } from "@/i18n/translate";

export function ReferencesPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="references.html"
        title={t(lang, "주요 구축 사례 — 오큐브(주)")}
        description={t(
          lang,
          "오큐브(주) 주요 구축 사례 — 제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스. 산업 분야별 레퍼런스와 AX·임베디드·SI 역량을 과제-해결-성과로 정리했습니다.",
        )}
        ogDescription={t(
          lang,
          "제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스 — 산업 분야별 구축 사례를 과제-해결-성과로 정리했습니다.",
        )}
        twitterDescription={t(
          lang,
          "제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스 — 산업 분야별 구축 사례.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@company.html"},{"@type":"ListItem","position":3,"name":"주요 구축 사례","item":"@@BASE@@references.html"}]}',
            ),
          ),
        }}
      />
      <PageShell lang={lang} slug="references">
        {" "}
        <PageHero lang={lang} data={heroes[lang]["references"]} />{" "}
        <section id="refs" className="sec">
          <div className="wrap">
            <div className="sec-head center rv">
              <span className="kicker">References</span>{" "}
              <h2>
                <T l={lang}>주요 구축 실적</T>
              </h2>
              <p className="lead">
                <T l={lang}>
                  실제 적용 분야를 선택해 사례를 모아 보고, 배지와 정보 블록에서 거래
                  유형·발주처·분야를 바로 확인할 수 있습니다.
                </T>
              </p>
            </div>
            <div
              className="case-filter cert-filter rv d2"
              role="group"
              aria-label={t(lang, "산업 도메인 필터")}
              style={{
                position: "static",
                background: "none",
                border: "0",
                padding: "0",
                marginTop: "clamp(28px,3.4vw,44px)",
              }}
            >
              {" "}
              <button className="case-tab active" type="button" data-cat="all" aria-pressed="true">
                <T l={lang}>전체</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mfg" aria-pressed="false">
                <T l={lang}>제조</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="energy" aria-pressed="false">
                <T l={lang}>에너지</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mobility" aria-pressed="false">
                <T l={lang}>모빌리티</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="public" aria-pressed="false">
                <T l={lang}>공공</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="fin" aria-pressed="false">
                <T l={lang}>금융</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="home" aria-pressed="false">
                <T l={lang}>홈 AIoT</T>
              </button>{" "}
              <button className="case-tab" type="button" data-cat="enterprise" aria-pressed="false">
                <T l={lang}>기업서비스</T>
              </button>{" "}
            </div>
            <div className="ref-grid">
              <RefCards items={refCards[lang]} labels={refMetaLabels[lang]} />
            </div>
            <p className="sec-note rv" data-filter-empty hidden>
              <T l={lang}>
                선택한 분야에 아직 공개된 사례가 없습니다. 위에서 다른 분야를 고르거나
                &apos;전체&apos; 를 눌러 주십시오.
              </T>
            </p>
          </div>
        </section>
        {/* 공공안전 */}
        {/* 홈 AIoT·서비스 플랫폼 */}
        {/* 파트너 (기술 파트너) */}
        <section className="sec plogo-sec">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Partners & Clients</span>{" "}
              <h2>
                <T l={lang}>함께한 고객과 기술 파트너</T>
              </h2>
              <p className="sec-sub">
                <T l={lang}>
                  프로젝트를 수행한 주요 고객사와 제품 공급·기술지원을 함께하는 글로벌 벤더입니다.
                </T>
              </p>
            </div>
            <div className="plogo-rows">
              <div className="plogo-row reveal" data-d="1">
                {" "}
                <span className="plogo-label">
                  <T l={lang}>주요 고객사</T>
                  <small>Consulting & Development</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems lang={lang} items={logoGroups[lang]["clients"]} />
                </div>
              </div>
              <div className="plogo-row reveal" data-d="2">
                {" "}
                <span className="plogo-label">
                  <T l={lang}>기술 파트너</T>
                  <small>Vendor</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems lang={lang} items={logoGroups[lang]["vendors"]} />
                </div>
              </div>
            </div>
            <p
              className="sec-note reveal"
              data-d="2"
              style={{ marginTop: "clamp(20px,2.4vw,30px)" }}
            >
              <T l={lang}>
                글로벌 SW 벤더의 한국 공식 파트너로서 정품 라이선스·
                <wbr />
                엔지니어링 지원·
                <wbr />
                교육·
                <wbr />
                통합을 함께 제공합니다. 자세한 내용은 글로벌 파트너에서 확인하세요.
              </T>
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
