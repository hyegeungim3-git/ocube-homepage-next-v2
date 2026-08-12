import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { subnavItems } from "@/data/subnav.en";
import { Subnav } from "@/components/section/subnav";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { solutionIntros } from "@/data/solution-intro.en";
import { SolCopy } from "@/components/section/sol-copy";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { FeatItems } from "@/components/section/feat-list";
import { featLists } from "@/data/features.en";

export default function SolutionTrafficPage() {
  return (
    <>
      <title>QVision · Vision AI for Traffic and Safety — OCUBE</title>
      <meta
        name="description"
        content="QVision — vision AI that analyses traffic and detects hazards on the road and at work."
      />
      <link rel="canonical" href={withBase("en/solution-traffic.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-traffic.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-traffic.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-traffic.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="QVision · Vision AI for Traffic and Safety — OCUBE" />
      <meta
        property="og:description"
        content="QVision — vision AI that analyses traffic and detects hazards on the road and at work."
      />
      <meta property="og:url" content={withBase("en/solution-traffic.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QVision · Vision AI for Traffic and Safety — OCUBE" />
      <meta
        name="twitter:description"
        content="QVision — vision AI that analyses traffic and detects hazards on the road and at work."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"QVision","item":"@@BASE@@en/solution-traffic.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="solution-traffic" lang="en" />
      <MobilePanel lang="en" />
      <main>
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('../assets/video/sec_autonomous.jpg')" }}
              aria-hidden="true"
            ></div>
            <div className="hero-veil" aria-hidden="true"></div>
            <div className="hero-scroll" aria-hidden="true">
              <div className="wrap">
                <i></i>
                <span>SCROLL</span>
              </div>
            </div>
          </section>
          <section className="sol-intro">
            <SolCopy intro={solutionIntros["solution-traffic"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="../assets/img/qvision-intro.png"
                  alt="QVision — AI 기반 교통 분석·안전 모니터링·스마트 관제 구성"
                  loading="lazy"
                  width="1672"
                  height="941"
                />{" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-traffic"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-traffic:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src="../assets/img/proto/qvision-overview.jpg"
                  alt="QVision AI 비전 기반 교통 분석·안전 솔루션 구성 — 영상 입력원부터 차량 인식·보행자 감지·교통량 분석·이상행동 감지·사고 알림·통합 관제 연계까지"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-traffic:overview"]} />
              </div>
            </div>
          </div>
        </section>
        {/* Features — 실시간 검출 데모 */}
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>Vehicles and road hazards, read live from the video</h2>
              <p className="lead">
                Traffic is counted by vehicle type from the camera feed, and damage to the road
                surface is found live and sent to the control room.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">TMS</span> <h3>Live traffic counting</h3>
                <p>
                  Vehicles are detected and classified from the footage, counted by type and turned
                  into statistics.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Counting by type</b> Passing vehicles sorted by type and counted
                    automatically
                  </li>
                  <li>
                    <b>By direction at junctions</b> Counts kept separately for each direction
                    through the junction
                  </li>
                  <li>
                    <b>Fixed or mobile</b> Works for permanently installed and for mobile surveys
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/tms.png"
                  alt="TMS 실시간 교통량 검출 화면 — 차종 분류·통행량 계측"
                  loading="lazy"
                  width="560"
                  height="204"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Road Safety</span> <h3>Live pothole detection</h3>
                <p>
                  Potholes are found live in the driving footage, and their location and details go
                  to the control system.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Whatever shape they take</b> Trained on potholes of many shapes and sizes
                  </li>
                  <li>
                    <b>Detected and sent live</b> Found while driving, and reported as it happens
                  </li>
                  <li>
                    <b>Control room integration</b> A system to monitor and manage everything that
                    has been found
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/pothole.png"
                  alt="포트홀 실시간 검출 데모 화면 — 차량 영상 인식 모듈과 관제 서버"
                  loading="lazy"
                  width="600"
                  height="211"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* TMS 상세 */}
        <section id="tms" className="sec-anchor deploy tms-section">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">TMS · Traffic Measurement Solution</span>{" "}
              <h2>Traffic counted by vehicle type, automatically, as statistics</h2>
              <p className="lead">
                Vision AI tells the vehicles apart and counts them by direction of travel.
              </p>
            </div>
            <div className="feat-list tms-metrics reveal" data-d="1">
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  01
                </i>
                <b>Training data</b>
                <span>Trained across many road environments to detect more reliably</span>
              </div>
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  02
                </i>
                <b>Vehicle classes</b>
                <span>Thirteen classes in all — the ministry’s twelve, plus buses</span>
              </div>
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  03
                </i>
                <b>Direction tracking</b>
                <span>Counts tracked according to the direction taken through the junction</span>
              </div>
            </div>
            <div className="dep-grid tms-services reveal" data-d="2">
              <div className="dep-card" data-no="01">
                <div className="ic tms-icon" aria-hidden="true">
                  🚦
                </div>
                <h3>Traffic survey system</h3>
                <p>Fixed and mobile cameras counting by vehicle type</p>
              </div>
              <div className="dep-card" data-no="02">
                <div className="ic tms-icon" aria-hidden="true">
                  🚥
                </div>
                <h3>Signal control</h3>
                <p>The counts feed the traffic signal control system</p>
              </div>
              <div className="dep-card" data-no="03">
                <div className="ic tms-icon" aria-hidden="true">
                  🅿️
                </div>
                <h3>Parking management</h3>
                <p>
                  Bay occupancy and vehicles entering and leaving, identified to support parking
                  management
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="detect" className="sec-anchor dark">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Incident Detection</span>{" "}
              <h2>Hazards on camera, turned into events for the control room</h2>
              <p className="sec-sub">
                AI incident detection classifies what it sees and alerts both the system and the
                person on duty.
              </p>
            </div>
            <div className="mod-grid reveal" data-d="1">
              <div className="mod">Wrong-way driving</div>
              <div className="mod">Stopped vehicle</div>
              <div className="mod">Congestion</div>
              <div className="mod">Pedestrian on the carriageway</div>
              <div className="mod">Fallen object</div>
              <div className="mod">Poor visibility or smoke</div>
              <div className="mod">Road surface damage (pothole)</div>
              <div className="mod">Volume and vehicle type</div>
            </div>
            <p className="sec-note">
              Detection can be extended to suit the operation, with a human review step to cut false
              alarms. Personal image data is masked according to the operating requirements and
              regulations.
            </p>
            <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
              {" "}
              <FeatItems items={featLists["solution-traffic:detect"]} />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-traffic:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-traffic:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-traffic"]} />
      </SiteFooter>
    </>
  );
}
