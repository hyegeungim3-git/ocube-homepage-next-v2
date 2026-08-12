import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { evcpStats } from "@/data/applications";
import { StatItems } from "@/components/section/stat-items";
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

export default function SolutionEvcpPage() {
  return (
    <>
      <PageMeta
        path="solution-evcp.html"
        title="EVCP AI 전기차 충전 운영 플랫폼 — 오큐브"
        description="EVCP — 충전기·이용·결제·에너지 데이터를 연결하고 AI로 장애와 수요를 예측해 전기차 충전 운영을 최적화하는 플랫폼."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"EVCP","item":"@@BASE@@solution-evcp.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="solution-evcp"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["solution-evcp"]} />
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
            <SolCopy intro={solutionIntros["solution-evcp"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src="assets/img/evcp.png"
                  alt="EVCP 화면 — 프로토타입 예시"
                  loading="lazy"
                  width="1746"
                  height="748"
                />{" "}
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
                <img
                  className="shot"
                  src="assets/img/overview-evcp.png"
                  alt="EVCP가 전기차 충전기의 실시간 관제와 사용자·결제·정산·분석·안전 관리를 연결하는 모습"
                  loading="lazy"
                  width="1565"
                  height="1005"
                />{" "}
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
              <span className="kicker">AI Operations Console</span>{" "}
              <h2>충전 운영과 AI 분석을 한 화면에서 확인합니다</h2>
              <p className="lead">
                충전소·
                <wbr />
                충전기 상태와 이용 데이터를 함께 분석해 장애 대응과 운영 최적화에 필요한 정보를
                제공합니다.
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Monitoring</span> <h3>충전소 통합 관제</h3>
                <p>
                  운영 중인 충전소와 충전기 상태를 지도에서 확인하고, 상세 정보와 이용 이력을 바로
                  조회합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      사업자·
                      <wbr />
                      지역별 선택
                    </b>{" "}
                    사업자별·
                    <wbr />
                    지역별 목록에서 운영 충전소 선택
                  </li>
                  <li>
                    <b>
                      충전기별 상태·
                      <wbr />
                      이력
                    </b>{" "}
                    충전기 상태와 최근 이용 이력을 한 화면에서 확인
                  </li>
                  <li>
                    <b>지도에서 직접 선택</b> 원하는 충전소를 지도에서 바로 선택
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/evcp.png"
                  alt="EVCP 충전소 관제 화면 — 지도 기반 운영 충전소·충전기 상태"
                  loading="lazy"
                  width="1746"
                  height="748"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Dashboard</span> <h3>운영 현황 대시보드</h3>
                <p>
                  필요한 차트를 선택해 배치하고, 충전기 상태와 매출·
                  <wbr />
                  충전량을 실시간으로 확인합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>월별 매출</b> 기간별 매출 추이 차트
                  </li>
                  <li>
                    <b>충전량 통계</b> 월별 충전량 집계로 운영 규모 파악
                  </li>
                  <li>
                    <b>가동 충전기 수</b> 지역별 충전가능·
                    <wbr />
                    충전중·
                    <wbr />
                    통신오류·
                    <wbr />
                    고장 상태 집계
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/evcp-dash.jpg"
                  alt="EVCP 다이나믹 대시보드 — 월별 매출·충전량·가동 충전기 수 차트"
                  loading="lazy"
                  width="1400"
                  height="298"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">AI Insight</span>{" "}
                <h3>
                  장애·
                  <wbr />
                  수요·
                  <wbr />
                  에너지 예측
                </h3>
                <p>
                  충전 상태·
                  <wbr />
                  오류 이력·
                  <wbr />
                  이용 패턴·
                  <wbr />
                  에너지 사용량을 AI로 분석해 운영자가 먼저 확인할 대상을 제안합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>이상 징후 예측</b> 반복 오류와 상태 변화를 분석해 장애 가능성이 높은 충전기
                    우선 점검
                  </li>
                  <li>
                    <b>충전 수요 예측</b> 시간·
                    <wbr />
                    요일·
                    <wbr />
                    지역별 이용 패턴으로 예상 수요와 혼잡 구간 파악
                  </li>
                  <li>
                    <b>에너지 운영 권고</b> 전력 사용량과 요금 조건을 고려해 부하 분산과 운영 시간
                    조정 지원
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/overview-evcp.png"
                  alt="충전기 상태와 이용 통계를 분석해 이상 징후·수요·에너지 운영을 지원하는 EVCP 구성"
                  loading="lazy"
                  width="1565"
                  height="1005"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Event</span> <h3>실시간 이벤트 관제</h3>
                <p>
                  충전기 상태 이벤트를 실시간으로 수집해 목록과 지도에 함께 표시하고, 상태 변경
                  시각까지 추적합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>이벤트 실시간 표시</b> 충전 시작·
                    <wbr />
                    대기·
                    <wbr />
                    연결 해제 등 상태 변경을 발생 순서대로 기록
                  </li>
                  <li>
                    <b>지도 기반 위치 확인</b> 이벤트가 발생한 충전소 위치를 지도에 동시 표시
                  </li>
                  <li>
                    <b>상태 변경 이력 추적</b> 충전기 아이디·
                    <wbr />
                    충전소명·
                    <wbr />
                    변경 시각 기록
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/evcp-event.jpg"
                  alt="EVCP 실시간 이벤트 관제 — 충전기 상태 이벤트 목록과 지도 표시"
                  loading="lazy"
                  width="1400"
                  height="446"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Search</span> <h3>지도 기반 충전소 검색</h3>
                <p>
                  로밍 제휴 충전소와 충전기의 상세 정보를 지도에서 검색합니다. 사용자 앱과 관리자
                  앱이 같은 지도 모듈을 사용합니다.
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      충전소·
                      <wbr />
                      충전기 상세
                    </b>{" "}
                    지도 기반 충전소·
                    <wbr />
                    충전기 상세 정보 제공
                  </li>
                  <li>
                    <b>주소 기반 검색</b> 주소로 충전소를 찾는 검색 기능
                  </li>
                  <li>
                    <b>
                      운영기관·
                      <wbr />
                      종류별 필터
                    </b>{" "}
                    운영기관·
                    <wbr />
                    충전기 종류(완속·
                    <wbr />
                    급속·
                    <wbr />
                    초급속)별 필터링
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src="assets/img/evcp-search.jpg"
                  alt="EVCP 지도 기반 충전소 검색 — 충전소·충전기 상세 정보와 주소 검색"
                  loading="lazy"
                  width="1200"
                  height="348"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* 서비스 구조 */}
        <section id="msa" className="sec-anchor deploy">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Service Architecture</span>{" "}
              <h2>기능별 서비스를 분리해 장애 영향은 줄이고 확장은 쉽게 합니다</h2>
              <p className="lead">
                회원·충전기 연동(OCPP)·결제·로밍을 독립 서비스로 구성해 장애 영향을 줄이고 필요한
                기능을 쉽게 확장합니다.
              </p>
            </div>
            <div className="dep-grid reveal" data-d="1">
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  👤
                </div>
                <h3>회원 관리</h3>
                <p>
                  회원 가입·
                  <wbr />
                  인증·
                  <wbr />
                  요금제·
                  <wbr />
                  이용 이력을 독립 서비스로 관리
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  🔌
                </div>
                <h3>충전기 연동(OCPP)</h3>
                <p>
                  충전기별 OCPP 버전·
                  <wbr />
                  호환성 확인 후 게이트웨이 연결
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  💳
                </div>
                <h3>결제</h3>
                <p>
                  충전 세션별 과금·
                  <wbr />
                  정산과 결제대행(PG) 연동
                </p>
              </div>
              <div className="dep-card">
                <div className="ic" aria-hidden="true">
                  🔗
                </div>
                <h3>로밍</h3>
                <p>사업자 간 로밍으로 이용 가능한 충전소 범위 확대</p>
              </div>
            </div>
            <figure
              className="shot-fig reveal"
              data-d="2"
              style={{ marginTop: "clamp(26px,3vw,42px)" }}
            >
              {" "}
              <img
                className="shot fit"
                src="assets/img/evcp-msa.jpg"
                alt="EVCP 서비스 구조도 — 클라이언트(WEB·WAS)와 퍼블릭 클라우드의 회원·충전기연동(OCPP)·App·결제·로밍 서비스"
                loading="lazy"
                width="1000"
                height="862"
              />{" "}
            </figure>
          </div>
        </section>
        <section id="proof" className="sec-anchor">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Reference</span>{" "}
              <h2>구축 경험을 제품 자산으로 전환했습니다</h2>
            </div>
            <div className="hero-stats reveal">
              <StatItems items={evcpStats} />
            </div>
            <div className="case-grid two">
              <article className="case-card reveal" data-d="1">
                <span className="dom">에너지 · SK에너지</span> <h3>EV 충전 플랫폼 구축</h3>
                <p className="csi">
                  <b>과제</b> 충전 사업 진출에 필요한 회원·
                  <wbr />
                  연동·
                  <wbr />
                  결제·
                  <wbr />
                  관제 플랫폼 부재
                </p>
                <p className="csi">
                  <b>해결</b> 국제 충전 통신 표준(OCPP) 기반 마이크로서비스 구축·
                  <wbr />
                  운영 → 자체 제품 EVCP로 자산화
                </p>
                <p className="csi">
                  <b>성과</b> 충전 사업에 필요한 기능 전체를 재사용 가능한 자체 플랫폼으로 확보
                </p>
              </article>
              <article className="case-card reveal" data-d="2">
                <span className="dom">자체 모듈</span> <h3>OCPP LTE 모듈</h3>
                <p className="csi">
                  Mini PCI LTE Cat M1 통신 모듈(2025) 자체 개발 — 충전 통신 하드웨어까지 직접 개발한
                  경험
                </p>
              </article>
            </div>
            <div className="rv" style={{ marginTop: "36px", textAlign: "center" }}>
              <a href="references.html" className="btn btn-ghost">
                전체 구축 사례 보기 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["solution-evcp:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards["solution-evcp:fit"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
