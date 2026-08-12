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

export default function LicenseTelitPage() {
  return (
    <>
      <title>
        Telit Cinterion — Cellular IoT Modules | Global Partners · OCUBE
      </title>
      <meta name="description" content="Telit Cinterion modules for M2M and IoT applications — supplied by OCUBE, with engineering support in Korea." />
      <link rel="canonical" href={withBase("en/license-telit.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-telit.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-telit.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-telit.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Telit Cinterion — Cellular IoT Modules | Global Partners · OCUBE" />
      <meta property="og:description" content="Telit Cinterion modules for M2M and IoT applications — supplied by OCUBE, with engineering support in Korea." />
      <meta property="og:url" content={withBase("en/license-telit.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Telit Cinterion — Cellular IoT Modules | Global Partners · OCUBE" />
      <meta name="twitter:description" content="Telit Cinterion modules for M2M and IoT applications — supplied by OCUBE, with engineering support in Korea." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Telit Cinterion\",\"item\":\"@@BASE@@en/license-telit.html\"}]}") }} />
      <SiteHeader slug="license-telit" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-telit"]} />
        {" "}
        <section id="modules" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:modules"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  The family supports a range of cellular standards.
                  <br className="sb" />
                  {" "}Which standard, which region and which approvals — check per model before choosing.
                </p>
                <div className="feat-list" style={{marginTop: "18px"}}>
                  <div className="feat">
                    <h3>
                      Connectivity and positioning built in
                    </h3>
                    <p>
                      Java™, GPS and GLONASS, SL Agent and SIM Access Profile — what the product needs is already on the module.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      Environmental compliance
                    </h3>
                    <p>
                      RoHS and the rest — confirm against the certification documents for the product in question.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      Approval coverage
                    </h3>
                    <p>
                      Environmental, regional and carrier approvals vary by model and by the country of use — check each one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img src="../assets/img/vendor/telit.png" alt="Telit Cinterion M2M·IoT 통신 모듈" loading="lazy" width="500" height="350" />
              </div>
            </div>
            <div className="pi-tags rv" style={{marginTop: "22px"}}>
              <span className="pill light">
                Low-power cellular (LTE Cat M1 · NB-IoT)
              </span>
              {" "}
              <span className="pill light">
                5G · eSIM
              </span>
              {" "}
              <span className="pill light">
                GPS/GLONASS
              </span>
              {" "}
              <span className="pill light">
                Messaging (MQTT) · device management (LwM2M)
              </span>
              {" "}
              <span className="pill light">
                TLS 1.2/1.3
              </span>
            </div>
          </div>
        </section>
        <section id="usecase" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:usecase"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "22px"}}>
              {" "}
              <DepCards items={depCards["license-telit:usecase"]} />
            </div>
            <p className="sec-note reveal" data-d="2">
              Drawing on our experience supplying cellular modules, OCUBE helps choose the product, design the antenna and prepare for carrier certification in the country of use.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-telit"]} />
      </SiteFooter>
    </>
  );
}
