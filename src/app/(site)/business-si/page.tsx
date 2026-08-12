import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { appCards } from "@/data/applications";
import { AppCards } from "@/components/section/app-cards";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { ProjectCards } from "@/components/section/bcase-cards";
import { projectCards } from "@/data/cases";
import { PinSteps } from "@/components/section/pin-steps";
import { pinSteps } from "@/data/steps";

export default function BusinessSiPage() {
  return (
    <>
      <PageMeta
        path="business-si.html"
        title="SI · 시스템 통합 — 오큐브"
        description="오큐브 SI — 복잡한 B2B·B2G 업무를 분석하고 설계·개발·통합 검증·이행·운영까지 안정적인 시스템으로 구현합니다."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"SI","item":"@@BASE@@business-si.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="business-si"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["business-si"]} />
          </>
        }
      >
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('assets/img/business/business-si-codex.webp')" }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">SI, From Business to Systems.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>고객의 요구를 안정적인 시스템으로 구현하고 연결하여,</span>{" "}
              <span>더 효율적인 비즈니스 환경을 만듭니다.</span>{" "}
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
        <section className="pcl" aria-label="SI 파트너 및 고객사">
          <div className="wrap pcl-head rv">
            {" "}
            <span className="eb">PARTNERS & CLIENTS</span>{" "}
          </div>
          <div className="pcl-mq">
            <div className="pcl-track">
              <div className="pcl-logo">
                <img
                  src="assets/img/client/lg-electronics.png"
                  alt="LG전자"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/client/sk-energy.png"
                  alt="SK에너지"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/client/ls-electric.png"
                  alt="LS ELECTRIC"
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/client/doosan.png"
                  alt="두산"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo">
                <img
                  src="assets/img/client/dgb-financial-group.png"
                  alt="DGB금융지주"
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/dgb-financial-group.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/dgb-financial-group.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/lg-electronics.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/sk-energy.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/ls-electric.png"
                  alt=""
                  loading="lazy"
                  width="170"
                  height="45"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/doosan.png"
                  alt=""
                  loading="lazy"
                  width="280"
                  height="90"
                />
              </div>
              <div className="pcl-logo" aria-hidden="true">
                <img
                  src="assets/img/client/dgb-financial-group.png"
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
                흩어진 업무와 데이터를 하나의 시스템으로 묶습니다.
                <br className="sb" /> 요구 정리부터 오픈과 운영까지 여섯 단계로 진행합니다.
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
              <PinSteps items={pinSteps["business-si:whatwedo"]} />
            </div>
          </div>
        </section>
        {/* 4. 적용분야 */}
        <section id="applications" className="sec-anchor deploy si-applications">
          <div className="wrap">
            <SecHead copy={secHeads["business-si:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards items={appCards["business-si"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span> <h2>대표 프로젝트</h2>
            <p>
              업무를 어떤 시스템으로 구현하고 어디까지 운영했는지 대표 프로젝트로 확인할 수
              있습니다.
            </p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards items={projectCards["business-si:projects"]} />
            </div>
          </div>{" "}
          <a className="bcase-more" href="references.html">
            전체 구축 사례 보기 <span aria-hidden="true">→</span>
          </a>{" "}
        </section>
      </PageShell>
    </>
  );
}
