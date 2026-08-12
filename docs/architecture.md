# 프로젝트 구조

```text
src/
  app/
    (site)/          22개 페이지. 공통 스타일시트 2개를 쓰는 라우트 그룹
      layout.tsx     루트 레이아웃 (html/head/body + site2.js)
      <route>/page.tsx
    (home)/          index 전용. home-refresh.css/js 가 하나 더 붙어 그룹을 분리
      layout.tsx
      page.tsx
  components/layout/ 공통 셸
    site-header.tsx  skip 링크 + GNB (메뉴는 config/navigation.ts 에서)
    mobile-panel.tsx 무JS 폴백 모바일 메뉴
    site-footer.tsx  푸터 (하단은 데이터로, CTA 는 children 으로)
  config/
    site.ts          배포 주소 한 곳 (canonical·og·JSON-LD·sitemap 이 참조)
    navigation.ts    GNB 4개 대메뉴 + 20개 중메뉴
  data/              화면 문구·이미지 경로 데이터 (site·heroes·cards·features·steps·
                     cases·refs·solution-intro·cta·subnav·sec-heads·applications·
                     contact·history·logos·home-hero — 목록은 README 표 참조)
  styles/            site2.css 를 화면별로 쪼갠 29개 모듈 + order.json
  scripts/           site2.js 를 기능별로 쪼갠 25개 모듈 + order.json
public/
  assets/            현재 사이트의 자산을 그대로 복제 (css/js/img/video/font)
                     ⚠️site2.css·site2.js 는 생성물 — 직접 고치면 다음 빌드에서 사라진다
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

## 확장 원칙

- 새 페이지는 `src/app/(site)/<route>/page.tsx` 에 만들고 공통 셸은 `src/components/layout` 을 사용한다.
- 화면 문구·이미지 경로 중 **여러 페이지가 공유하는 것**은 `src/data` 에서 관리한다.
- 페이지 하나만 쓰는 문구는 아직 각 `page.tsx` 안에 있다. 데이터로 옮길 때는
  반드시 `npm run verify` 를 통과시킨 뒤 커밋한다.
- 스타일은 `src/styles/*.css` 를 고치고, `order.json` 의 순서를 지킨다.
  `npm run build` 전에 `scripts/build-css.mjs` 가 그 순서대로 이어붙여
  `public/assets/site2.css` 를 만든다. **브라우저에는 지금까지와 똑같이 파일 하나로 내려간다.**
  번들러를 태우지 않는 이유는 CSS 안 `url(...)` 이 `assets/` 기준 상대경로이기 때문이다.
  순서를 바꾸면 캐스케이드가 뒤집혀 화면이 조용히 깨진다.
- 동작(JS)은 `src/scripts/*.js` 를 고친다 — 같은 방식으로 `scripts/build-js.mjs` 가
  이어붙여 `public/assets/site2.js` 를 만든다. 00-head 가 외곽 IIFE 를 열고
  17-iife-close 가 닫으므로(01~16 은 그 안, 18 이후는 최상위) 순서를 바꾸면 깨진다.
  판번호를 올릴 때는 두 레이아웃의 `?v=` 도 함께 올린다(게이트 scripts 검사가 잡는다).
- 새 라이브러리는 승인 없이 추가하지 않는다. 현재 런타임 의존성은 next·react·react-dom 뿐이다.

## 왜 라우트 그룹이 둘인가

`index.html` 만 `home-refresh.css` 가 추가로 붙고 `<body class="home-page">` 가 있다.
스타일시트를 `<head>` 에 원본 순서 그대로 두려면 레이아웃이 달라야 해서
Next 의 다중 루트 레이아웃으로 분리했다.

## 배포

`main` 에 push 하면 GitHub Actions 가 `npm run build` 로 `out/` 을 만들어 Pages 에 올린다.

- 공개 주소: https://hyegeungim3-git.github.io/ocube-homepage-next/
- 프로젝트 사이트는 **하위 경로**에 올라간다. Next 는 런타임 청크를 절대경로
  `/_next/...` 로 내보내므로 그대로 두면 404 가 나고 하이드레이션이 실패한다.
  워크플로가 `configure-pages` 의 `base_path` 를 `PAGES_BASE_PATH` 로 넘겨
  `next.config.ts` 의 `assetPrefix` 에 주입한다.

## 이 저장소의 위치

**2026-08-05 부터 이 저장소가 정본이다.** 회사 홈페이지의 기준 소스이고, 콘텐츠 변경도 여기서 한다.

- 공개 주소: https://hyegeungim3-git.github.io/ocube-homepage-next/
- 구버전: `codex` 저장소 `public/` (https://hyegeungim3-git.github.io/ocube-homepage-final/) ·
  Cloudflare `a/` — **더 이상 갱신하지 않는다.** 참고용으로만 남긴다.

정본 전환 전에는 구버전과 DOM 이 같은지 검사했지만, 이제 비교 상대가 없으므로
기준선을 저장소 안(`baseline/`)에 둔다.

## 회귀 기준선

기준선은 두 겹이다 — **DOM**(`baseline/`)과 **화면 그림**(`tests/visual/__screenshots__/`).

```text
baseline/*.html      직전에 승인한 빌드 결과 (한국어 25 + 영어 23 = 48페이지)
npm run verify       이번 빌드(out/)와 기준선을 대조 — 48페이지 × 11항목 = 528건
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

| 날짜 | 화면 | 내용 | 근거 |
|---|---|---|---|
| 2026-08-05 | contact | 문의 유형 → `제품 및 라이선스 문의 (Qt, Toradex, VisualOn, Protopie, Tuxera)` | PS그룹 검토 의견 |
| 2026-08-05 | license-visualon | 코덱 항목 제목 → `모빌리티에 최적화된 소프트웨어 코덱/파서` | 〃 |
| 2026-08-05 | license-protopie | 하단 파트너십 문구 삭제 | 〃 |
| 2026-08-05 | license-tuxera | 대표 이미지를 벤더 포트폴리오 도식으로 교체 · `Tuxera Fusion SMB` 항목 추가 | 〃 |

| 2026-08-05 | references | 필터 결과 0건일 때 안내 문구 표시 (`[data-filter-empty]`) | 공공 분야 사례가 아직 없어 빈 화면만 남던 문제 |

미반영: VisualOn 코덱 항목의 클러스터·IVI 사진 교체 — 이미지 파일 미수령.

## 한국어 · 영어 두 언어

주소는 한국어가 `/about.html`, 영어가 `/en/about.html` 이다. 화면 안의 링크가 상대 경로라
영어 화면에서 메뉴를 눌러도 그대로 영어 화면으로 이어진다. 자산(`assets/...`)만 한 단계 위에
있으므로 영어 화면에서는 `../assets/...` 로 나간다.

```text
src/config/i18n.ts              언어 타입 · 주소 규칙 · 껍데기 문구(ko/en)
src/components/layout/lang-toggle.tsx   KR/EN 전환 버튼 (링크라 자바스크립트 없이도 동작)
src/styles/lang-toggle.css      버튼 모양 — 지금 언어는 흰 알약, 반대쪽은 반투명
src/app/(en)/                   영어 화면 (<html lang="en">)
scripts/make-en.mjs             한국어 화면 → 영어 화면 생성기
i18n/<slug>.json                화면별 번역 사전 (한국어 원문 → 영어)
```

### 영어 화면을 고치는 법

영어 화면 파일(`src/app/(en)/...`)을 직접 고치지 않는다. **한국어 화면과 번역 사전을 고치고
`node scripts/make-en.mjs` 를 다시 돌린다.** 그래야 두 언어의 구조가 어긋나지 않는다.

### 진행 상태

- 완료: 영어 화면 23쪽 · 언어 전환 · hreflang · 사이트맵 46개 URL
- 영어 화면의 임시 `noindex`는 제거했다.
- 한국어 25쪽 + 영어 23쪽을 회귀 기준선에서 함께 검사한다.

### 여러 화면이 함께 쓰는 데이터

히어로 문구·카드·단계 설명은 `src/data/*.ts` 에 있고 여러 화면이 같이 쓴다.
생성기가 여기서도 영어판(`src/data/*.en.ts`)을 만들고, 영어 화면은 그쪽을 참조한다.

- 사전은 `i18n/*.json` 전부를 합쳐 적용한다 (한 문장이 여러 화면에 나와도 한 번만 번역하면 된다)
- 데이터의 `"wbr"` 토큰과 화면의 `<wbr />` 는 한국어 줄바꿈 힌트라 영어판에서는 걷어내고
  갈라져 있던 문장을 이어 붙인 뒤 사전과 맞춘다
- ⚠️ 이 저장소의 줄바꿈은 CRLF 다. `\n` 을 못으로 박은 정규식은 빗나간다 — `\s*` 를 쓸 것
