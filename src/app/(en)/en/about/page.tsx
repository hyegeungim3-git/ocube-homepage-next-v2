import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";

export default function AboutPage() {
  return (
    <>
      <title>About OCUBE — OCUBE CO., LTD.</title>
      <meta
        name="description"
        content="About OCUBE — a message from the CEO, Vision 2026, our mission and values, and the corporate identity."
      />
      <link rel="canonical" href={withBase("en/about.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("about.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/about.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("about.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="About OCUBE — OCUBE CO., LTD." />
      <meta
        property="og:description"
        content="About OCUBE — a message from the CEO, Vision 2026, our mission and values, and the corporate identity."
      />
      <meta property="og:url" content={withBase("en/about.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About OCUBE — OCUBE CO., LTD." />
      <meta
        name="twitter:description"
        content="About OCUBE — a message from the CEO, Vision 2026, our mission and values, and the corporate identity."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@en/about.html"},{"@type":"ListItem","position":3,"name":"회사소개","item":"@@BASE@@en/about.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="about" lang="en" />
      <MobilePanel lang="en" />
      <main>
        <section id="top" className="hero page-hero about-hero dark">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('../assets/video/company_wire_face.jpg')" }}
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
              <span>Joining industry’s data</span> <span>and technology to people —</span>{" "}
              <span>creating value beyond data.</span>{" "}
            </h1>
            <p className="about-hero-lead">
              On what we learned in embedded software and systems integration,
              <br className="sb" /> we now take on industrial AI transformation as well.
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
                  Welcome —
                  <br />
                  and thank you for
                  <br />
                  visiting OCUBE.
                </h3>
              </div>
              <div className="greet-copy">
                <div className="greet-body rv d1">
                  <p>To every customer who has kept faith with OCUBE, thank you.</p>
                  <p>
                    We began in mobile and telecommunications, built on embedded platforms and
                    systems integration.
                  </p>
                  <p>
                    Today we add AI transformation experience from automotive, robotics,
                    manufacturing, finance and energy, delivering the software our customers need.
                  </p>
                  <p>
                    We turn what customers ask for into products and systems they can genuinely use,
                    and we go with them as their business grows and reaches new markets.
                  </p>
                  <p>
                    Customers, shareholders and colleagues well served, trust as our ground —{" "}
                    <b>a company built to last a hundred years</b>. That is the history we mean to
                    write.
                  </p>
                  <p>Thank you.</p>
                </div>
                <div className="greet-sign rv d2">
                  {" "}
                  <span className="role">Chief Executive Officer, OCUBE CO., LTD.</span>{" "}
                  <span className="who">Won Chang-yeon</span>{" "}
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
                <h2 data-vision-head-title="">Vision</h2>
              </div>
              <div className="about-vision-panels">
                <article
                  className="about-vision-card is-active"
                  data-vision-panel="0"
                  data-vision-label="Vision"
                  data-vision-title="Vision"
                  style={{ backgroundImage: "url('../assets/video/platform_brain_cube.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Vision 2026</span>{" "}
                    <h3>Now — to the centre of AI convergence</h3>
                    <p>
                      We intend to grow into a company that joins industrial data, business systems
                      and the work itself through AI.
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">01</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="1"
                  data-vision-label="Mission"
                  data-vision-title="미션"
                  style={{ backgroundImage: "url('../assets/video/company_wire_face.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Mission</span>{" "}
                    <h3>
                      Changing what industry takes as standard,
                      <br />
                      and adding something to people’s work and lives.
                    </h3>
                    <p>
                      We set new standards through AI, and leave people the judgement and the
                      creative work that matter more.
                    </p>
                  </div>{" "}
                  <b aria-hidden="true">02</b>{" "}
                </article>
                <article
                  className="about-vision-card"
                  data-vision-panel="2"
                  data-vision-label="Slogan"
                  data-vision-title="슬로건"
                  style={{ backgroundImage: "url('../assets/video/sec_autonomous.jpg')" }}
                >
                  <div className="about-vision-copy">
                    {" "}
                    <span className="kicker">Slogan</span> <h3>People, on what matters more</h3>
                    <p>
                      AI takes the repetitive and the routine, so that people can put themselves
                      into judgement and creation.
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
                  Take on what is new without flinching —
                  <br />
                  the company carries the responsibility with you.
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
                  Once decided, see it through —
                  <br />
                  and finish it properly.
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
                  Listen to customers and users —
                  <br />
                  the right direction is in what they say.
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
                  src="../assets/ci_01_t.png"
                  alt="OCUBE 좌우조합 로고 — Always in your life"
                  width="462"
                  height="140"
                />{" "}
              </figure>
              <div className="ci-div" aria-hidden="true"></div>
              <figure className="ci-cell">
                <img
                  src="../assets/ci_02_t.png"
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
                  <b>OCUBE means opening (Open) new possibilities (Cube)</b>, with the O and the C
                  drawn as a cube. The symbol comes in two forms, horizontal and vertical.
                </dd>
              </div>
              <div className="row">
                <dt>Symbol Mark</dt>
                <dd>
                  This is the official lock-up of symbol and logotype. Proportion, spacing and size
                  must not be altered, and enough clear space must be left around it to keep it
                  distinct.
                </dd>
              </div>
              <div className="row">
                <dt>Slogan</dt>
                <dd>
                  <b>Always in your life.</b> — technology that stays with you, wherever life goes.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
