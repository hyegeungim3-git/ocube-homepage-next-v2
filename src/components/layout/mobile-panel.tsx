// 무JS 폴백용 모바일 메뉴. site2.js 가 데스크톱 메뉴를 읽어 실제 패널을 재구성한다.
import { ui, type Lang } from "@/config/i18n";

export function MobilePanel({
  navLabel,
  ctaLabel,
  lang = "ko",
}: {
  navLabel?: string;
  ctaLabel?: string;
  lang?: Lang;
}) {
  const label = navLabel ?? (lang === "en" ? "Mobile menu" : "모바일 메뉴");
  const cta = ctaLabel ?? ui[lang].contact;
  return (
    <nav className="m-panel" aria-label={label}>
      {" "}
      <a href="business-ax.html">Business</a> <a href="solution-cubeon.html">Solution</a>{" "}
      <a href="license-qt.html">Global Partners</a> <a href="about.html">Company</a>{" "}
      <a href="contact.html">{cta}</a>{" "}
    </nav>
  );
}
