import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseToradexPage() {
  return (
    <>
      <title>
        Toradex — Industrial SoMs and Carrier Boards | Global Partners · OCUBE
      </title>
      <meta name="description" content="System on Modules from Toradex, founded in Switzerland in 2003 — supplied by OCUBE, with engineering support in Korea." />
      <link rel="canonical" href={withBase("en/license-toradex.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-toradex.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-toradex.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-toradex.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Toradex — Industrial SoMs and Carrier Boards | Global Partners · OCUBE" />
      <meta property="og:description" content="System on Modules from Toradex, founded in Switzerland in 2003 — supplied by OCUBE, with engineering support in Korea." />
      <meta property="og:url" content={withBase("en/license-toradex.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Toradex — Industrial SoMs and Carrier Boards | Global Partners · OCUBE" />
      <meta name="twitter:description" content="System on Modules from Toradex, founded in Switzerland in 2003 — supplied by OCUBE, with engineering support in Korea." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Toradex\",\"item\":\"@@BASE@@en/license-toradex.html\"}]}") }} />
      <SiteHeader slug="license-toradex" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-toradex"]} />
        {" "}
        <section id="som" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:som"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  A System on Module (SoM), sometimes a Computer on Module (CoM), puts the processor, the memory and the main I/O onto one small board — an{" "}
                  <b>
                    embedded computing module
                  </b>
                  .
                </p>
                <p style={{marginTop: "12px"}}>
                  The OS, drivers and board support package come with it.
                  <br className="sb" />
                  {" "}Change the carrier board only, and one module serves several products.
                </p>
                <p style={{marginTop: "12px"}}>
                  With a proven module underneath, you can put your effort into the application that matters — and carry less hardware risk and less delay.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img src="../assets/img/vendor/toradex-som.png" alt="Toradex System on Module 구조" loading="lazy" width="784" height="555" />
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:benefits"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "22px"}}>
              <div className="dep-card">
                <img src="../assets/img/vendor/toradex_icon_accelerate.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  Faster to market
                </h3>
                <p>
                  No base hardware redesign — effort goes to the application, launch comes sooner
                </p>
              </div>
              <div className="dep-card">
                <img src="../assets/img/vendor/toradex_icon_robust.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  A proven starting point
                </h3>
                <p>
                  A commercial module already proven, so there is less new hardware to design and verify
                </p>
              </div>
              <div className="dep-card">
                <img src="../assets/img/vendor/toradex_icon_performance.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  Newer silicon when you want it
                </h3>
                <p>
                  Modules with newer processors and memory let performance grow in steps
                </p>
              </div>
              <div className="dep-card">
                <img src="../assets/img/vendor/toradex_icon_cost.png" alt="" width="40" height="40" style={{marginBottom: "10px"}} aria-hidden="true" />
                <h3>
                  Lower development cost
                </h3>
                <p>
                  Less custom board to design means less cost across the project
                </p>
              </div>
            </div>
            <div className="duo" style={{marginTop: "16px"}}>
              <div className="duo-txt reveal">
                <h3 style={{fontSize: "18px"}}>
                  SoM plus a custom carrier board
                </h3>
                <p>
                  The product is built from a commercial SoM and a carrier board.
                  <br className="sb" />
                  {" "}OCUBE takes on the board design and the Linux and Qt interface as well.
                </p>
              </div>
              <div className="duo-media plain reveal" data-d="1">
                <img src="../assets/img/vendor/toradex.png" alt="SoM과 캐리어 보드 관계도" loading="lazy" width="520" height="519" />
              </div>
            </div>
          </div>
        </section>
        <section id="why" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads["license-toradex:why"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "26px"}}>
              {" "}
              <DepCards items={depCards["license-toradex:why"]} />
            </div>
            <div className="pi-tags reveal" data-d="2" style={{marginTop: "22px"}}>
              <span className="pill">
                Colibri · Apalis · Verdin
              </span>
              {" "}
              <span className="pill">
                Yocto board support package
              </span>
              {" "}
              <span className="pill">
                Torizon containers (OCI)
              </span>
              {" "}
              <span className="pill">
                Over-the-air updates · vehicle and industrial buses (CAN/Modbus)
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-toradex"]} />
      </SiteFooter>
    </>
  );
}
