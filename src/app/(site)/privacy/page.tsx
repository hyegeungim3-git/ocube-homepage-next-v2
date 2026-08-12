import { applyBase, withBase } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";

export default function PrivacyPage() {
  return (
    <>
      <title>개인정보처리방침 — 오큐브(주)</title>
      <meta
        name="description"
        content="오큐브(주) 개인정보처리방침 — 문의 시 수집하는 개인정보 항목·이용 목적·보유 기간·이용자 권리 안내."
      />
      <link rel="canonical" href={withBase("privacy.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("privacy.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/privacy.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("privacy.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="오큐브(주)" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content="개인정보처리방침 — 오큐브(주)" />
      <meta
        property="og:description"
        content="오큐브(주) 개인정보처리방침 — 문의 시 수집하는 개인정보 항목·이용 목적·보유 기간·이용자 권리 안내."
      />
      <meta property="og:url" content={withBase("privacy.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="개인정보처리방침 — 오큐브(주)" />
      <meta
        name="twitter:description"
        content="오큐브(주) 개인정보처리방침 — 문의 시 수집하는 개인정보 항목·이용 목적·보유 기간·이용자 권리 안내."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"개인정보처리방침","item":"@@BASE@@privacy.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="privacy" />
      <MobilePanel />
      <main id="top">
        <section className="sec deploy">
          <div className="wrap" style={{ maxWidth: "860px" }}>
            {" "}
            <span className="kicker">Privacy Policy</span>{" "}
            <h1 style={{ fontSize: "clamp(26px,3.4vw,40px)", margin: "12px 0 26px" }}>
              개인정보처리방침
            </h1>
            <div
              style={{
                background: "var(--soft)",
                border: "1px solid var(--accent)",
                borderRadius: "12px",
                padding: "16px 20px",
                color: "var(--fg-muted)",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              {" "}
              <b>현재 문의 방식</b> — 문의 폼에 입력한 내용은 홈페이지 서버에 저장되거나 자동
              전송되지 않습니다. 제출하면 사용자의 이메일 앱이 열리며, 메일을 직접 전송한 경우에만
              오큐브가 문의 내용을 수신합니다.{" "}
            </div>
            <h2 style={{ fontSize: "21px", margin: "26px 0 8px" }}>1. 처리하는 개인정보 항목</h2>
            <p>
              홈페이지 자체에서는 개인정보를 수집하거나 저장하지 않습니다.
              <br className="sb" /> 사용자가 이메일 문의를 직접 전송하면 상담을 위해 아래 정보가
              수신될 수 있습니다.
            </p>
            <ul style={{ margin: "10px 0 0 18px", lineHeight: "1.9" }}>
              <li>성함 또는 회사명, 회신 이메일, 문의 유형과 문의 내용</li>
              <li>홈페이지에서 자동 수집하는 항목: 없음</li>
            </ul>
            <h2 style={{ fontSize: "21px", margin: "30px 0 8px" }}>2. 개인정보의 이용 목적</h2>
            <p>
              문의 내용 확인, 회신 및 프로젝트 상담을 위해서만 이용하며 마케팅·
              <wbr />
              광고 목적으로 이용하지 않습니다.
            </p>
            <h2 style={{ fontSize: "21px", margin: "30px 0 8px" }}>3. 보유 및 파기</h2>
            <p>
              이메일로 수신한 정보는 문의 회신과 상담에 필요한 기간 동안 처리하고, 목적이 달성되면
              지체 없이 파기합니다.
              <br className="sb" /> 다만 관계 법령에 따라 보존이 필요한 경우에는 해당 기간 동안
              보관합니다.
            </p>
            <h2 style={{ fontSize: "21px", margin: "30px 0 8px" }}>
              4. 제3자 제공·처리 위탁 및 외부 서비스
            </h2>
            <p>
              문의 폼에 입력한 내용은 홈페이지 서버나 제3자에게 자동 전송되지 않습니다.
              <br className="sb" /> 사용자가 이메일 앱에서 직접 발송한 경우에는 해당 이메일 서비스의
              정책과 전송 경로가 적용됩니다.
            </p>
            <p style={{ marginTop: "10px" }}>
              사이트는 화면 표시와 위치 안내를 위해 jsDelivr의 웹폰트와 Google 지도 콘텐츠를
              불러옵니다.
              <br className="sb" /> 이 과정에서 IP 주소, 브라우저 정보, 접속 기록 등이 각 서비스
              제공자에게 전달될 수 있으며, 처리는 해당 제공자의 정책을 따릅니다.
            </p>
            <h2 style={{ fontSize: "21px", margin: "30px 0 8px" }}>5. 이용자의 권리</h2>
            <p>
              이용자는 이메일로 전달한 개인정보의 열람·
              <wbr />
              정정·
              <wbr />
              삭제·
              <wbr />
              처리정지를 요청할 수 있으며, 오큐브는 관계 법령에 따라 처리합니다.
            </p>
            <h2 style={{ fontSize: "21px", margin: "30px 0 8px" }}>6. 개인정보 관련 문의</h2>
            <p>홈페이지 문의와 개인정보 처리에 관한 요청은 아래 연락처로 보내주시기 바랍니다.</p>
            <ul style={{ margin: "10px 0 0 18px", lineHeight: "1.9" }}>
              <li>
                이메일: <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>
              </li>
              <li>
                전화: <a href="tel:0533135333">053-313-5333</a>
              </li>
            </ul>
            <p style={{ marginTop: "30px", color: "var(--fg-3)", fontSize: "15px" }}>
              시행일: 2026년 7월 26일
            </p>
            <p style={{ marginTop: "22px" }}>
              <a href="contact.html" className="more">
                ← 문의 페이지로 돌아가기
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
