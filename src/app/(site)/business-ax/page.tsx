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

export default function BusinessAxPage() {
  return (
    <>
      <title>
        AX · AI 전환 — 오큐브
      </title>
      <meta name="description" content="오큐브 AX — 산업 데이터에서 AI 적용 과제를 발굴하고, 보고를 자동화하며 AI 판단을 담당자 승인 후 업무 실행으로 연결합니다." />
      <link rel="canonical" href={withBase("business-ax.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("business-ax.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/business-ax.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("business-ax.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="AX · AI 전환 — 오큐브" />
      <meta property="og:description" content="오큐브 AX — 산업 데이터에서 AI 적용 과제를 발굴하고, 보고를 자동화하며 AI 판단을 담당자 승인 후 업무 실행으로 연결합니다." />
      <meta property="og:url" content={withBase("business-ax.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AX · AI 전환 — 오큐브" />
      <meta name="twitter:description" content="오큐브 AX — 산업 데이터에서 AI 적용 과제를 발굴하고, 보고를 자동화하며 AI 판단을 담당자 승인 후 업무 실행으로 연결합니다." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"비즈니스 · AX\",\"item\":\"@@BASE@@business-ax.html\"}]}") }} />
      <SiteHeader slug="business-ax" />
      <MobilePanel />
      <main id="top">
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div className="hero-bg" style={{backgroundImage: "url('assets/img/business/business-ax-codex.webp')"}} aria-hidden="true"></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">
              AX, From Insight to Action.
            </p>
            <h1 className="business-hero-ko">
              {" "}
              <span>
                데이터와 AI를 통해 더 나은 판단과 빠른 실행을 연결하고,
              </span>
              {" "}
              <span>
                기업과 산업의 운영 방식을 혁신합니다.
              </span>
              {" "}
            </h1>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>
                SCROLL
              </span>
            </div>
          </div>
        </section>
        {/* 2. 파트너 가로 슬라이드 */}
        <section className="pcl" aria-label="AI 전환 파트너 및 고객사">
          <div className="wrap pcl-head rv">
            {" "}
            <span className="eb">
              PARTNERS & CLIENTS
            </span>
            {" "}
          </div>
          <div className="pcl-mq">
            <div className="pcl-track">
              <div className="pcl-logo">
                <img src="assets/img/client/lg-electronics.png" alt="LG전자" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo">
                <img src="assets/img/client/sk-energy.png" alt="SK에너지" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo">
                <img src="assets/img/client/ls-electric.png" alt="LS ELECTRIC" loading="lazy" width="170" height="45" />
              </div>
              <div className="pcl-logo">
                <img src="assets/img/client/doosan.png" alt="두산" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo">
                <img src="assets/img/client/dgb-financial-group.png" alt="DGB금융지주" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/lg-electronics.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/sk-energy.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/ls-electric.png" alt="" loading="lazy" width="170" height="45" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/doosan.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/dgb-financial-group.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/lg-electronics.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/sk-energy.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/ls-electric.png" alt="" loading="lazy" width="170" height="45" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/doosan.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/dgb-financial-group.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/lg-electronics.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/sk-energy.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/ls-electric.png" alt="" loading="lazy" width="170" height="45" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/doosan.png" alt="" loading="lazy" width="280" height="90" />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img src="assets/img/client/dgb-financial-group.png" alt="" loading="lazy" width="280" height="90" />
              </div>
            </div>
          </div>
        </section>
        {/* 3. What We Do (좌고정 + 6단계) */}
        <section className="pinsec" id="whatwedo">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">
                What We Do
              </span>
              {" "}
              <h2>
                AX ·{" "}
                <em>
                  AI Transformation
                </em>
              </h2>
              <p>
                AI를 적용할 업무를 정하고, AI 판단을 실행으로 잇습니다.
                <br className="sb" />
                {" "}데이터 진단부터 구축·
                <wbr />
                운영까지 여섯 단계로 수행합니다.
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
              <PinSteps items={pinSteps["business-ax:whatwedo"]} />
            </div>
          </div>
        </section>
        {/* 4. 적용분야 */}
        <section id="applications" className="sec-anchor deploy ax-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-ax:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards items={appCards["business-ax"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">
              BUILD CASES
            </span>
            {" "}
            <h2>
              대표 프로젝트
            </h2>
            <p>
              데이터를 어떤 판단과 운영 개선으로 연결했는지 대표 프로젝트로 확인할 수 있습니다.
            </p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards items={projectCards["business-ax:projects"]} />
            </div>
          </div>
          {" "}
          <a className="bcase-more" href="references.html">
            전체 구축 사례 보기{" "}
            <span aria-hidden="true">
              →
            </span>
          </a>
          {" "}
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["business-ax"]} />
      </SiteFooter>
    </>
  );
}
