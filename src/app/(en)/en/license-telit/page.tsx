import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseTelitPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="license-telit.html"
        title="Telit Cinterion — Cellular IoT Modules | Global Partners · OCUBE"
        description="Telit Cinterion modules for M2M and IoT applications — supplied by OCUBE, with engineering support in Korea."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Telit Cinterion","item":"@@BASE@@en/license-telit.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="license-telit"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-telit"]} />
          </>
        }
      >
        {" "}
        <PageHero lang="en" data={heroes["license-telit"]} />{" "}
        <section id="modules" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:modules"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  The family supports a range of cellular standards.
                  <br className="sb" /> Which standard, which region and which approvals — check per
                  model before choosing.
                </p>
                <div className="feat-list" style={{ marginTop: "18px" }}>
                  <div className="feat">
                    <h3>Connectivity and positioning built in</h3>
                    <p>
                      Java™, GPS and GLONASS, SL Agent and SIM Access Profile — what the product
                      needs is already on the module.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Environmental compliance</h3>
                    <p>
                      RoHS and the rest — confirm against the certification documents for the
                      product in question.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Approval coverage</h3>
                    <p>
                      Environmental, regional and carrier approvals vary by model and by the country
                      of use — check each one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/telit.png"
                  alt="Telit Cinterion M2M·IoT 통신 모듈"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
            <div className="pi-tags rv" style={{ marginTop: "22px" }}>
              <span className="pill light">Low-power cellular (LTE Cat M1 · NB-IoT)</span>{" "}
              <span className="pill light">5G · eSIM</span>{" "}
              <span className="pill light">GPS/GLONASS</span>{" "}
              <span className="pill light">Messaging (MQTT) · device management (LwM2M)</span>{" "}
              <span className="pill light">TLS 1.2/1.3</span>
            </div>
          </div>
        </section>
        <section id="usecase" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:usecase"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-telit:usecase"]} />
            </div>
            <p className="sec-note reveal" data-d="2">
              Drawing on our experience supplying cellular modules, OCUBE helps choose the product,
              design the antenna and prepare for carrier certification in the country of use.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
