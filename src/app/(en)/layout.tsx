import type { Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// about.html 의 <head> 링크 순서를 그대로 유지한다(캐스케이드 순서 보존).
// site2.js 는 DOM 을 직접 조작하므로 하이드레이션이 끝난 뒤 실행해야 한다.
// (인라인 <script> 로 두면 React 가 재삽입해 두 번 실행된다)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          precedence="site"
        />
        <link rel="stylesheet" href="../assets/site2.css?v=codex-74" precedence="site" />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        {children}
        <Script src="../assets/site2.js?v=codex-21" strategy="afterInteractive" />
      </body>
    </html>
  );
}
