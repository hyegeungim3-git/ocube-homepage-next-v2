import { applyBase, withBase } from "@/config/site";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes";

export default function LicenseTuxeraPage() {
  return (
    <>
      <title>
        Tuxera — 파일 시스템 · 데이터 저장 | Global Partners · 오큐브(주)
      </title>
      <meta name="description" content="Reliance Nitro·FlashFX Tera 등 Tuxera 스토리지 솔루션 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <link rel="canonical" href={withBase("license-tuxera.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-tuxera.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-tuxera.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-tuxera.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="Tuxera — 파일 시스템 · 데이터 저장 | Global Partners · 오큐브(주)" />
      <meta property="og:description" content="Reliance Nitro·FlashFX Tera 등 Tuxera 스토리지 솔루션 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta property="og:url" content={withBase("license-tuxera.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tuxera — 파일 시스템 · 데이터 저장 | Global Partners · 오큐브(주)" />
      <meta name="twitter:description" content="Reliance Nitro·FlashFX Tera 등 Tuxera 스토리지 솔루션 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Tuxera\",\"item\":\"@@BASE@@license-tuxera.html\"}]}") }} />
      <SiteHeader slug="license-tuxera" />
      <MobilePanel />
      <main id="top">
        {" "}
        <PageHero data={heroes["license-tuxera"]} />
        {" "}
        <section id="products" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-tuxera:products"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>
                      Tuxera Reliance Nitro
                    </h3>
                    <p>
                      Linux·
                      <wbr />
                      VxWorks 임베디드 환경용 고성능 파일 시스템 — 전원 차단 시에도 데이터 무결성 유지
                    </p>
                  </div>
                  <div className="feat">
                    <h3>
                      Tuxera FlashFX Tera
                    </h3>
                    <p>
                      NAND·
                      <wbr />
                      NOR 플래시 수명·
                      <wbr />
                      성능 관리 — 자동차·
                      <wbr />
                      항공우주·
                      <wbr />
                      의료 등 안전 필수 시스템 적용
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img src="assets/img/vendor/tuxera-portfolio.png" alt="Tuxera 파일 시스템·네트워킹 소프트웨어 구성과 적용 분야" loading="lazy" width="1300" height="647" />
              </div>
            </div>
            <div className="feat-list rv" style={{marginTop: "8px"}}>
              <div className="feat">
                <h3>
                  Microsoft NTFS for Mac by Tuxera
                </h3>
                <p>
                  Mac에서 Windows NTFS 드라이브 읽기·
                  <wbr />
                  쓰기 — 데이터 전송·
                  <wbr />
                  디스크 관리·
                  <wbr />
                  듀얼 부팅·
                  <wbr />
                  가상 머신 호환
                </p>
              </div>
              <div className="feat">
                <h3>
                  Tuxera Fusion SMB
                </h3>
                <p>
                  엔터프라이즈급 고성능 네트워크 파일 공유 — 클라우드·
                  <wbr />
                  NAS 환경에 최적화된 빠르고 유연한 SMB 서버 운영
                </p>
              </div>
              <div className="feat">
                <h3>
                  Enterprise Solutions
                </h3>
                <p>
                  대규모 네트워크·
                  <wbr />
                  클라우드에서 SMB·
                  <wbr />
                  NTFS 안정 운영 — 데이터 접근·
                  <wbr />
                  파일 검색 속도 향상
                </p>
              </div>
            </div>
            <div className="pi-tags rv" style={{marginTop: "20px"}}>
              <span className="pill light">
                exFAT · NTFS · FAT
              </span>
              {" "}
              <span className="pill light">
                웨어레벨링
              </span>
              {" "}
              <span className="pill light">
                eMMC · UFS · SD
              </span>
              {" "}
              <span className="pill light">
                Linux · VxWorks
              </span>
            </div>
          </div>
        </section>
        <section id="apply" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-tuxera:apply"]} />
            <div className="dep-grid reveal" data-d="1" style={{marginTop: "22px"}}>
              {" "}
              <DepCards items={depCards["license-tuxera:apply"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter id="contact">
        <FctaTop copy={ctaCopy["license-tuxera"]} />
      </SiteFooter>
    </>
  );
}
