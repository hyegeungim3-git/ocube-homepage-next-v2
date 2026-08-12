import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function LicenseTelitPage() {
  return (
    <>
      <title>Telit Cinterion — 셀룰러 IoT 모듈 | Global Partners · 오큐브(주)</title>
      <meta
        name="description"
        content="M2M·IoT 애플리케이션을 위한 Telit Cinterion 모듈 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
      />
      <link rel="canonical" href={withBase("license-telit.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-telit.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-telit.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-telit.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        property="og:title"
        content="Telit Cinterion — 셀룰러 IoT 모듈 | Global Partners · 오큐브(주)"
      />
      <meta
        property="og:description"
        content="M2M·IoT 애플리케이션을 위한 Telit Cinterion 모듈 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
      />
      <meta property="og:url" content={withBase("license-telit.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Telit Cinterion — 셀룰러 IoT 모듈 | Global Partners · 오큐브(주)"
      />
      <meta
        name="twitter:description"
        content="M2M·IoT 애플리케이션을 위한 Telit Cinterion 모듈 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Telit Cinterion","item":"@@BASE@@license-telit.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-telit" />
      <MobilePanel />
      <main id="top">
        {" "}
        <PageHero data={heroes["license-telit"]} />{" "}
        <section id="modules" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:modules"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  제품군은 다양한 셀룰러 표준을 지원합니다.
                  <br className="sb" /> 통신 규격과 지역·
                  <wbr />
                  인증 범위는 모델별로 확인해 선정합니다.
                </p>
                <div className="feat-list" style={{ marginTop: "18px" }}>
                  <div className="feat">
                    <h3>통신·측위 기능 통합</h3>
                    <p>
                      Java™, GPS·
                      <wbr />
                      GLONASS, SL Agent, SIM Access Profile 등 제품에 필요한 기능을 모듈에
                      통합했습니다.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>환경 규제 확인</h3>
                    <p>RoHS 등 환경 규제 준수 여부는 적용 제품의 인증 문서로 확인합니다.</p>
                  </div>
                  <div className="feat">
                    <h3>인증 범위 확인</h3>
                    <p>환경·지역·통신사 인증 범위는 제품과 적용 국가에 따라 모델별로 확인합니다.</p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/telit.png"
                  alt="Telit Cinterion M2M·IoT 통신 모듈"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
            <div className="pi-tags rv" style={{ marginTop: "22px" }}>
              <span className="pill light">저전력 이동통신(LTE Cat M1 · NB-IoT)</span>{" "}
              <span className="pill light">5G · eSIM</span>{" "}
              <span className="pill light">GPS/GLONASS</span>{" "}
              <span className="pill light">메시지 통신(MQTT) · 기기관리 통신(LwM2M)</span>{" "}
              <span className="pill light">TLS 1.2/1.3</span>
            </div>
          </div>
        </section>
        <section id="usecase" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:usecase"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-telit:usecase"]} />
            </div>
            <p className="sec-note reveal" data-d="2">
              오큐브는 통신 모듈 공급 경험을 바탕으로 제품 선정, 안테나 설계와 적용 국가의 통신사
              인증 준비를 함께 지원합니다.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["license-telit"]} />
      </SiteFooter>
    </>
  );
}
