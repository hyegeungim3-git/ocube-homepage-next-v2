import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads.en";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta.en";
import { FctaTop } from "@/components/section/fcta-top";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards.en";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LicenseVisualonPage() {
  return (
    <>
      <PageMeta
        lang="en"
        path="license-visualon.html"
        title="VisualOn — Multimedia Playback SDKs | Global Partners · OCUBE"
        description="The VisualOn multimedia range, including OnStream MediaPlayer+ — supplied by OCUBE, with engineering support in Korea."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"VisualOn","item":"@@BASE@@en/license-visualon.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
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
                  <b>consistent delivery and playback</b>across mobile, PC, smart TV and set-top
                  box.
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
      </PageShell>
    </>
  );
}
