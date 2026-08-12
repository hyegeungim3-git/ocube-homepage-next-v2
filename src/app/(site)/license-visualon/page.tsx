import type { JSX } from "react";
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

export default function LicenseVisualonPage(): JSX.Element {
  return (
    <>
      <PageMeta
        path="license-visualon.html"
        title="VisualOn — 멀티미디어 재생 개발도구(SDK) | Global Partners · 오큐브(주)"
        description="OnStream MediaPlayer+ 등 VisualOn 멀티미디어 제품군 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"VisualOn","item":"@@BASE@@license-visualon.html"}]}',
          ),
        }}
      />
      <PageShell
        slug="license-visualon"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-visualon"]} />
          </>
        }
      >
        {" "}
        <PageHero data={heroes["license-visualon"]} />{" "}
        <section id="onstream" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-visualon:onstream"]} />
            <div className="duo">
              <div className="duo-txt rv">
                {" "}
                <span className="pill">OnStream MediaPlayer+</span>{" "}
                <h3>다양한 OTT 기능을 제공하는 프리미엄 플레이어 개발도구(SDK)</h3>
                <p>
                  VisualOn의 Multimedia Player Stack은 모바일·
                  <wbr />
                  PC·
                  <wbr />
                  스마트TV·
                  <wbr />
                  셋톱박스 등 다양한 환경에서 <b>일관된 콘텐츠 전송과 재생</b>을 구현합니다.
                </p>
                <div className="pi-tags">
                  <span className="pill light">HLS</span>{" "}
                  <span className="pill light">Smooth Streaming</span>{" "}
                  <span className="pill light">MPEG-DASH</span>{" "}
                  <span className="pill light">Progressive DL</span>{" "}
                  <span className="pill light">RTSP</span>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/visualon.png"
                  alt="OnStream MediaPlayer+ 멀티 디바이스 재생"
                  loading="lazy"
                  width="476"
                  height="300"
                />
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                {" "}
                <span className="pill">ExoPlayer+ · AVPlayer+</span>{" "}
                <h3>기본 플레이어 API와 호환되는 스트리밍 솔루션</h3>
                <p>
                  Android ExoPlayer, iOS AVPlayer 등 기본 플레이어 API와 연동됩니다.
                  <br className="sb" /> 분석·
                  <wbr />
                  콘텐츠 보호·
                  <wbr />
                  AdFlow 관리 기능을 포함합니다.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/visualon_exoplay.png"
                  alt="ExoPlayer+ / AVPlayer+ 구성"
                  loading="lazy"
                  width="760"
                  height="493"
                />
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                {" "}
                <span className="pill">HTML5 Player+ · 사용자 경험(UX) 모니터</span>{" "}
                <h3>브라우저 재생 품질과 사용자 경험 모니터링</h3>
                <p>
                  HTML5 환경에서 안정적인 <b>브라우저 내 재생 경험</b>
                  을 제공합니다.
                  <br className="sb" /> 사용자 경험 모니터는 재생 품질 지표(QoS)를 클라우드에 모아
                  분석합니다.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/visualon_vis01.png"
                  alt="VisualOn 재생 분석 대시보드"
                  loading="lazy"
                  width="510"
                  height="282"
                />
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                {" "}
                <span className="pill">Software Codecs</span>{" "}
                <h3>모빌리티에 최적화된 소프트웨어 코덱/파서</h3>
                <p>
                  VisualOn 소프트웨어 코덱은 목표 화질과 처리 성능, 전력 조건에 맞춰 적용 환경별로
                  조정할 수 있습니다.
                </p>
                <div className="pi-tags">
                  <span className="pill light">H.265/HEVC</span>{" "}
                  <span className="pill light">H.264</span> <span className="pill light">VP8</span>{" "}
                  <span className="pill light">WMV/VC-1</span>{" "}
                  <span className="pill light">AAC · AC3 · MP3</span>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="assets/img/vendor/visualon-ivi.jpg"
                  alt="차량 클러스터와 인포테인먼트(IVI) 화면에서 동작하는 VisualOn 재생 소프트웨어"
                  loading="lazy"
                  width="670"
                  height="477"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="apply" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-visualon:apply"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-visualon:apply"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
