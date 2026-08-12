import type { JSX } from "react";
import type { Viewport } from "next";
import Script from "next/script";
import { ClientBehaviors } from "@/components/behavior/client-behaviors";
import "@/styles/site.scss";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// index.html 의 <head> 링크 순서를 그대로 유지한다(캐스케이드 순서 보존).
// 화면 동작은 모두 React 컴포넌트가 맡는다(6단계에서 site2.js 를 없앴다).
// home-refresh.js 는 홈 전용 스크립트라 6단계 범위(site2.js 25모듈) 밖이다.
// 남은 인라인 <script> 한 줄은 CSS 가 자바스크립트 유무를 구분하는 표시다 —
// 이것이 없으면 스크롤 리빌 요소가 처음부터 숨어 버린다.
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          precedence="site"
        />
        <link rel="stylesheet" href="assets/home-refresh.css?v=codex-15" precedence="site" />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="home-page">
        {children}
        <ClientBehaviors />
        <Script src="assets/home-refresh.js?v=codex-7" strategy="afterInteractive" />
      </body>
    </html>
  );
}
