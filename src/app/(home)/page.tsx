import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { homeSlides } from "@/data/home-hero";
import { HomeSlides } from "@/components/section/home-slides";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { HomeCaseLinks } from "@/components/section/bcase-cards";
import { homeCases } from "@/data/cases";

export default function HomePage() {
  return (
    <>
      <PageMeta
        path=""
        title="오큐브(주) — Embedded에서 AI까지 · 산업 AI 솔루션 기업"
        description="오큐브(주)는 임베디드·SI 기술력 위에 자체 산업 AI 플랫폼 Cubeon을 더해 제조·모빌리티·에너지와 기업 운영의 과제를 해결하는 산업 AI 솔루션 기업입니다. Since 2007."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"Organization","name":"오큐브 주식회사","alternateName":"OCUBE Co., Ltd.","url":"@@BASE@@","logo":"@@BASE@@assets/og-image.jpg","foundingDate":"2007-03-29","description":"임베디드·SI 기반의 산업 AI 솔루션 기업","address":{"@type":"PostalAddress","streetAddress":"수성구 알파시티1로31길 18","addressLocality":"대구광역시","addressCountry":"KR"},"telephone":"+82-53-313-5333","email":"sales@ocube.co.kr"}',
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"WebSite","name":"오큐브(주)","url":"@@BASE@@"}',
          ),
        }}
      />
      <SiteHeader slug="index" navLabel="Main navigation" />
      <MobilePanel navLabel="Mobile navigation" ctaLabel="Contact" />
      <main>
        <section id="top" className="hero">
          <div className="home-hero-shell">
            <div className="hslides">
              <HomeSlides items={homeSlides} />
            </div>
            <div className="hero-ctrl">
              <div className="wrap">
                <div className="hctrl">
                  {" "}
                  <button className="hnav" type="button" data-act="prev" aria-label="이전 슬라이드">
                    {" "}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M15 5l-7 7 7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </button>{" "}
                  <button
                    className="hnav"
                    type="button"
                    data-act="toggle"
                    aria-label="자동 전환 일시정지"
                    aria-pressed="false"
                  >
                    {" "}
                    <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M9.5 5.5v13M14.5 5.5v13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      ></path>
                    </svg>{" "}
                    <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.5 5.6l10 6.4-10 6.4z" fill="currentColor"></path>
                    </svg>{" "}
                  </button>{" "}
                  <button className="hnav" type="button" data-act="next" aria-label="다음 슬라이드">
                    {" "}
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M9 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                  </button>{" "}
                </div>
                <div className="hpag" role="tablist" aria-label="히어로 배너 선택">
                  {" "}
                  <button
                    className="hbar hpag-item on"
                    type="button"
                    data-i="0"
                    aria-label="AX 슬라이드"
                  >
                    <i></i>
                    <span>01</span>
                    <b>AX</b>
                  </button>{" "}
                  <button
                    className="hbar hpag-item"
                    type="button"
                    data-i="1"
                    aria-label="Embedded 슬라이드"
                  >
                    <i></i>
                    <span>02</span>
                    <b>EMBEDDED</b>
                  </button>{" "}
                  <button
                    className="hbar hpag-item"
                    type="button"
                    data-i="2"
                    aria-label="SI 슬라이드"
                  >
                    <i></i>
                    <span>03</span>
                    <b>SI</b>
                  </button>{" "}
                  <button
                    className="hbar hpag-item"
                    type="button"
                    data-i="3"
                    aria-label="GLOBAL TECH 슬라이드"
                  >
                    <i></i>
                    <span>04</span>
                    <b>GLOBAL TECH</b>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
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
                오큐브는 <b>OPEN</b>
                (열린 협업)과 <b>CUBE</b>
                (견고한 기술)가 만나 탄생했습니다. <br />
                고객의 과제를 이해하고 AX · 임베디드 · SI 역량으로 운영 가능한 제품과 시스템을
                구축합니다.
              </p>{" "}
              <a href="#business">
                자세히 보기{" "}
                <img src="assets/home-refresh/arrow-right.svg" alt="" width="14" height="14" />
              </a>{" "}
            </div>
          </div>
        </section>
        {/* BUSINESS */}
        <section id="business" className="capabilities-section">
          <div className="capabilities-head">
            <p className="section-label">BUSINESS</p>
            <h2>변화를 앞당기는 세 가지 실행 역량</h2>
            <p>
              데이터를 실행 가능한 인사이트로 전환하고,
              <br className="sb" /> 기술을 실제 작동하는 서비스와 제품으로 완성해
              <br className="sb" /> 비즈니스의 내일을 앞당깁니다.
            </p>
          </div>
          <div className="capabilities-grid">
            <article className="capability-card is-active" aria-current="true">
              <div className="capability-title-row">
                <div className="capability-title">
                  <img src="assets/home-refresh/capability-ax.svg" alt="" width="32" height="32" />
                  <h3>AX</h3>
                </div>{" "}
                <a href="business-ax.html">
                  자세히보기{" "}
                  <img src="assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>{" "}
              </div>
              <p>
                데이터와 AI를 통해 더 나은 판단과 빠른 실행을 연결하고, 기업과 산업의 운영 방식을
                혁신합니다.
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
                    src="assets/home-refresh/capability-embedded.svg"
                    alt=""
                    width="32"
                    height="32"
                  />
                  <h3>Embedded</h3>
                </div>{" "}
                <a href="business-embedded.html">
                  자세히보기{" "}
                  <img src="assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>{" "}
              </div>
              <p>
                모빌리티부터 산업용 디바이스까지, 혁신적인 소프트웨어로 스마트한 연결과 제품의
                차별화를 완성합니다.
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
                  <img src="assets/home-refresh/capability-si.svg" alt="" width="32" height="32" />
                  <h3>SI</h3>
                </div>{" "}
                <a href="business-si.html">
                  자세히보기{" "}
                  <img src="assets/home-refresh/arrow-right.svg" alt="" width="24" height="24" />
                </a>{" "}
              </div>
              <p>
                고객의 요구를 안정적인 시스템으로 구현하고 연결하여, 더 효율적인 비즈니스 환경을
                만듭니다.
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
              검증된 글로벌 기술,
              <br />
              국내 엔지니어링으로 완성합니다
            </h2>
            <p>
              제품 선정과 정품 라이선스 공급부터 포팅·통합·커스터마이징·엔지니어링 지원까지 오큐브
              엔지니어가 함께합니다.
            </p>
          </div>
          <div className="global-tech-logos" aria-label="글로벌 기술 파트너">
            {" "}
            <a href="license-qt.html" aria-label="Qt 공식 파트너 제품 보기">
              <img src="assets/img/vlogo/qt.png" alt="Qt" loading="lazy" width="240" height="70" />
            </a>{" "}
            <a href="license-telit.html" aria-label="Telit Cinterion 공식 파트너 제품 보기">
              <img
                src="assets/img/vlogo/telit.png"
                alt="Telit Cinterion"
                loading="lazy"
                width="308"
                height="163"
              />
            </a>{" "}
            <a href="license-toradex.html" aria-label="Toradex 공식 파트너 제품 보기">
              <img
                src="assets/img/vlogo/toradex.png"
                alt="Toradex"
                loading="lazy"
                width="240"
                height="70"
              />
            </a>{" "}
            <a href="license-visualon.html" aria-label="VisualOn 공식 파트너 제품 보기">
              <img
                src="assets/img/vlogo/visualon.png"
                alt="VisualOn"
                loading="lazy"
                width="240"
                height="70"
              />
            </a>{" "}
            <a href="license-tuxera.html" aria-label="Tuxera 공식 파트너 제품 보기">
              <img
                src="assets/img/vlogo/tuxera.png"
                alt="Tuxera"
                loading="lazy"
                width="418"
                height="117"
              />
            </a>{" "}
            <a href="license-protopie.html" aria-label="ProtoPie 공식 파트너 제품 보기">
              <img
                src="assets/img/vlogo/protopie.png"
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
              <h2>산업의 요구를 이해하고, 실제 운영으로 증명한 구축 사례</h2>
            </div>
            <div className="home-cases-panel">
              <div id="case-content" className="bcase-head">
                {" "}
                <span className="eb">BUILD CASES</span> <h2>구축 사례</h2>
                <p>
                  산업의 요구를 정확히 이해하고, 실제 운영 환경에서 안정적으로 작동하는 소프트웨어와
                  시스템으로 완성한 오큐브의 프로젝트입니다.
                </p>
              </div>
              <div className="bcase-mq">
                <div className="bcase-track">
                  <div className="bcase-row">
                    {" "}
                    <HomeCaseLinks items={homeCases} />
                  </div>
                  <div className="bcase-row" aria-hidden="true">
                    {" "}
                    <HomeCaseLinks items={homeCases} duplicate />
                  </div>
                </div>
              </div>{" "}
              <a className="bcase-more" href="references.html">
                전체 구축 사례 보기 <span aria-hidden="true">→</span>
              </a>{" "}
            </div>
          </div>
        </section>
        {/* CONTACT */}
      </main>
      <footer id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-shell">
            <div className="contact-top">
              <div className="contact-copy">
                <p className="section-label">CONTACT</p>
                <h2>산업과 비즈니스의 과제를 들려주세요</h2>
                <p className="contact-description">
                  남겨주신 내용은 담당 엔지니어가 직접 확인해, 도입 상담부터 기술 문의와 라이선스
                  견적까지 안내드립니다.
                </p>{" "}
                <a className="contact-button" href="mailto:sales@ocube.co.kr">
                  문의하기
                </a>{" "}
              </div>
              <div className="contact-badge">
                {" "}
                <a href="contact.html" className="contact-badge-core" aria-label="문의하기">
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
                  <img src="assets/ci_01.avif" alt="OCUBE" width="132" height="40" />{" "}
                  <span>OCUBE CO.,LTD.</span>{" "}
                </div>
                <dl>
                  <div>
                    <dt>DAEGU</dt>
                    <dd>대구광역시 수성구 알파시티1로31길 18 (본사)</dd>
                  </div>
                  <div>
                    <dt>SEOUL</dt>
                    <dd>서울 강서구 강서로56가길 141 KM빌딩 2·3층</dd>
                  </div>
                  <div>
                    <dt>ANYANG</dt>
                    <dd>안양 동안구 LS로 142 금정역SKV1센터 722·723·710호</dd>
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
            <div className="contact-legal">
              {" "}
              <span>Copyright © OCUBE Co., Ltd. All rights reserved.</span>{" "}
              <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>{" "}
              <a href="privacy.html">Privacy Policy</a>{" "}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
