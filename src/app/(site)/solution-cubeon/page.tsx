import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { subnavItems } from "@/data/subnav";
import { Subnav } from "@/components/section/subnav";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { solutionIntros } from "@/data/solution-intro";
import { SolCopy } from "@/components/section/sol-copy";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { FeatItems } from "@/components/section/feat-list";
import { featLists } from "@/data/features";

export default function SolutionCubeonPage() {
  return (
    <>
      <title>
        Cubeon 산업 AI 운영 플랫폼 — 오큐브
      </title>
      <meta name="description" content="Cubeon — 산업 데이터를 표준화하고 AI 판단을 담당자 승인과 검증된 범위의 제한적 자동 실행으로 연결하는 산업 AI 운영 플랫폼." />
      <link rel="canonical" href={withBase("solution-cubeon.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-cubeon.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-cubeon.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-cubeon.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="Cubeon 산업 AI 운영 플랫폼 — 오큐브" />
      <meta property="og:description" content="Cubeon — 산업 데이터를 표준화하고 AI 판단을 담당자 승인과 검증된 범위의 제한적 자동 실행으로 연결하는 산업 AI 운영 플랫폼." />
      <meta property="og:url" content={withBase("solution-cubeon.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cubeon 산업 AI 운영 플랫폼 — 오큐브" />
      <meta name="twitter:description" content="Cubeon — 산업 데이터를 표준화하고 AI 판단을 담당자 승인과 검증된 범위의 제한적 자동 실행으로 연결하는 산업 AI 운영 플랫폼." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Cubeon\",\"item\":\"@@BASE@@solution-cubeon.html\"}]}") }} />
      <SiteHeader slug="solution-cubeon" />
      <MobilePanel />
      <main>
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div className="hero-bg" style={{backgroundImage: "url('assets/video/platform_brain_cube.jpg')"}} aria-hidden="true"></div>
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
            <SolCopy intro={solutionIntros["solution-cubeon"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img src="assets/img/proto/cubeon-main.jpg" alt="Cubeon 메인 — 통합 플랫폼 플로우와 코어 모듈 상태, 거버넌스 현황" loading="lazy" width="1600" height="900" />
                {" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-cubeon"]} />
        <section id="overview" className="sec-anchor platform dark" style={{paddingTop: "64px"}}>
          <div className="wrap">
            <SecHead copy={secHeads["solution-cubeon:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img className="shot" src="assets/img/proto/cubeon-overview.jpg" alt="Cubeon 기업 AI 지식·Agent 통합 플랫폼 구성 — 기업 데이터 연결부터 지식화·AI Agent·모델 운영·업무 자동화·보안 권한까지" loading="lazy" width="1600" height="1200" />
                {" "}
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
              <span className="kicker">
                Features
              </span>
              {" "}
              <h2>
                데이터에서 실행까지 이어지는 여섯 개 코어 모듈
              </h2>
              <p className="lead">
                공통 데이터 기반 위에서 지식과 AI 서비스를 운영하고, 조직의 승인 절차에 맞춰 안전하게 실행합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Data Foundation
                </span>
                {" "}
                <h3>
                  데이터 통합 관리
                </h3>
                <p>
                  기업 내 다양한 정형·
                  <wbr />
                  비정형·
                  <wbr />
                  산업 데이터를 연결하고 AI가 활용할 수 있는 형태로 준비합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      소스 연결
                    </b>
                    {" "}기간계·
                    <wbr />
                    설비·
                    <wbr />
                    문서·
                    <wbr />
                    API·
                    <wbr />
                    센서를 표준 커넥터로 연결
                  </li>
                  <li>
                    <b>
                      정제 파이프라인
                    </b>
                    {" "}연결 → 파싱 → 정제 → 표준화 → 데이터셋 생성
                  </li>
                  <li>
                    <b>
                      품질 점검
                    </b>
                    {" "}완전성·
                    <wbr />
                    일관성·
                    <wbr />
                    최신성·
                    <wbr />
                    유효성 지표로 상시 확인
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c01.jpg" alt="Cubeon 기업 데이터 통합 — 데이터 소스 현황과 정제 파이프라인, 데이터 품질 지표" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Knowledge Intelligence
                </span>
                {" "}
                <h3>
                  온톨로지 기반 지식화 관리
                </h3>
                <p>
                  데이터의 의미·
                  <wbr />
                  관계·
                  <wbr />
                  맥락을 연결하여 기업 고유의 지식체계를 구축합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      지식 그래프
                    </b>
                    {" "}클래스·
                    <wbr />
                    엔터티·
                    <wbr />
                    관계를 그래프로 탐색
                  </li>
                  <li>
                    <b>
                      시맨틱 모델
                    </b>
                    {" "}온톨로지 스키마와 프로퍼티 매핑 관리
                  </li>
                  <li>
                    <b>
                      개정 이력
                    </b>
                    {" "}온톨로지 버전과 도메인 분류 체계 관리
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c02.jpg" alt="Cubeon 온톨로지 기반 지식화 — 지식 그래프 탐색과 시맨틱 모델, 지식 품질 지표" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  AI Agent
                </span>
                {" "}
                <h3>
                  지식 기반 AI Agent 서비스
                </h3>
                <p>
                  기업 지식과 데이터를 기반으로 질문을 이해하고 분석·
                  <wbr />
                  추론·
                  <wbr />
                  업무 수행까지 지원합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      추론 과정 공개
                    </b>
                    {" "}의도 파악부터 분석·
                    <wbr />
                    요약까지 단계 표시
                  </li>
                  <li>
                    <b>
                      도구 연동
                    </b>
                    {" "}지식 검색·
                    <wbr />
                    문서 조회·
                    <wbr />
                    DB 조회·
                    <wbr />
                    리포트 생성 호출
                  </li>
                  <li>
                    <b>
                      근거 표기
                    </b>
                    {" "}참조한 지식·
                    <wbr />
                    데이터 소스와 신선도 함께 제시
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c03.jpg" alt="Cubeon 지식 기반 AI Agent — 대화 워크스페이스와 작업 실행 파이프라인, 에이전트 디렉터리" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  Model Hub
                </span>
                {" "}
                <h3>
                  AI Model Hub
                </h3>
                <p>
                  Cloud LLM부터 On-Premise LLM/SLM까지 업무와 보안환경에 맞게 연결하고 운영합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      배포 선택
                    </b>
                    {" "}클라우드·
                    <wbr />
                    프라이빗·
                    <wbr />
                    온프레미스 중 보안 요건에 맞게
                  </li>
                  <li>
                    <b>
                      게이트웨이 라우팅
                    </b>
                    {" "}업무별 모델 배분과 응답 지연·
                    <wbr />
                    처리량 관리
                  </li>
                  <li>
                    <b>
                      모델 거버넌스
                    </b>
                    {" "}승인 모델·
                    <wbr />
                    접근 제한·
                    <wbr />
                    감사 로그 통합
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c04.jpg" alt="Cubeon AI Model Hub — 모델 인벤토리와 게이트웨이 라우팅, 배포 토폴로지" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">
                  Workflow & Action
                </span>
                {" "}
                <h3>
                  업무 자동화 및 실행 관리
                </h3>
                <p>
                  AI의 분석 결과를 시스템 조회, 문서 생성, 알림, 승인, 업무 처리까지 연결합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      폐루프 실행
                    </b>
                    {" "}검색 → 분석 → 권고 → 승인 → 실행 연결
                  </li>
                  <li>
                    <b>
                      승인 라우팅
                    </b>
                    {" "}승인 대기함과 우선순위·
                    <wbr />
                    지연 경고 관리
                  </li>
                  <li>
                    <b>
                      결과 산출
                    </b>
                    {" "}발주서·
                    <wbr />
                    리포트 자동 생성과 실행 이력 추적
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c05.jpg" alt="Cubeon 업무 자동화 및 실행 — 워크플로 파이프라인과 승인 대기함, 연결 시스템 현황" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">
                  AI Governance
                </span>
                {" "}
                <h3>
                  AI 보안·
                  <wbr />
                  권한·
                  <wbr />
                  운영관리
                </h3>
                <p>
                  기업 AI 환경에 필요한 데이터 접근권한, Agent 권한, 로그, 모델 및 지식 버전을 통합 관리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      3중 권한 분리
                    </b>
                    {" "}데이터·
                    <wbr />
                    Agent·
                    <wbr />
                    모델 권한을 역할 기반으로 관리
                  </li>
                  <li>
                    <b>
                      감사·
                      <wbr />
                      모니터링
                    </b>
                    {" "}조회·
                    <wbr />
                    실행·
                    <wbr />
                    권한 변경 로그와 보안 이벤트 추적
                  </li>
                  <li>
                    <b>
                      버전 통제
                    </b>
                    {" "}지식·
                    <wbr />
                    모델 버전과 정책 승인 이력 관리
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img src="assets/img/proto/cubeon-c06.jpg" alt="Cubeon AI 보안·권한·운영관리 — 역할 기반 접근 제어와 감사 로그, 지식·모델 버전 관리" loading="lazy" width="1600" height="900" />
                {" "}
              </div>
            </div>
          </div>
        </section>
        <section id="arch" className="pinsec">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">
                Architecture
              </span>
              {" "}
              <h2>
                필요한 기능을 조합하는 8개 공통 모듈
              </h2>
              <p>
                산업과 비즈니스에 공통으로 필요한 기능을 나눠 구성해 필요한 모듈과 분야 기능부터 단계적으로 확장합니다.
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
                <div className="pi-no">
                  Connect
                </div>
                <h3>
                  데이터 연결
                </h3>
                <p>
                  설비 제어기(PLC)·
                  <wbr />
                  센서·
                  <wbr />
                  생산관리시스템(MES)·
                  <wbr />
                  전사적자원관리시스템(ERP) 등 서로 다른 데이터 원천을 연결합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      엣지 수집·
                      <wbr />
                      전송 복구
                    </b>
                    {" "}네트워크 단절 시 데이터를 임시 저장하고 연결 복구 후 재전송
                  </li>
                  <li>
                    <b>
                      안전한 연결
                    </b>
                    {" "}암호화·
                    <wbr />
                    기기 인증·
                    <wbr />
                    역할별 접근 권한으로 시스템 간 데이터 이동 보호
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    산업 통신 표준
                  </span>
                  <span className="pill light">
                    시스템 연계 API
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/cubeon-connect.jpg" data-shot-alt="Cubeon Connect — 이기종 데이터 연결 콘솔 개념 화면(소스·프로토콜 어댑터·태그 표준 매핑)">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Fabric
                </div>
                <h3>
                  데이터 파이프라인
                </h3>
                <p>
                  실시간 데이터와 정기 수집 데이터를 안정적으로 저장·
                  <wbr />
                  정제·
                  <wbr />
                  전달합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      운영 상태 추적
                    </b>
                    {" "}데이터 수집부터 제어까지 각 단계의 지연과 오류율을 측정해 문제 구간 확인
                  </li>
                  <li>
                    <b>
                      단계적 확장
                    </b>
                    {" "}라인 1개 검증에서 전사 확산까지 검증된 처리 구조 재사용
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    실시간 처리
                  </span>
                  <span className="pill light">
                    정기 처리
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/cubeon-fabric.jpg" data-shot-alt="Cubeon Fabric — 데이터 처리 흐름 개념 화면(수집→임시 저장→정제→저장→활용)">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Semantic
                </div>
                <h3>
                  의미 체계
                </h3>
                <p>
                  공통 데이터 형식과 용어·
                  <wbr />
                  관계 체계인 온톨로지로 데이터의 이름과 의미를 통일합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      데이터 품질 통일
                    </b>
                    {" "}공통 형식 적용·
                    <wbr />
                    품질 검증·
                    <wbr />
                    누락값 보정으로 분석 가능한 상태 확보
                  </li>
                  <li>
                    <b>
                      관계 기반 검색
                    </b>
                    {" "}데이터·
                    <wbr />
                    문서·
                    <wbr />
                    업무의 연결 관계를 따라 필요한 정보 탐색
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    산업 용어·관계 체계(온톨로지)
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/dataq-knowledge.jpg" data-shot-alt="의미 표준화·지식 관리 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  ModelOps
                </div>
                <h3>
                  AI 모델 운영
                </h3>
                <p>
                  AI 모델의 학습·
                  <wbr />
                  검증·
                  <wbr />
                  배포 이력을 관리하고 운영 중 성능을 감시해 필요할 때 재학습합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      데이터 변화 탐지
                    </b>
                    {" "}입력 데이터와 예측 결과의 변화를 확인해 재학습 시점 판단
                  </li>
                  <li>
                    <b>
                      감사 이력
                    </b>
                    {" "}모델의 판단과 실행 전 과정을 기록해 품질·
                    <wbr />
                    규정 대응 지원
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    학습·검증·배포·재학습
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/cubeon-modelreg.jpg" data-shot-alt="모델 레지스트리·거버넌스 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Agents
                </div>
                <h3>
                  전문 AI 에이전트
                </h3>
                <p>
                  업무 질문에 답하고 문서를 분석하며 업무를 수행하는 AI 에이전트를 실행합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      근거 제시
                    </b>
                    {" "}검색한 문서·
                    <wbr />
                    데이터를 근거로 답변, 출처도 함께 기록
                  </li>
                  <li>
                    <b>
                      권한 인지
                    </b>
                    {" "}역할 기반 접근 제어로 사용자별 참조 가능한 지식·
                    <wbr />
                    기능 범위 분리
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    검색 증강 생성(RAG)
                  </span>
                  <span className="pill light">
                    사내 소형 언어모델(sLLM)
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/agentq-hub.jpg" data-shot-alt="AI 에이전트 허브 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Orchestrator
                </div>
                <h3>
                  업무 흐름 조정
                </h3>
                <p>
                  여러 AI 에이전트가 정해진 순서와 역할에 따라 하나의 업무를 완성하도록 조정합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      판단·
                      <wbr />
                      권고 통합
                    </b>
                    {" "}여러 AI 에이전트의 판단과 권고를 하나의 흐름으로 조정
                  </li>
                  <li>
                    <b>
                      승인 경로 분기
                    </b>
                    {" "}위험도·
                    <wbr />
                    가역성 정책에 따라 실행 전 승인 경로 자동 분기
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    AI 도구·시스템 연결
                  </span>
                </div>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/cubeon-builder.jpg" data-shot-alt="노코드 에이전트 빌더·서비스 조정 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Console
                </div>
                <h3>
                  통합 관제·감사
                </h3>
                <p>
                  탐지·
                  <wbr />
                  판단·
                  <wbr />
                  업무 실행을 하나의 화면에서 관리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      통합 운영 대시보드
                    </b>
                    {" "}서비스 상태·
                    <wbr />
                    응답 속도·
                    <wbr />
                    처리량·
                    <wbr />
                    오류와 업무 진행 상황을 한 화면에서 추적
                  </li>
                  <li>
                    <b>
                      변경 관리·
                      <wbr />
                      복구
                    </b>
                    {" "}모델·
                    <wbr />
                    지식·
                    <wbr />
                    설정 변경을 기록하고 문제 발생 시 이전 버전으로 복구
                  </li>
                </ul>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/cubeon-infra.jpg" data-shot-alt="통합 관제·인프라 콘솔 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">
                  Copilot
                </div>
                <h3>
                  업무 코파일럿
                </h3>
                <p>
                  자연어 질의와 업무 지원에 사용할 AI를 상용 대규모 언어모델(LLM)과 사내 소형 언어모델(sLLM) 중에서 선택합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      배포 방식 선택
                    </b>
                    {" "}상용 AI 서비스·
                    <wbr />
                    사내 구축형·
                    <wbr />
                    인터넷과 분리된 폐쇄망 중 보안 요건에 맞게 선택
                  </li>
                  <li>
                    <b>
                      데이터 경계 고정
                    </b>
                    {" "}외부 반출 제한 데이터가 경계를 넘지 않도록 처리 위치를 정책으로 고정
                  </li>
                </ul>
                {" "}
                <button type="button" className="pi-shot" data-shot="assets/img/proto/agentq-chat.jpg" data-shot-alt="업무 코파일럿·자연어 질의 프로토타입 화면">
                  화면 보기
                </button>
                {" "}
              </article>
            </div>
          </div>
        </section>
        <section id="structure" className="sec-anchor platform dark">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">
                Product Structure
              </span>
              {" "}
              <h2>
                공통 코어 위에 필요한 분야 기능을 확장합니다
              </h2>
              <p className="sec-sub">
                데이터·
                <wbr />
                AI·
                <wbr />
                실행을 담당하는 공통 기반은 재사용하고, 조직의 과제에 맞는 도메인팩과 코파일럿을 선택해 구성합니다.
              </p>
            </div>
            <div className="prod-row reveal" data-d="1">
              <article className="prod-card">
                <h3>
                  Horizontal Core
                </h3>
                {" "}
                <span className="sub">
                  공통 운영 기반
                </span>
                {" "}
                <p>
                  Connect부터 Console까지 8개 모듈을 조합해 데이터 연결, AI 운영, 승인과 실행의 공통 기준을 만듭니다.
                </p>
              </article>
              <article className="prod-card">
                <h3>
                  Manufacturing Pack
                </h3>
                {" "}
                <span className="sub">
                  제조 도메인팩
                </span>
                {" "}
                <p>
                  설비 이상 감지·
                  <wbr />
                  예지보전·
                  <wbr />
                  품질 예측·
                  <wbr />
                  공정·
                  <wbr />
                  에너지 최적화 기능을 공정 과제에 맞춰 적용합니다.
                </p>
              </article>
              <article className="prod-card">
                <h3>
                  Safety Pack
                </h3>
                {" "}
                <span className="sub">
                  안전 도메인팩
                </span>
                {" "}
                <p>
                  영상·
                  <wbr />
                  센서·
                  <wbr />
                  운영 이벤트를 함께 분석해 위험 상황을 감지하고 근거와 대응 우선순위를 제공합니다.
                </p>
              </article>
              <article className="prod-card">
                <h3>
                  Copilot
                </h3>
                {" "}
                <span className="sub">
                  업무 지식 서비스
                </span>
                {" "}
                <p>
                  조직의 문서와 데이터를 근거로 질문에 답하고 분석 결과를 설명하며 필요한 후속 업무를 지원합니다.
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
                <span className="kicker">
                  Operating Levels
                </span>
                {" "}
                <h2>
                  검증된 범위부터{" "}
                  <span>
                    단계적으로 자동화
                  </span>
                </h2>
                <p>
                  모든 업무를 한 번에 자동화하지 않고 감지와 알림부터 시작해 담당자 승인, 제한된 자동 실행 순으로 적용 범위를 넓힙니다.
                </p>
              </div>
              <div className="ladder" aria-label="Cubeon 운영 자동화 단계">
                <div className="rung">
                  <b>
                    Level 1 · Detect
                  </b>
                  <span>
                    데이터 수집·
                    <wbr />
                    상태 파악·
                    <wbr />
                    이상 감지·
                    <wbr />
                    알림
                  </span>
                </div>
                <div className="rung l2">
                  <b>
                    Level 2 · Decide
                  </b>
                  <span>
                    원인 분석·
                    <wbr />
                    조치 권고·
                    <wbr />
                    담당자 확인과 승인
                  </span>
                </div>
                <div className="rung l3">
                  <b>
                    Level 3 · Act
                  </b>
                  <span>
                    승인된 범위의 자동 실행·
                    <wbr />
                    결과 검증·
                    <wbr />
                    지속 개선
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal" data-d="1" style={{marginTop: "72px"}}>
              <span className="kicker">
                Deployment
              </span>
              {" "}
              <h2>
                데이터와 보안 요건에 맞는 배포
              </h2>
              <p className="sec-sub">
                장비 가까이에서 처리하는 엣지부터 사내 구축형, 엣지와 사내·
                <wbr />
                클라우드를 연결하는 혼합형까지 선택할 수 있습니다.
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
            <div className="dep-grid g2 reveal" data-d="1" style={{marginTop: "24px"}}>
              {" "}
              <DepCards items={depCards["solution-cubeon:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["solution-cubeon"]} />
      </SiteFooter>
    </>
  );
}
