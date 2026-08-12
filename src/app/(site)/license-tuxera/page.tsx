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

export default function LicenseTuxeraPage() {
  return (
    <>
      <PageMeta
        path="license-tuxera.html"
        title="Tuxera — 파일 시스템 · 데이터 저장 | Global Partners · 오큐브(주)"
        description="Reliance Nitro·FlashFX Tera 등 Tuxera 스토리지 솔루션 — 오큐브가 공급과 국내 엔지니어링 지원을 제공합니다."
        shareImageSize={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Tuxera","item":"@@BASE@@license-tuxera.html"}]}',
          ),
        }}
      />
      <PageShell
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
        <PageHero data={heroes["license-tuxera"]} />{" "}
        <section id="products" className="sec">
          <div className="wrap">
            <SecHead copy={secHeads["license-tuxera:products"]} />
            <div className="duo">
              <div className="duo-txt rv">
                <div className="feat-list">
                  <div className="feat">
                    <h3>Tuxera Reliance Nitro</h3>
                    <p>
                      Linux·
                      <wbr />
                      VxWorks 임베디드 환경용 고성능 파일 시스템 — 전원 차단 시에도 데이터 무결성
                      유지
                    </p>
                  </div>
                  <div className="feat">
                    <h3>Tuxera FlashFX Tera</h3>
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
                <img
                  src="assets/img/vendor/tuxera-portfolio.png"
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
                <h3>Tuxera Fusion SMB</h3>
                <p>
                  엔터프라이즈급 고성능 네트워크 파일 공유 — 클라우드·
                  <wbr />
                  NAS 환경에 최적화된 빠르고 유연한 SMB 서버 운영
                </p>
              </div>
              <div className="feat">
                <h3>Enterprise Solutions</h3>
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
            <div className="pi-tags rv" style={{ marginTop: "20px" }}>
              <span className="pill light">exFAT · NTFS · FAT</span>{" "}
              <span className="pill light">웨어레벨링</span>{" "}
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
