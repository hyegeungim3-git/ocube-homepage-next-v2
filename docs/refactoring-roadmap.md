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

### 2. 공통 페이지 구조 — **부분 완료 (2026-08-12)**

- [x] Header·MobilePanel·Footer를 `PageShell`로 통합
      (`src/components/layout/page-shell.tsx`. 홈은 푸터가 전용 마크업이라 제외 — 억지로 넣으면
      홈에서만 쓰는 선택 항목이 넷 늘어난다, 플레이북 7절)
- [x] 반복 metadata·hreflang을 typed 공통 데이터로 통합
      (`src/config/page-meta.ts` + `src/components/layout/page-meta.tsx`, 48쪽 전부 적용)
- [ ] 실제 화면을 `src/components/pages`로 이동 → **3단계에서 함께 한다**
- [ ] `app/**/page.tsx`는 얇은 URL 진입점으로 축소 → **3단계에서 함께 한다**

> 뒤 두 항목을 3단계로 미룬 이유: 지금 영어 화면은 `make-en.mjs` 가 한국어 화면을 읽어
> 생성한다. 화면만 `components/pages` 로 옮기고 언어 통합을 안 하면, 생성기가 그 컴포넌트의
> 영어 복사본을 또 만들어야 한다 — 3단계에서 바로 지울 코드를 한 번 더 만드는 셈이다.
> 플레이북 4절의 전환 순서도 "옮기기 → lang 받기 → 라우트 축소" 를 한 화면 단위로 묶어 놓았다.

### 3. 다국어 코드 통합

- [ ] ko/en URL은 현재대로 유지
- [ ] ko/en이 같은 Page 컴포넌트 사용
- [ ] 언어별 콘텐츠를 `Record<Lang, ContentType>`으로 관리
- [ ] 페이지별 전환 후 영어 TSX·`*.en.ts` 생성 로직 제거

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
      반환 타입 46곳 추가(한국어 원본에만 넣고 영어판은 재생성으로 따라온다)
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

### 6. `site2.js` React 이전

- [ ] 기능 하나마다 기존 동작 TC 작성
- [ ] 메뉴·필터·슬라이더 등을 React state/ref로 이전
- [ ] 전역 이벤트 cleanup과 접근성 상태 검사
- [ ] TC 통과 후 대응 `src/scripts` 파일 제거
- [ ] 전체 이전 후 layout의 Script와 `build-js` 제거

## 단계별 완료 조건

- [ ] 변경 전 기존 구현에서 TC 통과
- [ ] 변경 후 같은 TC를 수정하지 않고 통과
- [ ] typecheck·lint·format·build·verify 통과
- [ ] unit·E2E·visual TC 통과
- [ ] 순수 리팩터링에서 baseline·스크린샷 기대값 미변경
- [ ] 제거한 코드의 잔여 참조 없음
