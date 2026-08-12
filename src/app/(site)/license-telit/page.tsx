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

export default function LicenseTelitPage() {
  return (
    <>
      <PageMeta
        path="license-telit.html"
        title="Telit Cinterion — 셀룰러 IoT 모듈 | Global Partners · 오큐브(주)"
        description="M2M·IoT 애플리케이션을 위한 Telit Cinterion 모듈 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Telit Cinterion","item":"@@BASE@@license-telit.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="license-telit"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-telit"]} />
          </>
        }
      >
        {" "}
        <PageHero data={heroes["license-telit"]} />{" "}
        <section id="modules" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:modules"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <p>
                  제품군은 다양한 셀룰러 표준을 지원합니다.
                  <br className="sb" /> 통신 규격과 지역·
                  <wbr />
                  인증 범위는 모델별로 확인해 선정합니다.
                </p>
                <div className="feat-list" style={{ marginTop: "18px" }}>
                  <div className="feat">
                    <h3>통신·측위 기능 통합</h3>
                    <p>
                      Java™, GPS·
                      <wbr />
                      GLONASS, SL Agent, SIM Access Profile 등 제품에 필요한 기능을 모듈에
                      통합했습니다.
                    </p>
                  </div>
                  <div className="feat">
                    <h3>환경 규제 확인</h3>
                    <p>RoHS 등 환경 규제 준수 여부는 적용 제품의 인증 문서로 확인합니다.</p>
                  </div>
                  <div className="feat">
                    <h3>인증 범위 확인</h3>
                    <p>환경·지역·통신사 인증 범위는 제품과 적용 국가에 따라 모델별로 확인합니다.</p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/telit.png"
                  alt="Telit Cinterion M2M·IoT 통신 모듈"
                  loading="lazy"
                  width="500"
                  height="350"
                />
              </div>
            </div>
            <div className="pi-tags rv" style={{ marginTop: "22px" }}>
              <span className="pill light">저전력 이동통신(LTE Cat M1 · NB-IoT)</span>{" "}
              <span className="pill light">5G · eSIM</span>{" "}
              <span className="pill light">GPS/GLONASS</span>{" "}
              <span className="pill light">메시지 통신(MQTT) · 기기관리 통신(LwM2M)</span>{" "}
              <span className="pill light">TLS 1.2/1.3</span>
            </div>
          </div>
        </section>
        <section id="usecase" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-telit:usecase"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-telit:usecase"]} />
            </div>
            <p className="sec-note reveal" data-d="2">
              오큐브는 통신 모듈 공급 경험을 바탕으로 제품 선정, 안테나 설계와 적용 국가의 통신사
              인증 준비를 함께 지원합니다.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
