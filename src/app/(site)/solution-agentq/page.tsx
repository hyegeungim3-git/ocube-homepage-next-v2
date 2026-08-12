import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { subnavItems } from "@/data/subnav";
import { Subnav } from "@/components/section/subnav";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { solutionIntros } from "@/data/solution-intro";
import { SolCopy } from "@/components/section/sol-copy";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { FeatItems } from "@/components/section/feat-list";
import { featLists } from "@/data/features";

export default function SolutionAgentqPage() {
  return (
    <>
      <PageMeta
        path="solution-agentq.html"
        title="AgentQ 멀티 AI 에이전트 플랫폼 — 오큐브"
        description="AgentQ — 문서·음성·데이터베이스를 다루는 전문 AI 에이전트가 업무를 나눠 맡고, 중간 결과를 이어받아 검토 가능한 문서와 실행안까지 완성하는 기업용 멀티 에이전트 플랫폼."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"AgentQ","item":"@@BASE@@solution-agentq.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="solution-agentq"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-agentq"]} />
          </>
        }
      >
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('assets/video/platform_brain_cube.jpg')" }}
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
            <SolCopy intro={solutionIntros["solution-agentq"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                <video
                  className="demovid"
                  src="assets/media/demo/stage/agentq.mp4"
                  poster="assets/media/demo/stage/agentq.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  width="1600"
                  height="900"
                  aria-label="AgentQ 보고서 작성·승인 흐름 시연 영상 — 프로토타입 예시"
                ></video>
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
                <img
                  className="shot"
                  src="assets/img/overview-qagent.png"
                  alt="AgentQ가 문서·데이터베이스·업무 시스템을 연결해 지식검색·문서이해·데이터분석·보고 업무를 처리하는 구조"
                  loading="lazy"
                  width="1536"
                  height="1024"
                />{" "}
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
              <span className="kicker">Features</span>{" "}
              <h2>업무마다 알맞은 전문 에이전트를 바로 연결합니다</h2>
              <p className="lead">
                지식 검색·문서 작성·음성 기록·규정 검토·데이터 조회·보안 채팅을 하나의 플랫폼에서
                제공합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">RAG Knowledge Search</span> <h3>근거 기반 지식 검색</h3>
                <p>
                  사내 문서와 업무 규정을 자연어로 검색하고, 답변에 사용한 근거와 출처를 함께
                  확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>자연어·의미 검색</b> 표현이 달라도 의미가 가까운 문서와 조항을 탐색
                  </li>
                  <li>
                    <b>근거·출처 확인</b> 답변과 함께 원문 위치와 관련 문서를 제시
                  </li>
                  <li>
                    <b>검색 범위 적용</b> 업무 영역과 문서 보안 등급에 맞는 자료만 조회
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f01-knowledge.png"
                  alt="AgentQ 지식 검색 에이전트에서 검색 방식과 문서 범위를 선택하는 화면"
                  loading="lazy"
                  width="1280"
                  height="720"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Standard Report</span> <h3>표준 양식 보고서 작성</h3>
                <p>
                  핵심 내용만 입력하면 조직에서 사용하는 양식에 맞춰 보고서 초안을 만들고 검토할 수
                  있게 정리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>양식 선택</b> 주간 실적·업무 조사·시황 등 업무별 표준 서식 제공
                  </li>
                  <li>
                    <b>정보 자동 구성</b> 입력한 실적·일정·계획을 보고서 항목에 맞춰 배치
                  </li>
                  <li>
                    <b>초안 검토</b> 생성 내용을 확인하고 수정한 뒤 공식 문서로 활용
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f02-report.png"
                  alt="AgentQ 보고서 작성 에이전트에서 보고서 유형과 기본 정보를 입력하는 화면"
                  loading="lazy"
                  width="1280"
                  height="720"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Meeting Intelligence</span> <h3>음성 기반 회의록 작성</h3>
                <p>
                  회의 녹음과 참고 자료를 올리면 발언 내용을 구분하고 핵심 논의와 후속 업무를
                  회의록으로 정리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>음성 인식</b> STT와 화자 분리로 참석자별 발언 내용을 텍스트로 변환
                  </li>
                  <li>
                    <b>내용 요약</b> 주요 안건·결정 사항·담당 업무와 일정을 구분해 정리
                  </li>
                  <li>
                    <b>회의록 완성</b> 첨부 자료를 반영해 조직의 표준 회의록 양식으로 작성
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f03-meeting.png"
                  alt="AgentQ 회의록 작성 에이전트에서 음성과 회의 자료를 등록하는 화면"
                  loading="lazy"
                  width="1280"
                  height="720"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Document Review</span> <h3>내규 기반 문서 사전 검토</h3>
                <p>
                  기안문과 보고서를 사내 규정·업무 지침과 자동으로 대조해 위반 가능성과 보완할
                  내용을 미리 확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>문서 전처리</b> PDF·DOCX·HWP와 스캔 문서의 내용을 읽을 수 있게 변환
                  </li>
                  <li>
                    <b>규정 자동 대조</b> 선택한 내규와 업무 지침에서 관련 조항을 찾아 비교
                  </li>
                  <li>
                    <b>검토 결과 분류</b> 위반 가능성과 보완 항목을 심각도와 근거별로 정리
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f04-review.png"
                  alt="AgentQ 문서 사전 검토 에이전트에서 문서와 검토 규정을 선택하는 화면"
                  loading="lazy"
                  width="1280"
                  height="720"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Text2SQL Analytics</span> <h3>자연어 데이터 조회·분석</h3>
                <p>
                  전문적인 SQL을 몰라도 업무 질문을 입력하면 필요한 데이터를 조회하고 결과를 표와
                  차트로 보여줍니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>질문 자동 해석</b> 자연어 요청에서 조회 대상과 조건을 파악해 SQL로 변환
                  </li>
                  <li>
                    <b>권한 기반 조회</b> 사용자가 접근할 수 있는 데이터베이스와 항목만 검색
                  </li>
                  <li>
                    <b>결과 시각화</b> 조회 결과와 조건을 표·차트·요약 설명으로 제공
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f05-db.png"
                  alt="AgentQ 데이터베이스 검색 에이전트에서 자연어로 데이터를 조회하는 화면"
                  loading="lazy"
                  width="1280"
                  height="720"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Secure LLM Chat</span> <h3>로컬 LLM 기반 보안 채팅</h3>
                <p>
                  민감한 질문과 문서를 외부로 보내지 않고 내부망의 로컬 LLM에서만 처리해 안전하게
                  대화합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>대화 내용 무저장</b> 질문과 답변을 서버에 남기지 않는 독립 세션으로 처리
                  </li>
                  <li>
                    <b>외부망 연결 차단</b> 모든 추론과 문서 처리를 내부망 로컬 LLM에서 수행
                  </li>
                  <li>
                    <b>AI 학습 미활용</b> 입력한 대화와 참조 문서를 모델 학습 데이터로 사용하지 않음
                  </li>
                </ul>{" "}
                <a className="duo-cta" href="#pipeline">
                  처리 흐름 자세히 <i aria-hidden="true">→</i>
                </a>{" "}
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/agentq-f06-security.png"
                  alt="AgentQ 보안 채팅에서 대화 무저장과 로컬 LLM 처리 상태를 확인하는 화면"
                  loading="lazy"
                  width="2560"
                  height="1339"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="pipeline" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Runtime Pipeline</span>{" "}
              <h2>입력 자료가 검토 가능한 결과물이 되는 흐름</h2>
              <p className="sec-sub">
                문서와 데이터를 먼저 정리하고, 근거 검색·추론·검증을 거쳐 문서·승인·내보내기로
                마무리합니다.
              </p>
            </div>
            <div className="tl reveal" data-d="1">
              <div className="tl-card">
                <div className="yr">STEP 1</div>
                <h3>업무 입력</h3>
                <p>텍스트·음성·문서·스프레드시트와 데이터 조회 요청을 접수</p>
              </div>
              <div className="tl-card">
                <div className="yr">STEP 2</div>
                <h3>DRM·OCR 전처리</h3>
                <p>보호 문서와 스캔 파일을 해제·인식하고 검색 가능한 형태로 정리</p>
              </div>
              <div className="tl-card">
                <div className="yr">STEP 3</div>
                <h3>RAG 지식검색</h3>
                <p>권한 범위의 문서·규정·벡터 DB에서 관련 근거와 출처를 탐색</p>
              </div>
              <div className="tl-card">
                <div className="yr">STEP 4</div>
                <h3>sLLM 추론</h3>
                <p>사내 언어모델이 업무 목적에 맞게 요약·분석하고 다음 에이전트에 결과를 전달</p>
              </div>
              <div className="tl-card">
                <div className="yr">STEP 5</div>
                <h3>결과 검증·보안</h3>
                <p>근거 일치도·신뢰도·개인정보·보안 등급을 확인하고 필요한 보완을 요청</p>
              </div>
              <div className="tl-card cur">
                <div className="yr">STEP 6</div>
                <h3>문서·승인·내보내기</h3>
                <p>공식 문서와 분석 결과를 만들고 담당자 검토·승인 후 업무 시스템으로 전달</p>
              </div>
            </div>
            <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
              {" "}
              <FeatItems items={featLists["solution-agentq:pipeline"]} />
            </div>
            <p className="sec-note reveal" data-d="1" style={{ marginTop: "26px" }}>
              <b>자료 유형에 맞는 처리 방식</b> 비정형 문서, 구조화 데이터, 복합 업무를 각각 알맞은
              도구와 에이전트로 연결합니다.
            </p>
            <div className="dep-grid reveal" data-d="2" style={{ marginTop: "14px" }}>
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
                <span className="dom">서류 심사 · 이의신청</span> <h3>이의신청 서류 일괄 처리</h3>
                <p className="csi">
                  <b>입력</b> 스캔 문서와 첨부 자료를 한 번에 접수
                </p>
                <p className="csi">
                  <b>연계</b> OCR → 주소 표준화 → DB 조회 → 관련 규정 검색
                </p>
                <p className="csi">
                  <b>산출물</b> 확인 근거와 검토 항목을 담은 심사 보고서 초안
                </p>
              </article>
              <article className="case-card reveal" data-d="2">
                <span className="dom">데이터 검증 · 규정 검토</span> <h3>이상거래 검증 보고서</h3>
                <p className="csi">
                  <b>입력</b> 거래 조건과 확인 대상 데이터를 지정
                </p>
                <p className="csi">
                  <b>연계</b> DB 조회 → 데이터 분석 → 내규·법령 검색 → 보고서 작성
                </p>
                <p className="csi">
                  <b>산출물</b> 이상 징후, 판단 근거, 후속 확인 항목을 정리한 검토 문서
                </p>
              </article>
            </div>
            <figure className="shot-fig reveal" data-d="3">
              {" "}
              <img
                className="shot fit"
                src="assets/img/proto/agentq-chat.jpg"
                alt="AgentQ 업무 포털 — 근거 출처와 보안 등급을 확인하며 문서·데이터 업무를 처리하는 화면"
                loading="lazy"
                width="1600"
                height="1005"
              />{" "}
            </figure>
          </div>
        </section>
        <section id="scenarios" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-agentq:scenarios"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-agentq:scenarios"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
