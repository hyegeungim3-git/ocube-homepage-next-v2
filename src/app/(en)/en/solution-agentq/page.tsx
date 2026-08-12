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

export default function SolutionAgentqPage() {
  return (
    <>
      <title>
        AgentQ · Multi-Agent AI Platform — OCUBE
      </title>
      <meta name="description" content="AgentQ — an enterprise multi-agent platform where specialist AI agents handle documents, speech and databases, pass results between them, and finish with documents and proposals a person can review." />
      <link rel="canonical" href={withBase("en/solution-agentq.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-agentq.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-agentq.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-agentq.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="AgentQ · Multi-Agent AI Platform — OCUBE" />
      <meta property="og:description" content="AgentQ — an enterprise multi-agent platform where specialist AI agents handle documents, speech and databases, pass results between them, and finish with documents and proposals a person can review." />
      <meta property="og:url" content={withBase("en/solution-agentq.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AgentQ · Multi-Agent AI Platform — OCUBE" />
      <meta name="twitter:description" content="AgentQ — an enterprise multi-agent platform where specialist AI agents handle documents, speech and databases, pass results between them, and finish with documents and proposals a person can review." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AgentQ\",\"item\":\"@@BASE@@en/solution-agentq.html\"}]}") }} />
      <SiteHeader slug="solution-agentq" lang="en" />
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
            <SolCopy intro={solutionIntros["solution-agentq"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                <video className="demovid" src="../assets/media/demo/stage/agentq.mp4" poster="../assets/media/demo/stage/agentq.jpg" muted loop playsInline preload="metadata" width="1600" height="900" aria-label="AgentQ 보고서 작성·승인 흐름 시연 영상 — 프로토타입 예시"></video>
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-agentq"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-agentq:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img className="shot" src="../assets/img/overview-qagent.png" alt="AgentQ가 문서·데이터베이스·업무 시스템을 연결해 지식검색·문서이해·데이터분석·보고 업무를 처리하는 구조" loading="lazy" width="1536" height="1024" />
                {" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-agentq:overview"]} />
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
                The right specialist for each piece of work
              </h2>
              <p className="lead">
                Knowledge search, drafting, transcription, policy review, data queries and secure chat — on one platform.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  RAG Knowledge Search
                </span>
                {" "}
                <h3>
                  Knowledge search with evidence
                </h3>
                <p>
                  Search internal documents and policies in plain language, and see the evidence and sources behind the answer.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Search by meaning
                    </b>
                    {" "}Finds documents and clauses that mean the same thing, however they are worded
                  </li>
                  <li>
                    <b>
                      Evidence shown
                    </b>
                    {" "}The answer comes with where it came from and what else is relevant
                  </li>
                  <li>
                    <b>
                      Scope respected
                    </b>
                    {" "}Only material within your remit and clearance is searched
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f01-knowledge.png" alt="AgentQ 지식 검색 에이전트에서 검색 방식과 문서 범위를 선택하는 화면" loading="lazy" width="1280" height="720" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Standard Report
                </span>
                {" "}
                <h3>
                  Reports in your own format
                </h3>
                <p>
                  Give it the essentials and it drafts the report in your organisation’s format, ready to review.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Choosing the format
                    </b>
                    {" "}Standard templates for weekly results, research notes, market summaries and more
                  </li>
                  <li>
                    <b>
                      Filled in automatically
                    </b>
                    {" "}Results, dates and plans placed under the right headings
                  </li>
                  <li>
                    <b>
                      Reviewing the draft
                    </b>
                    {" "}Check it, edit it, then use it as the official document
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f02-report.png" alt="AgentQ 보고서 작성 에이전트에서 보고서 유형과 기본 정보를 입력하는 화면" loading="lazy" width="1280" height="720" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Meeting Intelligence
                </span>
                {" "}
                <h3>
                  Minutes from the recording
                </h3>
                <p>
                  Upload the recording and the handouts; it separates who said what and writes up the discussion and the follow-up.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Speech recognition
                    </b>
                    {" "}Transcription with speaker separation turns each contribution into text
                  </li>
                  <li>
                    <b>
                      Summary
                    </b>
                    {" "}Agenda, decisions, owners and dates, sorted out
                  </li>
                  <li>
                    <b>
                      Finished minutes
                    </b>
                    {" "}Written into your standard minutes template, with the attachments taken into account
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f03-meeting.png" alt="AgentQ 회의록 작성 에이전트에서 음성과 회의 자료를 등록하는 화면" loading="lazy" width="1280" height="720" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Document Review
                </span>
                {" "}
                <h3>
                  Checking documents against your rules
                </h3>
                <p>
                  Drafts and reports are compared against internal rules and guidance, flagging possible breaches and what to shore up.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Preparing the document
                    </b>
                    {" "}PDF, DOCX, HWP and scans converted into something readable
                  </li>
                  <li>
                    <b>
                      Compared with the rules
                    </b>
                    {" "}Relevant clauses found in the chosen rules and guidance, and compared
                  </li>
                  <li>
                    <b>
                      Findings sorted
                    </b>
                    {" "}Possible breaches and gaps, ordered by severity and by the evidence for each
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f04-review.png" alt="AgentQ 문서 사전 검토 에이전트에서 문서와 검토 규정을 선택하는 화면" loading="lazy" width="1280" height="720" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Text2SQL Analytics
                </span>
                {" "}
                <h3>
                  Querying data in plain language
                </h3>
                <p>
                  No SQL needed — ask the question and it fetches the data and shows it as tables and charts.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Reading the question
                    </b>
                    {" "}What to look at and under what conditions, worked out and turned into SQL
                  </li>
                  <li>
                    <b>
                      Within your permissions
                    </b>
                    {" "}Only the databases and fields you are allowed to see
                  </li>
                  <li>
                    <b>
                      Results made visible
                    </b>
                    {" "}The result and the conditions behind it, as a table, a chart and a short explanation
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f05-db.png" alt="AgentQ 데이터베이스 검색 에이전트에서 자연어로 데이터를 조회하는 화면" loading="lazy" width="1280" height="720" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Secure LLM Chat
                </span>
                {" "}
                <h3>
                  Secure chat on a local model
                </h3>
                <p>
                  Sensitive questions and documents never leave the building — everything runs on a local model inside your network.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      Nothing kept
                    </b>
                    {" "}Each session stands alone; questions and answers are not stored on the server
                  </li>
                  <li>
                    <b>
                      No outbound connection
                    </b>
                    {" "}All reasoning and document handling happens on the internal model
                  </li>
                  <li>
                    <b>
                      Never used for training
                    </b>
                    {" "}What you type and what it reads are never used as training data
                  </li>
                </ul>
                {" "}
                <a className="duo-cta" href="#pipeline">
                  The flow in detail{" "}
                  <i aria-hidden="true">
                    →
                  </i>
                </a>
                {" "}
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="../assets/img/proto/agentq-f06-security.png" alt="AgentQ 보안 채팅에서 대화 무저장과 로컬 LLM 처리 상태를 확인하는 화면" loading="lazy" width="2560" height="1339" />
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section id="pipeline" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">
                Runtime Pipeline
              </span>
              {" "}
              <h2>
                How raw material becomes something you can review
              </h2>
              <p className="sec-sub">
                Documents and data are put in order first; then evidence, reasoning and checking; then the document, the approval and the handover.
              </p>
            </div>
            <div className="tl reveal" data-d="1">
              <div className="tl-card">
                <div className="yr">
                  STEP 1
                </div>
                <h3>
                  Intake
                </h3>
                <p>
                  Text, speech, documents, spreadsheets and data queries, all accepted
                </p>
              </div>
              <div className="tl-card">
                <div className="yr">
                  STEP 2
                </div>
                <h3>
                  DRM and OCR preparation
                </h3>
                <p>
                  Protected files unlocked and scans read, leaving something searchable
                </p>
              </div>
              <div className="tl-card">
                <div className="yr">
                  STEP 3
                </div>
                <h3>
                  Retrieval
                </h3>
                <p>
                  Evidence and sources found across documents, rules and the vector database you are permitted to see
                </p>
              </div>
              <div className="tl-card">
                <div className="yr">
                  STEP 4
                </div>
                <h3>
                  Reasoning on the in-house model
                </h3>
                <p>
                  The internal model summarises and analyses for the task, then hands on to the next agent
                </p>
              </div>
              <div className="tl-card">
                <div className="yr">
                  STEP 5
                </div>
                <h3>
                  Checking and security
                </h3>
                <p>
                  Whether the evidence matches, how confident it is, personal data and classification — checked, with fixes requested
                </p>
              </div>
              <div className="tl-card cur">
                <div className="yr">
                  STEP 6
                </div>
                <h3>
                  Document, approval, handover
                </h3>
                <p>
                  The official document and the analysis are produced, reviewed, approved and sent on to the business system
                </p>
              </div>
            </div>
            <div className="feat-list reveal" data-d="2" style={{marginTop: "22px"}}>
              {" "}
              <FeatItems items={featLists["solution-agentq:pipeline"]} />
            </div>
            <p className="sec-note reveal" data-d="1" style={{marginTop: "26px"}}>
              <b>
                A method to match the material
              </b>
              {" "}Unstructured documents, structured data and multi-step work each go to the tool and agent that suit them.
            </p>
            <div className="dep-grid reveal" data-d="2" style={{marginTop: "14px"}}>
              {" "}
              <DepCards items={depCards["solution-agentq:pipeline"]} />
            </div>
          </div>
        </section>
        <section id="proof" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-agentq:proof"]} />
            <div className="case-grid two">
              <article className="case-card reveal" data-d="1">
                <span className="dom">
                  Document review · Appeals
                </span>
                {" "}
                <h3>
                  Processing a batch of appeal documents
                </h3>
                <p className="csi">
                  <b>
                    Input
                  </b>
                  {" "}Scanned documents and attachments taken in together
                </p>
                <p className="csi">
                  <b>
                    Chain
                  </b>
                  {" "}OCR → address normalisation → database lookup → relevant rules
                </p>
                <p className="csi">
                  <b>
                    Output
                  </b>
                  {" "}A draft review report with the evidence and the points to check
                </p>
              </article>
              <article className="case-card reveal" data-d="2">
                <span className="dom">
                  Data validation · Rule review
                </span>
                {" "}
                <h3>
                  An unusual-transaction review
                </h3>
                <p className="csi">
                  <b>
                    Input
                  </b>
                  {" "}The transaction conditions and the data to examine are specified
                </p>
                <p className="csi">
                  <b>
                    Chain
                  </b>
                  {" "}Database lookup → analysis → internal rules and legislation → report
                </p>
                <p className="csi">
                  <b>
                    Output
                  </b>
                  {" "}A review document setting out the warning signs, the reasoning and what to check next
                </p>
              </article>
            </div>
            <figure className="shot-fig reveal" data-d="3">
              {" "}
              <img className="shot fit" src="../assets/img/proto/agentq-chat.jpg" alt="AgentQ 업무 포털 — 근거 출처와 보안 등급을 확인하며 문서·데이터 업무를 처리하는 화면" loading="lazy" width="1600" height="1005" />
              {" "}
            </figure>
          </div>
        </section>
        <section id="scenarios" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-agentq:scenarios"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{marginTop: "24px"}}>
              {" "}
              <DepCards items={depCards["solution-agentq:scenarios"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["solution-agentq"]} />
      </SiteFooter>
    </>
  );
}
