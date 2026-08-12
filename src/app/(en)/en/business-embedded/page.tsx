import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { appCards } from "@/data/applications.en";
import { AppCards } from "@/components/section/app-cards";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { ProjectCards } from "@/components/section/bcase-cards";
import { projectCards } from "@/data/cases.en";
import { PinSteps } from "@/components/section/pin-steps";
import { pinSteps } from "@/data/steps.en";

export default function BusinessEmbeddedPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="business-embedded.html"
        title="Embedded Software — OCUBE"
        description="OCUBE Embedded — vehicle electronics and industrial device software, proven in mass production with seven global automotive groups, developed from requirements analysis through integration testing to mass-production support."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"비즈니스","item":"@@BASE@@en/business-ax.html"},{"@type":"ListItem","position":3,"name":"임베디드","item":"@@BASE@@en/business-embedded.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="business-embedded"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["business-embedded"]} />
          </>
        }
      >
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('../assets/img/business/business-embedded-codex.webp')",
            }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">Embedded, From Technology to Product.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>From mobility to industrial devices,</span>{" "}
              <span>
                our software delivers smart connectivity and product differentiation.
              </span>{" "}
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
        <section id="oem" className="pcl" aria-label="Global automotive partners">
          <div className="wrap pcl-head rv">
            {" "}
            <span className="eb">PARTNERS & CLIENTS</span>{" "}
          </div>
          <div className="pcl-mq">
            <div className="pcl-track">
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/hyundai.png"
                  alt="HYUNDAI"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/kia.png"
                  alt="KIA"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/gm.png"
                  alt="GM"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/renault.png"
                  alt="RENAULT"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/vw.png"
                  alt="Volkswagen"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/toyota.png"
                  alt="TOYOTA"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/nissan.png"
                  alt="NISSAN"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/tata.png"
                  alt="TATA DAEWOO MOBILITY"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/tata.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/tata.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/hyundai.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/kia.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/gm.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/renault.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/vw.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/toyota.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/nissan.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="280"
                  height="127"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="../assets/img/oem/tata.png"
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
              <span className="kicker">Core Capabilities</span> <h2>Three core capabilities</h2>
            </div>
            <ul className="cap-list rv d1">
              <li className="cap-card on">
                {" "}
                <span
                  className="cap-bg"
                  style={{
                    backgroundImage:
                      "url('../assets/img/business/steps/embedded-05-hil-safety-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Cyber Security</h3>
                <p className="cap-desc">
                  Threat analysis and security design, implementation, verification and
                  certification to ISO/SAE 21434 and R155
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
                      "url('../assets/img/business/steps/embedded-04-hmi-middleware-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Automotive</h3>
                <p className="cap-desc">
                  AUTOSAR design, implementation and verification on ISO 26262 functional safety and
                  the ASPICE process
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
                      "url('../assets/img/business/steps/embedded-02-board-bringup-v3.webp')",
                  }}
                  aria-hidden="true"
                ></span>{" "}
                <h3>Edge Device Connectivity</h3>
                <p className="cap-desc">
                  Development, verification and security from precise sensor and industrial
                  equipment control to home IoT
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
                From requirement definition to mass-production verification, a V-model process folds
                hardware constraints and safety and security requirements into design from the
                start.
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
              <PinSteps lang="en" items={pinSteps["business-embedded:whatwedo"]} />
            </div>
          </div>
        </section>
        <section id="applications" className="sec-anchor deploy embedded-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-embedded:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards lang="en" items={appCards["business-embedded"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span> <h2>Selected projects</h2>
            <p>
              Projects actually delivered across automotive, factory automation, home IoT and more.
            </p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards lang="en" items={projectCards["business-embedded:projects"]} />
            </div>
          </div>{" "}
          <a className="bcase-more" href="references.html">
            See all build cases <span aria-hidden="true">→</span>
          </a>{" "}
        </section>
      </PageShell>
    </>
  );
}
