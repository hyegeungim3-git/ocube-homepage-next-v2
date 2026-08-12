import type { JSX } from "react";
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

export default function LicenseTuxeraPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="license-tuxera.html"
        title="Tuxera — File Systems and Storage | Global Partners · OCUBE"
        description="Tuxera storage software, including Reliance Nitro and FlashFX Tera — supplied by OCUBE, with engineering support in Korea."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"Tuxera","item":"@@BASE@@en/license-tuxera.html"}]}',
          ),
        }}
      />
      <PageShell
        lang="en"
        slug="license-tuxera"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy["license-tuxera"]} />
          </>
        }
      >
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
      </PageShell>
    </>
  );
}
