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

export default function LicenseToradexPage() {
  return (
    <>
      <title>
        Toradex — 산업용 SoM · 캐리어보드 | Global Partners · 오큐브(주)
      </title>
      <meta name="description" content="2003년 스위스 설립 Toradex의 System on Module — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <link rel="canonical" href={withBase("license-toradex.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-toradex.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-toradex.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-toradex.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="Toradex — 산업용 SoM · 캐리어보드 | Global Partners · 오큐브(주)" />
      <meta property="og:description" content="2003년 스위스 설립 Toradex의 System on Module — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta property="og:url" content={withBase("license-toradex.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Toradex — 산업용 SoM · 캐리어보드 | Global Partners · 오큐브(주)" />
      <meta name="twitter:description" content="2003년 스위스 설립 Toradex의 System on Module — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Toradex\",\"item\":\"@@BASE@@license-toradex.html\"}]}") }} />
      <SiteHeader slug="license-toradex" />
      <MobilePanel />
      <main id="top">
        {" "}
        <PageHero data={heroes["license-toradex"]} />
        {" "}
        <section id="som" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:som"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  System on Module(SoM) 또는 Computer on Module(CoM)은 프로세서, 메모리와 주요 입출력 기능을 작은 보드에 통합한{" "}
                  <b>
                    임베디드 컴퓨팅 모듈
                  </b>
                  입니다.
                </p>
                <p style={{marginTop: "12px"}}>
                  운영체제와 드라이버, 보드 지원 패키지(BSP)가 함께 제공됩니다.
                  <br className="sb" />
                  {" "}캐리어 보드만 바꿔 여러 장비의 공통 기반으로 씁니다.
                </p>
                <p style={{marginTop: "12px"}}>
                  검증된 모듈을 활용해 핵심 애플리케이션 개발에 집중하고, 하드웨어 개발 위험과 제품 출시 기간을 줄일 수 있습니다.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img src="assets/img/vendor/toradex-som.png" alt="Toradex System on Module 구조" loading="lazy" width="784" height="555" />
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:benefits"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "22px"}}>
              <div className="dep-card">
                <img src="assets/img/vendor/toradex_icon_accelerate.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  시장 출시 시간 단축
                </h3>
                <p>
                  하드웨어 기반 재설계 없이 핵심 애플리케이션에 집중 — 출시 기간 단축
                </p>
              </div>
              <div className="dep-card">
                <img src="assets/img/vendor/toradex_icon_robust.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  검증된 솔루션
                </h3>
                <p>
                  검증된 상용 모듈(SoM) 사용으로 신규 하드웨어 설계·
                  <wbr />
                  검증 위험 축소
                </p>
              </div>
              <div className="dep-card">
                <img src="assets/img/vendor/toradex_icon_performance.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  최신 기술 채택
                </h3>
                <p>
                  최신 프로세서(SoC)·
                  <wbr />
                  메모리 적용 모듈로 제품 성능 단계적 확장
                </p>
              </div>
              <div className="dep-card">
                <img src="assets/img/vendor/toradex_icon_cost.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  제품 개발 비용 최적화
                </h3>
                <p>
                  맞춤형 보드 설계 범위 축소로 전체 프로젝트 비용 절감
                </p>
              </div>
            </div>
            <div className="duo" style={{marginTop: "16px"}}>
              <div className="duo-txt reveal">
                <h3 style={{fontSize: "18px"}}>
                  SoM + 커스텀 캐리어 보드
                </h3>
                <p>
                  상용 SoM에 캐리어 보드를 조합해 제품을 구성합니다.
                  <br className="sb" />
                  {" "}오큐브는 보드 설계와 Linux·
                  <wbr />
                  Qt 화면(HMI) 구성까지 맡습니다.
                </p>
              </div>
              <div className="duo-media plain reveal" data-d="1">
                <img src="assets/img/vendor/toradex.png" alt="SoM과 캐리어 보드 관계도" loading="lazy" width="520" height="519" />
              </div>
            </div>
          </div>
        </section>
        <section id="why" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:why"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "26px"}}>
              {" "}
              <DepCards items={depCards["license-toradex:why"]} />
            </div>
            <div className="pi-tags reveal" data-d="2" style={{marginTop: "22px"}}>
              <span className="pill">
                Colibri · Apalis · Verdin
              </span>
              {" "}
              <span className="pill">
                Yocto 보드 지원 패키지(BSP)
              </span>
              {" "}
              <span className="pill">
                Torizon 컨테이너(OCI)
              </span>
              {" "}
              <span className="pill">
                원격 업데이트(OTA) · 차량·산업 통신(CAN/Modbus)
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["license-toradex"]} />
      </SiteFooter>
    </>
  );
}
