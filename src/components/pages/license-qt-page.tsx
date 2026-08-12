import type { JSX } from "react";
import { assetPath } from "@/config/i18n";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";
import { T, localizeLd, t } from "@/i18n/translate";

export function LicenseQtPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="license-qt.html"
        title={t(lang, "Qt — 크로스플랫폼 UI 프레임워크 | Global Partners · 오큐브(주)")}
        description={t(
          lang,
          "하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드까지 다양한 플랫폼을 지원하는 Qt — 오큐브가 라이선스 공급과 국내 엔지니어링 지원을 제공합니다.",
        )}
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Qt","item":"@@BASE@@license-qt.html"}]}',
            ),
          ),
        }}
      />
      <PageShell
        lang={lang}
        slug="license-qt"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy[lang]["license-qt"]} />
          </>
        }
      >
        {" "}
        <PageHero lang={lang} data={heroes[lang]["license-qt"]} />{" "}
        <section id="framework" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-qt:framework"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      <T l={lang}>Qt Framework 필수 모듈</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        주요 운영 환경 공통 핵심 라이브러리 — Qt 버전 정책에 따라 바이너리·
                        <wbr />
                        소스 호환 보장
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>Qt Framework 확장 모듈</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        그래픽·
                        <wbr />
                        네트워크·
                        <wbr />
                        멀티미디어 등 필요 기능과 플랫폼별 특화 기능 추가
                      </T>
                    </p>
                  </div>
                </div>
                <div className="hero-ctas" style={{ marginTop: "22px" }}>
                  <a
                    href="https://www.qt.io/product/framework"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    <T l={lang}>Qt Framework 알아보기</T>{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src={assetPath("assets/img/vendor/qt.png", lang)}
                  alt={t(lang, "Qt Framework 필수 모듈과 Add-on 모듈 구성도")}
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tools" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-qt:tools"]} />
            <div className="duo rev" style={{ marginTop: "8px" }}>
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      <T l={lang}>Qt Creator 개발 환경</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        화면 편집·
                        <wbr />
                        코드 자동 완성·
                        <wbr />
                        시각적 디버깅·
                        <wbr />
                        성능 분석을 하나의 개발 환경에서
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>빌드 툴</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        qmake·
                        <wbr />
                        CMake로 애플리케이션 빌드 과정 간소화
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>테스트와 디버깅</T>
                    </h3>
                    <p>
                      <T l={lang}>Qt Test 기반 단위 테스트와 프로젝트별 GUI 자동화 도구 연계</T>
                    </p>
                  </div>
                </div>
                <div className="hero-ctas" style={{ marginTop: "22px" }}>
                  <a
                    href="https://www.qt.io/product/development-tools"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    <T l={lang}>Qt 개발 툴 알아보기</T>{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src={assetPath("assets/img/vendor/qt-creator.png", lang)}
                  alt={t(lang, "Qt Creator IDE 화면")}
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="partner" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-qt:partner"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "26px" }}>
              <div className="dep-card">
                <h3>
                  <T l={lang}>라이선스 안내</T>
                </h3>
                <p>
                  <T l={lang}>
                    프로젝트 규모·
                    <wbr />
                    타겟에 맞는 Qt 라이선스 유형 안내
                  </T>
                </p>
                <a className="sec-more" href="contact.html">
                  <T l={lang}>문의하기 →</T>
                </a>
              </div>
              <div className="dep-card">
                <h3>
                  <T l={lang}>라이선스 공급</T>
                </h3>
                <p>
                  <T l={lang}>
                    정품 라이선스 공급·
                    <wbr />
                    갱신·
                    <wbr />
                    컴플라이언스 관리
                  </T>
                </p>
                <a className="sec-more" href="contact.html">
                  <T l={lang}>문의하기 →</T>
                </a>
              </div>
              <div className="dep-card">
                <h3>
                  <T l={lang}>라이선스 컨설팅</T>
                </h3>
                <p>
                  <T l={lang}>
                    도입 검토부터 기술 교육·
                    <wbr />
                    통합 엔지니어링까지 지원
                  </T>
                </p>
                <a className="sec-more" href="contact.html">
                  <T l={lang}>문의하기 →</T>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-qt:portfolio"]} />
            <div className="dep-grid">
              <div className="dep-card rv">
                <h3>Qt Porting</h3>
                <p>
                  <T l={lang}>Qualcomm APQ8009 칩에 Qt 포팅</T>
                </p>
              </div>
              <div className="dep-card rv d1">
                <h3>System Aircon Monitoring</h3>
                <p>
                  <T l={lang}>시스템 에어컨 모니터링 SW</T>
                </p>
              </div>
              <div className="dep-card rv d2">
                <h3>Chiller HMI</h3>
                <p>
                  <T l={lang}>산업용 칠러 장비 HMI</T>
                </p>
              </div>
              <div className="dep-card rv d3">
                <h3>Audio Matrix Controller</h3>
                <p>
                  <T l={lang}>오디오 매트릭스 컨트롤러 모바일 앱</T>
                </p>
              </div>
            </div>
            <p className="sec-note rv">
              <a href="https://www.qt.io" className="btn btn-ghost" target="_blank" rel="noopener">
                <T l={lang}>Qt 자세히 보기</T>{" "}
                <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                  ↗
                </span>
              </a>
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
