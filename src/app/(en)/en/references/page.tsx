import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { logoGroups } from "@/data/logos.en";
import { PlogoItems } from "@/components/section/plogo-items";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";
import { refCards, refMetaLabels } from "@/data/refs.en";
import { RefCards } from "@/components/section/ref-cards";

export default function ReferencesPage() {
  return (
    <>
      <PageMeta
        lang="en"
        path="references.html"
        title="Build Cases — OCUBE CO., LTD."
        description="OCUBE build cases — manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services. References by industry, and our AX, embedded and SI work, set out as problem, approach and result."
        ogDescription="Manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services — build cases by industry, as problem, approach and result."
        twitterDescription="Manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services — build cases by industry."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@en/company.html"},{"@type":"ListItem","position":3,"name":"Build cases","item":"@@BASE@@en/references.html"}]}',
          ),
        }}
      />
      <PageShell lang="en" slug="references">
        {" "}
        <PageHero lang="en" data={heroes["references"]} />{" "}
        <section id="refs" className="sec">
          <div className="wrap">
            <div className="sec-head center rv">
              <span className="kicker">References</span> <h2>Selected work</h2>
              <p className="lead">
                Pick a sector to gather the cases; the badges and the detail block show the
                engagement, the client and the field at a glance.
              </p>
            </div>
            <div
              className="case-filter cert-filter rv d2"
              role="group"
              aria-label="Filter by sector"
              style={{
                position: "static",
                background: "none",
                border: "0",
                padding: "0",
                marginTop: "clamp(28px,3.4vw,44px)",
              }}
            >
              {" "}
              <button className="case-tab active" type="button" data-cat="all" aria-pressed="true">
                All
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mfg" aria-pressed="false">
                Manufacturing
              </button>{" "}
              <button className="case-tab" type="button" data-cat="energy" aria-pressed="false">
                Energy
              </button>{" "}
              <button className="case-tab" type="button" data-cat="mobility" aria-pressed="false">
                Mobility
              </button>{" "}
              <button className="case-tab" type="button" data-cat="public" aria-pressed="false">
                Public sector
              </button>{" "}
              <button className="case-tab" type="button" data-cat="fin" aria-pressed="false">
                Finance
              </button>{" "}
              <button className="case-tab" type="button" data-cat="home" aria-pressed="false">
                Home AIoT
              </button>{" "}
              <button className="case-tab" type="button" data-cat="enterprise" aria-pressed="false">
                Enterprise services
              </button>{" "}
            </div>
            <div className="ref-grid">
              <RefCards items={refCards} labels={refMetaLabels} />
            </div>
            <p className="sec-note rv" data-filter-empty hidden>
              There is nothing published for this sector yet. Choose another sector above, or press
              &apos;All&apos;.
            </p>
          </div>
        </section>
        {/* 공공안전 */}
        {/* 홈 AIoT·서비스 플랫폼 */}
        {/* 파트너 (기술 파트너) */}
        <section className="sec plogo-sec">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Partners & Clients</span>{" "}
              <h2>Clients and technology partners</h2>
              <p className="sec-sub">
                The clients we have worked for, and the global vendors whose products we supply and
                support.
              </p>
            </div>
            <div className="plogo-rows">
              <div className="plogo-row reveal" data-d="1">
                {" "}
                <span className="plogo-label">
                  Clients
                  <small>Consulting & Development</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems lang="en" items={logoGroups["clients"]} />
                </div>
              </div>
              <div className="plogo-row reveal" data-d="2">
                {" "}
                <span className="plogo-label">
                  Technology partners
                  <small>Vendor</small>
                </span>{" "}
                <div className="plogo-grid">
                  <PlogoItems lang="en" items={logoGroups["vendors"]} />
                </div>
              </div>
            </div>
            <p
              className="sec-note reveal"
              data-d="2"
              style={{ marginTop: "clamp(20px,2.4vw,30px)" }}
            >
              As the official Korean partner for these vendors, we supply genuine licences and
              provide engineering support, training and integration. See Global Partners for the
              detail.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
