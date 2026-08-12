import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import { withBase } from "@/config/site";
import { faviconHref, pageUrls, shareImage, siteIdentity } from "@/config/page-meta";

// 화면 하나가 내보내는 검색·공유 메타를 한 곳에서 만든다.
// React 19 가 <title>·<meta>·<link> 를 <head> 로 올려 주므로 화면 안에서 선언해도 된다.
//
// 순서는 신경 쓰지 않아도 된다 — 회귀 게이트가 head 를 '순서 무관 집합' 으로 비교한다.
// 구조화 데이터(ld+json)는 화면마다 내용이 달라 반복이 아니므로 여기 넣지 않는다.

type PageMetaProps = {
  lang?: Lang;
  /** 한국어 기준 경로. 홈은 빈 문자열(디렉터리 주소). 예: "company.html" */
  path: string;
  title: string;
  description: string;
  /** 공유용 설명이 본문 설명과 다른 화면이 있다 (연혁·주요 구축 사례) */
  ogDescription?: string;
  /** 트위터 설명까지 따로 쓰는 화면이 있다 (주요 구축 사례) */
  twitterDescription?: string;
  /** 공유 이미지 크기를 함께 알리는 화면과 아닌 화면이 섞여 있다 — 지금 상태를 그대로 둔다 */
  shareImageSize?: boolean;
};

export function PageMeta({
  lang = "ko",
  path,
  title,
  description,
  ogDescription,
  twitterDescription,
  shareImageSize = true,
}: PageMetaProps): JSX.Element {
  const site = siteIdentity[lang];
  const urls = pageUrls(path);
  const canonical = urls[lang];
  const image = withBase(shareImage.path);
  const ogDesc = ogDescription ?? description;
  const twitterDesc = twitterDescription ?? ogDesc;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="ko" href={urls.ko} />
      <link rel="alternate" hrefLang="en" href={urls.en} />
      <link rel="alternate" hrefLang="x-default" href={urls.ko} />
      <link rel="icon" href={faviconHref} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {shareImageSize ? (
        <>
          <meta property="og:image:width" content={shareImage.width} />
          <meta property="og:image:height" content={shareImage.height} />
        </>
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={twitterDesc} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
