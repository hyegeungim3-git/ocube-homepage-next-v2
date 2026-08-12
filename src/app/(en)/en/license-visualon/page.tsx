import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseVisualonPage() {
  return (
    <>
      <title>VisualOn — Multimedia Playback SDKs | Global Partners · OCUBE</title>
      <meta
        name="description"
        content="The VisualOn multimedia range, including OnStream MediaPlayer+ — supplied by OCUBE, with engineering support in Korea."
      />
      <link rel="canonical" href={withBase("en/license-visualon.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-visualon.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-visualon.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-visualon.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="VisualOn — Multimedia Playback SDKs | Global Partners · OCUBE"
      />
      <meta
        property="og:description"
        content="The VisualOn multimedia range, including OnStream MediaPlayer+ — supplied by OCUBE, with engineering support in Korea."
      />
      <meta property="og:url" content={withBase("en/license-visualon.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="VisualOn — Multimedia Playback SDKs | Global Partners · OCUBE"
      />
      <meta
        name="twitter:description"
        content="The VisualOn multimedia range, including OnStream MediaPlayer+ — supplied by OCUBE, with engineering support in Korea."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"VisualOn","item":"@@BASE@@en/license-visualon.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-visualon" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-visualon"]} />{" "}
        <section id="onstream" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-visualon:onstream"]} />
            <div className="duo">
              <div className="duo-txt rv">
                {" "}
                <span className="pill">OnStream MediaPlayer+</span>{" "}
                <h3>A premium player SDK with the streaming features an OTT service needs</h3>
                <p>
                  The VisualOn Multimedia Player Stack delivers{" "}
                  <b>consistent delivery and playback</b>
                  across mobile, PC, smart TV and set-top box.
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
                  src="../assets/img/vendor/visualon.png"
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
                <h3>A streaming solution that works with the platform’s own player API</h3>
                <p>
                  It plugs into the native player APIs — Android ExoPlayer, iOS AVPlayer and the
                  rest.
                  <br className="sb" /> Analytics, content protection and AdFlow management are
                  included.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/visualon_exoplay.png"
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
                <span className="pill">HTML5 Player+ · UX monitor</span>{" "}
                <h3>Watching playback quality and user experience in the browser</h3>
                <p>
                  In HTML5 it gives a <b>steady in-browser playback experience</b>
                  .
                  <br className="sb" /> The UX monitor collects quality-of-service data in the
                  cloud.
                </p>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/visualon_vis01.png"
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
                <h3>Software codecs and parsers tuned for mobility</h3>
                <p>
                  VisualOn’s software codecs can be tuned per environment, balancing the picture
                  quality you want against processing and power.
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
                  src="../assets/img/vendor/visualon-ivi.jpg"
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
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-visualon"]} />
      </SiteFooter>
    </>
  );
}
