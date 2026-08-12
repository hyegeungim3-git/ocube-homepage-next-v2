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

export default function SolutionTrafficPage() {
  return (
    <>
      <title>QVision 영상 인식 교통·안전 — 오큐브</title>
      <meta
        name="description"
        content="QVision — 영상 인식(Vision) AI로 교통을 분석하고 도로·작업 위험을 감지합니다."
      />
      <link rel="canonical" href={withBase("solution-traffic.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("solution-traffic.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/solution-traffic.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("solution-traffic.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="QVision 영상 인식 교통·안전 — 오큐브" />
      <meta
        property="og:description"
        content="QVision — 영상 인식(Vision) AI로 교통을 분석하고 도로·작업 위험을 감지합니다."
      />
      <meta property="og:url" content={withBase("solution-traffic.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QVision 영상 인식 교통·안전 — 오큐브" />
      <meta
        name="twitter:description"
        content="QVision — 영상 인식(Vision) AI로 교통을 분석하고 도로·작업 위험을 감지합니다."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"QVision","item":"@@BASE@@solution-traffic.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="solution-traffic" />
      <MobilePanel />
      <main>
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
            <SolCopy intro={solutionIntros["solution-traffic"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="assets/img/qvision-intro.png"
                  alt="QVision — AI 기반 교통 분석·안전 모니터링·스마트 관제 구성"
                  loading="lazy"
                  width="1672"
                  height="941"
                />{" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems["solution-traffic"]} />
        <section id="overview" className="sec-anchor">
          <div className="wrap">
            <SecHead copy={secHeads["solution-traffic:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src="assets/img/proto/qvision-overview.jpg"
                  alt="QVision AI 비전 기반 교통 분석·안전 솔루션 구성 — 영상 입력원부터 차량 인식·보행자 감지·교통량 분석·이상행동 감지·사고 알림·통합 관제 연계까지"
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists["solution-traffic:overview"]} />
              </div>
            </div>
          </div>
        </section>
        {/* Features — 실시간 검출 데모 */}
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>영상 속 차량과 도로 위험 상황을 실시간으로 분석합니다</h2>
              <p className="lead">
                카메라 영상에서 차종별 교통량을 자동으로 집계하고, 노면 파손을 실시간으로 찾아
                관제로 전달합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">TMS</span> <h3>실시간 교통량 분석</h3>
                <p>
                  도로 영상에서 차량을 검지·
                  <wbr />
                  분류해 차종별 통행량을 자동으로 집계하고 통계로 정리합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>차종별 자동 조사</b> 지나는 차량을 종류별로 구분해 통행량 자동 집계
                  </li>
                  <li>
                    <b>교차로 방향별 추적</b> 교차로 진행 방향별 교통량을 구분해 집계
                  </li>
                  <li>
                    <b>
                      고정식·
                      <wbr />
                      이동식 운용
                    </b>{" "}
                    설치형과 이동형 조사 환경 모두 대응
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/tms.png"
                  alt="TMS 실시간 교통량 검출 화면 — 차종 분류·통행량 계측"
                  loading="lazy"
                  width="560"
                  height="204"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Road Safety</span> <h3>실시간 포트홀 검출</h3>
                <p>
                  주행 영상에서 포트홀을 실시간으로 찾고, 위치와 검출 정보를 관제 시스템에
                  전달합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>다양한 형태 대응</b> 여러 모양과 크기의 포트홀 학습 데이터 적용
                  </li>
                  <li>
                    <b>
                      실시간 검출·
                      <wbr />
                      전송
                    </b>{" "}
                    주행 중 실시간 검출과 검출 정보 전송
                  </li>
                  <li>
                    <b>관제 연계</b> 수집한 검출 정보를 관제·
                    <wbr />
                    관리하는 시스템 제공
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/pothole.png"
                  alt="포트홀 실시간 검출 데모 화면 — 차량 영상 인식 모듈과 관제 서버"
                  loading="lazy"
                  width="600"
                  height="211"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* TMS 상세 */}
        <section id="tms" className="sec-anchor deploy tms-section">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">TMS · Traffic Measurement Solution</span>{" "}
              <h2>차종별 교통량을 자동으로 조사하고 통계로 제공합니다</h2>
              <p className="lead">
                AI 영상 분석으로 차량을 구분하고 방향별 통행량을 자동으로 집계합니다.
              </p>
            </div>
            <div className="feat-list tms-metrics reveal" data-d="1">
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  01
                </i>
                <b>학습 데이터</b>
                <span>다양한 도로 환경 데이터를 학습하여 검출 성능 고도화</span>
              </div>
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  02
                </i>
                <b>차종 구분</b>
                <span>국토교통부 기준 12차종에서 버스까지 총 13차종 구분</span>
              </div>
              <div className="feat">
                <i className="tms-no" aria-hidden="true">
                  03
                </i>
                <b>방향별 추적</b>
                <span>교차로 진행 방향에 맞춘 교통량 추적 검출</span>
              </div>
            </div>
            <div className="dep-grid tms-services reveal" data-d="2">
              <div className="dep-card" data-no="01">
                <div className="ic tms-icon" aria-hidden="true">
                  🚦
                </div>
                <h3>교통량 조사 시스템</h3>
                <p>
                  고정식·
                  <wbr />
                  이동식 카메라로 차종별 교통량 자동 조사
                </p>
              </div>
              <div className="dep-card" data-no="02">
                <div className="ic tms-icon" aria-hidden="true">
                  🚥
                </div>
                <h3>자동 신호등 제어</h3>
                <p>측정한 교통량을 신호 제어 시스템과 연계</p>
              </div>
              <div className="dep-card" data-no="03">
                <div className="ic tms-icon" aria-hidden="true">
                  🅿️
                </div>
                <h3>AI 주차 관제</h3>
                <p>주차면 점유와 진출입 차량 판별로 주차 관제 지원</p>
              </div>
            </div>
          </div>
        </section>
        <section id="detect" className="sec-anchor dark">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Incident Detection</span>{" "}
              <h2>
                도로·
                <wbr />
                시설의 위험 영상을 관제 이벤트로 전환합니다
              </h2>
              <p className="sec-sub">
                AI 기반 돌발상황 감지(AID)가 위험 장면을 분류해 관제 시스템과 담당자에게 알립니다.
              </p>
            </div>
            <div className="mod-grid reveal" data-d="1">
              <div className="mod">역주행</div>
              <div className="mod">정지 차량</div>
              <div className="mod">교통 정체</div>
              <div className="mod">보행자 진입</div>
              <div className="mod">낙하물</div>
              <div className="mod">
                저시정·
                <wbr />
                연기
              </div>
              <div className="mod">노면 파손(포트홀)</div>
              <div className="mod">
                통행량·
                <wbr />
                차종
              </div>
            </div>
            <p className="sec-note">
              검지 항목은 운영 요건에 맞춰 확장하며, 오탐을 줄이기 위해 사람 검수 단계를 둘 수
              있습니다. 개인영상정보 비식별 처리는 운영 요건과 관련 규정에 따라 적용합니다.
            </p>
            <div className="feat-list reveal" data-d="2" style={{ marginTop: "20px" }}>
              {" "}
              <FeatItems items={featLists["solution-traffic:detect"]} />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-traffic:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-traffic:fit"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["solution-traffic"]} />
      </SiteFooter>
    </>
  );
}
