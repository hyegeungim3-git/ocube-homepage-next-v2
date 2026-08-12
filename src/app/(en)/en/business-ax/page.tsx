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

export default function BusinessAxPage() {
  return (
    <>
      <PageMeta
        lang="en"
        path="business-ax.html"
        title="AX · AI Transformation — OCUBE"
        description="OCUBE AX — finding where AI can help in industrial data, automating reporting, and carrying AI judgement into action once a person approves it."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"비즈니스 · AX","item":"@@BASE@@en/business-ax.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="business-ax"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["business-ax"]} />
          </>
        }
      >
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('../assets/img/business/business-ax-codex.webp')" }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">AX, From Insight to Action.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>Better judgement, faster execution —</span>{" "}
              <span>changing how companies and industries run.</span>{" "}
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
        <section className="pcl" aria-label="AX partners and clients">
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
                AX · <em>AI Transformation</em>
              </h2>
              <p>
                We decide where AI belongs in your work, then carry its judgement through to action.
                <br className="sb" /> Six steps, from diagnosing the data to building and running
                it.
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
              <PinSteps lang="en" items={pinSteps["business-ax:whatwedo"]} />
            </div>
          </div>
        </section>
        {/* 4. 적용분야 */}
        <section id="applications" className="sec-anchor deploy ax-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-ax:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards lang="en" items={appCards["business-ax"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span> <h2>Selected projects</h2>
            <p>See how data became judgement, and judgement became better operations.</p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards lang="en" items={projectCards["business-ax:projects"]} />
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
