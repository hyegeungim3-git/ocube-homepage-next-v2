import type { JSX } from "react";
import { counterpartHref, pageHref, ui, type Lang } from "@/config/i18n";

// 언어 전환 버튼. 두 언어를 한 쌍의 알약으로 보여 주고, 지금 언어는 흰 배경으로 채운다.
// 링크로 만든 이유: 자바스크립트가 없어도 동작하고, 검색엔진이 두 언어를 각각 수집한다.
export function LangToggle({ slug, lang }: { slug: string; lang: Lang }): JSX.Element {
  const koHref = lang === "ko" ? pageHref(slug, "ko") : counterpartHref(slug, "en");
  const enHref =
    lang === "en" ? pageHref(slug, "en").replace(/^en\//, "") : counterpartHref(slug, "ko");
  return (
    <div className="lang" role="group" aria-label={ui[lang].langLabel}>
      <a
        className={`lang-btn${lang === "ko" ? " active" : ""}`}
        href={koHref}
        hrefLang="ko"
        aria-current={lang === "ko" ? "true" : undefined}
        title={ui[lang].toKorean}
      >
        KR
      </a>
      <a
        className={`lang-btn${lang === "en" ? " active" : ""}`}
        href={enHref}
        hrefLang="en"
        aria-current={lang === "en" ? "true" : undefined}
        title={ui[lang].toEnglish}
      >
        EN
      </a>
    </div>
  );
}
