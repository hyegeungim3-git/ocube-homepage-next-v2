import type { JSX } from "react";
import { assetPath } from "@/config/i18n";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { T, localizeLd, t } from "@/i18n/translate";

export function AboutPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="about.html"
        title={t(lang, "회사소개 — 오큐브(주)")}
        description={t(
          lang,
          "오큐브(주) 회사소개 — CEO 인사말, 비전 2026과 기업 미션·핵심가치, CI 안내.",
        )}
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@about.html"},{"@type":"ListItem","position":3,"name":"회사소개","item":"@@BASE@@about.html"}]}',
            ),
          ),
        }}
      />
      <PageShell lang={lang} slug="about">
        <section id="top" className="hero page-hero about-hero dark">
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url('${assetPath("assets/video/company_wire_face.jpg", lang)}')`,
            }}
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
              <span>
                <T l={lang}>기술과 사람을 연결해</T>
              </span>{" "}
              <span>
                <T l={lang}>새로운 가치를 만듭니다.</T>
              </span>{" "}
            </h1>
            <p className="about-hero-lead">
              <T l={lang}>
                오큐브는 창립부터 임베디드에서 AI까지, 산업의 기술을 사람이 실제로 쓸 수 있는 제품과
                시스템으로 만들어 왔습니다.
              </T>
              <br className="sb" />{" "}
              <T l={lang}>우리가 다루는 기술로 사람과 비즈니스의 더 나은 내일을 만듭니다.</T>
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
            <SecHead copy={secHeads[lang]["about:greeting"]} />
            <div className="greet-layout">
              <div className="greet-quote rv d1">
                {" "}
                <span aria-hidden="true">01</span>{" "}
                <h3>
                  <T l={lang}>오큐브 홈페이지를</T>
                  <br />
                  <T l={lang}>찾아주신 여러분,</T>
                  <br />
                  <T l={lang}>환영합니다.</T>
                </h3>
              </div>
              <div className="greet-copy">
                <div className="greet-body rv d1">
                  <p>
                    <T l={lang}>
                      오큐브에 늘 변함없는 사랑과 신뢰를 보내주시는 고객 여러분께 깊은 감사의 말씀을
                      드립니다.
                    </T>
                  </p>
                  <p>
                    <T l={lang}>
                      오큐브는 임베디드 솔루션과 시스템 구축(SI) 기술을 바탕으로 모바일·이동통신
                      분야를 시작으로 자동차·로봇·제조·금융·에너지 등 폭넓은 산업 영역에 AX(AI 전환)
                      기술을 접목하여, 고객에게 꼭 필요한 솔루션으로 새로운 부가가치를 창출해 나가고
                      있습니다.
                    </T>
                  </p>
                  <p>
                    <T l={lang}>
                      사용자에게 편리함과 실질적인 가치를 더하는 기술로 고객과 함께 시장을 개척하고,
                      그 지평을 넓혀가며 함께 성장하겠습니다.
                    </T>
                  </p>
                  <p>
                    <T l={lang}>
                      고객과 주주, 그리고 모든 임직원이 함께 행복할 수 있도록, 믿음과 신뢰를
                      바탕으로 우직하게 바른 길을 걸어가는
                    </T>{" "}
                    <b>
                      <T l={lang}>건실한 100년 기업</T>
                    </b>
                    <T l={lang}>으로 나아가겠습니다.</T>
                  </p>
                  <p>
                    <T l={lang}>감사합니다.</T>
                  </p>
                </div>
                <div className="greet-sign rv d2">
                  {" "}
                  <span className="role">
                    <T l={lang}>오큐브(주) 대표이사</T>
                  </span>{" "}
                  <span className="who">
                    <T l={lang}>원창연</T>
                  </span>{" "}
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
                <h2 data-vision-head-title="">
                  <T l={lang}>비전</T>
                </h2>
              </div>
              <div className="about-vision-panels">
                <article
                  className="about-vision-card is-active"
                  data-vision-panel="0"
                  data-vision-label="Vision"
                  data-vision-title={t(lang, "비전")}
                  style={{
                    backgroundImage: `url('${assetPath("assets/video/platform_brain_cube.jpg", lang)}')`,
                  }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Vision</span>{" "}
                    <h3>
                      <T l={lang}>100년 기업, 글로벌 지주회사</T>
                    </h3>
                  </div>{" "}
                  <b aria-hidden="true">01</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="1"
                  data-vision-label="Vision 2030"
                  data-vision-title={t(lang, "비전 2030")}
                  style={{
                    backgroundImage: `url('${assetPath("assets/video/business_robot_arm.jpg", lang)}')`,
                  }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Vision 2030</span>{" "}
                    <h3>
                      <T l={lang}>지금, AI 융합의 중심으로</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        산업의 기술과 사람의 일을 잇는 AI 융합 기업으로 성장해 나가겠습니다.
                      </T>
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">02</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="2"
                  data-vision-label="Mission"
                  data-vision-title={t(lang, "미션")}
                  style={{
                    backgroundImage: `url('${assetPath("assets/video/company_wire_face.jpg", lang)}')`,
                  }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Mission</span>{" "}
                    <h3>
                      <T l={lang}>불편함을 기술로 해결하고, 삶의 가치를 더합니다.</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        고객의 만족, 주주의 가치, 임직원의 행복 — 그 성장을 함께 만들어갑니다.
                      </T>
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">03</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="3"
                  data-vision-label="Slogan"
                  data-vision-title={t(lang, "슬로건")}
                  style={{
                    backgroundImage: `url('${assetPath("assets/video/sec_autonomous.jpg", lang)}')`,
                  }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Slogan</span> <h3>Always in your life.</h3>
                    <p>
                      <T l={lang}>사람은 더 중요한 일에</T>
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">04</b>{" "}
                </article>
              </div>
              <div className="about-vision-nav" aria-label={t(lang, "비전 장면 선택")}>
                {" "}
                <button
                  type="button"
                  className="is-active"
                  data-vision-jump="0"
                  aria-label={t(lang, "비전 보기")}
                  aria-pressed="true"
                >
                  <span>01</span>
                  <i></i>
                </button>{" "}
                <button
                  type="button"
                  data-vision-jump="1"
                  aria-label={t(lang, "비전 2030 보기")}
                  aria-pressed="false"
                >
                  <span>02</span>
                  <i></i>
                </button>{" "}
                <button
                  type="button"
                  data-vision-jump="2"
                  aria-label={t(lang, "미션 보기")}
                  aria-pressed="false"
                >
                  <span>03</span>
                  <i></i>
                </button>{" "}
                <button
                  type="button"
                  data-vision-jump="3"
                  aria-label={t(lang, "슬로건 보기")}
                  aria-pressed="false"
                >
                  <span>04</span>
                  <i></i>
                </button>{" "}
              </div>
            </div>
          </div>
        </section>
        {/* 3. 핵심 가치 */}
        <section id="value" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["about:value"]} />
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
                  <T l={lang}>과감히 도전하십시오.</T>
                  <br />
                  <T l={lang}>책임은 회사가 집니다.</T>
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
                  <T l={lang}>시작했으면 끝까지</T>
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
                  <T l={lang}>답은 고객에게 있다.</T>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 4. CI */}
        <section id="ci" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["about:ci"]} />
            <div className="ci-board rv d1" style={{ marginTop: "26px" }}>
              <figure className="ci-cell">
                <img
                  src={assetPath("assets/ci_01_t.png", lang)}
                  alt={t(lang, "OCUBE 좌우조합 로고 — Always in your life")}
                  width="462"
                  height="140"
                />{" "}
              </figure>
              <div className="ci-div" aria-hidden="true"></div>
              <figure className="ci-cell">
                <img
                  src={assetPath("assets/ci_02_t.png", lang)}
                  alt={t(lang, "OCUBE 심벌마크 상하조합")}
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
                  <b>
                    <T l={lang}>OCUBE는 Open과 Cube의 합성어로, 미지의 세상(Cube)을 연다(Open)</T>
                  </b>
                  <T l={lang}>는 뜻으로, O와 C를 큐브 형태로 형상화했습니다.</T>
                </dd>
              </div>
              <div className="row">
                <dt>Symbol Mark</dt>
                <dd>
                  <T l={lang}>심벌마크는 가로형과 세로형 두 가지를 사용합니다.</T>{" "}
                  <T l={lang}>
                    심벌마크와 로고타입을 조합한 정식 표기형태입니다. 비례·간격·크기를 임의로 변경할
                    수 없으며, 주변 요소와 충분한 여백을 확보해 독립성을 유지해야 합니다.
                  </T>
                </dd>
              </div>
              <div className="row">
                <dt>Slogan</dt>
                <dd>
                  <b>Always in your life.</b> <T l={lang}>— 사람은 더 중요한 일에</T>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </PageShell>
    </>
  );
}
