import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { historyGroups } from "@/data/history";
import { HistRows } from "@/components/section/hist-rows";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function CompanyPage(): JSX.Element {
  return (
    <>
      <PageMeta
        path="company.html"
        title="연혁 — 오큐브(주)"
        description="오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 산업 AI까지 걸어온 주요 이정표."
        ogDescription="오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 SI와 산업 AI까지 이어온 주요 이정표."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"연혁","item":"@@BASE@@company.html"}]}',
          ),
        }}
      />
      <PageShell slug="company" footerId="contact">
        {" "}
        <PageHero data={heroes["company"]} />{" "}
        <nav className="subnav" aria-label="회사 섹션">
          <div className="wrap">
            {" "}
            <a href="about.html">회사소개</a> <a href="#history">History</a>{" "}
            <a href="location.html">오시는 길</a>{" "}
          </div>
        </nav>
        {/* 회사소개 */}
        <section id="history" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">History</span> <h2 className="loc-h">설립부터 지금까지</h2>
              <p className="lead">
                임베디드에서 출발해 SI와 산업 AI로 넓혀온 과정을 이정표로 정리했습니다.
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
