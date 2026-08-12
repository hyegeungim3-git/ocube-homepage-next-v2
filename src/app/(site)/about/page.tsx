import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        path="about.html"
        title="회사소개 — 오큐브(주)"
        description="오큐브(주) 회사소개 — CEO 인사말, 비전 2026과 기업 미션·핵심가치, CI 안내."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@about.html"},{"@type":"ListItem","position":3,"name":"회사소개","item":"@@BASE@@about.html"}]}',
          ),
        }}
      />
      <PageShell slug="about">
        <section id="top" className="hero page-hero about-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('assets/video/company_wire_face.jpg')" }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="about-hero-orbit" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="wrap about-hero-copy">
            {" "}
            <span className="hero-badge">COMPANY · ABOUT</span>{" "}
            <h1 className="about-hero-title">
              {" "}
              <span>산업의 데이터와 기술을 잇고</span> <span>사람과 기술을 연결해</span>{" "}
              <span>데이터 그 이상의 가치를 만듭니다.</span>{" "}
            </h1>
            <p className="about-hero-lead">
              오큐브는 임베디드 소프트웨어와 시스템 통합에서 쌓은 역량을 바탕으로
              <br className="sb" /> 산업 AI 전환까지 수행합니다.
            </p>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>SCROLL</span>
            </div>
          </div>
        </section>
        {/* 1. CEO 인사말 */}
        <section id="greeting" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["about:greeting"]} />
            <div className="greet-layout">
              <div className="greet-quote rv d1">
                {" "}
                <span aria-hidden="true">01</span>{" "}
                <h3>
                  오큐브 홈페이지를
                  <br />
                  찾아주신 여러분,
                  <br />
                  환영합니다.
                </h3>
              </div>
              <div className="greet-copy">
                <div className="greet-body rv d1">
                  <p>오큐브에 변함없는 사랑과 신뢰를 보내주시는 고객 여러분께 감사드립니다.</p>
                  <p>
                    오큐브는 임베디드 플랫폼과 시스템 구축(SI) 기술을 기반으로 모바일·이동통신
                    분야에서 출발했습니다.
                  </p>
                  <p>
                    현재는 자동차·로봇·제조·금융·에너지 분야에서 쌓은 AI 전환 경험을 더해 고객에게
                    필요한 솔루션과 소프트웨어를 제공합니다.
                  </p>
                  <p>
                    고객의 요구를 실제로 사용할 수 있는 제품과 시스템으로 구현해, 고객의 사업 확장과
                    새로운 시장 개척을 함께하겠습니다.
                  </p>
                  <p>
                    고객·주주·임직원 모두가 행복하고, 믿음과 신뢰를 기반으로 묵묵히 바른 길을 가는{" "}
                    <b>건실한 100년 기업</b>의 역사를 만들어 가겠습니다.
                  </p>
                  <p>감사합니다.</p>
                </div>
                <div className="greet-sign rv d2">
                  {" "}
                  <span className="role">오큐브(주) 대표이사</span>{" "}
                  <span className="who">원창연</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2. 비전 · 미션 · 슬로건 */}
        <section id="vision" className="about-vision">
          <div className="about-vision-stage">
            <div className="wrap about-vision-wrap">
              <div className="about-vision-head">
                {" "}
                <span className="kicker" data-vision-head-label="">
                  Vision
                </span>{" "}
                <h2 data-vision-head-title="">비전</h2>
              </div>
              <div className="about-vision-panels">
                <article
                  className="about-vision-card is-active"
                  data-vision-panel="0"
                  data-vision-label="Vision"
                  data-vision-title="비전"
                  style={{ backgroundImage: "url('assets/video/platform_brain_cube.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Vision 2026</span> <h3>지금, AI 융합의 중심으로</h3>
                    <p>
                      산업 데이터와 업무 시스템, 실행 과정을 연결하는 AI 융합 기업으로
                      성장하겠습니다.
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">01</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="1"
                  data-vision-label="Mission"
                  data-vision-title="미션"
                  style={{ backgroundImage: "url('assets/video/company_wire_face.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Mission</span>{" "}
                    <h3>
                      AI로 산업의 기준을 바꾸고,
                      <br />
                      사람의 일과 삶에 가치를 더합니다.
                    </h3>
                    <p>
                      AI 융합 기술로 새로운 산업 표준을 만들고, 사람에게 더 중요한 판단과 창의적인
                      일을 남깁니다.
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">02</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="2"
                  data-vision-label="Slogan"
                  data-vision-title="슬로건"
                  style={{ backgroundImage: "url('assets/video/sec_autonomous.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Slogan</span> <h3>사람은 더 중요한 일에</h3>
                    <p>
                      반복적이고 정형화된 업무는 AI가 맡고, 사람은 더 중요한 판단과 창의적인 일에
                      집중하도록 돕습니다.
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">03</b>{" "}
                </article>
              </div>
              <div className="about-vision-nav" aria-label="비전 장면 선택">
                {" "}
                <button
                  type="button"
                  className="is-active"
                  data-vision-jump="0"
                  aria-label="비전 보기"
                  aria-pressed="true"
                >
                  <span>01</span>
                  <i></i>
                </button>{" "}
                <button
                  type="button"
                  data-vision-jump="1"
                  aria-label="미션 보기"
                  aria-pressed="false"
                >
                  <span>02</span>
                  <i></i>
                </button>{" "}
                <button
                  type="button"
                  data-vision-jump="2"
                  aria-label="슬로건 보기"
                  aria-pressed="false"
                >
                  <span>03</span>
                  <i></i>
                </button>{" "}
              </div>
            </div>
          </div>
        </section>
        {/* 3. 핵심 가치 */}
        <section id="value" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["about:value"]} />
            <div className="cv-grid">
              <div className="cv-item rv">
                <div className="cv-hex">
                  <span>
                    <svg
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {" "}
                      <path
                        d="M48 14v34"
                        stroke="#0075de"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path d="M48 15h19l-5 7 5 7H48z" fill="#0075de"></path>{" "}
                      <circle cx="23" cy="45" r="7" stroke="#141414" strokeWidth="3"></circle>{" "}
                      <circle cx="73" cy="45" r="7" stroke="#141414" strokeWidth="3"></circle>{" "}
                      <path
                        d="M12 84V68a11 11 0 0 1 11-11 11 11 0 0 1 11 11v16M62 84V68a11 11 0 0 1 11-11 11 11 0 0 1 11 11v16"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M34 60l14-8 14 8"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M48 62v9"
                        stroke="#0075de"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="2 6"
                      ></path>{" "}
                    </svg>
                  </span>
                </div>
                <h3>Challenge</h3>
                <p>
                  새로운 가능성에 과감히 도전하고,
                  <br />
                  실행의 책임은 회사가 함께 집니다.
                </p>
              </div>
              <div className="cv-item rv d1">
                <div className="cv-hex">
                  <span>
                    <svg
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {" "}
                      <path
                        d="M48 8c9 12 14 20 14 28a14 14 0 0 1-28 0c0-4 1.5-7.5 4-11 1 4 3.5 6 6.5 6.5C42 26 44 16 48 8Z"
                        stroke="#0075de"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M30 58h26a6 6 0 0 1 0 12H40"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M26 52h22a6 6 0 0 1 0 12H30"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M22 64h20a6 6 0 0 1 0 12H26a10 10 0 0 1-10-10V54"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </svg>
                  </span>
                </div>
                <h3>Passion</h3>
                <p>
                  결정한 일에 끝까지 집중해,
                  <br />
                  완성도 높은 결과를 만듭니다.
                </p>
              </div>
              <div className="cv-item rv d2">
                <div className="cv-hex">
                  <span>
                    <svg
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {" "}
                      <circle cx="48" cy="30" r="9" stroke="#0075de" strokeWidth="3"></circle>{" "}
                      <circle cx="31" cy="36" r="7" stroke="#0075de" strokeWidth="3"></circle>{" "}
                      <circle cx="65" cy="36" r="7" stroke="#0075de" strokeWidth="3"></circle>{" "}
                      <path
                        d="M34 55a14 14 0 0 1 28 0"
                        stroke="#0075de"
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>{" "}
                      <path
                        d="M14 84V64a7 7 0 0 1 12-5l10 10"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M82 84V64a7 7 0 0 0-12-5l-10 10"
                        stroke="#141414"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </svg>
                  </span>
                </div>
                <h3>Customer</h3>
                <p>
                  고객과 사용자의 목소리에 귀 기울여,
                  <br />
                  올바른 방향을 찾습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 4. CI */}
        <section id="ci" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["about:ci"]} />
            <div className="ci-board rv d1" style={{ marginTop: "26px" }}>
              <figure className="ci-cell">
                <img
                  src="assets/ci_01_t.png"
                  alt="OCUBE 좌우조합 로고 — Always in your life"
                  width="462"
                  height="140"
                />{" "}
              </figure>
              <div className="ci-div" aria-hidden="true"></div>
              <figure className="ci-cell">
                <img
                  src="assets/ci_02_t.png"
                  alt="OCUBE 심벌마크 상하조합"
                  style={{ maxWidth: "min(190px,60%)" }}
                  width="231"
                  height="231"
                />{" "}
              </figure>
            </div>
            <dl className="ci-dl rv d2">
              <div className="row">
                <dt>Identity</dt>
                <dd>
                  <b>OCUBE는 새로운 가능성(Cube)을 연다(Open)</b>는 뜻으로, O와 C를 큐브 형태로
                  형상화했습니다. 심벌마크는 가로형과 세로형 두 가지를 사용합니다.
                </dd>
              </div>
              <div className="row">
                <dt>Symbol Mark</dt>
                <dd>
                  심벌마크와 로고타입을 조합한 정식 표기형태입니다. 비례·간격·크기를 임의로 변경할
                  수 없으며, 주변 요소와 충분한 여백을 확보해 독립성을 유지해야 합니다.
                </dd>
              </div>
              <div className="row">
                <dt>Slogan</dt>
                <dd>
                  <b>Always in your life.</b> — 고객의 삶 속에 항상 함께하는 기술을 만듭니다.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </PageShell>
    </>
  );
}
