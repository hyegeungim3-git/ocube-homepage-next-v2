import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { subnavItems } from "@/data/subnav.en";
import { Subnav } from "@/components/section/subnav";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { solutionIntros } from "@/data/solution-intro.en";
import { SolCopy } from "@/components/section/sol-copy";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { FeatItems } from "@/components/section/feat-list";
import { featLists } from "@/data/features.en";

export default function SolutionCubeonPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="solution-cubeon.html"
        title="Cubeon · Industrial AI Operations Platform — OCUBE"
        description="Cubeon — an industrial AI operations platform that standardises industrial data and carries AI judgement through to human approval and, within a proven scope, limited automatic execution."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Cubeon","item":"@@BASE@@en/solution-cubeon.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="solution-cubeon"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-cubeon"]} />
          </>
        }
      >
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('../assets/video/platform_brain_cube.jpg')" }}
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
            <SolCopy intro={solutionIntros["solution-cubeon"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-main.jpg"
                  alt="Cubeon 메인 — 통합 플랫폼 플로우와 코어 모듈 상태, 거버넌스 현황"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-cubeon"]} />
        <section id="overview" className="sec-anchor platform dark" style={{ paddingTop: "64px" }}>
          <div className="wrap">
            <SecHead copy={secHeads["solution-cubeon:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src="../assets/img/proto/cubeon-overview.jpg"
                  alt="Cubeon 기업 AI 지식·Agent 통합 플랫폼 구성 — 기업 데이터 연결부터 지식화·AI Agent·모델 운영·업무 자동화·보안 권한까지"
                  loading="lazy"
                  width="1600"
                  height="1200"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-cubeon:overview"]} />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>Six core modules, from data through to action</h2>
              <p className="lead">
                Knowledge and AI services run on one common data foundation, and act safely within
                your own approval process.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Data Foundation</span> <h3>Unified data management</h3>
                <p>
                  Structured, unstructured and industrial data across the company is connected and
                  prepared in a form AI can use.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Source connections</b> Core systems, equipment, documents, APIs and sensors
                    through standard connectors
                  </li>
                  <li>
                    <b>Cleansing pipeline</b> Connect → parse → cleanse → standardise → build the
                    dataset
                  </li>
                  <li>
                    <b>Quality checks</b> Completeness, consistency, freshness and validity, watched
                    continuously
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c01.jpg"
                  alt="Cubeon 기업 데이터 통합 — 데이터 소스 현황과 정제 파이프라인, 데이터 품질 지표"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Knowledge Intelligence</span>{" "}
                <h3>Knowledge management on an ontology</h3>
                <p>
                  Meaning, relationships and context are joined into a body of knowledge that
                  belongs to your company.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Knowledge graph</b> Classes, entities and relationships explored as a graph
                  </li>
                  <li>
                    <b>Semantic model</b> Ontology schema and property mapping
                  </li>
                  <li>
                    <b>Revision history</b> Ontology versions and domain classifications
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c02.jpg"
                  alt="Cubeon 온톨로지 기반 지식화 — 지식 그래프 탐색과 시맨틱 모델, 지식 품질 지표"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">AI Agent</span> <h3>Knowledge-based AI agent service</h3>
                <p>
                  Grounded in your knowledge and data, it understands the question and carries
                  through to analysis, reasoning and the work itself.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Reasoning shown</b> Each step visible, from reading the intent to analysing
                    and summarising
                  </li>
                  <li>
                    <b>Tool use</b> Knowledge search, document lookup, database queries and report
                    generation
                  </li>
                  <li>
                    <b>Sources cited</b> The knowledge and data used, with how recent it is
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c03.jpg"
                  alt="Cubeon 지식 기반 AI Agent — 대화 워크스페이스와 작업 실행 파이프라인, 에이전트 디렉터리"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Model Hub</span> <h3>AI Model Hub</h3>
                <p>
                  From cloud LLMs to on-premises LLMs and small language models — connected and
                  operated to suit the work and the security environment.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Choosing the deployment</b> Cloud, private or on-premises, as the security
                    requirements demand
                  </li>
                  <li>
                    <b>Gateway routing</b> Models assigned per task, with latency and throughput
                    managed
                  </li>
                  <li>
                    <b>Model governance</b> Approved models, access limits and audit logs in one
                    place
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c04.jpg"
                  alt="Cubeon AI Model Hub — 모델 인벤토리와 게이트웨이 라우팅, 배포 토폴로지"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Workflow & Action</span> <h3>Automation and execution</h3>
                <p>
                  What the AI finds is carried through to lookups, documents, alerts, approvals and
                  the work itself.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Closed-loop execution</b> Search → analyse → recommend → approve → act
                  </li>
                  <li>
                    <b>Approval routing</b> An approval queue, with priority and overdue warnings
                  </li>
                  <li>
                    <b>Outputs</b> Purchase orders and reports generated automatically, with a trail
                    of what was done
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c05.jpg"
                  alt="Cubeon 업무 자동화 및 실행 — 워크플로 파이프라인과 승인 대기함, 연결 시스템 현황"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">AI Governance</span>{" "}
                <h3>Security, permissions and operations</h3>
                <p>
                  Data permissions, agent permissions, logs, and model and knowledge versions — all
                  managed together.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Three layers of permission</b> Data, agent and model permissions managed by
                    role
                  </li>
                  <li>
                    <b>Audit and monitoring</b> Logs of lookups, actions and permission changes,
                    with security events tracked
                  </li>
                  <li>
                    <b>Version control</b> Knowledge and model versions, with a record of policy
                    approvals
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="../assets/img/proto/cubeon-c06.jpg"
                  alt="Cubeon AI 보안·권한·운영관리 — 역할 기반 접근 제어와 감사 로그, 지식·모델 버전 관리"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="arch" className="pinsec">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">Architecture</span>{" "}
              <h2>Eight shared modules to combine as you need</h2>
              <p>
                What every industry needs is split into modules, so you can start with the ones that
                matter and add domain features step by step.
              </p>
              <div className="pin-progress" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="pin-right">
              <article className="pin-item reveal">
                <div className="pi-no">Connect</div>
                <h3>Connect</h3>
                <p>
                  Connects sources that have little in common — controllers (PLC), sensors,
                  manufacturing execution (MES) and enterprise resource planning (ERP).
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Edge collection and recovery</b> Data held locally when the network drops,
                    sent again once it is back
                  </li>
                  <li>
                    <b>Secure connections</b> Encryption, device authentication and role-based
                    access protect data in transit
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">Industrial protocols</span>
                  <span className="pill light">Integration APIs</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/cubeon-connect.jpg"
                  data-shot-alt="Cubeon Connect — 이기종 데이터 연결 콘솔 개념 화면(소스·프로토콜 어댑터·태그 표준 매핑)"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Fabric</div>
                <h3>Fabric</h3>
                <p>
                  Streaming and scheduled data alike, stored, cleansed and delivered without drama.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Operational visibility</b> Latency and error rates measured at every stage,
                    from collection to control, to find where it hurts
                  </li>
                  <li>
                    <b>Scaling in steps</b> The same proven structure reused, from one line to the
                    whole company
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">Streaming</span>
                  <span className="pill light">Batch</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/cubeon-fabric.jpg"
                  data-shot-alt="Cubeon Fabric — 데이터 처리 흐름 개념 화면(수집→임시 저장→정제→저장→활용)"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Semantic</div>
                <h3>Semantic</h3>
                <p>
                  A shared data format and an ontology of terms and relationships bring names and
                  meanings into line.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Consistent quality</b> One format, quality checks and gap filling leave the
                    data fit to analyse
                  </li>
                  <li>
                    <b>Search by relationship</b> Follow the links between data, documents and work
                    to find what you need
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">Industry terms and relationships (ontology)</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/dataq-knowledge.jpg"
                  data-shot-alt="의미 표준화·지식 관리 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">ModelOps</div>
                <h3>ModelOps</h3>
                <p>
                  Training, validation and deployment history are kept, accuracy is watched in
                  service, and the model is retrained when it needs to be.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Detecting change</b> Shifts in input data and predictions signal when to
                    retrain
                  </li>
                  <li>
                    <b>Audit trail</b> Every judgement and action recorded, ready for quality and
                    regulatory questions
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">Train, validate, deploy, retrain</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/cubeon-modelreg.jpg"
                  data-shot-alt="모델 레지스트리·거버넌스 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Agents</div>
                <h3>Agents</h3>
                <p>Agents that answer questions, read documents and get work done.</p>
                <ul className="pi-bul">
                  <li>
                    <b>Grounded answers</b> Answers built on the documents and data found, with the
                    sources kept
                  </li>
                  <li>
                    <b>Permission aware</b> Role-based access decides which knowledge and functions
                    each person can reach
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">Retrieval-augmented generation (RAG)</span>
                  <span className="pill light">In-house small language model (sLLM)</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/agentq-hub.jpg"
                  data-shot-alt="AI 에이전트 허브 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Orchestrator</div>
                <h3>Orchestrator</h3>
                <p>
                  Several agents, each with its role and turn, brought together to finish one piece
                  of work.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Bringing judgements together</b> What each agent concludes and recommends,
                    merged into a single flow
                  </li>
                  <li>
                    <b>Approval branching</b> Risk and reversibility decide which approval path an
                    action takes
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">AI tool and system integration</span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/cubeon-builder.jpg"
                  data-shot-alt="노코드 에이전트 빌더·서비스 조정 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Console</div>
                <h3>Console</h3>
                <p>Detection, judgement and execution, managed on one screen.</p>
                <ul className="pi-bul">
                  <li>
                    <b>One operations dashboard</b> Service health, response time, throughput,
                    errors and work in progress, all in one view
                  </li>
                  <li>
                    <b>Change and rollback</b> Changes to models, knowledge and settings are
                    recorded, and an earlier version can be restored
                  </li>
                </ul>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/cubeon-infra.jpg"
                  data-shot-alt="통합 관제·인프라 콘솔 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Copilot</div>
                <h3>Copilot</h3>
                <p>
                  Choose what answers the questions — a commercial large language model, or a small
                  one running in-house.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>Choosing how to deploy</b> A commercial AI service, an in-house build, or a
                    network cut off from the internet — whichever the rules require
                  </li>
                  <li>
                    <b>A fixed data boundary</b> Policy fixes where restricted data is processed, so
                    it never crosses the line
                  </li>
                </ul>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot="../assets/img/proto/agentq-chat.jpg"
                  data-shot-alt="업무 코파일럿·자연어 질의 프로토타입 화면"
                >
                  View screen
                </button>{" "}
              </article>
            </div>
          </div>
        </section>
        <section id="structure" className="sec-anchor platform dark">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Product Structure</span>{" "}
              <h2>Add the domain you need on top of the shared core</h2>
              <p className="sec-sub">
                The foundation for data, AI and execution is reused as it is; you pick the domain
                pack and copilot that match the problem you have.
              </p>
            </div>
            <div className="prod-row reveal" data-d="1">
              <article className="prod-card">
                <h3>Horizontal Core</h3> <span className="sub">Shared operating base</span>{" "}
                <p>
                  Eight modules from Connect to Console combine into one standard for connecting
                  data, running AI, and approving and executing work.
                </p>
              </article>
              <article className="prod-card">
                <h3>Manufacturing Pack</h3> <span className="sub">Manufacturing pack</span>{" "}
                <p>
                  Anomaly detection, predictive maintenance, quality forecasting and process and
                  energy optimisation, applied to the problem at hand.
                </p>
              </article>
              <article className="prod-card">
                <h3>Safety Pack</h3> <span className="sub">Safety pack</span>{" "}
                <p>
                  Video, sensors and operational events read together to spot danger, with the
                  evidence and what to deal with first.
                </p>
              </article>
              <article className="prod-card">
                <h3>Copilot</h3> <span className="sub">Knowledge service</span>{" "}
                <p>
                  Answers grounded in your own documents and data, with the analysis explained and
                  the follow-up work supported.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="operation" className="sec-anchor">
          <div className="wrap">
            <div className="cubeon-hero reveal">
              <div>
                {" "}
                <span className="kicker">Operating Levels</span>{" "}
                <h2>
                  Start where it is proven <span>and automate step by step</span>
                </h2>
                <p>
                  Nothing is automated all at once. It begins with detection and alerts, moves to
                  human approval, and only then to limited automatic execution.
                </p>
              </div>
              <div className="ladder" aria-label="Cubeon 운영 자동화 단계">
                <div className="rung">
                  <b>Level 1 · Detect</b>
                  <span>Collect data, read the state, detect anomalies, raise the alert</span>
                </div>
                <div className="rung l2">
                  <b>Level 2 · Decide</b>
                  <span>Analyse the cause, recommend the action, have it checked and approved</span>
                </div>
                <div className="rung l3">
                  <b>Level 3 · Act</b>
                  <span>
                    Run automatically within the approved scope, verify the result, keep improving
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal" data-d="1" style={{ marginTop: "72px" }}>
              <span className="kicker">Deployment</span>{" "}
              <h2>Deployment that fits your data and your rules</h2>
              <p className="sec-sub">
                At the edge next to the equipment, inside your own building, or a mix of edge,
                on-premises and cloud — the choice is yours.
              </p>
            </div>
            <div className="dep-grid reveal" data-d="2">
              {" "}
              <DepCards items={depCards["solution-cubeon:operation"]} as="article" />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-cubeon:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-cubeon:fit"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
