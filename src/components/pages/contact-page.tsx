import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { Fragment } from "react";
import { enquiryTypes } from "@/data/contact";
import { T, localizeLd, t } from "@/i18n/translate";

export function ContactPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="contact.html"
        title={t(lang, "문의 — 오큐브")}
        description={t(
          lang,
          "오큐브(주) 프로젝트 문의 — 산업 AI·임베디드·SI·엔지니어링 지원. 대표전화 053-313-5333, sales@ocube.co.kr.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"문의","item":"@@BASE@@contact.html"}]}',
            ),
          ),
        }}
      />
      <PageShell lang={lang} slug="contact">
        <section id="top" className="hero page-hero dark">
          <div className="cube-a"></div>
          <div className="wrap">
            {" "}
            <span className="hero-badge">CONTACT</span>{" "}
            <h1>
              <T l={lang}>산업과 비즈니스의 과제를 들려주세요</T>
            </h1>
            <p className="hero-lead-wide">
              <T l={lang}>
                남겨주신 내용은 담당 엔지니어가 직접 확인해, 도입 상담부터 기술 문의와 라이선스
                견적까지 안내드립니다.
              </T>
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
              <span className="kicker">Inquiry</span>{" "}
              <h2>
                <T l={lang}>프로젝트 상담 요청</T>
              </h2>
            </div>
            <form
              className="form reveal"
              data-contact-form=""
              data-d="1"
              aria-describedby="form-note form-status"
            >
              <p id="form-note" className="form-note">
                <T l={lang}>
                  입력한 내용은 이 웹사이트에 저장되지 않습니다. 제출하면 이메일 앱에서 내용을
                  확인하고 직접 보낼 수 있습니다.
                </T>
              </p>
              <div>
                <label htmlFor="f-type">
                  <T l={lang}>문의 유형</T>
                </label>{" "}
                <select id="f-type" name="inquiryType" required>
                  {enquiryTypes[lang].map((t) => (
                    <Fragment key={t}>
                      {" "}
                      <option>{t}</option>
                    </Fragment>
                  ))}
                </select>{" "}
              </div>
              <div>
                <label htmlFor="f-name">
                  <T l={lang}>성함 / 회사</T>
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t(lang, "홍길동 / 회사명")}
                  required
                />
              </div>
              <div>
                <label htmlFor="f-mail">
                  <T l={lang}>회신 이메일</T>
                </label>
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
                <label htmlFor="f-msg">
                  <T l={lang}>문의 내용</T>
                </label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={6}
                  placeholder={t(lang, "현재 상황과 해결하고 싶은 문제를 알려주세요.")}
                  required
                ></textarea>
              </div>{" "}
              <label className="agree">
                <input name="privacyConsent" type="checkbox" required />{" "}
                <T l={lang}>
                  (필수) 이메일 문의를 위해 개인정보 수집·
                  <wbr />
                  이용에 동의합니다. 수집한 개인정보는 회신 및 상담 목적으로만 사용하며, 처리방침에
                  따라 보관·
                  <wbr />
                  파기합니다.
                </T>
              </label>{" "}
              <a
                href="privacy.html"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "underline", fontSize: "13.5px", color: "var(--fg-3)" }}
              >
                <T l={lang}>개인정보처리방침 전문 보기 ↗</T>
              </a>{" "}
              <button type="submit" className="btn-primary">
                <T l={lang}>문의 메일 작성하기</T>
              </button>{" "}
              <p id="form-status" className="form-status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </section>
        <section className="sec deploy">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Direct</span>
              <h2>
                <T l={lang}>직접 연락</T>
              </h2>
            </div>
            <div className="dep-grid">
              <div className="dep-card reveal" data-d="1">
                <div className="ic" aria-hidden="true">
                  📧
                </div>
                <h3>
                  <T l={lang}>이메일</T>
                </h3>
                <p>
                  <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>{" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="sales@ocube.co.kr"
                    aria-label={t(lang, "이메일 주소 복사")}
                  >
                    <T l={lang}>복사</T>
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="2">
                <div className="ic" aria-hidden="true">
                  📞
                </div>
                <h3>
                  <T l={lang}>대표전화</T>
                </h3>
                <p>
                  <a href="tel:0533135333">053-313-5333</a> <T l={lang}>(대구) ·</T>{" "}
                  <a href="tel:07040105704">070-4010-5704</a> <T l={lang}>(서울)</T>{" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="053-313-5333"
                    aria-label={t(lang, "대표전화 번호 복사")}
                  >
                    <T l={lang}>복사</T>
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="3">
                <div className="ic" aria-hidden="true">
                  📍
                </div>
                <h3>
                  <T l={lang}>거점</T>
                </h3>
                <p>
                  <T l={lang}>서울 · 안양 · 대구</T>
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
