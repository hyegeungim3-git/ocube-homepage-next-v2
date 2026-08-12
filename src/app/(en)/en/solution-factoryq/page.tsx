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

export default function SolutionFactoryqPage() {
  return (
    <>
      <title>QFactory · AI Smart Factory — OCUBE</title>
      <meta
        name="description"
        content="QFactory — an AI smart factory platform that joins process, equipment, quality, energy and safety data, and takes it from prediction and optimisation through to approval-based operation."
      />
      <link rel="canonical" href={withBase("en/solution-factoryq.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-factoryq.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-factoryq.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-factoryq.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="QFactory · AI Smart Factory — OCUBE" />
      <meta
        property="og:description"
        content="QFactory — an AI smart factory platform that joins process, equipment, quality, energy and safety data, and takes it from prediction and optimisation through to approval-based operation."
      />
      <meta property="og:url" content={withBase("en/solution-factoryq.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QFactory · AI Smart Factory — OCUBE" />
      <meta
        name="twitter:description"
        content="QFactory — an AI smart factory platform that joins process, equipment, quality, energy and safety data, and takes it from prediction and optimisation through to approval-based operation."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"QFactory","item":"@@BASE@@en/solution-factoryq.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="solution-factoryq" lang="en" />
      <MobilePanel lang="en" />
      <main>
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('../assets/video/business_robot_arm.jpg')" }}
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
            <SolCopy intro={solutionIntros["solution-factoryq"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="../assets/img/qfactory-hibox-ai-operations.png"
                  alt="하이박 AI 브레이징 설비의 사이클과 공정 데이터를 확인하고 AI 에이전트와 대화하는 QFactory 운영 화면"
                  loading="lazy"
                  width="1515"
                  height="814"
                />{" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-factoryq"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-factoryq:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src="../assets/img/overview-qfactory.png"
                  alt="QFactory가 공장의 데이터 통합과 실시간 모니터링, 예지보전, 품질·생산·에너지 관리를 연결하는 모습"
                  loading="lazy"
                  width="1572"
                  height="1001"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-factoryq:overview"]} />
              </div>
            </div>
          </div>
        </section>
        <section id="applications" className="sec-anchor factory-apps">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Manufacturing AX</span>{" "}
              <h2>Six AI capabilities across the whole of plant operation</h2>
              <p className="lead">
                Start with whichever fits the problem, then widen the proven scope step by step.
              </p>
            </div>
            <p className="factory-note rv d1">
              <b>Adopting it in stages</b> Nothing is ripped out. Add-on sensors and edge systems
              sit alongside what you have, and coverage grows from the process that needs it most.
            </p>
            <div className="factory-app-grid">
              <article className="factory-app rv">
                <div className="factory-app-top">
                  <span>01</span>
                  <b>Data Foundation</b>
                </div>
                <h3>Unifying plant data for AI</h3>
                <p>
                  Control, quality and production systems and sensor data, aligned by time, job and
                  machine.
                </p>
                <dl>
                  <div>
                    <dt>Data joined</dt>
                    <dd>Process · equipment · quality · energy · logistics</dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>Consistency checks, root-cause tracing, and standard data for training</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d1">
                <div className="factory-app-top">
                  <span>02</span>
                  <b>Energy AI</b>
                </div>
                <h3>Optimising heat generation and use</h3>
                <p>
                  Heat generation and steam consumption read together, with settings that cut both
                  oversupply and shortfall.
                </p>
                <dl>
                  <div>
                    <dt>Data joined</dt>
                    <dd>Combustion · steam · fuel · air · temperature and humidity</dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>Balancing generation and use across incinerator, boiler and dryer</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d2">
                <div className="factory-app-top">
                  <span>03</span>
                  <b>Equipment AI</b>
                </div>
                <h3>Equipment health and remaining life</h3>
                <p>
                  Changes in rotating and drying equipment are read to predict faults, risk and how
                  much life is left.
                </p>
                <dl>
                  <div>
                    <dt>Data joined</dt>
                    <dd>
                      Vibration · current · temperature · pressure · flow · maintenance history
                    </dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>Early warning, maintenance priority, downtime avoided</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv">
                <div className="factory-app-top">
                  <span>04</span>
                  <b>Quality AI</b>
                </div>
                <h3>Quality prediction and supply-chain tracing</h3>
                <p>
                  From raw material and additive through to final quality, time and lot history are
                  linked to find where the variance came from.
                </p>
                <dl>
                  <div>
                    <dt>Data joined</dt>
                    <dd>
                      Concentration · particle size · process settings · inspection · shipping lot
                    </dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>Quality prediction, root-cause tracing, feedback up the supply chain</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d1">
                <div className="factory-app-top">
                  <span>05</span>
                  <b>Safety AI</b>
                </div>
                <h3>Video AI for safety</h3>
                <p>
                  Video and equipment events read together to detect unsafe behaviour, entry into
                  restricted areas, fire and other incidents.
                </p>
                <dl>
                  <div>
                    <dt>Data joined</dt>
                    <dd>Live video streams (RTSP) · work zones · equipment alarms</dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>Alerts by severity, history, false-alarm feedback</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d2">
                <div className="factory-app-top">
                  <span>06</span>
                  <b>AI Operations</b>
                </div>
                <h3>Running the models, widening autonomy</h3>
                <p>
                  Training, deployment and accuracy are managed, and recommend → approve → act →
                  check runs as one flow.
                </p>
                <dl>
                  <div>
                    <dt>What is tracked</dt>
                    <dd>Model and data versions, accuracy, and shifts in the data</dd>
                  </div>
                  <div>
                    <dt>How it is used</dt>
                    <dd>
                      Continuous retraining and rollback, edge integration, and autonomy widened in
                      steps
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>From diagnosing the process to running the models</h2>
              <p className="lead">
                Equipment, process, operations and performance data analysed and improved as one
                flow.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Detect</span> <h3>Detailed equipment diagnosis</h3>
                <p>
                  Vacuum pumps, heaters, vibration and temperature sensors are read to find risk and
                  early warning signs before the run.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Health assessment</b> One combined verdict across pumps, heaters, vibration
                    and temperature
                  </li>
                  <li>
                    <b>Reviewing the verdict</b> A person separates false alarms from real faults
                  </li>
                  <li>
                    <b>Moving on safely</b> Only approved findings carry into process design and
                    live monitoring
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-equipment-diagnostics.png"
                  alt="진공 펌프, 히터, 진동 센서와 온도 센서의 상태를 종합 판정하는 AI 설비 정밀 진단 화면"
                  loading="lazy"
                  width="2969"
                  height="1969"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Recommend</span> <h3>Recommending the process recipe</h3>
                <p>
                  Product, loading and past results are analysed to propose the best operating
                  profile, stage by stage.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Entering the conditions</b> Product, weight, thickness and the rest
                  </li>
                  <li>
                    <b>Generating the profile</b> Target temperature and hold time designed from
                    successful cycles and AI prediction
                  </li>
                  <li>
                    <b>Applied only on approval</b> The reasoning and expected outcome are shown,
                    and a person accepts or declines
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-process-design.jpg"
                  alt="제품과 적재 조건을 입력해 최적 브레이징 온도 프로파일을 생성하고 승인하는 AI 공정 설계 권고 화면"
                  loading="lazy"
                  width="839"
                  height="489"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Monitor</span> <h3>Live process monitoring</h3>
                <p>
                  A 3D view of the equipment, with temperature, current and vacuum trends, watches
                  the process as it runs.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Many signals at once</b> Temperature, current, vacuum and ambient data on one
                    timeline
                  </li>
                  <li>
                    <b>Process alerts</b> Departures from the normal pattern recorded with severity
                    and likely cause
                  </li>
                  <li>
                    <b>Operator action</b> Warnings acknowledged, the process halted, and what was
                    done kept on record
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-live-monitoring.png"
                  alt="3차원 설비 화면과 실시간 온도 및 진공도 추이, 시스템 이벤트를 함께 보여주는 공정 관제 화면"
                  loading="lazy"
                  width="2884"
                  height="1881"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Analyze</span> <h3>Cycle-level analysis</h3>
                <p>
                  A finished run is replayed in order, checking when the AI called it and what the
                  sensors were doing.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Replay by the second</b> Temperature, vacuum, process step and logs
                    synchronised on one timeline
                  </li>
                  <li>
                    <b>Replayed in 3D</b> Equipment and product state played back in three
                    dimensions
                  </li>
                  <li>
                    <b>Tracing the cause</b> Detection scores compared against sensor movement to
                    shortlist the cause
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-cycle-analysis.png"
                  alt="공정 사이클을 초 단위로 재생하며 3차원 설비, 온도, 진공도와 AI 이상 로그를 분석하는 화면"
                  loading="lazy"
                  width="2883"
                  height="2136"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Measure</span> <h3>Process KPI analysis</h3>
                <p>
                  Equipment, process, yield and quality measures are analysed to show how close you
                  are to target and what to fix first.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Key measures together</b> Equipment, energy, process and quality performance
                    against target
                  </li>
                  <li>
                    <b>Overall diagnosis</b> The weak measures are found and put in order of
                    priority
                  </li>
                  <li>
                    <b>Comparing cycles</b> Performance by period and cycle, and whether the
                    recommendation actually helped
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-kpi-analysis.png"
                  alt="설비 건강도, 열 침투, 사이클, 수율과 품질 지표의 목표 달성도와 추이를 보여주는 AI 공정 KPI 분석 화면"
                  loading="lazy"
                  width="820"
                  height="528"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Operate</span> <h3>Managing the models</h3>
                <p>
                  Accuracy and versions managed through an MLOps practice, with retraining as
                  needed.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Models and data</b> Training data, model versions, accuracy and where each
                    was used
                  </li>
                  <li>
                    <b>Retraining on feedback</b> Confirmed normal and fault verdicts decide when to
                    retrain
                  </li>
                  <li>
                    <b>Verified before it goes live</b> Compared against the current version; only
                    an approved model goes in
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/qfactory-feature-mlops.png"
                  alt="설비 진단, 공정 권고와 실시간 감시 AI 모델의 버전, 성능, 피드백과 재학습을 관리하는 화면"
                  loading="lazy"
                  width="2823"
                  height="2136"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="why" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Why AI</span>{" "}
              <h2>AI finds the warning signs sooner — and says what to do</h2>
              <p className="sec-sub">
                The small drifts, the causes and the right time to service — the things a threshold
                alarm alone tends to miss.
              </p>
            </div>
            <table className="cmp reveal" data-d="1">
              {" "}
              <caption className="sr-only">
                Threshold-based monitoring compared with QFactory manufacturing AI
              </caption>{" "}
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Threshold-based monitoring</th>
                  <th scope="col" className="ok">
                    QFactory manufacturing AI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Anomaly detection</th>
                  <td>Alarms once a fixed limit is passed — after the fact</td>
                  <td className="ok">
                    Learns the normal pattern, then catches small departures early
                  </td>
                </tr>
                <tr>
                  <th scope="row">Finding the cause</th>
                  <td>Someone traces the logs by hand</td>
                  <td className="ok">
                    Generative AI answers questions with likely causes and remedies
                  </td>
                </tr>
                <tr>
                  <th scope="row">Process settings</th>
                  <td>The recipe stays as it is</td>
                  <td className="ok">A profile recommended from condition and quality data</td>
                </tr>
                <tr>
                  <th scope="row">Maintenance</th>
                  <td>By schedule, or after it breaks</td>
                  <td className="ok">Predictive, based on remaining useful life</td>
                </tr>
                <tr>
                  <th scope="row">Operation</th>
                  <td>Tuned by hand, then left alone</td>
                  <td className="ok">Data shifts watched, models retrained</td>
                </tr>
              </tbody>
            </table>
            <p className="sec-note reveal" data-d="2">
              The existing alarms stay. AI judgement is added on top to catch what they miss, and
              the change happens gradually.
            </p>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-factoryq:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-factoryq:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-factoryq"]} />
      </SiteFooter>
    </>
  );
}
