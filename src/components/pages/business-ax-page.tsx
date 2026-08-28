import type { JSX } from "react";
import { assetPath } from "@/config/i18n";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { appCards } from "@/data/applications";
import { AppCards } from "@/components/section/app-cards";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { ProjectCards } from "@/components/section/bcase-cards";
import { projectCards } from "@/data/cases";
import { PinSteps } from "@/components/section/pin-steps";
import { pinSteps } from "@/data/steps";
import { T, localizeLd, t } from "@/i18n/translate";

export function BusinessAxPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="business-ax.html"
        title={t(lang, "AX · AI 전환 — 오큐브")}
        description={t(
          lang,
          "오큐브 AX — 산업 데이터에서 AI 적용 과제를 발굴하고, 보고를 자동화하며 AI 판단을 담당자 승인 후 업무 실행으로 연결합니다.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"비즈니스 · AX","item":"@@BASE@@business-ax.html"}]}',
            ),
          ),
        }}
      />
      <PageShell
        lang={lang}
        slug="business-ax"
        mainId="top"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy[lang]["business-ax"]} />
          </>
        }
      >
        {/* 1. HERO (풀스크린 · 이미지) */}
        <section className="hero page-hero business-hero dark">
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url('${assetPath("assets/img/business/business-ax-codex.webp", lang)}')`,
            }}
            aria-hidden="true"
          ></div>
          <div className="hero-veil" aria-hidden="true"></div>
          <div className="wrap business-hero-copy">
            <p className="business-hero-en">AX, From Insight to Action.</p>
            <h1 className="business-hero-ko">
              {" "}
              <span>
                <T l={lang}>데이터와 AI를 통해 더 나은 판단과 빠른 실행을 연결하고,</T>
              </span>{" "}
              <span>
                <T l={lang}>기업과 산업의 운영 방식을 혁신합니다.</T>
              </span>{" "}
            </h1>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>SCROLL</span>
            </div>
          </div>
        </section>
        {/* 3. What We Do (좌고정 + 6단계) */}
        <section className="pinsec" id="whatwedo">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">What We Do</span>{" "}
              <h2>
                AX · <em>AI Transformation</em>
              </h2>
              <p>
                <T l={lang}>AI를 적용할 업무를 정하고, AI 판단을 실행으로 잇습니다.</T>
                <br className="sb" />{" "}
                <T l={lang}>
                  데이터 진단부터 구축·
                  <wbr />
                  운영까지 여섯 단계로 수행합니다.
                </T>
              </p>
              <div className="pin-progress" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="pin-right">
              {" "}
              <PinSteps lang={lang} items={pinSteps[lang]["business-ax:whatwedo"]} />
            </div>
          </div>
        </section>
        {/* 4. 적용분야 */}
        <section id="applications" className="sec-anchor deploy ax-applications">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["business-ax:applications"]} />
            <div className="dep-grid ax-app-grid reveal" data-d="1">
              <AppCards lang={lang} items={appCards[lang]["business-ax"]} />
            </div>
          </div>
        </section>
        {/* 5. 레퍼런스 */}
        <section id="projects" className="bcase">
          <div className="bcase-head rv">
            {" "}
            <span className="eb">BUILD CASES</span>{" "}
            <h2>
              <T l={lang}>대표 프로젝트</T>
            </h2>
            <p>
              <T l={lang}>
                데이터를 어떤 판단과 운영 개선으로 연결했는지 대표 프로젝트로 확인할 수 있습니다.
              </T>
            </p>
          </div>
          <div className="wrap">
            <div className="bcase-grid">
              {" "}
              <ProjectCards lang={lang} items={projectCards[lang]["business-ax:projects"]} />
            </div>
          </div>{" "}
          <a className="bcase-more" href="references.html">
            <T l={lang}>전체 구축 사례 보기</T> <span aria-hidden="true">→</span>
          </a>{" "}
        </section>
      </PageShell>
    </>
  );
}
