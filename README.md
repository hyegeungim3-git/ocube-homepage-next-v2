# OCUBE Homepage — v2 (핸드오프 노트 판)

오큐브 홈페이지를 **`docs/non-developer-handoff-notes.txt` 의 지침대로 다시 리팩터링한 판**입니다.
한국어 23쪽 + 영어 23쪽(`/en/*`)을 Next.js(App Router) 정적 내보내기로 만들어 GitHub Pages 에 올립니다.

|               | 저장소                                              | 공개 주소                                                 |
| ------------- | --------------------------------------------------- | --------------------------------------------------------- |
| **이 판(v2)** | `ocube-homepage-next-v2`                            | https://hyegeungim3-git.github.io/ocube-homepage-next-v2/ |
| 먼저 만든 판  | `ocube-homepage-next` (로컬 `C:\오큐브\ocube-next`) | https://hyegeungim3-git.github.io/ocube-homepage-next/    |

**두 판은 화면과 기능이 같습니다.** 같은 원본에서 갈라져 나왔고, 서로 다른 지침으로 리팩터링했을
뿐입니다. 2026-08-12 에 46쪽을 브라우저로 대조해 확인했습니다 —
`docs/refactoring-roadmap.md` 의 "원본과의 대조 검수" 절에 방법과 수치가 있습니다.

> ⚠️ **어느 쪽을 회사 정본으로 쓸지는 아직 정해지지 않았습니다.** 프로젝트 기록(`CLAUDE.md`)은
> 먼저 만든 판을 정본으로 적고 있습니다. 이 저장소를 정본으로 올리려면 그 결정을 먼저 받고,
> 이 표와 `AGENTS.md`·`docs/architecture.md` 의 같은 문장을 함께 고쳐야 합니다.

처음 온 사람은 아래 **첫 한 시간**을 먼저 해 보고, `AGENTS.md`(작업 규칙) →
`docs/architecture.md`(구조) → `docs/pitfalls.md`(먼저 밟은 지뢰) 순서로 읽으면 됩니다.

이 저장소는 "먼저 만든 판을 1바이트도 바꾸지 않고 옮기는" 이관 작업으로 시작했습니다.
아래 게이트·변환기 설명은 그때의 장치이고, 지금은 회귀 안전망으로 그대로 씁니다.

## 실행

필요한 것: **Node 22** 와 **Python 3**(정합성 게이트가 파이썬 스크립트다).

```bash
npm ci
pip install -r scripts/requirements.txt   # verify 가 쓰는 beautifulsoup4
npm run dev      # 개발 서버
npm run build    # 정적 내보내기 → out/  (한국어 25쪽 + 영어 23쪽)
npm run verify   # 직전 승인본(baseline/)과 DOM 이 같은지 검사 (아래 참조)
npm run baseline # 의도한 변경을 확인한 뒤 기준선 갱신
```

## 첫 한 시간 — 손으로 한 번 돌려보기

읽기 전에 이걸 먼저 해 보면 이 저장소의 작업 방식이 한 번에 이해된다. 30분이면 된다.

```bash
npm ci                      # npm install 이 아니라 ci — 잠금 파일 그대로 설치한다
npm run build
npm run verify              # → 검사 528건 중 통과 528건. 여기서 시작한다
```

이제 **일부러 화면을 바꿔 보고, 게이트가 그것만 잡는지 확인한다.**

1. `src/data/site.ts` 에서 `SEOUL` 주소 끝에 ` (테스트)` 를 붙인다.
2. `npm run build && npm run verify` → 불일치가 뜬다.
3. **목록을 읽는다.** 푸터에 그 주소가 들어가는 쪽마다 `footer` 와 `text` 가 걸릴 것이다.
   내가 바꾼 그것 말고 다른 게 섞여 있으면, 의도치 않은 곳을 건드린 것이다.
4. 되돌린다 → `npm run build && npm run verify` → 다시 528/528.

여기서 **`npm run baseline` 을 먼저 눌렀다면** 그게 이 저장소에서 하지 말아야 할 일이다.
기준선은 "불일치 목록을 읽고 내가 바꾼 것과 정확히 같음을 확인한 뒤" 갱신한다.
순서를 뒤집으면 놓친 회귀가 그대로 묻힌다.

## 자주 하는 작업 — 어디를 고치고 무엇으로 확인하나

| 하고 싶은 일   | 고칠 곳                                                                                                                  | 확인                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 화면 문구      | 여러 쪽이 함께 쓰면 `src/data/*.ts`, 한 쪽에만 있으면 `src/components/pages/<slug>-page.tsx`                             | `build` → `verify` 불일치가 그 문구뿐인가                  |
| 영어 문구      | `i18n/<slug>.json` — **열쇠는 화면에 그려지는 한국어 원문 그대로**                                                       | 영어 쪽에 한국어가 남지 않았는가 (`docs/pitfalls.md` 참조) |
| 색·간격·반응형 | `src/styles/_*.scss` (전역 진입점은 `site.scss` 하나, `@use` 차례가 곧 캐스케이드)                                       | `npm run test:visual`                                      |
| 화면 동작      | `src/components/behavior/*.tsx` (지도는 `docs/architecture.md`)                                                          | `npm run test:e2e`                                         |
| 메뉴 항목      | `src/config/navigation.ts` 한 곳 (데스크톱·모바일·푸터가 모두 여기서 나온다)                                             | e2e `navigation.spec.ts`                                   |
| 새 화면 추가   | `components/pages/<slug>-page.tsx` + `app/(site)/<slug>/page.tsx` + `app/(en)/en/<slug>/page.tsx` + `public/sitemap.xml` | 전부                                                       |
| 배포 주소      | `src/config/site.ts` (또는 `NEXT_PUBLIC_SITE_URL`)                                                                       | e2e `metadata.spec.ts`                                     |

새 이미지·영상을 넣을 때는 **영어 화면 경로를 조심할 것** — `assetPath(경로, lang)` 을 태우지
않으면 `/en/` 아래에서 깨진다. 실제로 두 번 겪었다(`docs/pitfalls.md`).

## 검사 (전부 통과해야 한 단계가 끝난 것이다)

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run verify        # DOM 대조 48쪽 x 11항목 = 528건
npm run test:unit     # Vitest — 순수 함수·데이터 계약
npm run test:e2e      # Playwright — 건강검진·메뉴·필터·슬라이더·언어·메타
npm run test:visual   # Playwright — 스크린샷 기준선
```

`verify`·`test:e2e`·`test:visual` 은 **`out/` 을 보고 검사한다.** 화면을 고쳤으면
`npm run build` 를 먼저 돌릴 것.

- 빌드가 실패해도 `out/` 에는 지난번 결과가 남아 거짓 초록불이 뜬다 —
  `verify` 는 `out/` 이 소스보다 낡으면 아예 멈춘다.
- `tests/static-server.mjs` 가 `out/` 을 그대로 내려주고 Playwright 가 자동으로 띄운다.
  `next start` 는 `output:"export"` 라 쓸 수 없다.

| 검사          | 무엇을 보나                                                                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:unit`   | 주소 규칙(`pageHref`·`counterpartHref`·`assetPath`)·GNB 구조·`src/data` 의 ko/en 대응·사이트 주소 조합                                                                                                                           |
| `test:e2e`    | 화면 23 x 2언어 x 2뷰포트 **건강검진**(콘솔 오류·하이드레이션·깨진 이미지·가로 오버플로·h1 1개) + 메가 메뉴·모바일 아코디언·본문 바로가기·사례 필터·히어로 슬라이더·언어 전환·복사 토스트·라이트박스·FAB·시연 영상·메타/사이트맵 |
| `test:visual` | 대표 8쪽 x 2언어 x 2뷰포트 전면 스크린샷                                                                                                                                                                                         |

**기준선을 먼저 고치지 않는다.** 순수 리팩터링이면 `verify` 528 건과 스크린샷이
**갱신 없이** 통과해야 한다. 화면을 의도적으로 바꿨을 때만, 차이가 바꾼 것과 일치하는지
확인한 뒤 `npm run baseline` · `npm run test:visual:approve` 를 쓴다.

### 스크린샷에서 사진을 덮는 이유

전면 스크린샷을 그대로 저장하면 사진이 많은 화면 한 장이 4MB 다(32장 46MB). 기준선을
갱신할 때마다 그만큼 저장소에 쌓인다. 그런데 리팩터링이 깨뜨리는 것은 사진의 화소가 아니라
**배치·여백·글자**다. 그래서 `img`·`video`·`iframe` 과 CSS 배경 사진을 평평한 색으로 덮고
찍는다 — 상자의 위치와 크기는 그대로 남는다(46MB → 24MB).
사진이 엉뚱하게 바뀌는 사고는 `verify`(src 대조)와 건강검진(깨진 이미지)이 맡는다.

영어 문구는 `i18n/<slug>.json` 에 채우면 된다. 화면 코드는 두 언어가 하나를 함께 쓰고,
그리는 시점에 사전을 조회한다 (`src/i18n/`). 자세한 내용은 `docs/architecture.md`.

### 이 검사는 CI 가 대신 돌린다

`main` push 와 PR 마다 GitHub Actions 가 `npm ci` → typecheck → lint → format:check →
test:unit → build → **verify** → test:e2e 를 돌린다(`.github/workflows/checks.yml`).
게이트가 문서 속 약속이 아니라 **실제로 막는 장치**가 되도록 하기 위한 것이다.

`test:visual` 만 CI 에서 빠져 있다. 스크린샷 기준선이 Windows 에서 만들어졌고 글꼴 렌더링이
OS 마다 달라, Linux 러너에서 돌리면 실제 회귀가 아닌데도 전부 실패한다.
**화면 그림 검사는 로컬에서 돌릴 것.**

## URL 규칙

`next.config.ts` 의 `trailingSlash: false` + `output: "export"` 조합으로
`out/business-ax.html` 처럼 **현재와 똑같은 파일명·URL**이 생성됩니다.
기존에 공유된 링크, 구 Wix 슬러그 리다이렉트, sitemap, canonical 이 그대로 유효합니다.

## 구조

```text
src/
  app/                 주소만 담당. 화면 하나당 7줄짜리 진입점 두 개(한국어·영어)
    (site)/ (home)/    한국어 · (en)/ (en-home)/ 영어
  components/pages/    실제 화면 23개 — 두 언어가 함께 쓴다 (<XxxPage lang=… />)
  components/layout/   PageShell · PageMeta · 헤더 · 모바일 메뉴 · 푸터
  components/section/  두 화면 이상이 같은 모양으로 반복하는 조각
  i18n/                사전 · <T>·t (화면 글) · localized (데이터)
  data/ config/ styles/ scripts/
public/                자산 · 구 슬러그 리다이렉트 스텁 20개 · sitemap.xml · robots.txt
scripts/
  convert-from-legacy.py  원본 HTML → TSX 기계 변환기 (이관기 유물, 재실행 가능)
  verify-fidelity.py      정합성 게이트
tests/                 unit(Vitest) · e2e·visual(Playwright)
```

### 라우트 그룹을 둘로 나눈 이유

`index.html` 만 `home-refresh.css` 가 하나 더 붙고 `<body class="home-page">` 가 있습니다.
스타일시트를 `<head>` 에 원본 순서대로 유지하려면 레이아웃이 달라야 해서
Next 의 다중 루트 레이아웃(라우트 그룹)으로 분리했습니다.

## 정합성 게이트 (`npm run verify`)

직전 승인본(`baseline/`, **한국어 25쪽 + 영어 23쪽**)과 `out/` 산출물을 페이지마다
대조합니다. 불일치가 나오면 그것이 이번에 바꾼 것과 정확히 일치하는지 확인한 뒤에만
`npm run baseline` 으로 기준선을 갱신합니다.

| 항목                                    | 내용                                                                                                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| skip / header / m-panel / main / footer | DOM 트리 전체(태그·속성·텍스트) 완전 일치                                                                                                         |
| **text**                                | 하위 트리 텍스트를 이어붙여 비교 — **인라인 요소 경계의 띄어쓰기**까지 검사                                                                       |
| head                                    | title·meta·link 를 순서 무관 집합으로 비교                                                                                                        |
| ld+json                                 | 구조화 데이터 내용 비교(위치 무관)                                                                                                                |
| root-attr                               | `<html>`·`<body>` 자체 속성                                                                                                                       |
| scripts                                 | 관리 자산(css·홈 전용 js)의 **판번호**를 원문 패턴으로 비교 — afterInteractive 스크립트는 `<script src>` 태그로 남지 않아 태그 스캔으론 안 잡힌다 |

**현재 상태: 48페이지 × 11항목 = 528/528 통과.**
콘텐츠를 손대면 이 게이트가 즉시 깨지므로, 의도하지 않은 회귀를 막는 안전망입니다.
데이터화 같은 순수 리팩터링은 **기준선 갱신 없이 528 이 그대로 통과**해야 한다 —
그것이 DOM 무변경의 증명이다.

### `text` 검사를 따로 두는 이유

JSX 는 줄바꿈에 붙은 공백을 지운다. 그래서 `<b>설립</b> (2007.03.29)` 를 그대로 옮기면
`<b>설립</b>(2007.03.29)` 가 되어 **띄어쓰기가 사라진다.** DOM 트리 비교는 텍스트 노드마다
공백을 정규화하므로 이 결함을 통과시킨다. 실제로 이 방식으로 한 번 놓쳤고,
브라우저 렌더 대조에서 줄바꿈이 달라진 것으로 드러났다.

변환기는 이제 텍스트 노드의 앞뒤 공백을 `{" "}` 로 명시하고,
블록 요소 사이의 공백만 있는 노드는(렌더에 영향 없음) 버린다.

## 렌더 대조 (라이브 vs 새 빌드)

정합성 게이트가 마크업을 본다면, 렌더 대조는 **실제로 그려진 화면**을 본다.
실제 Chrome 으로 23페이지 × 데스크톱(1440×900)·모바일(375×812) = 46셀에서
모든 요소의 좌표·크기, 문서 높이, 계산된 스타일, 가로 오버플로, 콘솔 오류를 비교한다.

**현재 상태: 46/46 완전일치 (좌표 불일치 0, 콘솔 오류 0).**

측정 시 유의점 — 리빌 애니메이션(`translateY(30px)`)·웹폰트 로딩·페이지 객체 재사용은
좌표를 흔든다. 애니메이션을 확정 상태로 고정하고, `document.fonts.ready` 를 기다리고,
측정마다 새 페이지를 열어야 결정적인 값이 나온다.

## 프레임워크 때문에 생기는 의도적 차이 (내용 변화 없음)

1. `<meta charset>` 이 `UTF-8` → `utf-8`, viewport `initial-scale=1.0` → `1` (Next 기본값, 의미 동일)
2. Next/React 가 이미지·CSS·JS 에 `<link rel="preload">` 를 덧붙임 (성능 목적 추가분)
3. JSON-LD `<script>` 가 `<head>` → `<body>` 로 이동 (Next 공식 패턴, 검색엔진 인식 동일)
4. 홈 전용 `home-refresh.js` 를 `next/script` 의 `afterInteractive` 로 로드
   - 인라인 `<script>` 로 두면 하이드레이션 때 React 가 재삽입해 **두 번 실행**된다
   - DOM 을 직접 조작하는 스크립트이므로 하이드레이션 이후 실행이 안전하다
   - (`site2.js` 는 6단계에서 전부 React 로 옮기고 없앴다)
5. `out/` 에 `404.html`·`_not-found.html` 이 추가로 생성됨 (원본에는 없음)

## 데이터로 뺀 것

| 파일                         | 내용                                                                     |
| ---------------------------- | ------------------------------------------------------------------------ |
| `src/config/site.ts`         | 배포 주소. canonical·og:url·og:image·JSON-LD·sitemap·robots 가 모두 참조 |
| `src/config/navigation.ts`   | GNB 4개 대메뉴 + 20개 중메뉴(라벨·주소·설명)                             |
| `src/data/site.ts`           | 거점 3곳 · 푸터 링크 4컬럼 · 로고 · 법적 표기                            |
| `src/data/heroes.ts`         | 서브페이지 히어로 9개 (배지·제목·리드·핵심 포인트)                       |
| `src/i18n/`                  | 사전(`dictionary`)·화면 글 번역(`<T>`·`t`)·데이터 번역(`localized`)      |
| `src/data/cards.ts`          | 제목+설명 카드 14섹션 55장                                               |
| `src/data/features.ts`       | 라벨+설명 항목 10목록 39항목                                             |
| `src/data/steps.ts`          | What We Do 3목록 18단계 (일러스트·불릿 3개 포함)                         |
| `src/data/cases.ts`          | 구축 사례 — 프로젝트 9장 + 홈 마퀴 4장                                   |
| `src/data/refs.ts`           | references 카드 14장 (배지·발주처·분야·설명)                             |
| `src/data/solution-intro.ts` | 솔루션 7쪽 이동 문구 (배지·제품명·2줄 설명)                              |
| `src/data/cta.ts`            | 푸터 CTA 밴드 문구 16쪽 (킥커·헤드라인·리드·버튼)                        |
| `src/data/subnav.ts`         | 솔루션 서브 내비 7쪽 (앵커·라벨)                                         |
| `src/data/sec-heads.ts`      | 섹션 머리 표준형 36곳 (킥커·제목·부제)                                   |
| `src/data/applications.ts`   | 비즈니스 적용 분야 카드 16장 + EVCP 스탯 4                               |
| `src/data/contact.ts`        | 문의 유형 옵션 7개                                                       |
| `src/data/history.ts`        | 연혁 타임라인 7그룹 28항목                                               |
| `src/data/logos.ts`          | 고객사·기술 파트너 로고 11장                                             |
| `src/data/home-hero.ts`      | 홈 히어로 슬라이드 4장 (영상·이미지·타자기 문구)                         |
| `src/styles/_*.scss`         | 화면별 29개 SCSS partial. `site.scss` 가 캐스케이드 순서대로 불러온다    |
| `src/components/behavior/`   | 화면 동작 — 예전 `site2.js` 25개 모듈이 옮겨 온 곳                       |

실도메인이 정해지면 `NEXT_PUBLIC_SITE_URL` 환경변수 하나로 전체 주소를 바꿀 수 있다.

### 문구 수정은 데이터에서

키는 `"페이지:섹션id"` 형식이라 화면에서 바로 찾아갈 수 있다.
예) Cubeon 페이지의 "적합한 곳" → `depCards["solution-cubeon:fit"]`

인라인 마크업이 섞인 문구는 `RichToken` 배열로 담는다.

```ts
["산업 통신 규격(OPC-UA·", "wbr", "Modbus)으로 설비 연결"][
  ({ b: ["데이터 진단"] }, " 학습 가능성 판정")
]; // 굵은 라벨 안에도 wbr 이 들어간다
```

`"br"` 은 문장 구분 줄바꿈(`<br class="sb">`), `"wbr"` 은 줄바꿈 기회다.

## 데이터로 빼지 않은 것 (의도적)

`agent-rules` 8절 "의미와 동작이 동일하게 반복될 때만 분리" 기준을 적용했다.
아래는 형태가 섞여 있어, 데이터로 빼면 플래그가 늘어나 오히려 읽기 어려워진다.

| 대상                           | 개수 | 이유                                             |
| ------------------------------ | ---- | ------------------------------------------------ |
| `.duo` 교차 행                 | 149  | 좌우 배치·이미지·불릿·CTA 조합이 페이지마다 다름 |
| 아이콘·이미지·링크가 붙은 카드 | 43   | 같은 `.dep-card` 지만 내부 구성이 4종으로 갈림   |
| `.feat` 의 `h3+p` 형태         | 16   | 헤딩이라 의미가 다름(문서 개요에 잡힘)           |
| `solution-cubeon #arch`        | 8    | 목록 안에서 항목 형태가 섞임                     |

## 남은 일

- [x] `site2.js`(44KB) 를 React 로 전부 이전하고 제거 — 남은 손코딩 JS 는 홈 전용 `home-refresh.js` 하나
- [ ] `home-refresh.js` 도 같은 방식으로 이전 (홈 타자기 등, 6단계 범위 밖이라 남겨 둠)
- [ ] 실도메인 확정 시 `NEXT_PUBLIC_SITE_URL` 설정 (도메인 결정 대기)
- [ ] 위 "빼지 않은 것" 은 형태가 정리되면 그때 재검토
