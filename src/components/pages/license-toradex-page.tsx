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
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";
import { T, localizeLd, t } from "@/i18n/translate";

export function LicenseToradexPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="license-toradex.html"
        title={t(lang, "Toradex — 산업용 SoM · 캐리어보드 | Global Partners · 오큐브(주)")}
        description={t(
          lang,
          "2003년 스위스 설립 Toradex의 System on Module — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다.",
        )}
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Toradex","item":"@@BASE@@license-toradex.html"}]}',
            ),
          ),
        }}
      />
      <PageShell
        lang={lang}
        slug="license-toradex"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy[lang]["license-toradex"]} />
          </>
        }
      >
        {" "}
        <PageHero lang={lang} data={heroes[lang]["license-toradex"]} />{" "}
        <section id="som" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-toradex:som"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  <T l={lang}>
                    System on Module(SoM) 또는 Computer on Module(CoM)은 프로세서, 메모리와 주요
                    입출력 기능을 작은 보드에 통합한
                  </T>{" "}
                  <b>
                    <T l={lang}>임베디드 컴퓨팅 모듈</T>
                  </b>
                  <T l={lang}>입니다.</T>
                </p>
                <p style={{ marginTop: "12px" }}>
                  <T l={lang}>운영체제와 드라이버, 보드 지원 패키지(BSP)가 함께 제공됩니다.</T>
                  <br className="sb" />{" "}
                  <T l={lang}>캐리어 보드만 바꿔 여러 장비의 공통 기반으로 씁니다.</T>
                </p>
                <p style={{ marginTop: "12px" }}>
                  <T l={lang}>
                    검증된 모듈을 활용해 핵심 애플리케이션 개발에 집중하고, 하드웨어 개발 위험과
                    제품 출시 기간을 줄일 수 있습니다.
                  </T>
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src={assetPath("assets/img/vendor/toradex-som.png", lang)}
                  alt={t(lang, "Toradex System on Module 구조")}
                  loading="lazy"
                  width="784"
                  height="555"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-toradex:benefits"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              <div className="dep-card">
                <img
                  src={assetPath("assets/img/vendor/toradex_icon_accelerate.png", lang)}
                  alt=""
                  width="40"
                  height="40"
                  style={{ marginBottom: "10px" }}
                  aria-hidden="true"
                />
                <h3>
                  <T l={lang}>시장 출시 시간 단축</T>
                </h3>
                <p>
                  <T l={lang}>
                    하드웨어 기반 재설계 없이 핵심 애플리케이션에 집중 — 출시 기간 단축
                  </T>
                </p>
              </div>
              <div className="dep-card">
                <img
                  src={assetPath("assets/img/vendor/toradex_icon_robust.png", lang)}
                  alt=""
                  width="40"
                  height="40"
                  style={{ marginBottom: "10px" }}
                  aria-hidden="true"
                />
                <h3>
                  <T l={lang}>검증된 솔루션</T>
                </h3>
                <p>
                  <T l={lang}>
                    검증된 상용 모듈(SoM) 사용으로 신규 하드웨어 설계·
                    <wbr />
                    검증 위험 축소
                  </T>
                </p>
              </div>
              <div className="dep-card">
                <img
                  src={assetPath("assets/img/vendor/toradex_icon_performance.png", lang)}
                  alt=""
                  width="40"
                  height="40"
                  style={{ marginBottom: "10px" }}
                  aria-hidden="true"
                />
                <h3>
                  <T l={lang}>최신 기술 채택</T>
                </h3>
                <p>
                  <T l={lang}>
                    최신 프로세서(SoC)·
                    <wbr />
                    메모리 적용 모듈로 제품 성능 단계적 확장
                  </T>
                </p>
              </div>
              <div className="dep-card">
                <img
                  src={assetPath("assets/img/vendor/toradex_icon_cost.png", lang)}
                  alt=""
                  width="40"
                  height="40"
                  style={{ marginBottom: "10px" }}
                  aria-hidden="true"
                />
                <h3>
                  <T l={lang}>제품 개발 비용 최적화</T>
                </h3>
                <p>
                  <T l={lang}>맞춤형 보드 설계 범위 축소로 전체 프로젝트 비용 절감</T>
                </p>
              </div>
            </div>
            <div className="duo" style={{ marginTop: "16px" }}>
              <div className="duo-txt reveal">
                <h3 style={{ fontSize: "18px" }}>
                  <T l={lang}>SoM + 커스텀 캐리어 보드</T>
                </h3>
                <p>
                  <T l={lang}>상용 SoM에 캐리어 보드를 조합해 제품을 구성합니다.</T>
                  <br className="sb" />{" "}
                  <T l={lang}>
                    오큐브는 보드 설계와 Linux·
                    <wbr />
                    Qt 화면(HMI) 구성까지 맡습니다.
                  </T>
                </p>
              </div>
              <div className="duo-media plain reveal" data-d="1">
                <img
                  src={assetPath("assets/img/vendor/toradex.png", lang)}
                  alt={t(lang, "SoM과 캐리어 보드 관계도")}
                  loading="lazy"
                  width="520"
                  height="519"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="why" className="sec-anchor dark">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-toradex:why"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "26px" }}>
              {" "}
              <DepCards items={depCards[lang]["license-toradex:why"]} />
            </div>
            <div className="pi-tags reveal" data-d="2" style={{ marginTop: "22px" }}>
              <span className="pill">Colibri · Apalis · Verdin</span>{" "}
              <span className="pill">
                <T l={lang}>Yocto 보드 지원 패키지(BSP)</T>
              </span>{" "}
              <span className="pill">
                <T l={lang}>Torizon 컨테이너(OCI)</T>
              </span>{" "}
              <span className="pill">
                <T l={lang}>원격 업데이트(OTA) · 차량·산업 통신(CAN/Modbus)</T>
              </span>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
