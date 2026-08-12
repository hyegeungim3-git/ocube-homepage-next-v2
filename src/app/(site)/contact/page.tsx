import { applyBase, withBase } from "@/config/site";
import { Fragment } from "react";
import { enquiryTypes } from "@/data/contact";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";

export default function ContactPage() {
  return (
    <>
      <title>문의 — 오큐브</title>
      <meta
        name="description"
        content="오큐브(주) 프로젝트 문의 — 산업 AI·임베디드·SI·엔지니어링 지원. 대표전화 053-313-5333, sales@ocube.co.kr."
      />
      <link rel="canonical" href={withBase("contact.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("contact.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/contact.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("contact.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="문의 — 오큐브" />
      <meta
        property="og:description"
        content="오큐브(주) 프로젝트 문의 — 산업 AI·임베디드·SI·엔지니어링 지원. 대표전화 053-313-5333, sales@ocube.co.kr."
      />
      <meta property="og:url" content={withBase("contact.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="문의 — 오큐브" />
      <meta
        name="twitter:description"
        content="오큐브(주) 프로젝트 문의 — 산업 AI·임베디드·SI·엔지니어링 지원. 대표전화 053-313-5333, sales@ocube.co.kr."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"문의","item":"@@BASE@@contact.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="contact" />
      <MobilePanel />
      <main>
        <section id="top" className="hero page-hero dark">
          <div className="cube-a"></div>
          <div className="wrap">
            {" "}
            <span className="hero-badge">CONTACT</span> <h1>산업과 비즈니스의 과제를 들려주세요</h1>
            <p className="hero-lead-wide">
              남겨주신 내용은 담당 엔지니어가 직접 확인해, 도입 상담부터 기술 문의와 라이선스
              견적까지 안내드립니다.
            </p>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="wrap">
              <i></i>
              <span>SCROLL</span>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap">
            <div className="reveal" style={{ textAlign: "center" }}>
              <span className="kicker">Inquiry</span> <h2>프로젝트 상담 요청</h2>
            </div>
            <form
              className="form reveal"
              data-contact-form=""
              data-d="1"
              aria-describedby="form-note form-status"
            >
              <p id="form-note" className="form-note">
                입력한 내용은 이 웹사이트에 저장되지 않습니다. 제출하면 이메일 앱에서 내용을
                확인하고 직접 보낼 수 있습니다.
              </p>
              <div>
                <label htmlFor="f-type">문의 유형</label>{" "}
                <select id="f-type" name="inquiryType" required>
                  {enquiryTypes.map((t) => (
                    <Fragment key={t}>
                      {" "}
                      <option>{t}</option>
                    </Fragment>
                  ))}
                </select>{" "}
              </div>
              <div>
                <label htmlFor="f-name">성함 / 회사</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="홍길동 / 회사명"
                  required
                />
              </div>
              <div>
                <label htmlFor="f-mail">회신 이메일</label>
                <input
                  id="f-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="f-msg">문의 내용</label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={6}
                  placeholder="현재 상황과 해결하고 싶은 문제를 알려주세요."
                  required
                ></textarea>
              </div>{" "}
              <label className="agree">
                <input name="privacyConsent" type="checkbox" required /> (필수) 이메일 문의를 위해
                개인정보 수집·
                <wbr />
                이용에 동의합니다. 수집한 개인정보는 회신 및 상담 목적으로만 사용하며, 처리방침에
                따라 보관·
                <wbr />
                파기합니다.
              </label>{" "}
              <a
                href="privacy.html"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "underline", fontSize: "13.5px", color: "var(--fg-3)" }}
              >
                개인정보처리방침 전문 보기 ↗
              </a>{" "}
              <button type="submit" className="btn-primary">
                문의 메일 작성하기
              </button>{" "}
              <p id="form-status" className="form-status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </section>
        <section className="sec deploy">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Direct</span>
              <h2>직접 연락</h2>
            </div>
            <div className="dep-grid">
              <div className="dep-card reveal" data-d="1">
                <div className="ic" aria-hidden="true">
                  📧
                </div>
                <h3>이메일</h3>
                <p>
                  <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>{" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="sales@ocube.co.kr"
                    aria-label="이메일 주소 복사"
                  >
                    복사
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="2">
                <div className="ic" aria-hidden="true">
                  📞
                </div>
                <h3>대표전화</h3>
                <p>
                  <a href="tel:0533135333">053-313-5333</a> (대구) ·{" "}
                  <a href="tel:07040105704">070-4010-5704</a> (서울){" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="053-313-5333"
                    aria-label="대표전화 번호 복사"
                  >
                    복사
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="3">
                <div className="ic" aria-hidden="true">
                  📍
                </div>
                <h3>거점</h3>
                <p>서울 · 안양 · 대구</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
