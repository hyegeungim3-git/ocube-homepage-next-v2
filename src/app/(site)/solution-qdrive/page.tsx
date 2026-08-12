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

export default function SolutionQdrivePage(): JSX.Element {
  return (
    <>
      <PageMeta
        path="solution-qdrive.html"
        title="QDrive AI 모빌리티 운영 플랫폼 — 오큐브"
        description="QDrive — 운행기록·차량진단·위치·에너지 데이터를 AI로 분석해 안전운전, 차량 운영, 전기차 충전과 탄소 성과를 최적화하는 모빌리티 플랫폼."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"QDrive","item":"@@BASE@@solution-qdrive.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="solution-qdrive"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-qdrive"]} />
          </>
        }
      >
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{ backgroundImage: "url('assets/video/sec_autonomous.jpg')" }}
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
                  src="assets/media/demo/stage/qdrive.mp4"
                  poster="assets/media/demo/stage/qdrive.jpg"
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
                  src="assets/img/overview-qdrive.png"
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
              <span className="pill">디지털 운행기록계(DTG)</span>
              <span className="pill">차량 진단(OBD · CAN)</span>
              <span className="pill">GPS · 정밀측위(RTK)</span>
              <span className="pill">LTE · MQTT</span>
              <span className="pill">충전 통신(OCPP · ISO 15118)</span>
              <span className="pill">탄소 산정(GHG · ISO 14064)</span>{" "}
            </div>
          </div>
        </section>
        {/* Features — 프로토타입 화면 */}
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>AI로 모빌리티 운영의 다음 행동을 제안합니다</h2>
              <p className="lead">
                운영자·
                <wbr />
                차량 관리자·
                <wbr />
                운전자가 같은 데이터를 바탕으로 위험과 낭비를 줄일 개선 방향을 함께 확인합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Operations</span> <h3>차량 통합 관제</h3>
                <p>
                  차량 위치와 운행 상태, 사고·고장·위험운전 이벤트를 통합해 전체 플릿의 흐름과 우선
                  대응 대상을 빠르게 파악합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>실시간 통합 현황</b> 차량 위치·운행률·가동 상태·돌발 상황을 지도와 지표로
                    확인
                  </li>
                  <li>
                    <b>위험구간 분석</b> 급가속·급감속·급회전이 반복되는 구간을 날씨·도로 맥락과
                    함께 파악
                  </li>
                  <li>
                    <b>운영 성과 비교</b> 차량·운전자·운행 구간별 안전·연료·운영 효율을 같은
                    기준으로 비교
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-city.jpg"
                  alt="시티 대시보드 예시 화면 — 실시간 차량 위치·운행 상태·위험운전 히트맵"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Fleet</span> <h3>차량·운전자 단위 운영</h3>
                <p>
                  차량과 운전자별 운행 상태를 정리하고, 고장 징후와 운행 수요를 바탕으로
                  정비·배차·투입 계획을 조정합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>차량·운전자별 현황</b> 운전점수·연료·가동률·운행거리와 이벤트 이력을 단위별로
                    확인
                  </li>
                  <li>
                    <b>예방정비 예측</b> 차량 진단(OBD)·CAN 신호로 고장 가능성과 정비 시점을 미리
                    파악
                  </li>
                  <li>
                    <b>운행 계획·기록</b> 수요에 맞춰 차량 투입을 조정하고 운행기록과 처리 이력을
                    관리
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-ops.jpg"
                  alt="플릿 운영 대시보드 예시 화면 — 차량·운전자별 운전점수·연료·가동률·운행 상태"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Management</span> <h3>운영 성과·투자 지표</h3>
                <p>
                  연료비 절감과 예방정비 효과, 운전자 인센티브를 합산해 월별 운영 성과와 다음 투자
                  판단에 필요한 지표를 보여줍니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>월 손익 구성</b> 연료비 절감·
                    <wbr />
                    정비 회피 비용·
                    <wbr />
                    인센티브를 합산한 월 순효과
                  </li>
                  <li>
                    <b>월별 절감 추이</b> 도입 이후 절감액 변화를 기간별 그래프로 표시
                  </li>
                  <li>
                    <b>
                      성과 분포·
                      <wbr />
                      벤치마크
                    </b>{" "}
                    운전자·차량군별 성과와 유사 운영군의 절감률 비교
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-mgmt.jpg"
                  alt="모빌리티 경영·투자 예시 화면 — 월 손익 효과·연료비 절감·운전자 성과·투자 지표"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Driver</span> <h3>운전자 맞춤형 안전 코칭</h3>
                <p>
                  도로·날씨·운행 조건을 반영해 운전 행동을 설명하고, 안전과 에너지 효율을 높일 개선
                  방법을 함께 제공합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>맥락 보정 평가</b> 도로 혼잡·날씨·운행 조건을 반영해 단순 점수보다 합리적인
                    평가 제공
                  </li>
                  <li>
                    <b>행동 단위 코칭</b> 공회전·정속 유지·신호 예측 감속처럼 바로 실천할 항목 제시
                  </li>
                  <li>
                    <b>개선 효과 확인</b> 코칭 적용 전후의 안전점수·연료·에너지 사용량 변화를 비교
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-report.jpg"
                  alt="운전자 앱 리포트 예시 화면 — AI가 발견한 개인 운전 패턴과 개선 행동 코칭"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Carbon</span>{" "}
                <h3>
                  탄소·
                  <wbr />
                  에너지 절감 분석
                </h3>
                <p>
                  운행기록(DTG)의 주행거리와 연비를 기준으로 배출 절감량을 산정하고, 운전 습관이
                  연비에 미치는 영향까지 함께 봅니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      주행·
                      <wbr />
                      연비 기준 산정
                    </b>{" "}
                    운행기록(DTG)의 주행거리와 연비로 배출 절감량 산정
                  </li>
                  <li>
                    <b>안전운전 ↔ 연비 상관</b> 운전 습관이 연비에 미치는 영향을 상관 지표로 분석
                  </li>
                  <li>
                    <b>기간별 추이</b> 개선 효과를 기간 단위로 누적 표시
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-carbon.jpg"
                  alt="탄소중립 분석 예시 화면 — 주행거리·연비 개선·배출 절감량·안전운전↔연비 상관 분석"
                  loading="lazy"
                  width="1600"
                  height="1000"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Verification</span> <h3>도입 효과 비교·검증</h3>
                <p>
                  AI를 적용하지 않은 조건과 코칭 전후의 운전 그룹을 비교해 개선 효과의 근거를
                  남깁니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>미적용 가정과 비교</b> 같은 조건에서 AI를 쓰지 않았을 때와 견준 효과
                  </li>
                  <li>
                    <b>그룹별 코칭 효과</b> 운전 그룹을 나눠 코칭 적용 전후 비교
                  </li>
                  <li>
                    <b>교차 검증</b> 차량 자가진단(OBD)과 운행기록(DTG) 대조로 수치 근거 확보
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/proto/qdrive-verify.jpg"
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
              <h2>차량과 운영 환경에서 나오는 데이터를 하나의 기준으로 연결합니다</h2>
              <p className="sec-sub">
                운행·진단·위치·통신·충전 데이터를 표준으로 연결해 분석·운영에 활용합니다.
              </p>
            </div>
            <table className="cmp th-narrow reveal" data-d="1">
              {" "}
              <caption className="sr-only">
                모빌리티 데이터별 수집 항목·연결 장치·표준 인터페이스
              </caption>{" "}
              <thead>
                <tr>
                  <th scope="col">데이터</th>
                  <th scope="col" className="ok">
                    수집·분석 항목
                  </th>
                  <th scope="col">연결 장치</th>
                  <th scope="col">표준·인터페이스</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">운행기록</th>
                  <td className="ok">속도·RPM·주행거리·급가감속·운전 습관</td>
                  <td>디지털 운행기록계(DTG)</td>
                  <td>운행기록 표준 · 시리얼·USB</td>
                </tr>
                <tr>
                  <th scope="row">차량 진단</th>
                  <td className="ok">엔진·연료·배터리·고장코드·소모품 상태</td>
                  <td>차량 진단 장치(OBD)</td>
                  <td>OBD-II PID · CAN·CAN-FD</td>
                </tr>
                <tr>
                  <th scope="row">위치·이동</th>
                  <td className="ok">실시간 좌표·속도·이동 경로·운행 구간</td>
                  <td>GPS·GNSS·정밀측위 수신기</td>
                  <td>NMEA 0183 · RTK·RTCM</td>
                </tr>
                <tr>
                  <th scope="row">데이터 전송</th>
                  <td className="ok">차량·센서·운영 데이터 실시간 전송</td>
                  <td>차량용 게이트웨이·통신 모듈</td>
                  <td>LTE Cat M1 · MQTT·HTTPS</td>
                </tr>
                <tr>
                  <th scope="row">에너지·충전</th>
                  <td className="ok">배터리 상태·전력 사용량·충전 세션·충방전 계획</td>
                  <td>BMS·충전기·충전 인프라</td>
                  <td>OCPP · ISO 15118</td>
                </tr>
                <tr>
                  <th scope="row">탄소 배출</th>
                  <td className="ok">주행·연료·전력 소비 기반 배출량과 저감량</td>
                  <td>운행·진단·에너지 데이터 조합</td>
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
            <span className="kicker">Business Impact</span> <h2>QDrive 도입 효과</h2>
          </div>
          <div className="wrap">
            <div className="qeff-grid reveal" data-d="1">
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  01
                </span>{" "}
                <h3>통합 차량 운영</h3>
                <p>
                  위치·운행·진단 상태를 한 화면에서 확인하고
                  <br />
                  차량과 운영 조직이 같은 데이터를 공유
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  02
                </span>{" "}
                <h3>안전운전·정비 개선</h3>
                <p>
                  위험운전과 고장 징후를 미리 파악하고
                  <br />
                  운전자 코칭과 예방정비에 반영
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  03
                </span>{" "}
                <h3>에너지·충전 최적화</h3>
                <p>
                  차량별 배터리와 전력 사용량을 분석해
                  <br />
                  충전 일정과 차량 투입 계획을 최적화
                </p>
              </div>
              <div className="qeff-card">
                <span className="qeff-no" aria-hidden="true">
                  04
                </span>{" "}
                <h3>탄소 성과 관리</h3>
                <p>
                  주행·연료·전력 데이터로 배출량을 계산하고
                  <br />
                  운영 개선에 따른 저감 효과를 검증
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
      </PageShell>
    </>
  );
}
