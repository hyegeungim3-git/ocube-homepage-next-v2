import { applyBase, withBase } from "@/config/site";
import { appCards } from "@/data/applications.en";
import { AppCards } from "@/components/section/app-cards";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProjectCards } from "@/components/section/bcase-cards";
import { projectCards } from "@/data/cases.en";
import { PinSteps } from "@/components/section/pin-steps";
import { pinSteps } from "@/data/steps.en";

export default function BusinessSiPage() {
  return (
    <>
      <title>SI · Systems Integration — OCUBE</title>
      <meta
        name="description"
        content="OCUBE SI — analysing complex B2B and B2G operations and delivering them as stable systems, through design, development, integration testing, cutover and operation."
      />
      <link rel="canonical" href={withBase("en/business-si.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("business-si.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/business-si.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("business-si.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="SI · Systems Integration — OCUBE" />
      <meta
        property="og:description"
        content="OCUBE SI — analysing complex B2B and B2G operations and delivering them as stable systems, through design, development, integration testing, cutover and operation."
      />
      <meta property="og:url" content={withBase("en/business-si.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SI · Systems Integration — OCUBE" />
      <meta
        name="twitter:description"
        content="OCUBE SI — analysing complex B2B and B2G operations and delivering them as stable systems, through design, development, integration testing, cutover and operation."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"SI","item":"@@BASE@@en/business-si.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="business-si" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('../assets/img/business/business-si-codex.webp')" }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">SI, From Business to Systems.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>Business needs, built into stable systems —</span>{" "}
              <span>so everyday work runs better.</span>{" "}
            </h1>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>SCROLL</span>
            </div>
          </div>
        </section>
        {/* 2. 파트너 가로 슬라이드 */}
        <section className="pcl" aria-label="SI partners and clients">
          <div className="wrap pcl-head rv">
            {" "}
            <span className="eb">PARTNERS & CLIENTS</span>{" "}
          </div>
          <div className="pcl-mq">
            <div className="pcl-track">
              <div className="pcl-logo">
                <img
                  src="../assets/img/client/lg-electronics.png"
                  alt="LG Electronics"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/client/sk-energy.png"
                  alt="SK Energy"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/client/ls-electric.png"
                  alt="LS ELECTRIC"
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/client/doosan.png"
                  alt="두산"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/client/dgb-financial-group.png"
                  alt="DGB금융지주"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/dgb-financial-group.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/dgb-financial-group.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="../assets/img/client/dgb-financial-group.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 3. What We Do (좌고정 + 6단계) */}
        <section className="pinsec" id="whatwedo">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">What We Do</span>{" "}
              <h2>
                SI · <em>System Integration</em>
              </h2>
              <p>
                We bring scattered work and data together into one system.
                <br className="sb" /> Six steps, from gathering requirements to go-live and
                operation.
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
              <PinSteps lang="en" items={pinSteps["business-si:whatwedo"]} />
            </div>
          </div>
        </section>
        {/* 4. 적용분야 */}
        <section id="applications" className="sec-anchor deploy si-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-si:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards lang="en" items={appCards["business-si"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span> <h2>Selected projects</h2>
            <p>See which systems we built for which work — and how far we ran them afterwards.</p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards lang="en" items={projectCards["business-si:projects"]} />
            </div>
          </div>{" "}
          <a className="bcase-more" href="references.html">
            See all build cases <span aria-hidden="true">→</span>
          </a>{" "}
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["business-si"]} />
      </SiteFooter>
    </>
  );
}
