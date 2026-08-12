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

export default function LicenseProtopiePage() {
  return (
    <>
      <PageMeta
        lang="en"
        path="license-protopie.html"
        title="ProtoPie — High-Fidelity Prototyping | Global Partners · OCUBE"
        description="ProtoPie lets you try out interactions that behave like the real product, without code — supplied and supported by OCUBE as a partner."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"ProtoPie","item":"@@BASE@@en/license-protopie.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="license-protopie"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-protopie"]} />
          </>
        }
      >
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
      </PageShell>
    </>
  );
}
