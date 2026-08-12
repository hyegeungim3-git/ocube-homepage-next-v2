import type { JSX } from "react";
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

export default function SolutionDataqPage(): JSX.Element {
  return (
    <>
      <PageMeta
        path="solution-dataq.html"
        title="QData 산업 데이터 플랫폼 — 오큐브"
        description="QData — 이기종 산업·OT 데이터를 수집·표준화·통합해 산업 AI가 신뢰할 데이터를 만드는 플랫폼."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"QData","item":"@@BASE@@solution-dataq.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="solution-dataq"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-dataq"]} />
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
            <SolCopy intro={solutionIntros["solution-dataq"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="assets/img/proto/dataq-source.jpg"
                  alt="QData 데이터 소스 연계 화면 — 프로토타입 예시"
                  loading="lazy"
                  width="1440"
                  height="1298"
                />{" "}
              </figure>
              <div className="wrap">
                <div className="ktsum reveal" data-d="4">
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {" "}
                        <circle
                          cx="12"
                          cy="18"
                          r="5.5"
                          stroke="#0075de"
                          strokeWidth="2.4"
                        ></circle>{" "}
                        <circle cx="12" cy="46" r="5.5" stroke="#0075de" strokeWidth="2.4"></circle>{" "}
                        <rect
                          x="26"
                          y="24"
                          width="16"
                          height="16"
                          rx="3.5"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></rect>{" "}
                        <ellipse
                          cx="55"
                          cy="32"
                          rx="6"
                          ry="8.5"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></ellipse>{" "}
                        <path
                          d="M17.5 19.5C22 22 22 28 26 30M17.5 44.5C22 42 22 36 26 34M42 32h7"
                          stroke="#0075de"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        ></path>{" "}
                      </svg>
                    </span>{" "}
                    <h2>파이프라인</h2>
                    <span className="sub">수집부터 활용까지 한 흐름으로</span>{" "}
                    <p>
                      설비 제어기와 계측기부터 운영 시스템까지 <b>표준 커넥터</b>로 연결하고, 통신이
                      끊겨도 엣지에 임시 저장해 데이터 유실을 막습니다.
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {" "}
                        <rect
                          x="7"
                          y="12"
                          width="24"
                          height="30"
                          rx="3.5"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></rect>{" "}
                        <path
                          d="M13 21h12M13 28h12M13 35h7"
                          stroke="#0075de"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>{" "}
                        <rect
                          x="37"
                          y="12"
                          width="20"
                          height="15"
                          rx="3"
                          stroke="#0075de"
                          strokeWidth="2.4"
                        ></rect>{" "}
                        <path
                          d="M40 24l5-5 4 4 3-3 4 4"
                          stroke="#0075de"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M40 40v6M45 36v14M50 39v8M55 42v3"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        ></path>{" "}
                      </svg>
                    </span>{" "}
                    <h2>비정형 처리</h2>
                    <span className="sub">
                      문서·
                      <wbr />
                      이미지·
                      <wbr />
                      음성까지
                    </span>{" "}
                    <p>
                      표와 도면이 섞인 업무 문서를 의미 단위로 정리하고, 문자 인식(OCR)과 음성
                      인식(STT)으로{" "}
                      <b>
                        검색·
                        <wbr />
                        학습 가능한 데이터로 바꿉니다.
                      </b>
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {" "}
                        <circle
                          cx="32"
                          cy="14"
                          r="6"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></circle>{" "}
                        <circle cx="13" cy="46" r="6" stroke="#0075de" strokeWidth="2.4"></circle>{" "}
                        <circle
                          cx="32"
                          cy="38"
                          r="6"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></circle>{" "}
                        <circle cx="51" cy="46" r="6" stroke="#0075de" strokeWidth="2.4"></circle>{" "}
                        <path
                          d="M32 20v12M27.5 42.5 18 43.5M36.5 42.5 46 43.5"
                          stroke="#0075de"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        ></path>{" "}
                      </svg>
                    </span>{" "}
                    <h2>의미 기반 지식화</h2>
                    <span className="sub">검색을 넘어 추론까지</span>{" "}
                    <p>
                      <b>공통 데이터 형식과 용어 체계</b>로 서로 다른 이름과 단위를 통일하고, 데이터
                      관계와 의미 기반 검색을 함께 지원합니다.
                    </p>
                  </div>
                  <div className="ktsum-card">
                    {" "}
                    <span className="ktsum-ic" aria-hidden="true">
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {" "}
                        <path
                          d="M32 9a23 23 0 1 1-16.3 6.8"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        ></path>{" "}
                        <path
                          d="M13 10v8h8"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <rect
                          x="24"
                          y="26"
                          width="16"
                          height="13"
                          rx="3"
                          stroke="#0075de"
                          strokeWidth="2.4"
                          fill="rgba(0,117,222,.10)"
                        ></rect>{" "}
                        <path
                          d="M28 33.5l3 3 5-6"
                          stroke="#0075de"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </svg>
                    </span>{" "}
                    <h2>
                      데이터·
                      <wbr />
                      모델 운영
                    </h2>
                    <span className="sub">품질과 성능을 함께</span>{" "}
                    <p>
                      <b>데이터 품질과 변경 이력을 확인</b>
                      하고, 변화가 생기면 AI 모델을 재학습·
                      <wbr />
                      검증해 서비스에 반영합니다.
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
                <img
                  className="shot"
                  src="assets/img/overview-qdata.png"
                  alt="QData가 ERP·MES·데이터베이스·센서·문서·이미지 데이터를 AI 활용 데이터로 연결하는 과정"
                  loading="lazy"
                  width="1448"
                  height="1086"
                />{" "}
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
              <span className="kicker">Architecture</span>{" "}
              <h2>AI가 활용할 수 있는 데이터 구축 과정</h2>
              <p className="lead">
                흩어진 데이터 원본을 연결해 6단계로 다듬고, 목적에 맞는 AI 데이터로 만들어
                서비스까지 연결합니다.
              </p>
            </div>
            <div className="qarch rv" data-d="1">
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">01</span>
                  <b>Data Sources</b>
                </div>{" "}
                <span className="qa-sub">조직에 이미 쌓여 있는 데이터</span>{" "}
                <div className="qa-item">
                  <b>정형 데이터</b>
                  <span>ERP · MES · DB · CSV · API</span>
                </div>
                <div className="qa-item">
                  <b>비정형 데이터</b>
                  <span>PDF · DOCX · PPT · 메일</span>
                </div>
                <div className="qa-item">
                  <b>산업 데이터</b>
                  <span>PLC · 센서 · 시계열 · 영상</span>
                </div>
                <div className="qa-item">
                  <b>지식 데이터</b>
                  <span>매뉴얼 · 리포트 · 표준 · 이력</span>
                </div>
              </div>
              <div className="qa-stage core">
                <div className="qa-hd">
                  <span className="qa-no">02</span>
                  <b>QData Core Pipeline</b>
                </div>{" "}
                <span className="qa-sub">산업 데이터를 AI가 쓸 수 있는 형태로 바꾸는 6단계</span>{" "}
                <div className="qa-item qa-step">
                  <b>
                    <i>1</i>
                    Connect · 데이터 연결
                  </b>
                  <span>여러 소스를 연결해 수집</span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>2</i>
                    Parse · 구조화
                  </b>
                  <span>형식을 분석해 구조로 변환</span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>3</i>
                    Clean · 품질관리
                  </b>
                  <span>
                    중복 제거·
                    <wbr />
                    오류 보정·
                    <wbr />
                    결측 처리
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>4</i>
                    Standardize · 표준화
                  </b>
                  <span>스키마 통일과 단위 표준화</span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>5</i>
                    Contextualize · 맥락화
                  </b>
                  <span>
                    도메인·
                    <wbr />
                    업무 맥락과 관계 부여
                  </span>
                </div>
                <div className="qa-item qa-step">
                  <b>
                    <i>6</i>
                    Ready · AI-Ready
                  </b>
                  <span>
                    품질·
                    <wbr />
                    일관성·
                    <wbr />
                    맥락을 갖춘 데이터
                  </span>
                </div>
                <p className="qa-note">
                  품질·
                  <wbr />
                  일관성·
                  <wbr />
                  맥락을 갖춘 데이터 → AI 활용 최적화
                </p>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">03</span>
                  <b>AI Data Engine</b>
                </div>{" "}
                <span className="qa-sub">하나의 데이터 기반에서 목적별로 생성</span>{" "}
                <div className="qa-item">
                  <b>RAG Ready</b>
                  <span>
                    검색·
                    <wbr />
                    근거 중심 데이터
                  </span>
                </div>
                <div className="qa-item">
                  <b>CAG Ready</b>
                  <span>반복 참조용 컨텍스트 최적화 데이터</span>
                </div>
                <div className="qa-item">
                  <b>TAG Ready</b>
                  <span>
                    탐색·
                    <wbr />
                    집계용 구조적 데이터
                  </span>
                </div>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">04</span>
                  <b>AI-Ready Data Outputs</b>
                </div>{" "}
                <span className="qa-sub">그대로 가져다 쓰는 산출물</span>{" "}
                <div className="qa-item">
                  <b>Knowledge Data</b>
                  <span>청크 · 임베딩 · 메타데이터 · 출처</span>
                </div>
                <div className="qa-item">
                  <b>Context Data</b>
                  <span>도메인 맥락 · 정책 · 매뉴얼 · 규칙</span>
                </div>
                <div className="qa-item">
                  <b>Structured AI Data</b>
                  <span>테이블 데이터셋 · 의미 스키마 · 피처</span>
                </div>
                <div className="qa-item">
                  <b>Training Data</b>
                  <span>인스트럭션 · Q&A · 파인튜닝 데이터셋</span>
                </div>
              </div>
              <div className="qa-stage">
                <div className="qa-hd">
                  <span className="qa-no">05</span>
                  <b>AI Applications</b>
                </div>{" "}
                <span className="qa-sub">
                  검색·
                  <wbr />
                  추천·
                  <wbr />
                  학습·
                  <wbr />
                  운영까지 연결
                </span>{" "}
                <div className="qa-item">
                  <b>LLM · sLLM</b>
                  <span>상용 API와 온프레미스 소형 모델</span>
                </div>
                <div className="qa-item">
                  <b>AI 에이전트</b>
                  <span>근거를 붙여 답하고 실행까지</span>
                </div>
                <div className="qa-item">
                  <b>예측 모델</b>
                  <span>
                    이상 감지·
                    <wbr />
                    수요·
                    <wbr />
                    품질 예측
                  </span>
                </div>
                <div className="qa-item">
                  <b>Cubeon</b>
                  <span>판단을 승인과 업무 실행으로</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span> <h2>데이터를 자산으로 만드는 핵심 기능</h2>
              <p className="lead">
                수집한 데이터가 찾아 쓸 수 있는 지식이 되기까지, 모든 단계를 한곳에서 관리합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">처리 흐름(Pipeline)</span> <h3>처리 현황 추적</h3>
                <p>문서를 등록한 뒤 분석부터 검색 반영까지의 처리 단계를 문서별로 확인합니다.</p>
                <ul className="pi-bul">
                  <li>
                    <b>단계별 상태</b> 문서 분석·
                    <wbr />
                    분할·
                    <wbr />
                    의미 변환 진행을 문서별로 표시
                  </li>
                  <li>
                    <b>변경 감지</b> 신규·
                    <wbr />
                    업데이트·
                    <wbr />
                    삭제를 자동 반영
                  </li>
                  <li>
                    <b>개인정보 표시</b> 민감 정보 포함 문서 별도 표기
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/dataq-f01.jpg"
                  alt="데이터 처리 현황 화면"
                  loading="lazy"
                  width="1440"
                  height="1090"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">문서 분할(Chunking)</span> <h3>검색 단위 최적화</h3>
                <p>
                  문서 분할 방식에 따라 검색 결과가 달라집니다. 분할 결과를 지표로 점검해 검색
                  품질을 높입니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>품질 지표</b> 길이·
                    <wbr />
                    특수문자·
                    <wbr />
                    중복·
                    <wbr />
                    의미 완결성 점검
                  </li>
                  <li>
                    <b>문서별 진단</b> 임계 초과 문서를 주의·
                    <wbr />
                    경고로 분류
                  </li>
                  <li>
                    <b>분할 규칙 관리</b> 크기·
                    <wbr />
                    오버랩·
                    <wbr />
                    분할 방식 전역 설정
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/dataq-f02.jpg"
                  alt="청크 품질 관리 화면"
                  loading="lazy"
                  width="1440"
                  height="1042"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">의미 변환(Embedding)</span> <h3>벡터 품질 검증</h3>
                <p>
                  텍스트를 AI가 찾을 수 있는 벡터로 바꾼 뒤, 처리량과 지연, 색인 상태를 지속적으로
                  확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>모델별 현황</b> 벡터 차원·
                    <wbr />
                    처리량·
                    <wbr />
                    지연 비교
                  </li>
                  <li>
                    <b>색인 상태</b> 컬렉션·
                    <wbr />
                    디스크 사용·
                    <wbr />
                    인덱스 방식 확인
                  </li>
                  <li>
                    <b>재순위 검토</b> 검색 품질 개선 후보를 비교
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/dataq-f03.jpg"
                  alt="임베딩 품질 관리 화면"
                  loading="lazy"
                  width="1440"
                  height="1370"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">재처리(Recovery)</span> <h3>실패 문서 재처리</h3>
                <p>
                  암호화나 용량 문제로 처리가 멈춘 문서를 찾아 자동 또는 수동으로 다시 처리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>실패 단계 기록</b> 문서 분석·
                    <wbr />
                    분할·
                    <wbr />
                    의미 변환 중 어디서 멈췄는지 기록
                  </li>
                  <li>
                    <b>자동 재처리</b> 재시도 횟수·
                    <wbr />
                    우선순위로 큐 관리
                  </li>
                  <li>
                    <b>수동 처리 분기</b> 자동 복구 불가 건은 담당자 통보
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/dataq-f04.jpg"
                  alt="재처리 큐 화면"
                  loading="lazy"
                  width="1440"
                  height="822"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">권한 관리(Governance)</span> <h3>권한 기반 접근 제어</h3>
                <p>
                  사용자 권한에 따라 AI가 참조할 수 있는 문서 범위를 나누고, 개인정보를 안전하게
                  가립니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>폴더 단위 권한</b> 전체·
                    <wbr />
                    부서별·
                    <wbr />
                    특정 공개 범위 지정
                  </li>
                  <li>
                    <b>개인정보 마스킹</b> 민감 항목 포함 문서를 표시·
                    <wbr />
                    가림
                  </li>
                  <li>
                    <b>반영 상태 확인</b> 문서별 청크 수와 처리 상태
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/dataq-f05.jpg"
                  alt="지식 폴더·권한 관리 화면"
                  loading="lazy"
                  width="1440"
                  height="900"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="standards" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Standards & Governance</span>{" "}
              <h2>업계 표준 위에서 데이터를 다룹니다</h2>
              <p className="sec-sub">
                산업 데이터 상호운용 표준과 데이터 관리 관행을 참조해 설계합니다.
              </p>
            </div>
            <div
              className="reveal"
              data-d="1"
              style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "9px" }}
            >
              {" "}
              <span className="pill light">OPC-UA</span> <span className="pill light">ISA-95</span>{" "}
              <span className="pill light">MQTT · Sparkplug B</span>{" "}
              <span className="pill light">Modbus</span>{" "}
              <span className="pill light">데이터 카탈로그</span>{" "}
              <span className="pill light">데이터 변경 이력</span>{" "}
            </div>
            <div className="feat-list reveal" data-d="2" style={{ marginTop: "22px" }}>
              {" "}
              <FeatItems items={featLists["solution-dataq:standards"]} />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-dataq:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-dataq:fit"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
