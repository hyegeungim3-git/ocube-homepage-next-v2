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

export default function SolutionDataqPage() {
  return (
    <>
      <title>
        QData · Industrial Data Platform — OCUBE
      </title>
      <meta name="description" content="QData — a platform that collects, standardises and unifies mixed industrial and OT data into something industrial AI can trust." />
      <link rel="canonical" href={withBase("en/solution-dataq.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-dataq.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-dataq.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-dataq.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="QData · Industrial Data Platform — OCUBE" />
      <meta property="og:description" content="QData — a platform that collects, standardises and unifies mixed industrial and OT data into something industrial AI can trust." />
      <meta property="og:url" content={withBase("en/solution-dataq.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QData · Industrial Data Platform — OCUBE" />
      <meta name="twitter:description" content="QData — a platform that collects, standardises and unifies mixed industrial and OT data into something industrial AI can trust." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"QData\",\"item\":\"@@BASE@@en/solution-dataq.html\"}]}") }} />
      <SiteHeader slug="solution-dataq" lang="en" />
      <MobilePanel lang="en" />
      <main>
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div className="hero-bg" style={{backgroundImage: "url('../assets/video/platform_brain_cube.jpg')"}} aria-hidden="true"></div>
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
            <SolCopy intro={solutionIntros["solution-dataq"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img src="../assets/img/proto/dataq-source.jpg" alt="QData 데이터 소스 연계 화면 — 프로토타입 예시" loading="lazy" width="1440" height="1298" />
                {" "}
              </figure>
              <div className="wrap">
                <div className="ktsum reveal" data-d="4">
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {" "}
                        <circle cx="12" cy="18" r="5.5" stroke="#0075de" strokeWidth="2.4"></circle>
                        {" "}
                        <circle cx="12" cy="46" r="5.5" stroke="#0075de" strokeWidth="2.4"></circle>
                        {" "}
                        <rect x="26" y="24" width="16" height="16" rx="3.5" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></rect>
                        {" "}
                        <ellipse cx="55" cy="32" rx="6" ry="8.5" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></ellipse>
                        {" "}
                        <path d="M17.5 19.5C22 22 22 28 26 30M17.5 44.5C22 42 22 36 26 34M42 32h7" stroke="#0075de" strokeWidth="2.2" strokeLinecap="round"></path>
                        {" "}
                      </svg>
                    </span>
                    {" "}
                    <h2>
                      Pipeline
                    </h2>
                    <span className="sub">
                      One flow, from collection to use
                    </span>
                    {" "}
                    <p>
                      From controllers and instruments to operating systems, via{" "}
                      <b>
                        standard connectors
                      </b>
                      — and if the link drops, data is held at the edge.
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {" "}
                        <rect x="7" y="12" width="24" height="30" rx="3.5" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></rect>
                        {" "}
                        <path d="M13 21h12M13 28h12M13 35h7" stroke="#0075de" strokeWidth="2" strokeLinecap="round"></path>
                        {" "}
                        <rect x="37" y="12" width="20" height="15" rx="3" stroke="#0075de" strokeWidth="2.4"></rect>
                        {" "}
                        <path d="M40 24l5-5 4 4 3-3 4 4" stroke="#0075de" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                        <path d="M40 40v6M45 36v14M50 39v8M55 42v3" stroke="#0075de" strokeWidth="2.4" strokeLinecap="round"></path>
                        {" "}
                      </svg>
                    </span>
                    {" "}
                    <h2>
                      Unstructured data
                    </h2>
                    <span className="sub">
                      Documents, images, even speech
                    </span>
                    {" "}
                    <p>
                      Documents that mix tables and drawings are broken into units of meaning, and text and speech recognition turn them{" "}
                      <b>
                        into data you can search and train on.
                      </b>
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {" "}
                        <circle cx="32" cy="14" r="6" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></circle>
                        {" "}
                        <circle cx="13" cy="46" r="6" stroke="#0075de" strokeWidth="2.4"></circle>
                        {" "}
                        <circle cx="32" cy="38" r="6" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></circle>
                        {" "}
                        <circle cx="51" cy="46" r="6" stroke="#0075de" strokeWidth="2.4"></circle>
                        {" "}
                        <path d="M32 20v12M27.5 42.5 18 43.5M36.5 42.5 46 43.5" stroke="#0075de" strokeWidth="2.2" strokeLinecap="round"></path>
                        {" "}
                      </svg>
                    </span>
                    {" "}
                    <h2>
                      Meaning, not just matching
                    </h2>
                    <span className="sub">
                      Beyond search, to inference
                    </span>
                    {" "}
                    <p>
                      <b>
                        A shared data format and vocabulary
                      </b>
                      brings differing names and units into line, and supports search by relationship as well as by meaning.
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        {" "}
                        <path d="M32 9a23 23 0 1 1-16.3 6.8" stroke="#0075de" strokeWidth="2.4" strokeLinecap="round"></path>
                        {" "}
                        <path d="M13 10v8h8" stroke="#0075de" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                        <rect x="24" y="26" width="16" height="13" rx="3" stroke="#0075de" strokeWidth="2.4" fill="rgba(0,117,222,.10)"></rect>
                        {" "}
                        <path d="M28 33.5l3 3 5-6" stroke="#0075de" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                        {" "}
                      </svg>
                    </span>
                    {" "}
                    <h2>
                      Running data and models
                    </h2>
                    <span className="sub">
                      Quality and accuracy together
                    </span>
                    {" "}
                    <p>
                      <b>
                        Data quality and change are watched
                      </b>
                      , and on drift the model is retrained and redeployed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-dataq"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-dataq:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img className="shot" src="../assets/img/overview-qdata.png" alt="QData가 ERP·MES·데이터베이스·센서·문서·이미지 데이터를 AI 활용 데이터로 연결하는 과정" loading="lazy" width="1448" height="1086" />
                {" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-dataq:overview"]} />
              </div>
            </div>
          </div>
        </section>
        <section id="arch" className="sec-anchor deploy">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">
                Architecture
              </span>
              {" "}
              <h2>
                How the data becomes usable by AI
              </h2>
              <p className="lead">
                Scattered sources are connected, refined through six steps, shaped for their purpose, and carried on into services.
              </p>
            </div>
            <div className="qarch rv" data-d="1">
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">
                    01
                  </span>
                  <b>
                    Data Sources
                  </b>
                </div>
                {" "}
                <span className="qa-sub">
                  What your organisation already has
                </span>
                {" "}
                <div className="qa-item">
                  <b>
                    Structured data
                  </b>
                  <span>
                    ERP · MES · DB · CSV · API
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Unstructured data
                  </b>
                  <span>
                    PDF · DOCX · PPT · email
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Industrial data
                  </b>
                  <span>
                    PLC · sensors · time-series · video
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Knowledge
                  </b>
                  <span>
                    Manuals · reports · standards · history
                  </span>
                </div>
              </div>
              <div className="qa-stage core">
                <div className="qa-hd">
                  <span className="qa-no">
                    02
                  </span>
                  <b>
                    QData Core Pipeline
                  </b>
                </div>
                {" "}
                <span className="qa-sub">
                  Six steps that make industrial data usable by AI
                </span>
                {" "}
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      1
                    </i>
                    Connect
                  </b>
                  <span>
                    Many sources joined and collected
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      2
                    </i>
                    Parse
                  </b>
                  <span>
                    Formats read and turned into structure
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      3
                    </i>
                    Clean
                  </b>
                  <span>
                    Duplicates removed, errors corrected, gaps handled
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      4
                    </i>
                    Standardise
                  </b>
                  <span>
                    One schema, one set of units
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      5
                    </i>
                    Contextualise
                  </b>
                  <span>
                    Domain and business context, and the relationships between things
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>
                      6
                    </i>
                    Ready · AI-Ready
                  </b>
                  <span>
                    Data with quality, consistency and context
                  </span>
                </div>
                <p className="qa-note">
                  Data with quality, consistency and context → ready for AI
                </p>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">
                    03
                  </span>
                  <b>
                    AI Data Engine
                  </b>
                </div>
                {" "}
                <span className="qa-sub">
                  One foundation, shaped differently for each purpose
                </span>
                {" "}
                <div className="qa-item">
                  <b>
                    RAG Ready
                  </b>
                  <span>
                    For retrieval and grounding
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    CAG Ready
                  </b>
                  <span>
                    Context tuned for repeated reference
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    TAG Ready
                  </b>
                  <span>
                    Structured for exploring and aggregating
                  </span>
                </div>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">
                    04
                  </span>
                  <b>
                    AI-Ready Data Outputs
                  </b>
                </div>
                {" "}
                <span className="qa-sub">
                  Outputs you can use as they are
                </span>
                {" "}
                <div className="qa-item">
                  <b>
                    Knowledge Data
                  </b>
                  <span>
                    Chunks · embeddings · metadata · sources
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Context Data
                  </b>
                  <span>
                    Domain context · policies · manuals · rules
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Structured AI Data
                  </b>
                  <span>
                    Table datasets · semantic schema · features
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Training Data
                  </b>
                  <span>
                    Instructions · Q&A · fine-tuning datasets
                  </span>
                </div>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">
                    05
                  </span>
                  <b>
                    AI Applications
                  </b>
                </div>
                {" "}
                <span className="qa-sub">
                  Search, recommendation, training and operation, all connected
                </span>
                {" "}
                <div className="qa-item">
                  <b>
                    LLM · sLLM
                  </b>
                  <span>
                    Commercial APIs and on-premises small models
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    AI agents
                  </b>
                  <span>
                    Answers with evidence, carried through to action
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Predictive models
                  </b>
                  <span>
                    Anomaly detection, demand and quality forecasting
                  </span>
                </div>
                <div className="qa-item">
                  <b>
                    Cubeon
                  </b>
                  <span>
                    Judgement, turned into approval and action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">
                Features
              </span>
              {" "}
              <h2>
                What turns data into an asset
              </h2>
              <p className="lead">
                Every step from collected data to findable knowledge, managed in one place.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Pipeline
                </span>
                {" "}
                <h3>
                  Following the work
                </h3>
                <p>
                  For each document, see how far it has got — from analysis through to appearing in search.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Stage by stage
                    </b>
                    {" "}Analysis, splitting and embedding shown per document
                  </li>
                  <li>
                    <b>
                      Change detection
                    </b>
                    {" "}New, updated and deleted items picked up automatically
                  </li>
                  <li>
                    <b>
                      Personal data flagged
                    </b>
                    {" "}Documents holding sensitive information marked separately
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/dataq-f01.jpg" alt="데이터 처리 현황 화면" loading="lazy" width="1440" height="1090" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Chunking
                </span>
                {" "}
                <h3>
                  Getting the search unit right
                </h3>
                <p>
                  How a document is split changes what search returns. The result is checked against measures, and search quality improves.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Quality measures
                    </b>
                    {" "}Length, special characters, duplication and whether each piece stands on its own
                  </li>
                  <li>
                    <b>
                      Per-document check
                    </b>
                    {" "}Documents past the threshold marked as caution or warning
                  </li>
                  <li>
                    <b>
                      Splitting rules
                    </b>
                    {" "}Size, overlap and method, set once for everything
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/dataq-f02.jpg" alt="청크 품질 관리 화면" loading="lazy" width="1440" height="1042" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Embedding
                </span>
                {" "}
                <h3>
                  Checking vector quality
                </h3>
                <p>
                  Text becomes vectors the AI can find, and throughput, latency and index health are watched from then on.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      By model
                    </b>
                    {" "}Dimensions, throughput and latency compared
                  </li>
                  <li>
                    <b>
                      Index health
                    </b>
                    {" "}Collections, disk use and index type
                  </li>
                  <li>
                    <b>
                      Re-ranking review
                    </b>
                    {" "}Candidates for better search quality, compared
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/dataq-f03.jpg" alt="임베딩 품질 관리 화면" loading="lazy" width="1440" height="1370" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Recovery
                </span>
                {" "}
                <h3>
                  Reprocessing what failed
                </h3>
                <p>
                  Documents stalled by encryption or size are found and run again, automatically or by hand.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Where it stopped
                    </b>
                    {" "}Recorded — whether it failed at analysis, splitting or embedding
                  </li>
                  <li>
                    <b>
                      Automatic retry
                    </b>
                    {" "}A queue managed by retry count and priority
                  </li>
                  <li>
                    <b>
                      Handing it to a person
                    </b>
                    {" "}What cannot recover on its own is passed to someone
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/dataq-f04.jpg" alt="재처리 큐 화면" loading="lazy" width="1440" height="822" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Governance
                </span>
                {" "}
                <h3>
                  Access by permission
                </h3>
                <p>
                  A user’s permissions decide which documents the AI may draw on, and personal data is masked.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Folder-level permission
                    </b>
                    {" "}Open to all, to a department, or to a named few
                  </li>
                  <li>
                    <b>
                      Masking personal data
                    </b>
                    {" "}Documents holding sensitive fields are flagged and covered
                  </li>
                  <li>
                    <b>
                      What has landed
                    </b>
                    {" "}Chunk count and processing state per document
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/dataq-f05.jpg" alt="지식 폴더·권한 관리 화면" loading="lazy" width="1440" height="900" />
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section id="standards" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">
                Standards & Governance
              </span>
              {" "}
              <h2>
                Built on the standards the industry already uses
              </h2>
              <p className="sec-sub">
                Designed with reference to industrial interoperability standards and established data management practice.
              </p>
            </div>
            <div className="reveal" data-d="1" style={{marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "9px"}}>
              {" "}
              <span className="pill light">
                OPC-UA
              </span>
              {" "}
              <span className="pill light">
                ISA-95
              </span>
              {" "}
              <span className="pill light">
                MQTT · Sparkplug B
              </span>
              {" "}
              <span className="pill light">
                Modbus
              </span>
              {" "}
              <span className="pill light">
                Data catalogue
              </span>
              {" "}
              <span className="pill light">
                Change history
              </span>
              {" "}
            </div>
            <div className="feat-list reveal" data-d="2" style={{marginTop: "22px"}}>
              {" "}
              <FeatItems items={featLists["solution-dataq:standards"]} />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-dataq:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{marginTop: "24px"}}>
              {" "}
              <DepCards items={depCards["solution-dataq:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-dataq"]} />
      </SiteFooter>
    </>
  );
}
