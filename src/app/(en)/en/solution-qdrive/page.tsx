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

export default function SolutionQdrivePage() {
  return (
    <>
      <title>QDrive · AI Mobility Operations Platform — OCUBE</title>
      <meta
        name="description"
        content="QDrive — a mobility platform that reads tachograph, diagnostic, location and energy data with AI to improve safe driving, fleet operation, EV charging and carbon performance."
      />
      <link rel="canonical" href={withBase("en/solution-qdrive.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-qdrive.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-qdrive.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-qdrive.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="QDrive · AI Mobility Operations Platform — OCUBE" />
      <meta
        property="og:description"
        content="QDrive — a mobility platform that reads tachograph, diagnostic, location and energy data with AI to improve safe driving, fleet operation, EV charging and carbon performance."
      />
      <meta property="og:url" content={withBase("en/solution-qdrive.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QDrive · AI Mobility Operations Platform — OCUBE" />
      <meta
        name="twitter:description"
        content="QDrive — a mobility platform that reads tachograph, diagnostic, location and energy data with AI to improve safe driving, fleet operation, EV charging and carbon performance."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"QDrive","item":"@@BASE@@en/solution-qdrive.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="solution-qdrive" lang="en" />
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
            <SolCopy intro={solutionIntros["solution-qdrive"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                <video
                  className="demovid"
                  src="../assets/media/demo/stage/qdrive.mp4"
                  poster="../assets/media/demo/stage/qdrive.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  width="1600"
                  height="900"
                  aria-label="QDrive 운전자 앱 시연 영상 — 프로토타입 예시"
                ></video>
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-qdrive"]} />
        <section id="overview" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads["solution-qdrive:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src="../assets/img/overview-qdrive.png"
                  alt="QDrive 통합 모빌리티 플랫폼 — 차량 연결, 주행 데이터 분석, 안전 알림, 충전 인프라와 외부 서비스 연계 구조"
                  loading="lazy"
                  width="1536"
                  height="1024"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-qdrive:overview"]} />
              </div>
            </div>
            <div
              className="reveal"
              data-d="3"
              style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {" "}
              <span className="pill">Digital tachograph (DTG)</span>
              <span className="pill">Vehicle diagnostics (OBD · CAN)</span>
              <span className="pill">GPS · precise positioning (RTK)</span>
              <span className="pill">LTE · MQTT</span>
              <span className="pill">Charging protocols (OCPP · ISO 15118)</span>
              <span className="pill">Carbon accounting (GHG Protocol · ISO 14064)</span>{" "}
            </div>
          </div>
        </section>
        {/* Features — 프로토타입 화면 */}
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span> <h2>AI that suggests what to do next</h2>
              <p className="lead">
                Operators, fleet managers and drivers work from the same data to cut risk and waste.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Operations</span> <h3>Fleet-wide monitoring</h3>
                <p>
                  Positions, running state, accidents, faults and risky-driving events in one view —
                  so you see how the fleet is moving and what needs attention first.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Live overview</b> Position, utilisation, availability and incidents, on a map
                    and in figures
                  </li>
                  <li>
                    <b>Risky stretches</b> Where harsh acceleration, braking and cornering keep
                    happening — with the weather and road conditions alongside
                  </li>
                  <li>
                    <b>Comparing performance</b> Safety, fuel and efficiency compared on the same
                    basis, by vehicle, driver and route
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-city.jpg"
                  alt="시티 대시보드 예시 화면 — 실시간 차량 위치·운행 상태·위험운전 히트맵"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Fleet</span> <h3>Vehicle and driver level</h3>
                <p>
                  Each vehicle and driver accounted for, with maintenance, dispatch and deployment
                  adjusted around fault signs and demand.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Vehicle and driver status</b> Driving score, fuel, utilisation, distance and
                    event history, per unit
                  </li>
                  <li>
                    <b>Preventive maintenance</b> Diagnostic and CAN signals show what may fail and
                    when to service it
                  </li>
                  <li>
                    <b>Planning and records</b> Deployment adjusted to demand, with trip records and
                    what was done kept together
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-ops.jpg"
                  alt="플릿 운영 대시보드 예시 화면 — 차량·운전자별 운전점수·연료·가동률·운행 상태"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Management</span> <h3>Results and the case for investing</h3>
                <p>
                  Fuel savings, avoided maintenance and driver incentives add up to a monthly figure
                  — and to the numbers the next investment decision needs.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>The monthly picture</b> Fuel savings, avoided maintenance and incentives,
                    netted off for the month
                  </li>
                  <li>
                    <b>Savings over time</b> How savings have moved since it went in, period by
                    period
                  </li>
                  <li>
                    <b>Distribution and benchmark</b> Performance by driver and vehicle group, set
                    against comparable operations
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-mgmt.jpg"
                  alt="모빌리티 경영·투자 예시 화면 — 월 손익 효과·연료비 절감·운전자 성과·투자 지표"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Driver</span> <h3>Coaching for each driver</h3>
                <p>
                  Driving behaviour explained in the light of road, weather and operating conditions
                  — with what to change for safety and efficiency.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Judged in context</b> Congestion, weather and conditions taken into account,
                    giving something fairer than a bare score
                  </li>
                  <li>
                    <b>Coaching you can act on</b> Idling, holding a steady speed, easing off before
                    the lights — things a driver can do today
                  </li>
                  <li>
                    <b>Did it work</b> Safety score, fuel and energy use compared before and after
                    the coaching
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-report.jpg"
                  alt="운전자 앱 리포트 예시 화면 — AI가 발견한 개인 운전 패턴과 개선 행동 코칭"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Carbon</span> <h3>Carbon and energy savings</h3>
                <p>
                  Emissions savings are worked out from recorded distance and fuel economy — and how
                  driving habits affect that economy is looked at too.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Based on distance and economy</b> Savings calculated from the tachograph’s
                    distance and fuel economy
                  </li>
                  <li>
                    <b>Safe driving and fuel economy</b> How habits move fuel economy, expressed as
                    a correlation
                  </li>
                  <li>
                    <b>Over time</b> Improvement accumulated period by period
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-carbon.jpg"
                  alt="탄소중립 분석 예시 화면 — 주행거리·연비 개선·배출 절감량·안전운전↔연비 상관 분석"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Verification</span> <h3>Proving the effect</h3>
                <p>
                  Compared against what would have happened without AI, and across driver groups
                  before and after coaching — so the improvement has evidence behind it.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Against doing nothing</b> The same conditions, without AI, as the point of
                    comparison
                  </li>
                  <li>
                    <b>Group by group</b> Drivers split into groups and compared before and after
                    coaching
                  </li>
                  <li>
                    <b>Cross-checked</b> On-board diagnostics checked against the tachograph, so the
                    numbers hold
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/qdrive-verify.jpg"
                  alt="성과 검증 예시 화면 — AI 미적용 가정과 비교·운전 그룹별 코칭 효과·차량진단(OBD)·운행기록(DTG) 교차검증"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* 데이터 연결 */}
        <section id="standards" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Standards & Data Integration</span>{" "}
              <h2>Everything the vehicle and the operation produce, on one standard</h2>
              <p className="sec-sub">
                Driving, diagnostic, location, communication and charging data joined by standard,
                ready to analyse and act on.
              </p>
            </div>
            <table className="cmp th-narrow reveal" data-d="1">
              {" "}
              <caption className="sr-only">
                Mobility data — what is collected, from which device, over which standard
              </caption>{" "}
              <thead>
                <tr>
                  <th scope="col">Data</th>
                  <th scope="col" className="ok">
                    What is collected
                  </th>
                  <th scope="col">Device</th>
                  <th scope="col">Standard / interface</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Trip records</th>
                  <td className="ok">
                    Speed, RPM, distance, harsh acceleration and braking, driving habits
                  </td>
                  <td>Digital tachograph (DTG)</td>
                  <td>Tachograph standard · serial, USB</td>
                </tr>
                <tr>
                  <th scope="row">Vehicle diagnostics</th>
                  <td className="ok">Engine, fuel, battery, fault codes, consumable condition</td>
                  <td>On-board diagnostics (OBD)</td>
                  <td>OBD-II PID · CAN·CAN-FD</td>
                </tr>
                <tr>
                  <th scope="row">Position and movement</th>
                  <td className="ok">Live coordinates, speed, route and route sections</td>
                  <td>GPS, GNSS and precise-positioning receivers</td>
                  <td>NMEA 0183 · RTK·RTCM</td>
                </tr>
                <tr>
                  <th scope="row">Data transmission</th>
                  <td className="ok">Vehicle, sensor and operational data sent live</td>
                  <td>In-vehicle gateway and communication module</td>
                  <td>LTE Cat M1 · MQTT·HTTPS</td>
                </tr>
                <tr>
                  <th scope="row">Energy and charging</th>
                  <td className="ok">
                    Battery condition, power use, charging sessions, charge and discharge plans
                  </td>
                  <td>BMS, chargers, charging infrastructure</td>
                  <td>OCPP · ISO 15118</td>
                </tr>
                <tr>
                  <th scope="row">Emissions</th>
                  <td className="ok">
                    Emissions and reductions from distance, fuel and electricity use
                  </td>
                  <td>Driving, diagnostic and energy data combined</td>
                  <td>GHG Protocol · ISO 14064</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* 도입 효과 */}
        <section id="effect" className="keytech">
          <div className="wrap kt-head reveal">
            {" "}
            <span className="kicker">Business Impact</span> <h2>What QDrive gives you</h2>
          </div>
          <div className="wrap">
            <div className="qeff-grid reveal" data-d="1">
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  01
                </span>{" "}
                <h3>One view of the fleet</h3>
                <p>
                  Location, driving and diagnostics,
                  <br />
                  shared by drivers and operations
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  02
                </span>{" "}
                <h3>Safer driving, better maintenance</h3>
                <p>
                  Risky driving and faults caught early,
                  <br />
                  feeding coaching and maintenance
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  03
                </span>{" "}
                <h3>Energy and charging tuned</h3>
                <p>
                  Battery and power use per vehicle,
                  <br />
                  tuning charging and deployment
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  04
                </span>{" "}
                <h3>Carbon performance</h3>
                <p>
                  Emissions from distance and fuel,
                  <br />
                  with each reduction verified
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-qdrive:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-qdrive:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-qdrive"]} />
      </SiteFooter>
    </>
  );
}
