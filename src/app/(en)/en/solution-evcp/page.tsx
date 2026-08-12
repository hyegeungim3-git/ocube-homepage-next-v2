import { applyBase, withBase } from "@/config/site";
import { evcpStats } from "@/data/applications.en";
import { StatItems } from "@/components/section/stat-items";
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

export default function SolutionEvcpPage() {
  return (
    <>
      <title>
        EVCP · AI EV Charging Operations Platform — OCUBE
      </title>
      <meta name="description" content="EVCP — a platform that connects charger, usage, payment and energy data, and uses AI to predict faults and demand so charging operations run better." />
      <link rel="canonical" href={withBase("en/solution-evcp.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-evcp.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-evcp.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-evcp.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="EVCP · AI EV Charging Operations Platform — OCUBE" />
      <meta property="og:description" content="EVCP — a platform that connects charger, usage, payment and energy data, and uses AI to predict faults and demand so charging operations run better." />
      <meta property="og:url" content={withBase("en/solution-evcp.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EVCP · AI EV Charging Operations Platform — OCUBE" />
      <meta name="twitter:description" content="EVCP — a platform that connects charger, usage, payment and energy data, and uses AI to predict faults and demand so charging operations run better." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"EVCP\",\"item\":\"@@BASE@@en/solution-evcp.html\"}]}") }} />
      <SiteHeader slug="solution-evcp" lang="en" />
      <MobilePanel lang="en" />
      <main>
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div className="hero-bg" style={{backgroundImage: "url('../assets/video/sec_autonomous.jpg')"}} aria-hidden="true"></div>
            <div className="hero-veil" aria-hidden="true"></div>
            <div className="hero-scroll" aria-hidden="true">
              <div className="wrap">
                <i></i>
                <span>
                  SCROLL
                </span>
              </div>
            </div>
          </section>
          <section className="sol-intro">
            <SolCopy intro={solutionIntros["solution-evcp"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img src="../assets/img/evcp.png" alt="EVCP 화면 — 프로토타입 예시" loading="lazy" width="1746" height="748" />
                {" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-evcp"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-evcp:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img className="shot" src="../assets/img/overview-evcp.png" alt="EVCP가 전기차 충전기의 실시간 관제와 사용자·결제·정산·분석·안전 관리를 연결하는 모습" loading="lazy" width="1565" height="1005" />
                {" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-evcp:overview"]} />
              </div>
            </div>
          </div>
        </section>
        {/* Features — 운영 화면 */}
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">
                AI Operations Console
              </span>
              {" "}
              <h2>
                Operations and AI analysis on one screen
              </h2>
              <p className="lead">
                Site and charger status is read together with usage data, giving what you need to respond to faults and run the network better.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Monitoring
                </span>
                {" "}
                <h3>
                  Site monitoring
                </h3>
                <p>
                  See every site and charger on the map, and open the detail and usage history straight away.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      By operator and region
                    </b>
                    {" "}Pick the site from a list by operator or region
                  </li>
                  <li>
                    <b>
                      Status and history per charger
                    </b>
                    {" "}Charger status and recent usage in one view
                  </li>
                  <li>
                    <b>
                      Straight from the map
                    </b>
                    {" "}Choose the site on the map itself
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/evcp.png" alt="EVCP 충전소 관제 화면 — 지도 기반 운영 충전소·충전기 상태" loading="lazy" width="1746" height="748" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Dashboard
                </span>
                {" "}
                <h3>
                  Operations dashboard
                </h3>
                <p>
                  Arrange the charts you want, and watch charger status, revenue and energy delivered as it happens.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Monthly revenue
                    </b>
                    {" "}Revenue trend by period
                  </li>
                  <li>
                    <b>
                      Energy delivered
                    </b>
                    {" "}Monthly totals show the scale of the operation
                  </li>
                  <li>
                    <b>
                      Chargers in service
                    </b>
                    {" "}By region — available, charging, offline and faulty
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/evcp-dash.jpg" alt="EVCP 다이나믹 대시보드 — 월별 매출·충전량·가동 충전기 수 차트" loading="lazy" width="1400" height="298" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  AI Insight
                </span>
                {" "}
                <h3>
                  Predicting faults, demand and energy
                </h3>
                <p>
                  Charging state, error history, usage patterns and energy consumption are read by AI to suggest what the operator should look at first.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Early warning
                    </b>
                    {" "}Repeated errors and shifting status put the most likely failures at the top of the list
                  </li>
                  <li>
                    <b>
                      Demand forecast
                    </b>
                    {" "}Patterns by hour, day and area show expected demand and where it will be busy
                  </li>
                  <li>
                    <b>
                      Energy recommendations
                    </b>
                    {" "}Consumption and tariffs taken together to spread load and adjust operating hours
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/overview-evcp.png" alt="충전기 상태와 이용 통계를 분석해 이상 징후·수요·에너지 운영을 지원하는 EVCP 구성" loading="lazy" width="1565" height="1005" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Event
                </span>
                {" "}
                <h3>
                  Live event monitoring
                </h3>
                <p>
                  Charger events are collected live, shown in a list and on the map, and timed to the moment the state changed.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Events as they happen
                    </b>
                    {" "}Start, idle, disconnect and the rest, recorded in the order they occurred
                  </li>
                  <li>
                    <b>
                      Where it happened
                    </b>
                    {" "}The site is shown on the map at the same time
                  </li>
                  <li>
                    <b>
                      Change history
                    </b>
                    {" "}Charger ID, site name and the time of the change
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/evcp-event.jpg" alt="EVCP 실시간 이벤트 관제 — 충전기 상태 이벤트 목록과 지도 표시" loading="lazy" width="1400" height="446" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Search
                </span>
                {" "}
                <h3>
                  Finding a site on the map
                </h3>
                <p>
                  Roaming partner sites and their chargers can be searched on the map. The driver app and the admin app share the same map module.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Site and charger detail
                    </b>
                    {" "}Detail for each site and charger, from the map
                  </li>
                  <li>
                    <b>
                      Search by address
                    </b>
                    {" "}Find a site by typing the address
                  </li>
                  <li>
                    <b>
                      Filter by operator and type
                    </b>
                    {" "}Filter by operator and by charger type — slow, fast and ultra-fast
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/evcp-search.jpg" alt="EVCP 지도 기반 충전소 검색 — 충전소·충전기 상세 정보와 주소 검색" loading="lazy" width="1200" height="348" />
                {" "}
              </div>
            </div>
          </div>
        </section>
        {/* 서비스 구조 */}
        <section id="msa" className="sec-anchor deploy">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">
                Service Architecture
              </span>
              {" "}
              <h2>
                Separate services, so a fault stays small and growth stays easy
              </h2>
              <p className="lead">
                Membership, charger integration (OCPP), payment and roaming each stand alone — limiting the blast radius of a fault and making it simple to add what you need.
              </p>
            </div>
            <div className="dep-grid reveal" data-d="1">
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  👤
                </div>
                <h3>
                  Membership
                </h3>
                <p>
                  Sign-up, authentication, tariffs and usage history as their own service
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  🔌
                </div>
                <h3>
                  Charger integration (OCPP)
                </h3>
                <p>
                  OCPP version and compatibility checked per charger before it joins the gateway
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  💳
                </div>
                <h3>
                  Payment
                </h3>
                <p>
                  Charging billed and settled per session, with payment gateway integration
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  🔗
                </div>
                <h3>
                  Roaming
                </h3>
                <p>
                  Roaming between operators widens where drivers can charge
                </p>
              </div>
            </div>
            <figure className="shot-fig reveal" data-d="2" style={{marginTop: "clamp(26px,3vw,42px)"}}>
              {" "}
              <img className="shot fit" src="../assets/img/evcp-msa.jpg" alt="EVCP 서비스 구조도 — 클라이언트(WEB·WAS)와 퍼블릭 클라우드의 회원·충전기연동(OCPP)·App·결제·로밍 서비스" loading="lazy" width="1000" height="862" />
              {" "}
            </figure>
          </div>
        </section>
        <section id="proof" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">
                Reference
              </span>
              {" "}
              <h2>
                Built for a client, kept as a product
              </h2>
            </div>
            <div className="hero-stats reveal">
              <StatItems items={evcpStats} />
            </div>
            <div className="case-grid two">
              <article className="case-card reveal" data-d="1">
                <span className="dom">
                  Energy · SK Energy
                </span>
                {" "}
                <h3>
                  EV charging platform
                </h3>
                <p className="csi">
                  <b>
                    The problem
                  </b>
                  {" "}Entering the charging business with no platform for membership, integration, payment or monitoring
                </p>
                <p className="csi">
                  <b>
                    What we did
                  </b>
                  {" "}Built and ran microservices on OCPP — and kept the result as EVCP, our own product
                </p>
                <p className="csi">
                  <b>
                    The result
                  </b>
                  {" "}Everything a charging business needs, held as a platform we can reuse
                </p>
              </article>
              <article className="case-card reveal" data-d="2">
                <span className="dom">
                  Our own module
                </span>
                {" "}
                <h3>
                  OCPP LTE module
                </h3>
                <p className="csi">
                  A Mini PCI LTE Cat M1 module developed in-house (2025) — we build the charging communication hardware too
                </p>
              </article>
            </div>
            <div className="rv" style={{marginTop: "36px", textAlign: "center"}}>
              <a href="references.html" className="btn btn-ghost">
                See all build cases{" "}
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-evcp:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{marginTop: "24px"}}>
              {" "}
              <DepCards items={depCards["solution-evcp:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-evcp"]} />
      </SiteFooter>
    </>
  );
}
