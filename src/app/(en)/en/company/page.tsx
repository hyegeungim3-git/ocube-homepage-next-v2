import { applyBase, withBase } from "@/config/site";
import { historyGroups } from "@/data/history.en";
import { HistRows } from "@/components/section/hist-rows";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function CompanyPage() {
  return (
    <>
      <title>History — OCUBE CO., LTD.</title>
      <meta
        name="description"
        content="OCUBE’s history — the milestones from our founding in 2007, through embedded software to industrial AI."
      />
      <link rel="canonical" href={withBase("en/company.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("company.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/company.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("company.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="History — OCUBE CO., LTD." />
      <meta
        property="og:description"
        content="OCUBE’s history — the milestones from our founding in 2007, through embedded software to systems integration and industrial AI."
      />
      <meta property="og:url" content={withBase("en/company.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="History — OCUBE CO., LTD." />
      <meta
        name="twitter:description"
        content="OCUBE’s history — the milestones from our founding in 2007, through embedded software to systems integration and industrial AI."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"History","item":"@@BASE@@en/company.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="company" lang="en" />
      <MobilePanel lang="en" />
      <main>
        {" "}
        <PageHero lang="en" data={heroes["company"]} />{" "}
        <nav className="subnav" aria-label="회사 섹션">
          <div className="wrap">
            {" "}
            <a href="about.html">About OCUBE</a> <a href="#history">History</a>{" "}
            <a href="location.html">Locations</a>{" "}
          </div>
        </nav>
        {/* 회사소개 */}
        <section id="history" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">History</span>{" "}
              <h2 className="loc-h">From the founding to now</h2>
              <p className="lead">
                Starting in embedded software and widening into systems integration and industrial
                AI — set out as milestones.
              </p>
            </div>
            <div className="hist">
              <HistRows groups={historyGroups} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact" />
    </>
  );
}
