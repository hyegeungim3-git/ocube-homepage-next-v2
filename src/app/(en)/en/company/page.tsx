import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { historyGroups } from "@/data/history.en";
import { HistRows } from "@/components/section/hist-rows";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function CompanyPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="company.html"
        title="History — OCUBE CO., LTD."
        description="OCUBE’s history — the milestones from our founding in 2007, through embedded software to industrial AI."
        ogDescription="OCUBE’s history — the milestones from our founding in 2007, through embedded software to systems integration and industrial AI."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"History","item":"@@BASE@@en/company.html"}]}',
          ),
        }}
      />
      <PageShell lang="en" slug="company" footerId="contact">
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
      </PageShell>
    </>
  );
}
