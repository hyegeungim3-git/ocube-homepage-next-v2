# OCUBE 리팩터링 변경사항 요약

> 상태: **미적용 작업 계획**. 체크되지 않은 항목을 현재 구현으로 간주하지 않는다.
> 각 단계가 검증을 통과하면 해당 변경과 함께 `architecture.md`·`README.md`의 현재 상태를 갱신한다.

상세 규칙은 `docs/ai-maintenance-playbook.md`를 따른다. 모든 단계는 한 번에 하나씩 수행한다.

## 공통 작업 순서

```text
기존 동작 조사
→ 변경 전 특성화 TC 작성·통과
→ 코드 수정
→ 기대값을 바꾸지 않고 동일 TC 통과
→ 전체 회귀 테스트
→ 통과 후 기존 코드 제거
```

## 필요한 변경사항

### 1. 테스트 환경 구성 — **완료 (2026-08-12)**

- [x] Playwright E2E·visual 설정 — `playwright.config.ts`, `tests/static-server.mjs`(out/ 서빙)
- [x] Vitest unit 설정 — `vitest.config.mts`
- [x] `test:unit`, `test:e2e`, `test:visual` npm script 추가 (+ `test:visual:approve`)
- [x] 콘솔 오류, hydration, 깨진 이미지, 가로 오버플로 검사 — `tests/e2e/health.spec.ts`
      (화면 23 × 2언어 × 2뷰포트 = 92셀, h1 개수·`html lang` 포함)
- [x] 1440×900·375×812, ko/en 기준 스크린샷 생성 — 대표 8쪽 = 32장

### 2. 공통 페이지 구조 — **완료 (2026-08-12)**

- [x] Header·MobilePanel·Footer를 `PageShell`로 통합
      (`src/components/layout/page-shell.tsx`. 홈은 푸터가 전용 마크업이라 제외 — 억지로 넣으면
      홈에서만 쓰는 선택 항목이 넷 늘어난다, 플레이북 7절)
- [x] 반복 metadata·hreflang을 typed 공통 데이터로 통합
      (`src/config/page-meta.ts` + `src/components/layout/page-meta.tsx`, 48쪽 전부 적용)
- [x] 실제 화면을 `src/components/pages`로 이동 — 23개 (3단계와 함께)
- [x] `app/**/page.tsx`는 얇은 URL 진입점으로 축소 — 46개 라우트가 각 7줄

> 뒤 두 항목은 3단계와 한 묶음으로 했다. 화면만 옮기고 언어 통합을 안 하면 생성기가 그
> 컴포넌트의 영어 복사본을 또 만들어야 하고, 그 코드는 3단계에서 바로 지운다.
> 플레이북 4절의 전환 순서도 "옮기기 → lang 받기 → 라우트 축소" 를 한 화면 단위로 묶어 놓았다.

### 3. 다국어 코드 통합 — **완료 (2026-08-12)**

- [x] ko/en URL은 현재대로 유지 (`/about.html` · `/en/about.html`)
- [x] ko/en이 같은 Page 컴포넌트 사용 — `src/components/pages/<slug>-page.tsx` 23개
- [x] 언어별 콘텐츠를 `Record<Lang, ContentType>`으로 관리 — `src/data/*.ts` 16개가
      `localized(…)` 로 두 언어를 내놓는다 (`data[lang][키]`)
- [x] 영어 TSX·`*.en.ts` 생성 로직 제거 — `scripts/make-en.mjs` 삭제

> **왜 사전 조회 방식인가.** 로드맵의 예시는 화면마다 이름 붙인 콘텐츠 객체지만, 이 저장소의
> 본문은 화면에 그대로 박힌 한국어 1,369덩어리(27,012자)다. 이름을 기계로 붙이면 `t137` 같은
> 키가 되어 "문구 수정은 데이터에서" 가 오히려 어려워진다. 그래서 **한국어 원문을 키로 쓰는
> 사전**(이미 있는 `i18n/*.json`)을 그대로 두고, 그리는 시점에 조회한다.
> 화면 코드는 한국어를 그대로 품고 있어 읽기 쉽고, 번역을 채우는 자리도 예전과 같다.
>
> **막혔던 지점은 `<wbr />`.** 한국어는 `"…(OPC-UA·" <wbr /> "Modbus)…"` 처럼 문장이
> 갈라져 있고 영어는 이어 붙인 한 문장으로 번역돼 있다. 그래서 `<T>` 는 자식을 한 줄로 펴서
> (wbr 은 빼고) 찾고, 데이터 쪽 `localized()` 는 `"wbr"` 토큰으로 갈라진 문자열을 먼저 잇는다.
> 예전 생성기가 하던 일을 그대로 옮긴 것이다.

### 4. SCSS 전환과 `site2.css` 제거 — **대부분 완료 (2026-08-12)**

- [x] `sass` 설치 및 전역 `site.scss` 구성
- [x] 기존 CSS를 순서 변경 없이 SCSS partial로 이동 (29개, `@use` 차례 = 전 order.json 차례)
- [x] root layout에서 SCSS를 직접 import
- [x] 검증 후 `site2.css`, `order.json`, `build-css.mjs` 제거
- [ ] 고정 inline style을 SCSS class로 이전 → **5단계에서** (린트 규칙과 함께 다뤄야 순서가 맞다)
- [ ] 미사용·중복 선택자를 영역별 제거 → 별도 작업. 지우려면 어느 화면도 안 쓴다는
      증거가 필요하고, 그 증거는 화면 단위로 모아야 한다

> 번들러를 안 태우던 이유였던 "CSS 안 `url(...)` 상대경로" 는 실측 결과 **0건**이었다.
> 그래서 Next 파이프라인으로 바로 넘길 수 있었다.
> 스타일시트가 `assets/site2.css`(상대경로) 에서 `_next/static`(절대경로) 으로 바뀌었으므로,
> 하위 경로 배포에서는 `assetPrefix` 가 반드시 제대로 들어가야 한다 — 전체 URL 형태의
> `PAGES_BASE_PATH` 로 빌드해 CSS·JS 주소에 접두가 붙는 것을 확인했다.

### 5. Prettier·ESLint 통일 — **완료 (2026-08-12)**

- [x] Prettier 대상에 `scss` 포함 (검사 범위도 `tests/**` 까지 넓혔다)
- [x] props·export 경계 타입 규칙 적용 — `explicit-module-boundary-types: error`,
      반환 타입 46곳 추가
- [x] `any`와 타입 검사 우회 금지 — `no-explicit-any: error`, `consistent-type-imports: error`
- [x] 신규 inline style 금지 — `react/forbid-dom-props`
- [x] inline style lint를 `warn`으로 시작 (현재 86건). `error` 전환은 기존 inline style 을
      SCSS class 로 옮긴 뒤 — 4단계에서 넘어온 항목과 같은 일이다

> `eqeqeq` 는 `{ null: "ignore" }` 로 둔다. `!= null` 은 "null 도 undefined 도 아니다" 를
> 뜻하는 관용구라, `!== null` 로 바꾸면 undefined 가 통과해 **동작이 달라진다.**
> 규칙에 맞추려고 코드 뜻을 바꾸지 않고, 의도를 규칙에 적었다.
>
> 린트 범위를 저장소 전체로 넓히자 **내가 1단계에서 쓴 테스트 코드에서 오류 2건**이 나왔다
> (`prefer-const`, `import()` 타입 표기). 규칙은 새 코드에도 똑같이 걸려야 한다.

### 6. `site2.js` React 이전 — **18/25 모듈 (2026-08-12)**

- [x] 기능 하나마다 기존 동작 TC 작성 — 1단계에서 11개, 6단계에서 5개를 더 고정
- [x] 메뉴·슬라이더 등을 React state/ref 로 이전 — 헤더(투명↔솔리드·숨김·메가 메뉴)는
      `SiteHeader` 의 상태가 됐다
- [x] 전역 이벤트 cleanup 과 접근성 상태 검사 — 옮긴 모든 조각이 해제를 책임진다
- [x] TC 통과 후 대응 `src/scripts` 파일 제거 (25 → 8 모듈, `site2.js` 44KB → 20KB)
- [ ] 남은 6개 기능 (아래)
- [ ] 전체 이전 후 layout의 Script와 `build-js` 제거

**옮긴 것 (13개 모듈)** — `src/components/behavior/` + `SiteHeader`
`15-fab` `13-copy-toast` `19-scroll-progress` `05-gnb-state` `20-gnb-hide` `22-gnb-mega`
`03-reveal` `24-motion-ready` `16-pin-dots` `04-table-scroll` `18-demo-videos` `21-ci-tilt`
`14-lightbox` `12-cert-filter`

**옮기지 않고 지운 것 (4개 모듈, 전부 대상 마크업이 이미 없었다)**

| 모듈 | 확인한 사실 |
|---|---|
| `02-skip-link` | 바로가기는 서버가 그린다. 스크립트는 곧바로 되돌아 나왔다 |
| `11-case-filter` | `.case-card[data-line]` 0개 (필터는 `12-cert-filter` 가 한다) |
| `09-hero-poster` | `.hero` 안 `<video>` 0개 (홈 배너는 슬라이더가 따로 처리) |
| `10-count-up` | `[data-count]` 0개 |
| `14` 의 포인터 미리보기 | `[data-preview]` 0개 |

**남은 것 (8개 파일 / 실제 기능 6개)**

| 파일 | 줄 | 메모 |
|---|---|---|
| `06-mobile-menu` | 175 | 가장 크다. 데스크톱 메뉴를 읽어 아코디언을 다시 그린다 |
| `08-hero-slider` | 98 | 홈 4배너. `HomeSlides` 가 이미 React 라 상태로 옮기기 좋다 |
| `23-sol-copy-travel` | 112 | 솔루션 이동 문구 + 회사소개 히어로 시차 |
| `07-nav-current` | 20 | **`06` 다음에 옮길 것** — 아코디언이 만들어진 뒤에 표시해야 한다 |
| `25-contact-mail` | 25 | 문의 폼. 실제 전송 방식이 결정 대기 항목이라 확인 후 |
| `00-head`·`01-i18n-strings`·`17-iife-close` | 34 | 껍데기. 위가 다 빠지면 함께 사라진다 |

> **한 기능을 옮길 때의 절차** (첫 건에서 확인하고 이후 계속 지킨 순서)

> **한 기능을 옮길 때의 절차** (이 첫 건에서 확인한 순서)
> 1. 기존 동작이 통과하는 TC 가 있는지 본다 (없으면 먼저 쓴다)
> 2. React 로 옮긴다. **서버에서 그리지 않는다** — 기존 스크립트가 하이드레이션 뒤에
>    DOM 을 만들어 넣던 것이면, 서버에서 그리는 순간 정적 HTML 이 달라져 게이트가 잡는다
> 3. 브라우저 상태(스크롤·미디어쿼리)는 `useEffect`+`useState` 대신 `useSyncExternalStore`.
>    효과 안에서 상태를 바꾸면 `react-hooks/set-state-in-effect` 가 막는다
> 4. 읽어주는 이름·문구가 있으면 `lang` 을 받게 한다 (3단계 전에는 생성기의 주입 목록에
>    이름을 더해야 했고, 실제로 이 건에서 빠뜨려 영어 화면이 한국어로 읽혔다)
> 4-b. **옮기기 전에 대상 마크업이 실제로 있는지 센다.** 25개 중 4개가 죽은 코드였다 —
>    옮겼다면 아무 일도 안 하는 React 컴포넌트가 넷 늘었을 것이다
> 4-c. **브라우저 상태는 `useSyncExternalStore`.** 효과 안에서 setState 하면
>    `react-hooks/set-state-in-effect` 가 막는다 (세 번 걸렸다)
> 5. `src/scripts` 에서 대응 파일과 남은 문자열을 지우고 판번호를 올린다
> 6. verify 불일치가 **`scripts` 항목(판번호)뿐**인지 확인하고 기준선 갱신

## 단계별 완료 조건

- [ ] 변경 전 기존 구현에서 TC 통과
- [ ] 변경 후 같은 TC를 수정하지 않고 통과
- [ ] typecheck·lint·format·build·verify 통과
- [ ] unit·E2E·visual TC 통과
- [ ] 순수 리팩터링에서 baseline·스크린샷 기대값 미변경
- [ ] 제거한 코드의 잔여 참조 없음
