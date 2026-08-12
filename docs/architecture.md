# 프로젝트 구조

```text
src/
  app/
    (site)/          한국어 주소 22개. layout.tsx 는 루트 레이아웃(html/head/body)
      <route>/page.tsx   7줄짜리 진입점 — <XxxPage lang="ko" />
    (home)/          한국어 홈. home-refresh.css/js 가 하나 더 붙어 그룹을 분리
                     (home-refresh.js 는 홈 전용 스크립트 — 남아 있는 유일한 손코딩 JS)
    (en)/ (en-home)/ 영어 주소. 같은 화면 컴포넌트에 lang="en" 만 넘긴다
  components/pages/  실제 화면 23개 — 두 언어가 함께 쓴다
  components/layout/ 공통 셸
    page-shell.tsx   화면 골격 — 헤더+모바일 메뉴+<main>+푸터를 한 번에 (홈 제외)
    page-meta.tsx    검색·공유 메타 한 벌 (title·canonical·hreflang·og·twitter)
    site-header.tsx  skip 링크 + GNB (메뉴는 config/navigation.ts 에서)
    mobile-panel.tsx 좁은 화면 메뉴 — 무JS 면 납작한 목록, 붙은 뒤 아코디언
    site-footer.tsx  푸터 (하단은 데이터로, CTA 는 children 으로)
  config/
    site.ts          배포 주소 한 곳 (canonical·og·JSON-LD·sitemap 이 참조)
    page-meta.ts     메타의 언어별 고정값(사명·로케일)·공유 이미지·파비콘·주소 규칙
    navigation.ts    GNB 4개 대메뉴 + 20개 중메뉴
    current-page.ts  지금 보고 있는 화면 표시(aria-current·is-current) 판정
  components/behavior/  화면 동작 — 예전 site2.js 25모듈이 여기로 왔다
                     client-behaviors.tsx 가 화면 전체에 걸리는 것들을 한 번에 건다
                     (리빌·맨 위로·복사 알림·스크롤 진행·표 감싸기·시연 영상·라이트박스 …)
                     mobile-menu.ts / header-scroll.ts 는 여러 컴포넌트가 나눠 갖는 상태를
                     담는 작은 바깥 저장소(useSyncExternalStore)
  i18n/              사전(dictionary)·화면 글 번역(<T>·t)·데이터 번역(localized)
  data/              화면 문구·이미지 경로 데이터 — localized() 로 두 언어 (site·heroes·cards·features·steps·
                     cases·refs·solution-intro·cta·subnav·sec-heads·applications·
                     contact·history·logos·home-hero — 목록은 README 표 참조)
  styles/            화면별 SCSS partial 29개 + site.scss (전역 스타일 단일 진입점)
public/
  assets/            현재 사이트의 자산을 그대로 복제 (css/img/video/font)
  <구 슬러그>/        구 Wix 주소용 리다이렉트 스텁 20개
  sitemap.xml, robots.txt, favicon.svg
scripts/
  convert-from-legacy.py  원본 HTML → TSX 기계 변환기 (재실행 가능)
  verify-fidelity.py      정합성 게이트 (npm run verify)
tests/
  helpers/           검사 대상 목록(pages)·건강검진(health)·촬영 준비(stabilize)
  unit/              Vitest — 순수 함수·데이터 계약
  e2e/               Playwright — 사용자 동작
  visual/            Playwright — 스크린샷 기준선 (__screenshots__)
  static-server.mjs  out/ 을 내려주는 최소 정적 서버 (Playwright 가 자동 기동)
docs/                개발·운영 문서
```

## 화면 한 장의 생김새

```tsx
export function AboutPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta lang={lang} path="about.html" title={t(lang, "회사소개 — 오큐브(주)")} … />
      <script type="application/ld+json" … />   {/* 화면마다 달라 공통화하지 않는다 */}
      <PageShell lang={lang} slug="about" mainId="top" footerId="contact" cta={<>…</>}>
        <h2>
          <T l={lang}>회사소개</T>
        </h2>
      </PageShell>
    </>
  );
}
```

`PageMeta` 는 `lang` 하나로 canonical·hreflang·og:locale·사명을 다 정한다.
`PageShell` 은 `lang` 하나로 헤더·모바일 메뉴·푸터의 언어를 함께 넘긴다.
화면에 보이는 글은 `<T>`, 속성값은 `t()` 가 사전을 태운다.

## 컴포넌트 지도 — "그 동작은 어느 파일인가"

화면 동작은 전부 `src/components/behavior/` 에 있고, 네 루트 레이아웃은 `<ClientBehaviors>`
하나만 부른다. 기능을 옮기거나 고칠 때 레이아웃 네 곳을 다시 손대지 않아도 되는 이유다.

| 파일                   | 무엇을                                              | 어디에 붙나                                                              |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| `client-behaviors.tsx` | 아래 것들을 화면 전체에 한 번에 건다                | 루트 레이아웃 4곳                                                        |
| `header-scroll.ts`     | 헤더 투명↔솔리드, 하강 시 숨김·상승 복귀            | `SiteHeader` 가 구독                                                     |
| `mobile-menu.ts`       | 모바일 메뉴 열림·펼친 갈래 상태                     | 버튼은 헤더, 패널은 `MobilePanel` — **형제라 바깥 저장소로 나눠 갖는다** |
| `use-media-query.ts`   | 화면 폭·모션 선호 읽기                              | 여러 곳                                                                  |
| `reveal.tsx`           | 스크롤로 올라온 요소에 `in`                         | `.rv` 요소 전부                                                          |
| `pin-dots.tsx`         | What We Do 진행 도트                                | `.pinsec`                                                                |
| `sol-copy-travel.tsx`  | 솔루션 상단 문구가 히어로 → 밝은 영역으로 이동·축소 | `.sol-copy`                                                              |
| `about-experience.tsx` | 회사소개 비전 장면 전환                             | about                                                                    |
| `case-filter.tsx`      | 사례·증서 분야 필터 + 빈 상태                       | references · company                                                     |
| `lightbox.tsx`         | 제품 화면 확대                                      | `img.shot` · `[data-shot]`                                               |
| `copy-toast.tsx`       | 복사 + 알림                                         | `[data-copy]`                                                            |
| `demo-videos.tsx`      | 화면에 들어와 있을 때만 재생                        | `video.demovid`                                                          |
| `table-scroll.tsx`     | 넓은 표를 가로 스크롤 껍데기로                      | `table.cmp`                                                              |
| `back-to-top.tsx`      | 맨 위로 버튼                                        | 전 화면                                                                  |
| `scroll-progress.tsx`  | 맨 위 읽기 진행 바                                  | 전 화면                                                                  |
| `ci-tilt.tsx`          | 홈 CI 로고 기울기                                   | 홈                                                                       |

**구역 컴포넌트**(`src/components/section/`)는 여러 화면이 같은 모양을 쓸 때만 만든다 —
`sec-head` `dep-cards` `feat-list` `app-cards` `stat-items` `ref-cards` `bcase-cards`
`pin-steps` `hist-rows` `plogo-items` `subnav` `fcta-top` `sol-copy` `home-hero` `home-slides`
`contact-form`. 한 화면에만 있는 모양은 그 화면 파일에 그대로 둔다(README "데이터로 빼지
않은 것" 과 같은 기준 — 억지로 공통화하면 조건 분기만 늘어난다).

**껍데기**(`src/components/layout/`)는 `PageShell`(헤더+모바일메뉴+`<main>`+푸터) ·
`PageMeta`(title·canonical·hreflang·og) · `SiteHeader` · `MobilePanel` · `SiteFooter` ·
`LangToggle` · `PageHero`. 새 화면은 이 둘만 부르면 나머지가 따라온다.

## 확장 원칙

- 새 화면은 `src/components/pages/<slug>-page.tsx` 에 만들고, 주소는 한국어·영어 두 곳에
  7줄짜리 진입점을 둔다. 공통 셸은 `PageShell`·`PageMeta` 를 쓴다.
- 화면 문구·이미지 경로 중 **여러 페이지가 공유하는 것**은 `src/data` 에서 관리한다.
- 화면에 보이는 한국어는 `<T l={lang}>…</T>`, 속성값은 `t(lang, "…")`, 자산 경로는
  `assetPath(path, lang)` 로 감싼다. 셋 다 빠뜨리면 영어 화면에서만 티가 난다.
- 스타일은 `src/styles/_*.scss` 를 고친다. 전역 진입점은 `site.scss` 하나이고,
  루트 레이아웃이 그것만 import 한다. Next 가 컴파일·최소화해 `_next/static` 으로 내보낸다.
  `site.scss` 의 `@use` 차례가 곧 캐스케이드다 — 바꾸면 화면이 조용히 깨진다.
  (예전에는 번들러를 안 태우고 파일을 이어붙였다. 이유였던 CSS 안 `url(...)` 상대경로는
  실측 결과 **0건**이라 더 이상 걸림돌이 아니었다.)
- 동작을 고치려면 `src/components/behavior/` 의 해당 컴포넌트를 고친다. 예전처럼 이어붙이는
  단계가 없어 빌드 순서를 신경 쓸 필요가 없다.

## 왜 라우트 그룹이 둘인가

`index.html` 만 `home-refresh.css` 가 추가로 붙고 `<body class="home-page">` 가 있다.
스타일시트를 `<head>` 에 원본 순서 그대로 두려면 레이아웃이 달라야 해서
Next 의 다중 루트 레이아웃으로 분리했다.

## 배포

`main` 에 push 하면 GitHub Actions 가 `npm run build` 로 `out/` 을 만들어 Pages 에 올린다.

- 공개 주소: https://hyegeungim3-git.github.io/ocube-homepage-next-v2/
- 프로젝트 사이트는 **하위 경로**에 올라간다. Next 는 런타임 청크를 절대경로
  `/_next/...` 로 내보내므로 그대로 두면 404 가 나고 하이드레이션이 실패한다.
  워크플로가 `configure-pages` 의 `base_path` 를 `PAGES_BASE_PATH` 로 넘겨
  `next.config.ts` 의 `assetPrefix` 에 주입한다.

## 이 저장소의 위치

**정본이 아니라 '평행 판' 이다.** 같은 원본에서 갈라진 두 판이 있다.

|              | 저장소                                   | 공개 주소                 | 지침                                   |
| ------------ | ---------------------------------------- | ------------------------- | -------------------------------------- |
| 이 판        | `ocube-homepage-next-v2`                 | …/ocube-homepage-next-v2/ | `docs/non-developer-handoff-notes.txt` |
| 먼저 만든 판 | `ocube-homepage-next`                    | …/ocube-homepage-next/    | `agent-rules`                          |
| 그 이전      | `ocube-homepage-final` · Cloudflare `a/` | …/ocube-homepage-final/   | — (갱신 안 함)                         |

두 판의 **화면과 기능이 같다는 것은 확인했다** — 46쪽을 브라우저로 대조했고 방법과 수치는
`refactoring-roadmap.md` 의 "원본과의 대조 검수" 절에 있다. 다만 **어느 쪽을 회사 정본으로
쓸지는 아직 정해지지 않았다.** 정해지면 이 표와 README·AGENTS 의 같은 문장을 함께 고친다.

기준선(`baseline/`)은 저장소 안에 둔다 — 비교 상대를 밖에 두면 그쪽이 바뀔 때 게이트가
흔들리기 때문이다.

## 회귀 기준선

기준선은 두 겹이다 — **DOM**(`baseline/`)과 **화면 그림**(`tests/visual/__screenshots__/`).

```text
baseline/*.html      직전에 승인한 빌드 결과 (한국어 25 + 영어 23 = 48페이지)
npm run verify       이번 빌드(out/)와 기준선을 대조 — 48페이지 × 12항목 = 576건
npm run baseline     빌드 후 기준선을 이번 결과로 갱신

tests/visual/__screenshots__/   대표 8쪽 × 2언어 × 2뷰포트 = 32장
npm run test:visual             이번 빌드와 스크린샷을 대조
npm run test:visual:approve     승인된 화면 변경일 때만 기준선 갱신
```

동작은 `npm run test:e2e`(건강검진 + 사용자 동작), 순수 함수·데이터 계약은
`npm run test:unit` 이 본다. 자세한 내용은 README 의 "검사" 절.

절차는 **확인 먼저, 갱신은 나중**이다.

1. 화면을 고치고 `npm run build`
2. `npm run verify` — 불일치 목록이 **이번에 바꾼 것과 정확히 일치하는지** 본다
3. 맞으면 `npm run baseline` 으로 기준선을 갱신하고, 무엇을 왜 바꿨는지 커밋 메시지에 남긴다

불일치가 예상과 다르면 그것이 놓친 회귀다. 기준선부터 갱신하면 그 회귀가 묻힌다.

### 지금까지 반영한 콘텐츠 변경

| 날짜       | 화면             | 내용                                                                          | 근거             |
| ---------- | ---------------- | ----------------------------------------------------------------------------- | ---------------- |
| 2026-08-05 | contact          | 문의 유형 → `제품 및 라이선스 문의 (Qt, Toradex, VisualOn, Protopie, Tuxera)` | PS그룹 검토 의견 |
| 2026-08-05 | license-visualon | 코덱 항목 제목 → `모빌리티에 최적화된 소프트웨어 코덱/파서`                   | 〃               |
| 2026-08-05 | license-protopie | 하단 파트너십 문구 삭제                                                       | 〃               |
| 2026-08-05 | license-tuxera   | 대표 이미지를 벤더 포트폴리오 도식으로 교체 · `Tuxera Fusion SMB` 항목 추가   | 〃               |

| 2026-08-05 | references | 필터 결과 0건일 때 안내 문구 표시 (`[data-filter-empty]`) | 공공 분야 사례가 아직 없어 빈 화면만 남던 문제 |

미반영: VisualOn 코덱 항목의 클러스터·IVI 사진 교체 — 이미지 파일 미수령.

## 한국어 · 영어 두 언어

주소는 한국어가 `/about.html`, 영어가 `/en/about.html` 이다. 화면 안의 링크가 상대 경로라
영어 화면에서 메뉴를 눌러도 그대로 영어 화면으로 이어진다. 자산(`assets/...`)만 한 단계 위에
있으므로 영어 화면에서는 `../assets/...` 로 나간다(`assetPath(path, lang)`).

**주소는 둘, 화면 코드는 하나다.**

```text
/about.html      ─┐
                  ├─ src/components/pages/about-page.tsx  (lang 을 받는다)
/en/about.html   ─┘
```

```text
src/app/(site)/<slug>/page.tsx   한국어 주소 — 7줄짜리 진입점. <AboutPage lang="ko" />
src/app/(en)/en/<slug>/page.tsx  영어 주소   — 7줄짜리 진입점. <AboutPage lang="en" />
src/components/pages/<slug>-page.tsx  실제 화면 23개. 두 언어가 함께 쓴다
src/config/i18n.ts               언어 타입 · 주소 규칙 · 껍데기 문구(ko/en)
src/i18n/dictionary.ts           i18n/*.json 을 합친 사전 (한국어 원문 → 영어)
src/i18n/translate.tsx           <T>(화면 글) · t()(속성값) · localizeLd()(구조화 데이터)
src/i18n/localize.ts             데이터를 Record<Lang, T> 로 (localized)
i18n/<slug>.json                 번역을 채우는 자리 — 예전과 같다
```

### 영어 문구를 고치는 법

**`i18n/<slug>.json` 에 번역을 채우고 빌드하면 끝이다.** 예전에는 생성기를 다시 돌려
영어 화면 파일을 만들어야 했지만, 지금은 그리는 시점에 사전을 조회한다.

```tsx
<h2>
  <T l={lang}>산업 데이터를 표준화합니다</T>
</h2>
<img alt={t(lang, "설비 데이터를 진단하는 모습")} src={assetPath("assets/img/x.webp", lang)} />
```

- 한국어 화면에서 `<T>` 는 받은 것을 **그대로** 돌려준다 — DOM 이 달라지지 않는다.
- 사전에 없으면 한국어를 그대로 둔다. 번역이 빠진 자리가 빈칸이 되는 것보다 낫다.
- 영어 문장의 곧은 아포스트로피는 활자용(`company’s`)으로 바꿔서 내보낸다.

### `<wbr />` 를 조심할 것

한국어는 줄바꿈 힌트로 문장이 갈라져 있고, 영어 번역은 그것을 **이어 붙인 한 문장**이다.

- `<T>` 는 자식을 한 줄로 펴서(`<wbr />` 는 빼고) 사전과 맞춘다
- 데이터 쪽 `localized()` 는 `"wbr"` 토큰으로 갈라진 문자열을 먼저 잇는다
- **`"br"`(문장 구분 줄바꿈)은 잇지 않는다** — 이어 붙이면 두 문장이 한 덩어리가 된다

### 여러 화면이 함께 쓰는 데이터

히어로 문구·카드·단계 설명은 `src/data/*.ts` 에 있고 여러 화면이 같이 쓴다.
한국어 원본 하나만 두고 `localized(…)` 가 두 언어로 내놓는다.

```ts
const depCardsKo: Record<string, readonly DepCardItem[]> = { … };
export const depCards = localized(depCardsKo); // 화면에서는 depCards[lang]["…"]
```

### 진행 상태

- 영어 화면 23쪽 · 언어 전환 · hreflang · 사이트맵 46개 URL
- 한국어 25쪽 + 영어 23쪽을 회귀 기준선에서 함께 검사한다.
