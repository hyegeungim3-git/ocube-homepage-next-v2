import { applyBase, withBase } from "@/config/site";
import { logoGroups } from "@/data/logos.en";
import { PlogoItems } from "@/components/section/plogo-items";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";
import { refCards, refMetaLabels } from "@/data/refs.en";
import { RefCards } from "@/components/section/ref-cards";

export default function ReferencesPage() {
  return (
    <>
      <title>
        Build Cases — OCUBE CO., LTD.
      </title>
      <meta name="description" content="OCUBE build cases — manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services. References by industry, and our AX, embedded and SI work, set out as problem, approach and result." />
      <link rel="canonical" href={withBase("en/references.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("references.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/references.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("references.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Build Cases — OCUBE CO., LTD." />
      <meta property="og:description" content="Manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services — build cases by industry, as problem, approach and result." />
      <meta property="og:url" content={withBase("en/references.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Build Cases — OCUBE CO., LTD." />
      <meta name="twitter:description" content="Manufacturing, energy, mobility, public sector, finance, home AIoT and enterprise services — build cases by industry." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"회사\",\"item\":\"@@BASE@@en/company.html\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"주요 구축 사례\",\"item\":\"@@BASE@@en/references.html\"}]}") }} />
      <SiteHeader slug="references" lang="en" />
      <MobilePanel lang="en" />
      <main>
        {" "}
        <PageHero lang="en" data={heroes["references"]} />
        {" "}
        <section id="refs" className="sec">
          <div className="wrap">
            <div className="sec-head center rv">
              <span className="kicker">
                References
              </span>
              {" "}
              <h2>
                Selected work
              </h2>
              <p className="lead">
                Pick a sector to gather the cases; the badges and the detail block show the engagement, the client and the field at a glance.
              </p>
            </div>
            <div className="case-filter cert-filter rv d2" role="group" aria-label="Filter by sector" style={{position: "static", background: "none", border: "0", padding: "0", marginTop: "clamp(28px,3.4vw,44px)"}}>
              {" "}
              <button className="case-tab active" type="button" data-cat="all" aria-pressed="true">
                All
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="mfg" aria-pressed="false">
                Manufacturing
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="energy" aria-pressed="false">
                Energy
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="mobility" aria-pressed="false">
                Mobility
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="public" aria-pressed="false">
                Public sector
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="fin" aria-pressed="false">
                Finance
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="home" aria-pressed="false">
                Home AIoT
              </button>
              {" "}
              <button className="case-tab" type="button" data-cat="enterprise" aria-pressed="false">
                Enterprise services
              </button>
              {" "}
            </div>
            <div className="ref-grid">
              <RefCards items={refCards} labels={refMetaLabels} />
            </div>
            <p className="sec-note rv" data-filter-empty hidden>
              There is nothing published for this sector yet. Choose another sector above, or press &apos;All&apos;.
            </p>
          </div>
        </section>
        {/* 공공안전 */}
        {/* 홈 AIoT·서비스 플랫폼 */}
        {/* 파트너 (기술 파트너) */}
        <section className="sec plogo-sec">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">
                Partners & Clients
              </span>
              {" "}
              <h2>
                Clients and technology partners
              </h2>
              <p className="sec-sub">
                The clients we have worked for, and the global vendors whose products we supply and support.
              </p>
            </div>
            <div className="plogo-rows">
              <div className="plogo-row reveal" data-d="1">
                {" "}
                <span className="plogo-label">
                  Clients
                  <small>
                    Consulting & Development
                  </small>
                </span>
                {" "}
                <div className="plogo-grid">
                  <PlogoItems lang="en" items={logoGroups["clients"]} />
                </div>
              </div>
              <div className="plogo-row reveal" data-d="2">
                {" "}
                <span className="plogo-label">
                  Technology partners
                  <small>
                    Vendor
                  </small>
                </span>
                {" "}
                <div className="plogo-grid">
                  <PlogoItems lang="en" items={logoGroups["vendors"]} />
                </div>
              </div>
            </div>
            <p className="sec-note reveal" data-d="2" style={{marginTop: "clamp(20px,2.4vw,30px)"}}>
              As the official Korean partner for these vendors, we supply genuine licences and provide engineering support, training and integration. See Global Partners for the detail.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
