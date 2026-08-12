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

export default function LicenseProtopiePage() {
  return (
    <>
      <title>ProtoPie — High-Fidelity Prototyping | Global Partners · OCUBE</title>
      <meta
        name="description"
        content="ProtoPie lets you try out interactions that behave like the real product, without code — supplied and supported by OCUBE as a partner."
      />
      <link rel="canonical" href={withBase("en/license-protopie.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-protopie.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-protopie.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-protopie.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="ProtoPie — High-Fidelity Prototyping | Global Partners · OCUBE"
      />
      <meta
        property="og:description"
        content="ProtoPie lets you try out interactions that behave like the real product, without code — supplied and supported by OCUBE as a partner."
      />
      <meta property="og:url" content={withBase("en/license-protopie.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ProtoPie — High-Fidelity Prototyping | Global Partners · OCUBE"
      />
      <meta
        name="twitter:description"
        content="ProtoPie lets you try out interactions that behave like the real product, without code — supplied and supported by OCUBE as a partner."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"ProtoPie","item":"@@BASE@@en/license-protopie.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-protopie" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-protopie"]} />{" "}
        <section id="tech" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-protopie:tech"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Interactions without code</h3>
                    <p>
                      Variables and conditions handle complex transitions and responses, with no
                      code written
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Across devices</h3>
                    <p>
                      Prototypes that talk between phone, tablet, PC and wearable, so the real
                      service flow can be tried
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Using the sensors</h3>
                    <p>
                      Gyroscope, microphone, camera and proximity input built into the interaction
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Reusable components</h3>
                    <p>
                      Repeated interactions kept as components — consistent across screens, and
                      quicker to make
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/protopie.png"
                  alt="ProtoPie 인터랙션 프로토타이핑 화면"
                  loading="lazy"
                  width="665"
                  height="524"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="industry" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-protopie:industry"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-protopie:industry"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-protopie"]} />
      </SiteFooter>
    </>
  );
}
