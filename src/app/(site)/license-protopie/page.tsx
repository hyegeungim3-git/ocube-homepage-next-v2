import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function LicenseProtopiePage() {
  return (
    <>
      <title>ProtoPie — 하이피델리티 프로토타이핑 | Global Partners · 오큐브(주)</title>
      <meta
        name="description"
        content="코딩 없이 실제 제품에 가까운 인터랙션을 사전 검증하는 ProtoPie — 오큐브가 파트너로 공급·지원합니다."
      />
      <link rel="canonical" href={withBase("license-protopie.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-protopie.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-protopie.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-protopie.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        property="og:title"
        content="ProtoPie — 하이피델리티 프로토타이핑 | Global Partners · 오큐브(주)"
      />
      <meta
        property="og:description"
        content="코딩 없이 실제 제품에 가까운 인터랙션을 사전 검증하는 ProtoPie — 오큐브가 파트너로 공급·지원합니다."
      />
      <meta property="og:url" content={withBase("license-protopie.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ProtoPie — 하이피델리티 프로토타이핑 | Global Partners · 오큐브(주)"
      />
      <meta
        name="twitter:description"
        content="코딩 없이 실제 제품에 가까운 인터랙션을 사전 검증하는 ProtoPie — 오큐브가 파트너로 공급·지원합니다."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"ProtoPie","item":"@@BASE@@license-protopie.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-protopie" />
      <MobilePanel />
      <main id="top">
        {" "}
        <PageHero data={heroes["license-protopie"]} />{" "}
        <section id="tech" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-protopie:tech"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>코딩 없이 인터랙션 제작</h3>
                    <p>
                      변수·
                      <wbr />
                      조건으로 복잡한 화면 전환과 반응을 코딩 없이 구현
                    </p>
                  </div>
                  <div className="feat">
                    <h3>멀티 디바이스 연동</h3>
                    <p>
                      스마트폰·
                      <wbr />
                      태블릿·
                      <wbr />
                      PC·
                      <wbr />
                      웨어러블 간 통신 프로토타입으로 실제 서비스 흐름 검증
                    </p>
                  </div>
                  <div className="feat">
                    <h3>하드웨어 센서 연동</h3>
                    <p>
                      자이로스코프·
                      <wbr />
                      마이크·
                      <wbr />
                      카메라·
                      <wbr />
                      근접 센서 입력을 반영한 인터랙션 설계
                    </p>
                  </div>
                  <div className="feat">
                    <h3>재사용 컴포넌트</h3>
                    <p>반복 인터랙션을 컴포넌트로 관리 — 화면 간 일관성 유지, 제작 시간 단축</p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/protopie.png"
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
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["license-protopie"]} />
      </SiteFooter>
    </>
  );
}
