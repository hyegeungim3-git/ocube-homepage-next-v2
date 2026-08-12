import { applyBase, withBase } from "@/config/site";
import { historyGroups } from "@/data/history";
import { HistRows } from "@/components/section/hist-rows";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function CompanyPage() {
  return (
    <>
      <title>
        연혁 — 오큐브(주)
      </title>
      <meta name="description" content="오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 산업 AI까지 걸어온 주요 이정표." />
      <link rel="canonical" href={withBase("company.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("company.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/company.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("company.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="연혁 — 오큐브(주)" />
      <meta property="og:description" content="오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 SI와 산업 AI까지 이어온 주요 이정표." />
      <meta property="og:url" content={withBase("company.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="연혁 — 오큐브(주)" />
      <meta name="twitter:description" content="오큐브(주) 연혁 — 2007년 설립 이후 임베디드 SW에서 SI와 산업 AI까지 이어온 주요 이정표." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"연혁\",\"item\":\"@@BASE@@company.html\"}]}") }} />
      <SiteHeader slug="company" />
      <MobilePanel />
      <main>
        {" "}
        <PageHero data={heroes["company"]} />
        {" "}
        <nav className="subnav" aria-label="회사 섹션">
          <div className="wrap">
            {" "}
            <a href="about.html">
              회사소개
            </a>
            {" "}
            <a href="#history">
              History
            </a>
            {" "}
            <a href="location.html">
              오시는 길
            </a>
            {" "}
          </div>
        </nav>
        {/* 회사소개 */}
        <section id="history" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">
                History
              </span>
              {" "}
              <h2 className="loc-h">
                설립부터 지금까지
              </h2>
              <p className="lead">
                임베디드에서 출발해 SI와 산업 AI로 넓혀온 과정을 이정표로 정리했습니다.
              </p>
            </div>
            <div className="hist">
              <HistRows groups={historyGroups} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter id="contact" />
    </>
  );
}
