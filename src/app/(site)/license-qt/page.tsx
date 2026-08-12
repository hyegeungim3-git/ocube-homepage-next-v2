import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function LicenseQtPage() {
  return (
    <>
      <PageMeta
        path="license-qt.html"
        title="Qt — 크로스플랫폼 UI 프레임워크 | Global Partners · 오큐브(주)"
        description="하나의 프레임워크와 코드베이스로 데스크톱부터 임베디드까지 다양한 플랫폼을 지원하는 Qt — 오큐브가 라이선스 공급과 국내 엔지니어링 지원을 제공합니다."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Qt","item":"@@BASE@@license-qt.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="license-qt"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-qt"]} />
          </>
        }
      >
        {" "}
        <PageHero data={heroes["license-qt"]} />{" "}
        <section id="framework" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-qt:framework"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Qt Framework 필수 모듈</h3>
                    <p>
                      주요 운영 환경 공통 핵심 라이브러리 — Qt 버전 정책에 따라 바이너리·
                      <wbr />
                      소스 호환 보장
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Qt Framework 확장 모듈</h3>
                    <p>
                      그래픽·
                      <wbr />
                      네트워크·
                      <wbr />
                      멀티미디어 등 필요 기능과 플랫폼별 특화 기능 추가
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
                    Qt Framework 알아보기{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/qt.png"
                  alt="Qt Framework 필수 모듈과 Add-on 모듈 구성도"
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
            <SecHead copy={secHeads["license-qt:tools"]} />
            <div className="duo rev" style={{ marginTop: "8px" }}>
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Qt Creator 개발 환경</h3>
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
                    <h3>빌드 툴</h3>
                    <p>
                      qmake·
                      <wbr />
                      CMake로 애플리케이션 빌드 과정 간소화
                    </p>
                  </div>
                  <div className="feat">
                    <h3>테스트와 디버깅</h3>
                    <p>Qt Test 기반 단위 테스트와 프로젝트별 GUI 자동화 도구 연계</p>
                  </div>
                </div>
                <div className="hero-ctas" style={{ marginTop: "22px" }}>
                  <a
                    href="https://www.qt.io/product/development-tools"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Qt 개발 툴 알아보기{" "}
                    <span aria-hidden="true" style={{ fontSize: ".85em" }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/qt-creator.png"
                  alt="Qt Creator IDE 화면"
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
            <SecHead copy={secHeads["license-qt:partner"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "26px" }}>
              <div className="dep-card">
                <h3>라이선스 안내</h3>
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
                <h3>라이선스 공급</h3>
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
                <h3>라이선스 컨설팅</h3>
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
                <h3>Qt Porting</h3>
                <p>Qualcomm APQ8009 칩에 Qt 포팅</p>
              </div>
              <div className="dep-card rv d1">
                <h3>System Aircon Monitoring</h3>
                <p>시스템 에어컨 모니터링 SW</p>
              </div>
              <div className="dep-card rv d2">
                <h3>Chiller HMI</h3>
                <p>산업용 칠러 장비 HMI</p>
              </div>
              <div className="dep-card rv d3">
                <h3>Audio Matrix Controller</h3>
                <p>오디오 매트릭스 컨트롤러 모바일 앱</p>
              </div>
            </div>
            <p className="sec-note rv">
              <a href="https://www.qt.io" className="btn btn-ghost" target="_blank" rel="noopener">
                Qt 자세히 보기{" "}
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
