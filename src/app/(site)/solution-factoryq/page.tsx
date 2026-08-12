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

export default function SolutionFactoryqPage(): JSX.Element {
  return (
    <>
      <PageMeta
        path="solution-factoryq.html"
        title="QFactory AI 스마트 팩토리 — 오큐브"
        description="QFactory — 공정·설비·품질·에너지·안전 데이터를 연결하고, 예측·최적화부터 승인 기반 운영까지 지원하는 AI 스마트 팩토리 플랫폼."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"QFactory","item":"@@BASE@@solution-factoryq.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="solution-factoryq"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-factoryq"]} />
          </>
        }
      >
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('assets/video/business_robot_arm.jpg')" }}
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
                  src="assets/img/qfactory-hibox-ai-operations.png"
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
                  src="assets/img/overview-qfactory.png"
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
              <h2>공장 운영 전 과정을 여섯 가지 AI 기능으로 연결합니다</h2>
              <p className="lead">
                공정 과제에 맞는 기능부터 적용하고, 검증된 범위를 단계적으로 확장합니다.
              </p>
            </div>
            <p className="factory-note rv d1">
              <b>단계적 도입</b> 기존 설비를 전면 교체하지 않고, 기존 설비 보완용 센서와 엣지 시스템
              연계를 활용해 필요한 공정부터 확장합니다.
            </p>
            <div className="factory-app-grid">
              <article className="factory-app rv">
                <div className="factory-app-top">
                  <span>01</span>
                  <b>Data Foundation</b>
                </div>
                <h3>AI·공장 운영 데이터 통합</h3>
                <p>
                  제어·
                  <wbr />
                  품질·
                  <wbr />
                  생산 시스템과 센서 데이터를 시간·
                  <wbr />
                  작업·
                  <wbr />
                  설비 기준으로 정렬합니다.
                </p>
                <dl>
                  <div>
                    <dt>연결 데이터</dt>
                    <dd>공정·설비·품질·에너지·물류</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>정합성 검증, 원인 추적, AI 학습용 표준 데이터</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d1">
                <div className="factory-app-top">
                  <span>02</span>
                  <b>Energy AI</b>
                </div>
                <h3>열에너지 생산·사용 최적화</h3>
                <p>
                  열원 생산과 스팀 소비를 함께 분석해 과잉·
                  <wbr />
                  부족 공급을 줄일 운전 조건을 권고합니다.
                </p>
                <dl>
                  <div>
                    <dt>연결 데이터</dt>
                    <dd>연소 상태·스팀·연료·공기·온습도</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>소각로·보일러·Dryer 생산–사용 밸런싱</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d2">
                <div className="factory-app-top">
                  <span>03</span>
                  <b>Equipment AI</b>
                </div>
                <h3>설비 건전성·잔존수명 예측</h3>
                <p>회전체와 건조 설비의 상태 변화를 분석해 이상·위험도·잔존수명을 예측합니다.</p>
                <dl>
                  <div>
                    <dt>연결 데이터</dt>
                    <dd>진동·전류·온도·압력·유량·정비 이력</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>고장 조기경보, 정비 우선순위, 다운타임 예방</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv">
                <div className="factory-app-top">
                  <span>04</span>
                  <b>Quality AI</b>
                </div>
                <h3>품질 예측·공급망 추적</h3>
                <p>원료·첨가제부터 최종 품질까지 시간·Lot 이력을 연결해 편차 원인을 찾습니다.</p>
                <dl>
                  <div>
                    <dt>연결 데이터</dt>
                    <dd>농도·입도·공정조건·검사·출하 Lot</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>품질 예측, 원인 추적, 공급망 피드백</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d1">
                <div className="factory-app-top">
                  <span>05</span>
                  <b>Safety AI</b>
                </div>
                <h3>영상 AI 안전 관제</h3>
                <p>영상과 설비 이벤트를 결합해 위험 행동·구역 접근·화재·이상 상황을 감지합니다.</p>
                <dl>
                  <div>
                    <dt>연결 데이터</dt>
                    <dd>실시간 영상 스트림(RTSP)·작업 구역·설비 알람</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>위험도별 알림, 이력 조회, 오탐 피드백</dd>
                  </div>
                </dl>
              </article>
              <article className="factory-app rv d2">
                <div className="factory-app-top">
                  <span>06</span>
                  <b>AI Operations</b>
                </div>
                <h3>AI 모델 운영·자율화 지원</h3>
                <p>
                  AI 모델의 학습·
                  <wbr />
                  배포·
                  <wbr />
                  성능을 관리하고, 권고–승인–조치–결과 확인을 하나의 운영 흐름으로 연결합니다.
                </p>
                <dl>
                  <div>
                    <dt>운영 정보</dt>
                    <dd>모델·데이터 버전·성능·데이터 변화</dd>
                  </div>
                  <div>
                    <dt>운영 활용</dt>
                    <dd>지속적 재학습·이전 모델 복구, 엣지 시스템 연계, 단계적 자율운영</dd>
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
              <h2>공정 진단부터 AI 모델 운영까지 연결합니다</h2>
              <p className="lead">
                설비·
                <wbr />
                공정·
                <wbr />
                운영·
                <wbr />
                성과 데이터를 하나의 흐름으로 분석하고 개선합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Detect</span> <h3>AI 설비 정밀 진단</h3>
                <p>
                  진공 펌프·
                  <wbr />
                  히터·
                  <wbr />
                  진동·
                  <wbr />
                  온도 센서를 분석해 가동 전 위험과 이상 징후를 확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>설비 건강도 진단</b> 진공 펌프·
                    <wbr />
                    히터·
                    <wbr />
                    진동·
                    <wbr />
                    온도 센서의 건전성 통합 판정
                  </li>
                  <li>
                    <b>AI 판정 검토</b> 담당자 검토로 오탐과 실제 이상 구분
                  </li>
                  <li>
                    <b>안전한 단계 전환</b> 승인된 진단 결과만 공정 설계와 실시간 관제로 연결
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-equipment-diagnostics.png"
                  alt="진공 펌프, 히터, 진동 센서와 온도 센서의 상태를 종합 판정하는 AI 설비 정밀 진단 화면"
                  loading="lazy"
                  width="2969"
                  height="1969"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Recommend</span> <h3>AI 공정 설계 권고</h3>
                <p>제품과 적재 조건, 과거 결과를 분석해 단계별 최적 운전 프로파일을 제안합니다.</p>
                <ul className="pi-bul">
                  <li>
                    <b>생산 조건 입력</b> 제품·
                    <wbr />
                    중량·
                    <wbr />
                    두께 등 주요 조건 설정
                  </li>
                  <li>
                    <b>최적 프로파일 생성</b> 성공 사이클과 AI 예측으로 목표 온도·
                    <wbr />
                    유지 시간 설계
                  </li>
                  <li>
                    <b>승인 기반 적용</b> 근거와 예상 결과 확인 후 담당자가 수용·
                    <wbr />
                    거절
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-process-design.jpg"
                  alt="제품과 적재 조건을 입력해 최적 브레이징 온도 프로파일을 생성하고 승인하는 AI 공정 설계 권고 화면"
                  loading="lazy"
                  width="839"
                  height="489"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Monitor</span> <h3>실시간 공정 관제</h3>
                <p>
                  3차원 설비 화면과 온도·
                  <wbr />
                  전류·
                  <wbr />
                  진공도 추이로 공정 이상을 실시간 감시합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>다중 신호 관제</b> 온도·
                    <wbr />
                    전류·
                    <wbr />
                    진공도·
                    <wbr />
                    환경 데이터를 같은 시간축으로 확인
                  </li>
                  <li>
                    <b>공정 이상 알림</b> 정상 패턴과 다른 변화의 위험도와 원인 후보 기록
                  </li>
                  <li>
                    <b>운영자 안전 조치</b> 경고 확인 후 공정 중단과 대응 이력 관리
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-live-monitoring.png"
                  alt="3차원 설비 화면과 실시간 온도 및 진공도 추이, 시스템 이벤트를 함께 보여주는 공정 관제 화면"
                  loading="lazy"
                  width="2884"
                  height="1881"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Analyze</span> <h3>공정 사이클 정밀 분석</h3>
                <p>완료된 공정을 시간순으로 재현해 AI 이상 판단 시점과 센서 변화를 검증합니다.</p>
                <ul className="pi-bul">
                  <li>
                    <b>초 단위 데이터 재생</b> 온도·
                    <wbr />
                    진공도·
                    <wbr />
                    공정 단계와 로그를 같은 시간축으로 동기화
                  </li>
                  <li>
                    <b>3차원 공정 재현</b> 설비와 제품 상태를 3차원 화면으로 재생
                  </li>
                  <li>
                    <b>이상 원인 추적</b> 감지 점수와 센서 변화를 비교해 원인 후보 확인
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-cycle-analysis.png"
                  alt="공정 사이클을 초 단위로 재생하며 3차원 설비, 온도, 진공도와 AI 이상 로그를 분석하는 화면"
                  loading="lazy"
                  width="2883"
                  height="2136"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Measure</span> <h3>AI 공정 KPI 분석</h3>
                <p>
                  설비·
                  <wbr />
                  공정·
                  <wbr />
                  수율·
                  <wbr />
                  품질 지표를 분석해 목표 달성도와 개선 순서를 확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>핵심 지표 통합</b> 설비·
                    <wbr />
                    에너지·
                    <wbr />
                    공정·
                    <wbr />
                    품질 성과를 목표와 비교
                  </li>
                  <li>
                    <b>종합 공정 진단</b> 취약 지표를 찾아 개선 우선순위 제시
                  </li>
                  <li>
                    <b>사이클 추이 비교</b> 기간·
                    <wbr />
                    사이클별 성과와 권고 적용 효과 검증
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-kpi-analysis.png"
                  alt="설비 건강도, 열 침투, 사이클, 수율과 품질 지표의 목표 달성도와 추이를 보여주는 AI 공정 KPI 분석 화면"
                  loading="lazy"
                  width="820"
                  height="528"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Operate</span> <h3>AI 모델 관리·운영</h3>
                <p>머신러닝 운영(MLOps) 체계로 모델 성능과 버전을 관리하고 재학습합니다.</p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      모델·
                      <wbr />
                      데이터 관리
                    </b>{" "}
                    학습 데이터와 모델 버전·
                    <wbr />
                    성능·
                    <wbr />
                    적용 이력 기록
                  </li>
                  <li>
                    <b>피드백 기반 재학습</b> 확정된 정상·
                    <wbr />
                    이상 판정으로 재학습 시점 판단
                  </li>
                  <li>
                    <b>검증 후 운영 적용</b> 기존 버전과 비교해 승인된 모델만 반영
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/qfactory-feature-mlops.png"
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
              <h2>AI로 이상 징후를 더 일찍 찾고 대응 방향까지 제시합니다</h2>
              <p className="sec-sub">
                기존 임계값 알람만으로 놓치기 쉬운 미세한 변화와 원인, 정비 시점을 AI로 보완합니다.
              </p>
            </div>
            <table className="cmp reveal" data-d="1">
              {" "}
              <caption className="sr-only">
                규칙 기반 임계 감시와 QFactory 제조 AI 비교표
              </caption>{" "}
              <thead>
                <tr>
                  <th scope="col">관점</th>
                  <th scope="col">규칙 기반 임계 감시</th>
                  <th scope="col" className="ok">
                    QFactory 제조 AI
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">이상 감지</th>
                  <td>고정 임계 초과 시 알람(사후)</td>
                  <td className="ok">정상 패턴 학습 후 미세 이탈 조기 감지</td>
                </tr>
                <tr>
                  <th scope="row">원인 파악</th>
                  <td>사람이 로그를 수동 추적</td>
                  <td className="ok">
                    생성형 AI 질의응답으로 원인·
                    <wbr />
                    조치 후보 제시
                  </td>
                </tr>
                <tr>
                  <th scope="row">공정 조건</th>
                  <td>고정 레시피 유지</td>
                  <td className="ok">
                    상태·
                    <wbr />
                    품질 데이터 기반 프로파일 권고
                  </td>
                </tr>
                <tr>
                  <th scope="row">정비</th>
                  <td>
                    주기·
                    <wbr />
                    고장 후 정비
                  </td>
                  <td className="ok">잔존수명 예측 기반 예지보전</td>
                </tr>
                <tr>
                  <th scope="row">운영</th>
                  <td>
                    수동 튜닝·
                    <wbr />
                    고정
                  </td>
                  <td className="ok">
                    데이터 변화 감시·
                    <wbr />
                    AI 모델 재학습
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="sec-note reveal" data-d="2">
              기존 알람을 없애는 것이 아니라, 그 위에 AI 판단을 더해 놓치기 쉬운 변화를 먼저 찾는
              방식으로 단계적으로 전환합니다.
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
      </PageShell>
    </>
  );
}
