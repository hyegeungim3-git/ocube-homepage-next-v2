import type { JSX } from "react";
import { assetPath } from "@/config/i18n";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { homeSlides } from "@/data/home-hero";
import { HomeHero } from "@/components/section/home-hero";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { HomeCaseLinks } from "@/components/section/bcase-cards";
import { PclMarquee } from "@/components/section/pcl-marquee";
import { logoGroups } from "@/data/logos";
import { homeCases } from "@/data/cases";
import { T, localizeLd, t } from "@/i18n/translate";

export function IndexPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path=""
        title={t(lang, "오큐브(주) — Embedded에서 AI까지 · 산업 AI 솔루션 기업")}
        description={t(
          lang,
          "오큐브(주)는 임베디드·SI 기술력 위에 자체 산업 AI 플랫폼 Cubeon을 더해 제조·모빌리티·에너지와 기업 운영의 과제를 해결하는 산업 AI 솔루션 기업입니다. Since 2007.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"Organization","name":"오큐브 주식회사","alternateName":"OCUBE Co., Ltd.","url":"@@BASE@@","logo":"@@BASE@@assets/og-image.jpg","foundingDate":"2007-03-29","description":"임베디드·SI 기반의 산업 AI 솔루션 기업","address":{"@type":"PostalAddress","streetAddress":"수성구 알파시티1로31길 18","addressLocality":"대구광역시","addressCountry":"KR"},"telephone":"+82-53-313-5333","email":"sales@ocube.co.kr"}',
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"WebSite","name":"오큐브(주)","url":"@@BASE@@"}',
            ),
          ),
        }}
      />
      <SiteHeader lang={lang} slug="index" navLabel="Main navigation" />
      <MobilePanel lang={lang} navLabel="Mobile navigation" ctaLabel="Contact" />
      <main>
        <HomeHero
          lang={lang}
          items={homeSlides[lang]}
          labels={{
            prev: t(lang, "이전 슬라이드"),
            next: t(lang, "다음 슬라이드"),
            pause: t(lang, "자동 전환 일시정지"),
            play: t(lang, "자동 전환 재생"),
            tablist: t(lang, "히어로 배너 선택"),
            bars: [
              { no: "01", name: "AX", label: t(lang, "AX 슬라이드") },
              { no: "02", name: "EMBEDDED", label: t(lang, "Embedded 슬라이드") },
              { no: "03", name: "SI", label: t(lang, "SI 슬라이드") },
              { no: "04", name: "GLOBAL TECH", label: t(lang, "GLOBAL TECH 슬라이드") },
            ],
          }}
        />
        {/* CI */}
        <section id="ci" className="typo-section">
          <div className="typo-layout">
            <div className="typo-stage" aria-label="Open plus Cube, OCUBE">
              <div className="typo-row typo-open">OPEN</div>
              <div className="typo-row typo-cube">
                <em>+</em> CUBE
              </div>
            </div>
            <div className="typo-copy">
              <p>
                <T l={lang}>오큐브는</T> <b>OPEN</b>
                <T l={lang}>(열린 협업)과</T> <b>CUBE</b>
                <T l={lang}>(견고한 기술)가 만나 탄생했습니다.</T> <br />
                <T l={lang}>
                  고객의 니즈를 이해하고 AX · 임베디드 · SI 역량으로 운영 가능한 제품과 시스템을
                  구축합니다.
                </T>
              </p>{" "}
              <a href="#business">
                <T l={lang}>자세히 보기</T>{" "}
                <img
                  src={assetPath("assets/home-refresh/arrow-right.svg", lang)}
                  alt=""
                  width="14"
                  height="14"
                />
              </a>{" "}
            </div>
          </div>
        </section>
        {/* BUSINESS */}
        <section id="business" className="capabilities-section">
          <div className="capabilities-head">
            <p className="section-label">BUSINESS</p>
            <h2>
              <T l={lang}>변화를 앞당기는 세 가지 실행 역량</T>
            </h2>
            <p>
              <T l={lang}>데이터를 실행 가능한 인사이트로 전환하고,</T>
              <br className="sb" /> <T l={lang}>기술을 실제 작동하는 서비스와 제품으로 완성해</T>
              <br className="sb" /> <T l={lang}>비즈니스의 내일을 앞당깁니다.</T>
            </p>
          </div>
          <div className="capabilities-grid">
            <article className="capability-card is-active" aria-current="true">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img
                    src={assetPath("assets/home-refresh/capability-ax.svg", lang)}
                    alt=""
                    width="32"
                    height="32"
                  />
                  <h3>AX</h3>
                </div>{" "}
                <a href="business-ax.html">
                  <T l={lang}>자세히보기</T>{" "}
                  <img
                    src={assetPath("assets/home-refresh/arrow-right.svg", lang)}
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>{" "}
              </div>
              <p>
                <T l={lang}>
                  데이터와 AI를 통해 더 나은 판단과 빠른 실행을 연결하고, 기업과 산업의 운영 방식을
                  혁신합니다.
                </T>
              </p>
              <div className="capability-chips">
                <span>DATA</span>
                <span>AI</span>
                <span>INSIGHT</span>
                <span>AUTOMATION</span>
                <span>ACTION</span>
              </div>
            </article>
            <article className="capability-card">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img
                    src={assetPath("assets/home-refresh/capability-embedded.svg", lang)}
                    alt=""
                    width="32"
                    height="32"
                  />
                  <h3>Embedded</h3>
                </div>{" "}
                <a href="business-embedded.html">
                  <T l={lang}>자세히보기</T>{" "}
                  <img
                    src={assetPath("assets/home-refresh/arrow-right.svg", lang)}
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>{" "}
              </div>
              <p>
                <T l={lang}>
                  모빌리티부터 산업용 디바이스까지, 혁신적인 소프트웨어로 스마트한 연결과 제품의
                  차별화를 완성합니다.
                </T>
              </p>
              <div className="capability-chips">
                <span>AUTOMOTIVE</span>
                <span>FACTORY AUTOMATION</span>
                <span>HOME IoT</span>
              </div>
            </article>
            <article className="capability-card">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img
                    src={assetPath("assets/home-refresh/capability-si.svg", lang)}
                    alt=""
                    width="32"
                    height="32"
                  />
                  <h3>SI</h3>
                </div>{" "}
                <a href="business-si.html">
                  <T l={lang}>자세히보기</T>{" "}
                  <img
                    src={assetPath("assets/home-refresh/arrow-right.svg", lang)}
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>{" "}
              </div>
              <p>
                <T l={lang}>
                  고객의 요구를 안정적인 시스템으로 구현하고 연결하여, 더 효율적인 비즈니스 환경을
                  만듭니다.
                </T>
              </p>
              <div className="capability-chips">
                <span>BUSINESS</span>
                <span>SYSTEM</span>
                <span>DATA</span>
                <span>INTEGRATION</span>
                <span>OPERATION</span>
              </div>
            </article>
          </div>
        </section>
        {/* GLOBAL TECHNOLOGY PARTNERS */}
        <section id="partners" className="global-tech-section" aria-labelledby="home-partner-title">
          <div className="global-tech-copy">
            <p className="section-label">GLOBAL TECHNOLOGY</p>
            <h2 id="home-partner-title">
              <T l={lang}>검증된 글로벌 기술,</T>
              <br />
              <T l={lang}>국내 엔지니어링으로 완성합니다</T>
            </h2>
            <p>
              <T l={lang}>
                제품 선정과 정품 라이선스 공급부터 포팅·통합·커스터마이징·엔지니어링 지원까지 오큐브
                엔지니어가 함께합니다.
              </T>
            </p>
          </div>
          <div className="global-tech-logos" aria-label={t(lang, "글로벌 기술 파트너")}>
            {" "}
            <a href="license-qt.html" aria-label={t(lang, "Qt 공식 파트너 제품 보기")}>
              <img
                src={assetPath("assets/img/vlogo/qt.png", lang)}
                alt="Qt"
                loading="lazy"
                width="240"
                height="70"
              />
            </a>{" "}
            <a
              href="license-telit.html"
              aria-label={t(lang, "Telit Cinterion 공식 파트너 제품 보기")}
            >
              <img
                src={assetPath("assets/img/vlogo/telit.png", lang)}
                alt="Telit Cinterion"
                loading="lazy"
                width="308"
                height="163"
              />
            </a>{" "}
            <a href="license-toradex.html" aria-label={t(lang, "Toradex 공식 파트너 제품 보기")}>
              <img
                src={assetPath("assets/img/vlogo/toradex.png", lang)}
                alt="Toradex"
                loading="lazy"
                width="240"
                height="70"
              />
            </a>{" "}
            <a href="license-visualon.html" aria-label={t(lang, "VisualOn 공식 파트너 제품 보기")}>
              <img
                src={assetPath("assets/img/vlogo/visualon.png", lang)}
                alt="VisualOn"
                loading="lazy"
                width="240"
                height="70"
              />
            </a>{" "}
            <a href="license-tuxera.html" aria-label={t(lang, "Tuxera 공식 파트너 제품 보기")}>
              <img
                src={assetPath("assets/img/vlogo/tuxera.png", lang)}
                alt="Tuxera"
                loading="lazy"
                width="418"
                height="117"
              />
            </a>{" "}
            <a href="license-protopie.html" aria-label={t(lang, "ProtoPie 공식 파트너 제품 보기")}>
              <img
                src={assetPath("assets/img/vlogo/protopie.png", lang)}
                alt="ProtoPie"
                loading="lazy"
                width="411"
                height="94"
              />
            </a>{" "}
          </div>
        </section>
        {/* REFERENCE */}
        <section id="references" className="bcase home-cases-section">
          <div className="home-cases-sticky">
            <div className="home-case-opening">
              <h2>
                <T l={lang}>산업의 요구를 이해하고, 실제 운영으로 증명한 구축 사례</T>
              </h2>
            </div>
            <div className="home-cases-panel">
              <div id="case-content" className="bcase-head">
                {" "}
                <span className="eb">BUILD CASES</span>{" "}
                <h2>
                  <T l={lang}>구축 사례</T>
                </h2>
                <p>
                  <T l={lang}>
                    산업의 요구를 정확히 이해하고, 실제 운영 환경에서 안정적으로 작동하는
                    소프트웨어와 시스템으로 완성한 오큐브의 프로젝트입니다.
                  </T>
                </p>
              </div>
              <div className="bcase-mq">
                <div className="bcase-track">
                  <div className="bcase-row">
                    {" "}
                    <HomeCaseLinks lang={lang} items={homeCases[lang]} />
                  </div>
                  <div className="bcase-row" aria-hidden="true">
                    {" "}
                    <HomeCaseLinks lang={lang} items={homeCases[lang]} duplicate />
                  </div>
                </div>
              </div>{" "}
              <a className="bcase-more" href="references.html">
                <T l={lang}>전체 구축 사례 보기</T> <span aria-hidden="true">→</span>
              </a>{" "}
            </div>
          </div>
        </section>
        {/* PARTNERS & CLIENTS — 2026-08-26 리뷰로 Business 에서 여기로 옮겼다 */}
        <PclMarquee
          lang={lang}
          items={logoGroups[lang]["clients"]}
          label={t(lang, "파트너 및 고객사")}
        />
        {/* CONTACT */}
      </main>
      <footer id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-shell">
            <div className="contact-top">
              <div className="contact-copy">
                <p className="section-label">CONTACT</p>
                <h2>
                  <T l={lang}>산업과 비즈니스의 과제를 들려주세요</T>
                </h2>
                <p className="contact-description">
                  <T l={lang}>
                    남겨주신 내용은 담당 엔지니어가 직접 확인해, 도입 상담부터 기술 문의와 라이선스
                    견적까지 안내드립니다.
                  </T>
                </p>{" "}
                <a className="contact-button" href="contact.html">
                  <T l={lang}>문의하기</T>
                </a>{" "}
              </div>
              <div className="contact-badge">
                {" "}
                <a
                  href="contact.html"
                  className="contact-badge-core"
                  aria-label={t(lang, "문의하기")}
                >
                  {" "}
                  <svg viewBox="0 0 19 17" width="19" height="17" aria-hidden="true">
                    <path
                      d="M10.7 1 17.7 8.3 10.7 15.6M17.7 8.3H1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                </a>{" "}
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-company">
                <div className="contact-company-brand-home" aria-label="OCUBE CO., LTD.">
                  {" "}
                  <img
                    src={assetPath("assets/ci_01.avif", lang)}
                    alt="OCUBE"
                    width="132"
                    height="40"
                  />{" "}
                  <span>OCUBE CO.,LTD.</span>{" "}
                </div>
                <dl>
                  <div>
                    <dt>SEOUL</dt>
                    <dd>
                      <T l={lang}>서울특별시 강서구 강서로 56가길 141, 케이엠빌딩 3층</T>
                    </dd>
                  </div>
                  <div>
                    <dt>ANYANG</dt>
                    <dd>
                      <T l={lang}>경기도 안양시 동안구 LS로 142, 금정역SKV1 CENTER 722·723·710호</T>
                    </dd>
                  </div>
                  <div>
                    <dt>DAEGU</dt>
                    <dd>
                      <T l={lang}>대구광역시 수성구 알파시티1로 31길 18</T>
                    </dd>
                  </div>
                </dl>
              </div>
              <nav className="contact-links" aria-label="Footer navigation">
                <div>
                  <p className="f-h">Business</p> <a href="business-ax.html">AX</a>{" "}
                  <a href="business-embedded.html">Embedded</a>{" "}
                  <a href="business-si.html">SI</a>{" "}
                </div>
                <div>
                  <p className="f-h">Solution</p> <a href="solution-cubeon.html">Cubeon</a>{" "}
                  <a href="solution-dataq.html">QData</a>{" "}
                  <a href="solution-factoryq.html">QFactory</a>{" "}
                  <a href="solution-agentq.html">AgentQ</a>{" "}
                  <a href="solution-qdrive.html">QDrive</a> <a href="solution-evcp.html">EVCP</a>{" "}
                  <a href="solution-traffic.html">QVision</a>{" "}
                </div>
                <div>
                  <p className="f-h">Global Partners</p> <a href="license-qt.html">Qt</a>{" "}
                  <a href="license-telit.html">Telit Cinterion</a>{" "}
                  <a href="license-toradex.html">Toradex</a>{" "}
                  <a href="license-visualon.html">VisualOn</a>{" "}
                  <a href="license-tuxera.html">Tuxera</a>{" "}
                  <a href="license-protopie.html">ProtoPie</a>{" "}
                </div>
                <div>
                  <p className="f-h">Company</p> <a href="about.html">About Ocube</a>{" "}
                  <a href="company.html">History</a> <a href="references.html">Use Cases</a>{" "}
                  <a href="location.html">Locations</a> <a href="contact.html">Contact</a>{" "}
                </div>
              </nav>
            </div>
            {/* 푸터에는 연락처·메일 주소를 두지 않는다 (2026-08-26 리뷰) */}
            <div className="contact-legal">
              {" "}
              <span>Copyright © OCUBE Co., Ltd. All rights reserved.</span>{" "}
              <a href="privacy.html">Privacy Policy</a>{" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
