import { applyBase, withBase } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PrivacyPage() {
  return (
    <>
      <title>
        Privacy Policy — OCUBE CO., LTD.
      </title>
      <meta name="description" content="OCUBE’s privacy policy — what personal data an enquiry involves, why it is used, how long it is kept, and your rights." />
      <link rel="canonical" href={withBase("en/privacy.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("privacy.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/privacy.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("privacy.html")} />
      <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Privacy Policy — OCUBE CO., LTD." />
      <meta property="og:description" content="OCUBE’s privacy policy — what personal data an enquiry involves, why it is used, how long it is kept, and your rights." />
      <meta property="og:url" content={withBase("en/privacy.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Privacy Policy — OCUBE CO., LTD." />
      <meta name="twitter:description" content="OCUBE’s privacy policy — what personal data an enquiry involves, why it is used, how long it is kept, and your rights." />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: applyBase("{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"홈\",\"item\":\"@@BASE@@en/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"개인정보처리방침\",\"item\":\"@@BASE@@en/privacy.html\"}]}") }} />
      <SiteHeader slug="privacy" lang="en" />
      <MobilePanel lang="en" />
      <main id="top">
        <section className="sec deploy">
          <div className="wrap" style={{maxWidth: "860px"}}>
            {" "}
            <span className="kicker">
              Privacy Policy
            </span>
            {" "}
            <h1 style={{fontSize: "clamp(26px,3.4vw,40px)", margin: "12px 0 26px"}}>
              Privacy Policy
            </h1>
            <div style={{background: "var(--soft)", border: "1px solid var(--accent)", borderRadius: "12px", padding: "16px 20px", color: "var(--fg-muted)", marginBottom: "30px", lineHeight: "1.6"}}>
              {" "}
              <b>
                How enquiries work at present
              </b>
              {" "}— what you type into the enquiry form is neither stored on this website’s server nor sent automatically. Submitting opens your own email app, and OCUBE receives the enquiry only if you send that email yourself.{" "}
            </div>
            <h2 style={{fontSize: "21px", margin: "26px 0 8px"}}>
              1. What personal data is processed
            </h2>
            <p>
              The website itself neither collects nor stores personal data.
              <br className="sb" />
              {" "}If you send the enquiry email yourself, the following may reach us so that we can respond.
            </p>
            <ul style={{margin: "10px 0 0 18px", lineHeight: "1.9"}}>
              <li>
                Your name or company, the email address for our reply, the type of enquiry and its content
              </li>
              <li>
                Collected automatically by the website: none
              </li>
            </ul>
            <h2 style={{fontSize: "21px", margin: "30px 0 8px"}}>
              2. Why it is used
            </h2>
            <p>
              It is used only to read the enquiry, reply to it and discuss the project. It is not used for marketing or advertising.
            </p>
            <h2 style={{fontSize: "21px", margin: "30px 0 8px"}}>
              3. Retention and deletion
            </h2>
            <p>
              Information received by email is processed for as long as the reply and the discussion require, and is deleted without delay once that purpose is served.
              <br className="sb" />
              {" "}Where the law requires it to be kept, it is retained for the period the law specifies.
            </p>
            <h2 style={{fontSize: "21px", margin: "30px 0 8px"}}>
              4. Third parties, processors and external services
            </h2>
            <p>
              What you type into the enquiry form is not sent automatically to this website’s server or to any third party.
              <br className="sb" />
              {" "}If you send it from your own email app, that email service’s policy and delivery path apply.
            </p>
            <p style={{marginTop: "10px"}}>
              The site loads web fonts from jsDelivr and map content from Google in order to display pages and show locations.
              <br className="sb" />
              {" "}In doing so, your IP address, browser information and access record may reach those providers, and their own policies govern how they handle it.
            </p>
            <h2 style={{fontSize: "21px", margin: "30px 0 8px"}}>
              5. Your rights
            </h2>
            <p>
              You may ask to see, correct or delete the personal data you sent by email, or to have its processing stopped. OCUBE will act on such requests in accordance with the law.
            </p>
            <h2 style={{fontSize: "21px", margin: "30px 0 8px"}}>
              6. Questions about your personal data
            </h2>
            <p>
              Please send any question about this website or about how your personal data is handled to the contact below.
            </p>
            <ul style={{margin: "10px 0 0 18px", lineHeight: "1.9"}}>
              <li>
                Email:{" "}
                <a href="mailto:sales@ocube.co.kr">
                  sales@ocube.co.kr
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:0533135333">
                  053-313-5333
                </a>
              </li>
            </ul>
            <p style={{marginTop: "30px", color: "var(--fg-3)", fontSize: "15px"}}>
              Effective 26 July 2026
            </p>
            <p style={{marginTop: "22px"}}>
              <a href="contact.html" className="more">
                ← Back to the contact page
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
