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

export function LicenseProtopiePage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="license-protopie.html"
        title={t(lang, "ProtoPie — 하이피델리티 프로토타이핑 | Global Partners · 오큐브(주)")}
        description={t(
          lang,
          "코딩 없이 실제 제품에 가까운 인터랙션을 사전 검증하는 ProtoPie — 오큐브가 파트너로 공급·지원합니다.",
        )}
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"ProtoPie","item":"@@BASE@@license-protopie.html"}]}',
            ),
          ),
        }}
      />
      <PageShell
        lang={lang}
        slug="license-protopie"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy[lang]["license-protopie"]} />
          </>
        }
      >
        {" "}
        <PageHero lang={lang} data={heroes[lang]["license-protopie"]} />{" "}
        <section id="tech" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["license-protopie:tech"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      <T l={lang}>코딩 없이 인터랙션 제작</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        변수·
                        <wbr />
                        조건으로 복잡한 화면 전환과 반응을 코딩 없이 구현
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>멀티 디바이스 연동</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        스마트폰·
                        <wbr />
                        태블릿·
                        <wbr />
                        PC·
                        <wbr />
                        웨어러블 간 통신 프로토타입으로 실제 서비스 흐름 검증
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>하드웨어 센서 연동</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        자이로스코프·
                        <wbr />
                        마이크·
                        <wbr />
                        카메라·
                        <wbr />
                        근접 센서 입력을 반영한 인터랙션 설계
                      </T>
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      <T l={lang}>재사용 컴포넌트</T>
                    </h3>
                    <p>
                      <T l={lang}>
                        반복 인터랙션을 컴포넌트로 관리 — 화면 간 일관성 유지, 제작 시간 단축
                      </T>
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src={assetPath("assets/img/vendor/protopie.png", lang)}
                  alt={t(lang, "ProtoPie 인터랙션 프로토타이핑 화면")}
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
            <SecHead copy={secHeads[lang]["license-protopie:industry"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards[lang]["license-protopie:industry"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
