import type { JSX } from "react";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { Fragment } from "react";
import { enquiryTypes } from "@/data/contact.en";

export default function ContactPage(): JSX.Element {
  return (
    <>
      <PageMeta
        lang="en"
        path="contact.html"
        title="Contact — OCUBE"
        description="Get in touch with OCUBE about industrial AI, embedded software, systems integration and engineering support. Phone +82-53-313-5333, sales@ocube.co.kr."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"문의","item":"@@BASE@@en/contact.html"}]}',
          ),
        }}
      />
      <PageShell lang="en" slug="contact">
        <section id="top" className="hero page-hero dark">
          <div className="cube-a"></div>
          <div className="wrap">
            {" "}
            <span className="hero-badge">CONTACT</span>{" "}
            <h1>Tell us the problem you are trying to solve</h1>
            <p className="hero-lead-wide">
              An engineer reads every enquiry personally and gets back to you — whether you need a
              first consultation, a technical answer or a licence quote.
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
              <span className="kicker">Inquiry</span> <h2>Tell us about your project</h2>
            </div>
            <form
              className="form reveal"
              data-contact-form=""
              data-d="1"
              aria-describedby="form-note form-status"
            >
              <p id="form-note" className="form-note">
                Nothing you type here is stored on this website. When you submit, your email app
                opens so you can check the message and send it yourself.
              </p>
              <div>
                <label htmlFor="f-type">What is it about</label>{" "}
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
                <label htmlFor="f-name">Name / company</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name / your company"
                  required
                />
              </div>
              <div>
                <label htmlFor="f-mail">Email for our reply</label>
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
                <label htmlFor="f-msg">Your message</label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={6}
                  placeholder="Tell us where things stand and what you are trying to solve."
                  required
                ></textarea>
              </div>{" "}
              <label className="agree">
                <input name="privacyConsent" type="checkbox" required /> (Required) I agree to my
                personal data being collected and used so that this enquiry can be answered. It will
                be used only to reply and to discuss the enquiry, and will be kept and deleted in
                line with the privacy policy.
              </label>{" "}
              <a
                href="privacy.html"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "underline", fontSize: "13.5px", color: "var(--fg-3)" }}
              >
                Read the full privacy policy ↗
              </a>{" "}
              <button type="submit" className="btn-primary">
                Write the email
              </button>{" "}
              <p id="form-status" className="form-status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </section>
        <section className="sec deploy">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Direct</span>
              <h2>Contact us directly</h2>
            </div>
            <div className="dep-grid">
              <div className="dep-card reveal" data-d="1">
                <div className="ic" aria-hidden="true">
                  📧
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>{" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="sales@ocube.co.kr"
                    aria-label="Copy the email address"
                  >
                    Copy
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="2">
                <div className="ic" aria-hidden="true">
                  📞
                </div>
                <h3>Main line</h3>
                <p>
                  <a href="tel:0533135333">053-313-5333</a> (Daegu) ·{" "}
                  <a href="tel:07040105704">070-4010-5704</a> (Seoul){" "}
                  <button
                    className="copy-btn"
                    type="button"
                    data-copy="053-313-5333"
                    aria-label="Copy the phone number"
                  >
                    Copy
                  </button>
                </p>
              </div>
              <div className="dep-card reveal" data-d="3">
                <div className="ic" aria-hidden="true">
                  📍
                </div>
                <h3>Offices</h3>
                <p>Seoul · Anyang · Daegu</p>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
