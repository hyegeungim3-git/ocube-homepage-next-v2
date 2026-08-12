import { applyBase, withBase } from "@/config/site";
import { appCards } from "@/data/applications";
import { AppCards } from "@/components/section/app-cards";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProjectCards } from "@/components/section/bcase-cards";
import { projectCards } from "@/data/cases";
import { PinSteps } from "@/components/section/pin-steps";
import { pinSteps } from "@/data/steps";

export default function BusinessEmbeddedPage() {
  return (
    <>
      <title>Embedded · 임베디드 소프트웨어 — 오큐브</title>
      <meta
        name="description"
        content="오큐브 임베디드 — 글로벌 완성차 7개 그룹 양산에서 검증한 차량 전장·산업용 디바이스 SW를 요구 분석부터 통합 검증·양산 대응까지 개발합니다."
      />
      <link rel="canonical" href={withBase("business-embedded.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("business-embedded.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/business-embedded.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("business-embedded.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="Embedded · 임베디드 소프트웨어 — 오큐브" />
      <meta
        property="og:description"
        content="오큐브 임베디드 — 글로벌 완성차 7개 그룹 양산에서 검증한 차량 전장·산업용 디바이스 SW를 요구 분석부터 통합 검증·양산 대응까지 개발합니다."
      />
      <meta property="og:url" content={withBase("business-embedded.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Embedded · 임베디드 소프트웨어 — 오큐브" />
      <meta
        name="twitter:description"
        content="오큐브 임베디드 — 글로벌 완성차 7개 그룹 양산에서 검증한 차량 전장·산업용 디바이스 SW를 요구 분석부터 통합 검증·양산 대응까지 개발합니다."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"비즈니스","item":"@@BASE@@business-ax.html"},{"@type":"ListItem","position":3,"name":"임베디드","item":"@@BASE@@business-embedded.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="business-embedded" />
      <MobilePanel />
      <main id="top">
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('assets/img/business/business-embedded-codex.webp')" }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">Embedded, From Technology to Product.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>모빌리티부터 산업용 디바이스까지,</span>{" "}
              <span>혁신적인 소프트웨어로 스마트한 연결과 제품의 차별화를 완성합니다.</span>{" "}
            </h1>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>SCROLL</span>
            </div>
          </div>
        </section>
        {/* 1-1. 글로벌 완성차 파트너 로고 */}
        <section id="oem" className="pcl" aria-label="글로벌 완성차 파트너">
          <div className="wrap pcl-head rv">
            {" "}
            <span className="eb">PARTNERS & CLIENTS</span>{" "}
          </div>
          <div className="pcl-mq">
            <div className="pcl-track">
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/hyundai.png"
                  alt="HYUNDAI"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/kia.png"
                  alt="KIA"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img src="assets/img/oem/gm.png" alt="GM" loading="lazy" width="280" height="127" />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/renault.png"
                  alt="RENAULT"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/vw.png"
                  alt="Volkswagen"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/toyota.png"
                  alt="TOYOTA"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/nissan.png"
                  alt="NISSAN"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/tata.png"
                  alt="TATA DAEWOO MOBILITY"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/tata.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/tata.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/oem/tata.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 1-2. 3대 핵심 역량 */}
        <section id="core" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              {" "}
              <span className="kicker">Core Capabilities</span> <h2>3대 핵심 역량</h2>
            </div>
            <ul className="cap-list rv d1">
              <li className="cap-card on">
                {" "}
                <span
                  className="cap-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/business/steps/embedded-05-hil-safety-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Cyber Security</h3>
                <p className="cap-desc">
                  ISO/SAE 21434, R155 표준 기반 보안 위협 분석 및 설계·
                  <wbr />
                  구현·
                  <wbr />
                  검증·
                  <wbr />
                  인증
                </p>
                <ul className="cap-tags">
                  <li>CSMS · TARA</li>
                  <li>Crypto · Security Lib</li>
                  <li>Pen Test</li>
                </ul>
              </li>
              <li className="cap-card on">
                {" "}
                <span
                  className="cap-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/business/steps/embedded-04-hmi-middleware-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Automotive</h3>
                <p className="cap-desc">
                  ISO 26262 기능안전, ASPICE 프로세스 기반으로 AUTOSAR 설계·
                  <wbr />
                  구현·
                  <wbr />
                  검증
                </p>
                <ul className="cap-tags">
                  <li>AUTOSAR · Mobilgene</li>
                  <li>Telematics · Connectivity</li>
                  <li>OTA · Update</li>
                </ul>
              </li>
              <li className="cap-card on">
                {" "}
                <span
                  className="cap-bg"
                  style={{
                    backgroundImage:
                      "url('assets/img/business/steps/embedded-02-board-bringup-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Edge Device Connectivity</h3>
                <p className="cap-desc">
                  센서 및 산업용 장비 정밀제어부터 홈-IoT까지 개발·
                  <wbr />
                  검증·
                  <wbr />
                  보안 기술력
                </p>
                <ul className="cap-tags">
                  <li>OS (RTOS · Linux · Android)</li>
                  <li>PLC · IoT · Matter</li>
                  <li>Static · Dynamic Analysis</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        {/* 3. What We Do (좌고정 + 6단계) */}
        <section className="pinsec" id="whatwedo">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">What We Do</span>{" "}
              <h2>
                Embedded · <em>Software Engineering</em>
              </h2>
              <p>
                요구 정의부터 양산 검증까지, V-모델 아키텍처에 기반한 체계적인 프로세스로 하드웨어
                제약과 안전·
                <wbr />
                보안 요구사항을 설계 단계부터 완벽히 통합합니다.
              </p>
              <div className="pin-progress" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="pin-right">
              {" "}
              <PinSteps items={pinSteps["business-embedded:whatwedo"]} />
            </div>
          </div>
        </section>
        <section id="applications" className="sec-anchor deploy embedded-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-embedded:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards items={appCards["business-embedded"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span> <h2>대표 프로젝트</h2>
            <p>Automotive, Factory Automation, Home IoT 등 실제 수행한 프로젝트입니다.</p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards items={projectCards["business-embedded:projects"]} />
            </div>
          </div>{" "}
          <a className="bcase-more" href="references.html">
            전체 구축 사례 보기 <span aria-hidden="true">→</span>
          </a>{" "}
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["business-embedded"]} />
      </SiteFooter>
    </>
  );
}
