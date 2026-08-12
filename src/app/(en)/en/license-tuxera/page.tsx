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

export default function LicenseTuxeraPage() {
  return (
    <>
      <title>Tuxera — File Systems and Storage | Global Partners · OCUBE</title>
      <meta
        name="description"
        content="Tuxera storage software, including Reliance Nitro and FlashFX Tera — supplied by OCUBE, with engineering support in Korea."
      />
      <link rel="canonical" href={withBase("en/license-tuxera.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("license-tuxera.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/license-tuxera.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("license-tuxera.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="Tuxera — File Systems and Storage | Global Partners · OCUBE"
      />
      <meta
        property="og:description"
        content="Tuxera storage software, including Reliance Nitro and FlashFX Tera — supplied by OCUBE, with engineering support in Korea."
      />
      <meta property="og:url" content={withBase("en/license-tuxera.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Tuxera — File Systems and Storage | Global Partners · OCUBE"
      />
      <meta
        name="twitter:description"
        content="Tuxera storage software, including Reliance Nitro and FlashFX Tera — supplied by OCUBE, with engineering support in Korea."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Tuxera","item":"@@BASE@@en/license-tuxera.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="license-tuxera" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        {" "}
        <PageHero lang="en" data={heroes["license-tuxera"]} />{" "}
        <section id="products" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-tuxera:products"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Tuxera Reliance Nitro</h3>
                    <p>
                      A high-performance file system for embedded Linux and VxWorks — data stays
                      intact even when the power cuts out
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Tuxera FlashFX Tera</h3>
                    <p>
                      Managing the life and performance of NAND and NOR flash — used in
                      safety-critical systems across automotive, aerospace and medical
                    </p>
                  </div>
                </div>
              </div>
              <div className="duo-media plain rv d1">
                <img
                  src="../assets/img/vendor/tuxera-portfolio.png"
                  alt="Tuxera 파일 시스템·네트워킹 소프트웨어 구성과 적용 분야"
                  loading="lazy"
                  width="1300"
                  height="647"
                />
              </div>
            </div>
            <div className="feat-list rv" style={{ marginTop: "8px" }}>
              <div className="feat">
                <h3>Microsoft NTFS for Mac by Tuxera</h3>
                <p>
                  Reading and writing Windows NTFS drives on a Mac — transfers, disk management,
                  dual boot and virtual machines
                </p>
              </div>
              <div className="feat">
                <h3>Tuxera Fusion SMB</h3>
                <p>
                  Enterprise-grade network file sharing — a fast, flexible SMB server built for
                  cloud and NAS
                </p>
              </div>
              <div className="feat">
                <h3>Enterprise Solutions</h3>
                <p>
                  SMB and NTFS running steadily at scale in networks and cloud — with quicker access
                  and search
                </p>
              </div>
            </div>
            <div className="pi-tags rv" style={{ marginTop: "20px" }}>
              <span className="pill light">exFAT · NTFS · FAT</span>{" "}
              <span className="pill light">Wear levelling</span>{" "}
              <span className="pill light">eMMC · UFS · SD</span>{" "}
              <span className="pill light">Linux · VxWorks</span>
            </div>
          </div>
        </section>
        <section id="apply" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads["license-tuxera:apply"]} />
            <div className="dep-grid reveal" data-d="1" style={{ marginTop: "22px" }}>
              {" "}
              <DepCards items={depCards["license-tuxera:apply"]} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" id="contact">
        <FctaTop copy={ctaCopy["license-tuxera"]} />
      </SiteFooter>
    </>
  );
}
