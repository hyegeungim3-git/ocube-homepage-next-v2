import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseQtPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="license-qt.html"
        title="Qt — Cross-Platform UI Framework | Global Partners · OCUBE"
        description="Qt — one framework and one codebase across desktop and embedded platforms, with licence supply and engineering support in Korea from OCUBE."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Qt","item":"@@BASE@@en/license-qt.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="license-qt"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-qt"]} />
          </>
        }
      >
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
      </PageShell>
    </>
  );
}
