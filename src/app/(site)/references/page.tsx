import { applyBase, withBase } from "@/config/site";
import { logoGroups } from "@/data/logos";
import { PlogoItems } from "@/components/section/plogo-items";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";
import { refCards, refMetaLabels } from "@/data/refs";
import { RefCards } from "@/components/section/ref-cards";

export default function ReferencesPage() {
  return (
    <>
      <title>주요 구축 사례 — 오큐브(주)</title>
      <meta
        name="description"
        content="오큐브(주) 주요 구축 사례 — 제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스. 산업 분야별 레퍼런스와 AX·임베디드·SI 역량을 과제-해결-성과로 정리했습니다."
      />
      <link rel="canonical" href={withBase("references.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("references.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/references.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("references.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="주요 구축 사례 — 오큐브(주)" />
      <meta
        property="og:description"
        content="제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스 — 산업 분야별 구축 사례를 과제-해결-성과로 정리했습니다."
      />
      <meta property="og:url" content={withBase("references.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="주요 구축 사례 — 오큐브(주)" />
      <meta
        name="twitter:description"
        content="제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스 — 산업 분야별 구축 사례."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@company.html"},{"@type":"ListItem","position":3,"name":"주요 구축 사례","item":"@@BASE@@references.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="references" />
      <MobilePanel />
      <main>
        {" "}
        <PageHero data={heroes["references"]} />{" "}
        <section id="refs" className="sec">
          <div className="wrap">
            <div className="sec-head center rv">
              <span className="kicker">References</span> <h2>주요 구축 실적</h2>
              <p className="lead">
                실제 적용 분야를 선택해 사례를 모아 보고, 배지와 정보 블록에서 거래
                유형·발주처·분야를 바로 확인할 수 있습니다.
              </p>
            </div>
            <div
              className="case-filter cert-filter rv d2"
              role="group"
              aria-label="산업 도메인 필터"
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
                전체
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mfg" aria-pressed="false">
                제조
              </button>{" "}
              <button className="case-tab" type="button" data-cat="energy" aria-pressed="false">
                에너지
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mobility" aria-pressed="false">
                모빌리티
              </button>{" "}
              <button className="case-tab" type="button" data-cat="public" aria-pressed="false">
                공공
              </button>{" "}
              <button className="case-tab" type="button" data-cat="fin" aria-pressed="false">
                금융
              </button>{" "}
              <button className="case-tab" type="button" data-cat="home" aria-pressed="false">
                홈 AIoT
              </button>{" "}
              <button className="case-tab" type="button" data-cat="enterprise" aria-pressed="false">
                기업서비스
              </button>{" "}
            </div>
            <div className="ref-grid">
              <RefCards items={refCards} labels={refMetaLabels} />
            </div>
            <p className="sec-note rv" data-filter-empty hidden>
              선택한 분야에 아직 공개된 사례가 없습니다. 위에서 다른 분야를 고르거나
              &apos;전체&apos; 를 눌러 주십시오.
            </p>
          </div>
        </section>
        {/* 공공안전 */}
        {/* 홈 AIoT·서비스 플랫폼 */}
        {/* 파트너 (기술 파트너) */}
        <section className="sec plogo-sec">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Partners & Clients</span> <h2>함께한 고객과 기술 파트너</h2>
              <p className="sec-sub">
                프로젝트를 수행한 주요 고객사와 제품 공급·기술지원을 함께하는 글로벌 벤더입니다.
              </p>
            </div>
            <div className="plogo-rows">
              <div className="plogo-row reveal" data-d="1">
                {" "}
                <span className="plogo-label">
                  주요 고객사
                  <small>Consulting & Development</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems items={logoGroups["clients"]} />
                </div>
              </div>
              <div className="plogo-row reveal" data-d="2">
                {" "}
                <span className="plogo-label">
                  기술 파트너
                  <small>Vendor</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems items={logoGroups["vendors"]} />
                </div>
              </div>
            </div>
            <p
              className="sec-note reveal"
              data-d="2"
              style={{ marginTop: "clamp(20px,2.4vw,30px)" }}
            >
              글로벌 SW 벤더의 한국 공식 파트너로서 정품 라이선스·
              <wbr />
              엔지니어링 지원·
              <wbr />
              교육·
              <wbr />
              통합을 함께 제공합니다. 자세한 내용은 글로벌 파트너에서 확인하세요.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
