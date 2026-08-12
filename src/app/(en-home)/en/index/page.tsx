import { applyBase, withBase } from "@/config/site";
import { homeSlides } from "@/data/home-hero.en";
import { HomeSlides } from "@/components/section/home-slides";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { HomeCaseLinks } from "@/components/section/bcase-cards";
import { homeCases } from "@/data/cases.en";

export default function HomePage() {
  return (
    <>
      <title>
        OCUBE — From Embedded to AI · Industrial AI Solutions
      </title>
      <meta name="description" content="OCUBE builds on its embedded and systems integration experience, adding its own industrial AI platform Cubeon to solve problems in manufacturing, mobility, energy and enterprise operations. Since 2007." />
      <link rel="canonical" href={withBase("en/")} />
      <link rel="alternate" hrefLang="ko" href={withBase("")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("")} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="OCUBE — From Embedded to AI · Industrial AI Solutions" />
      <meta property="og:description" content="OCUBE builds on its embedded and systems integration experience, adding its own industrial AI platform Cubeon to solve problems in manufacturing, mobility, energy and enterprise operations. Since 2007." />
      <meta property="og:url" content={withBase("en/")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OCUBE — From Embedded to AI · Industrial AI Solutions" />
      <meta name="twitter:description" content="OCUBE builds on its embedded and systems integration experience, adding its own industrial AI platform Cubeon to solve problems in manufacturing, mobility, energy and enterprise operations. Since 2007." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"오큐브 주식회사\",\"alternateName\":\"OCUBE Co., Ltd.\",\"url\":\"@@BASE@@en/\",\"logo\":\"@@BASE@@en/assets/og-image.jpg\",\"foundingDate\":\"2007-03-29\",\"description\":\"임베디드·SI 기반의 산업 AI 솔루션 기업\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"수성구 알파시티1로31길 18\",\"addressLocality\":\"대구광역시\",\"addressCountry\":\"KR\"},\"telephone\":\"+82-53-313-5333\",\"email\":\"sales@ocube.co.kr\"}") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"오큐브(주)\",\"url\":\"@@BASE@@en/\"}") }} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <SiteHeader slug="index" lang="en" navLabel="Main navigation" />
      <MobilePanel navLabel="Mobile navigation" ctaLabel="Contact" />
      <main>
        <section id="top" className="hero">
          <div className="home-hero-shell">
            <div className="hslides">
              <HomeSlides lang="en" items={homeSlides} />
            </div>
            <div className="hero-ctrl">
              <div className="wrap">
                <div className="hctrl">
                  {" "}
                  <button className="hnav" type="button" data-act="prev" aria-label="Previous slide">
                    {" "}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <button className="hnav" type="button" data-act="toggle" aria-label="Pause auto-rotation" aria-pressed="false">
                    {" "}
                    <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9.5 5.5v13M14.5 5.5v13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                    </svg>
                    {" "}
                    <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.5 5.6l10 6.4-10 6.4z" fill="currentColor"></path>
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <button className="hnav" type="button" data-act="next" aria-label="Next slide">
                    {" "}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {" "}
                  </button>
                  {" "}
                </div>
                <div className="hpag" role="tablist" aria-label="Choose a banner">
                  {" "}
                  <button className="hbar hpag-item on" type="button" data-i="0" aria-label="AX slide">
                    <i></i>
                    <span>
                      01
                    </span>
                    <b>
                      AX
                    </b>
                  </button>
                  {" "}
                  <button className="hbar hpag-item" type="button" data-i="1" aria-label="Embedded slide">
                    <i></i>
                    <span>
                      02
                    </span>
                    <b>
                      EMBEDDED
                    </b>
                  </button>
                  {" "}
                  <button className="hbar hpag-item" type="button" data-i="2" aria-label="SI slide">
                    <i></i>
                    <span>
                      03
                    </span>
                    <b>
                      SI
                    </b>
                  </button>
                  {" "}
                  <button className="hbar hpag-item" type="button" data-i="3" aria-label="Global tech slide">
                    <i></i>
                    <span>
                      04
                    </span>
                    <b>
                      GLOBAL TECH
                    </b>
                  </button>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CI */}
        <section id="ci" className="typo-section">
          <div className="typo-layout">
            <div className="typo-stage" aria-label="Open plus Cube, OCUBE">
              <div className="typo-row typo-open">
                OPEN
              </div>
              <div className="typo-row typo-cube">
                <em>
                  +
                </em>
                {" "}CUBE
              </div>
            </div>
            <div className="typo-copy">
              <p>
                OCUBE was born where{" "}
                <b>
                  OPEN
                </b>
                (open collaboration) meets{" "}
                <b>
                  CUBE
                </b>
                (solid engineering).{" "}
                <br />
                We start from the customer’s problem and build products and systems that hold up in daily operation — through AX, embedded software and systems integration.
              </p>
              {" "}
              <a href="#business">
                Read more{" "}
                <img src="../assets/home-refresh/arrow-right.svg" alt="" width="14" height="14" />
              </a>
              {" "}
            </div>
          </div>
        </section>
        {/* BUSINESS */}
        <section id="business" className="capabilities-section">
          <div className="capabilities-head">
            <p className="section-label">
              BUSINESS
            </p>
            <h2>
              Three capabilities that move change forward
            </h2>
            <p>
              We turn data into decisions you can act on,
              <br className="sb" />
              {" "}We turn technology into services and products that actually run,
              <br className="sb" />
              {" "}bringing your business closer to what comes next.
            </p>
          </div>
          <div className="capabilities-grid">
            <article className="capability-card is-active" aria-current="true">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img src="../assets/home-refresh/capability-ax.svg" alt="" width="32" height="32" />
                  <h3>
                    AX
                  </h3>
                </div>
                {" "}
                <a href="business-ax.html">
                  Read more{" "}
                  <img src="../assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>
                {" "}
              </div>
              <p>
                connecting better judgement with faster execution, and changing how companies and industries operate.
              </p>
              <div className="capability-chips">
                <span>
                  DATA
                </span>
                <span>
                  AI
                </span>
                <span>
                  INSIGHT
                </span>
                <span>
                  AUTOMATION
                </span>
                <span>
                  ACTION
                </span>
              </div>
            </article>
            <article className="capability-card">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img src="../assets/home-refresh/capability-embedded.svg" alt="" width="32" height="32" />
                  <h3>
                    Embedded
                  </h3>
                </div>
                {" "}
                <a href="business-embedded.html">
                  Read more{" "}
                  <img src="../assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>
                {" "}
              </div>
              <p>
                From mobility to industrial devices, our software delivers smart connectivity and product differentiation.
              </p>
              <div className="capability-chips">
                <span>
                  AUTOMOTIVE
                </span>
                <span>
                  FACTORY AUTOMATION
                </span>
                <span>
                  HOME IoT
                </span>
              </div>
            </article>
            <article className="capability-card">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img src="../assets/home-refresh/capability-si.svg" alt="" width="32" height="32" />
                  <h3>
                    SI
                  </h3>
                </div>
                {" "}
                <a href="business-si.html">
                  Read more{" "}
                  <img src="../assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>
                {" "}
              </div>
              <p>
                We turn business requirements into stable, connected systems that make day-to-day work more efficient.
              </p>
              <div className="capability-chips">
                <span>
                  BUSINESS
                </span>
                <span>
                  SYSTEM
                </span>
                <span>
                  DATA
                </span>
                <span>
                  INTEGRATION
                </span>
                <span>
                  OPERATION
                </span>
              </div>
            </article>
          </div>
        </section>
        {/* GLOBAL TECHNOLOGY PARTNERS */}
        <section id="partners" className="global-tech-section" aria-labelledby="home-partner-title">
          <div className="global-tech-copy">
            <p className="section-label">
              GLOBAL TECHNOLOGY
            </p>
            <h2 id="home-partner-title">
              Proven global technology,
              <br />
              completed by engineering here in Korea
            </h2>
            <p>
              From choosing the right product and supplying genuine licences to porting, integration, customisation and hands-on engineering support — OCUBE engineers stay with you throughout.
            </p>
          </div>
          <div className="global-tech-logos" aria-label="Global technology partners">
            {" "}
            <a href="license-qt.html" aria-label="See Qt — official partner">
              <img src="../assets/img/vlogo/qt.png" alt="Qt" loading="lazy" width="240" height="70" />
            </a>
            {" "}
            <a href="license-telit.html" aria-label="See Telit Cinterion — official partner">
              <img src="../assets/img/vlogo/telit.png" alt="Telit Cinterion" loading="lazy" width="308" height="163" />
            </a>
            {" "}
            <a href="license-toradex.html" aria-label="See Toradex — official partner">
              <img src="../assets/img/vlogo/toradex.png" alt="Toradex" loading="lazy" width="240" height="70" />
            </a>
            {" "}
            <a href="license-visualon.html" aria-label="See VisualOn — official partner">
              <img src="../assets/img/vlogo/visualon.png" alt="VisualOn" loading="lazy" width="240" height="70" />
            </a>
            {" "}
            <a href="license-tuxera.html" aria-label="See Tuxera — official partner">
              <img src="../assets/img/vlogo/tuxera.png" alt="Tuxera" loading="lazy" width="418" height="117" />
            </a>
            {" "}
            <a href="license-protopie.html" aria-label="See ProtoPie — official partner">
              <img src="../assets/img/vlogo/protopie.png" alt="ProtoPie" loading="lazy" width="411" height="94" />
            </a>
            {" "}
          </div>
        </section>
        {/* REFERENCE */}
        <section id="references" className="bcase home-cases-section">
          <div className="home-cases-sticky">
            <div className="home-case-opening">
              <h2>
                Projects that met real industry needs and proved themselves in operation
              </h2>
            </div>
            <div className="home-cases-panel">
              <div id="case-content" className="bcase-head">
                {" "}
                <span className="eb">
                  BUILD CASES
                </span>
                {" "}
                <h2>
                  Build cases
                </h2>
                <p>
                  OCUBE projects built on a precise reading of each industry’s needs, and delivered as software and systems that run reliably in the real operating environment.
                </p>
              </div>
              <div className="bcase-mq">
                <div className="bcase-track">
                  <div className="bcase-row">
                    {" "}
                    <HomeCaseLinks lang="en" items={homeCases} />
                  </div>
                  <div className="bcase-row" aria-hidden="true">
                    {" "}
                    <HomeCaseLinks lang="en" items={homeCases} duplicate />
                  </div>
                </div>
              </div>
              {" "}
              <a className="bcase-more" href="references.html">
                See all build cases{" "}
                <span aria-hidden="true">
                  →
                </span>
              </a>
              {" "}
            </div>
          </div>
        </section>
        {/* CONTACT */}
      </main>
      <footer id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-shell">
            <div className="contact-top">
              <div className="contact-copy">
                <p className="section-label">
                  CONTACT
                </p>
                <h2>
                  Tell us the problem you are trying to solve
                </h2>
                <p className="contact-description">
                  An engineer reads every enquiry personally and gets back to you — whether you need a first consultation, a technical answer or a licence quote.
                </p>
                {" "}
                <a className="contact-button" href="mailto:sales@ocube.co.kr">
                  Contact us
                </a>
                {" "}
              </div>
              <div className="contact-badge">
                {" "}
                <a href="contact.html" className="contact-badge-core" aria-label="Contact us">
                  {" "}
                  <svg viewBox="0 0 19 17" width="19" height="17" aria-hidden="true">
                    <path d="M10.7 1 17.7 8.3 10.7 15.6M17.7 8.3H1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-company">
                <div className="contact-company-brand-home" aria-label="OCUBE CO., LTD.">
                  {" "}
                  <img src="../assets/ci_01.avif" alt="OCUBE" width="132" height="40" />
                  {" "}
                  <span>
                    OCUBE CO.,LTD.
                  </span>
                  {" "}
                </div>
                <dl>
                  <div>
                    <dt>
                      DAEGU
                    </dt>
                    <dd>
                      18, Alpha City 1-ro 31-gil, Suseong-gu, Daegu, Korea (Head office)
                    </dd>
                  </div>
                  <div>
                    <dt>
                      SEOUL
                    </dt>
                    <dd>
                      2F–3F, KM Building, 141 Gangseo-ro 56ga-gil, Gangseo-gu, Seoul, Korea
                    </dd>
                  </div>
                  <div>
                    <dt>
                      ANYANG
                    </dt>
                    <dd>
                      #710, #722–723, Geumjeong Station SKV1 Center, 142 LS-ro, Dongan-gu, Anyang, Korea
                    </dd>
                  </div>
                </dl>
              </div>
              <nav className="contact-links" aria-label="Footer navigation">
                <div>
                  <p className="f-h">
                    Business
                  </p>
                  {" "}
                  <a href="business-ax.html">
                    AX
                  </a>
                  {" "}
                  <a href="business-embedded.html">
                    Embedded
                  </a>
                  {" "}
                  <a href="business-si.html">
                    SI
                  </a>
                  {" "}
                </div>
                <div>
                  <p className="f-h">
                    Solution
                  </p>
                  {" "}
                  <a href="solution-cubeon.html">
                    Cubeon
                  </a>
                  {" "}
                  <a href="solution-dataq.html">
                    QData
                  </a>
                  {" "}
                  <a href="solution-factoryq.html">
                    QFactory
                  </a>
                  {" "}
                  <a href="solution-agentq.html">
                    AgentQ
                  </a>
                  {" "}
                  <a href="solution-qdrive.html">
                    QDrive
                  </a>
                  {" "}
                  <a href="solution-evcp.html">
                    EVCP
                  </a>
                  {" "}
                  <a href="solution-traffic.html">
                    QVision
                  </a>
                  {" "}
                </div>
                <div>
                  <p className="f-h">
                    Global Partners
                  </p>
                  {" "}
                  <a href="license-qt.html">
                    Qt
                  </a>
                  {" "}
                  <a href="license-telit.html">
                    Telit Cinterion
                  </a>
                  {" "}
                  <a href="license-toradex.html">
                    Toradex
                  </a>
                  {" "}
                  <a href="license-visualon.html">
                    VisualOn
                  </a>
                  {" "}
                  <a href="license-tuxera.html">
                    Tuxera
                  </a>
                  {" "}
                  <a href="license-protopie.html">
                    ProtoPie
                  </a>
                  {" "}
                </div>
                <div>
                  <p className="f-h">
                    Company
                  </p>
                  {" "}
                  <a href="about.html">
                    About Ocube
                  </a>
                  {" "}
                  <a href="company.html">
                    History
                  </a>
                  {" "}
                  <a href="references.html">
                    Use Cases
                  </a>
                  {" "}
                  <a href="location.html">
                    Locations
                  </a>
                  {" "}
                  <a href="contact.html">
                    Contact
                  </a>
                  {" "}
                </div>
              </nav>
            </div>
            <div className="contact-legal">
              {" "}
              <span>
                Copyright © OCUBE Co., Ltd. All rights reserved.
              </span>
              {" "}
              <a href="mailto:sales@ocube.co.kr">
                sales@ocube.co.kr
              </a>
              {" "}
              <a href="privacy.html">
                Privacy Policy
              </a>
              {" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
