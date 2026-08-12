import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function LicenseQtPage() {
  return (
    <>
      <title>
        Qt — 크로스플랫폼 UI 프레임워크 | Global Partners · 오큐브(주)
      </title>
      <meta name="description" content="하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드까지 다양한 플랫폼을 지원하는 Qt — 오큐브가 라이선스 공급과 국내 엔지니어링 지원을 제공합니다." />
      <link rel="canonical" href={withBase("license-qt.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-qt.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-qt.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-qt.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="Qt — 크로스플랫폼 UI 프레임워크 | Global Partners · 오큐브(주)" />
      <meta property="og:description" content="하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드까지 다양한 플랫폼을 지원하는 Qt — 오큐브가 라이선스 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta property="og:url" content={withBase("license-qt.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Qt — 크로스플랫폼 UI 프레임워크 | Global Partners · 오큐브(주)" />
      <meta name="twitter:description" content="하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드까지 다양한 플랫폼을 지원하는 Qt — 오큐브가 라이선스 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Qt\",\"item\":\"@@BASE@@license-qt.html\"}]}") }} />
      <SiteHeader slug="license-qt" />
      <MobilePanel />
      <main id="top">
        {" "}
        <PageHero data={heroes["license-qt"]} />
        {" "}
        <section id="framework" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:framework"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      Qt Framework 필수 모듈
                    </h3>
                    <p>
                      주요 운영 환경 공통 핵심 라이브러리 — Qt 버전 정책에 따라 바이너리·
                      <wbr />
                      소스 호환 보장
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      Qt Framework 확장 모듈
                    </h3>
                    <p>
                      그래픽·
                      <wbr />
                      네트워크·
                      <wbr />
                      멀티미디어 등 필요 기능과 플랫폼별 특화 기능 추가
                    </p>
                  </div>
                </div>
                <div className="hero-ctas" style={{marginTop: "22px"}}>
                  <a href="https://www.qt.io/product/framework" className="btn btn-primary" target="_blank" rel="noopener">
                    Qt Framework 알아보기{" "}
                    <span aria-hidden="true" style={{fontSize: ".85em"}}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img src="assets/img/vendor/qt.png" alt="Qt Framework 필수 모듈과 Add-on 모듈 구성도" loading="lazy" width="500" height="350" />
              </div>
            </div>
          </div>
        </section>
        <section id="tools" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:tools"]} />
            <div className="duo rev" style={{marginTop: "8px"}}>
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      Qt Creator 개발 환경
                    </h3>
                    <p>
                      화면 편집·
                      <wbr />
                      코드 자동 완성·
                      <wbr />
                      시각적 디버깅·
                      <wbr />
                      성능 분석을 하나의 개발 환경에서
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      빌드 툴
                    </h3>
                    <p>
                      qmake·
                      <wbr />
                      CMake로 애플리케이션 빌드 과정 간소화
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      테스트와 디버깅
                    </h3>
                    <p>
                      Qt Test 기반 단위 테스트와 프로젝트별 GUI 자동화 도구 연계
                    </p>
                  </div>
                </div>
                <div className="hero-ctas" style={{marginTop: "22px"}}>
                  <a href="https://www.qt.io/product/development-tools" className="btn btn-primary" target="_blank" rel="noopener">
                    Qt 개발 툴 알아보기{" "}
                    <span aria-hidden="true" style={{fontSize: ".85em"}}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img src="assets/img/vendor/qt-creator.png" alt="Qt Creator IDE 화면" loading="lazy" width="500" height="350" />
              </div>
            </div>
          </div>
        </section>
        <section id="partner" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:partner"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "26px"}}>
              <div className="dep-card">
                <h3>
                  라이선스 안내
                </h3>
                <p>
                  프로젝트 규모·
                  <wbr />
                  타겟에 맞는 Qt 라이선스 유형 안내
                </p>
                <a className="sec-more" href="contact.html">
                  문의하기 →
                </a>
              </div>
              <div className="dep-card">
                <h3>
                  라이선스 공급
                </h3>
                <p>
                  정품 라이선스 공급·
                  <wbr />
                  갱신·
                  <wbr />
                  컴플라이언스 관리
                </p>
                <a className="sec-more" href="contact.html">
                  문의하기 →
                </a>
              </div>
              <div className="dep-card">
                <h3>
                  라이선스 컨설팅
                </h3>
                <p>
                  도입 검토부터 기술 교육·
                  <wbr />
                  통합 엔지니어링까지 지원
                </p>
                <a className="sec-more" href="contact.html">
                  문의하기 →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:portfolio"]} />
            <div className="dep-grid">
              <div className="dep-card rv">
                <h3>
                  Qt Porting
                </h3>
                <p>
                  Qualcomm APQ8009 칩에 Qt 포팅
                </p>
              </div>
              <div className="dep-card rv d1">
                <h3>
                  System Aircon Monitoring
                </h3>
                <p>
                  시스템 에어컨 모니터링 SW
                </p>
              </div>
              <div className="dep-card rv d2">
                <h3>
                  Chiller HMI
                </h3>
                <p>
                  산업용 칠러 장비 HMI
                </p>
              </div>
              <div className="dep-card rv d3">
                <h3>
                  Audio Matrix Controller
                </h3>
                <p>
                  오디오 매트릭스 컨트롤러 모바일 앱
                </p>
              </div>
            </div>
            <p className="sec-note rv">
              <a href="https://www.qt.io" className="btn btn-ghost" target="_blank" rel="noopener">
                Qt 자세히 보기{" "}
                <span aria-hidden="true" style={{fontSize: ".85em"}}>
                  ↗
                </span>
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["license-qt"]} />
      </SiteFooter>
    </>
  );
}
