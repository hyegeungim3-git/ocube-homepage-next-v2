import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseQtPage() {
  return (
    <>
      <title>Qt — Cross-Platform UI Framework | Global Partners · OCUBE</title>
      <meta
        name="description"
        content="Qt — one framework and one codebase across desktop and embedded platforms, with licence supply and engineering support in Korea from OCUBE."
      />
      <link rel="canonical" href={withBase("en/license-qt.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-qt.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-qt.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-qt.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="Qt — Cross-Platform UI Framework | Global Partners · OCUBE"
      />
      <meta
        property="og:description"
        content="Qt — one framework and one codebase across desktop and embedded platforms, with licence supply and engineering support in Korea from OCUBE."
      />
      <meta property="og:url" content={withBase("en/license-qt.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Qt — Cross-Platform UI Framework | Global Partners · OCUBE"
      />
      <meta
        name="twitter:description"
        content="Qt — one framework and one codebase across desktop and embedded platforms, with licence supply and engineering support in Korea from OCUBE."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Qt","item":"@@BASE@@en/license-qt.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-qt" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-qt"]} />{" "}
        <section id="framework" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:framework"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Qt Framework essentials</h3>
                    <p>
                      Core libraries common to the major platforms — with binary and source
                      compatibility guaranteed under Qt’s versioning policy
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Qt Framework add-ons</h3>
                    <p>Graphics, networking, multimedia and whatever else the platform calls for</p>
                  </div>
                </div>
                <div className="hero-ctas" style={{ marginTop: "22px" }}>
                  <a
                    href="https://www.qt.io/product/framework"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    About Qt Framework{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/qt.png"
                  alt="Qt Framework 필수 모듈과 Add-on 모듈 구성도"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tools" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:tools"]} />
            <div className="duo rev" style={{ marginTop: "8px" }}>
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>The Qt Creator environment</h3>
                    <p>
                      Editing the interface, completing the code, debugging visually and profiling —
                      in one place
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Build tools</h3>
                    <p>qmake and CMake keep the build simple</p>
                  </div>
                  <div className="feat">
                    <h3>Testing and debugging</h3>
                    <p>Unit tests on Qt Test, with GUI automation tools brought in per project</p>
                  </div>
                </div>
                <div className="hero-ctas" style={{ marginTop: "22px" }}>
                  <a
                    href="https://www.qt.io/product/development-tools"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    About Qt development tools{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/qt-creator.png"
                  alt="Qt Creator IDE 화면"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="partner" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:partner"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "26px" }}>
              <div className="dep-card">
                <h3>Licence guidance</h3>
                <p>Which Qt licence suits the size of the project and the target device</p>
                <a className="sec-more" href="contact.html">
                  Get in touch →
                </a>
              </div>
              <div className="dep-card">
                <h3>Licence supply</h3>
                <p>Genuine licences supplied and renewed, with compliance looked after</p>
                <a className="sec-more" href="contact.html">
                  Get in touch →
                </a>
              </div>
              <div className="dep-card">
                <h3>Consulting</h3>
                <p>From the first evaluation through training to integration engineering</p>
                <a className="sec-more" href="contact.html">
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:portfolio"]} />
            <div className="dep-grid">
              <div className="dep-card rv">
                <h3>Qt Porting</h3>
                <p>Qt ported to the Qualcomm APQ8009</p>
              </div>
              <div className="dep-card rv d1">
                <h3>System Aircon Monitoring</h3>
                <p>Monitoring software for a system air conditioner</p>
              </div>
              <div className="dep-card rv d2">
                <h3>Chiller HMI</h3>
                <p>HMI for an industrial chiller</p>
              </div>
              <div className="dep-card rv d3">
                <h3>Audio Matrix Controller</h3>
                <p>Mobile app for an audio matrix controller</p>
              </div>
            </div>
            <p className="sec-note rv">
              <a href="https://www.qt.io" className="btn btn-ghost" target="_blank" rel="noopener">
                More about Qt{" "}
                <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                  ↗
                </span>
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-qt"]} />
      </SiteFooter>
    </>
  );
}
