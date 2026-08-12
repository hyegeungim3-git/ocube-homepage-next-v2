# OCUBE 홈페이지 AI 유지보수 플레이북

> 상태: **목표 구조와 전환 규칙**. 아직 구현된 현재 상태로 간주하지 않는다.
> 현재 구현은 `AGENTS.md`, `docs/architecture.md`, `README.md`를 기준으로 확인한다.
> 충돌하면 승인된 로드맵 단계가 완료될 때까지 현재 구현 문서가 우선하며, 완료한 단계에서만
> 기존 문서를 같은 변경으로 갱신한다.

이 문서는 AI가 **현재 화면·콘텐츠·URL을 보존하면서 코드 구조를 정리하는 실행 규칙**이다.
작업 전 `AGENTS.md`와 `docs/architecture.md`를 먼저 읽는다.

## 1. 고정 원칙

- 이 저장소가 운영 홈페이지의 정본이다.
- 요청받지 않은 문구, DOM, URL, 섹션 순서, CSS 결과를 바꾸지 않는다.
- 한국어는 `/<slug>.html`, 영어는 `/en/<slug>.html`을 유지한다.
- 영어 URL이 나뉘어도 실제 페이지 화면 코드는 하나만 사용한다.
- 스타일은 전역 SCSS 하나로 통일한다. 일반 CSS, CSS Modules, Tailwind, CSS-in-JS를 섞지 않는다.
- 컴포넌트 props와 export 함수·데이터에 타입을 명시한다.
- 동일한 화면·동작·데이터·스타일을 복사해 관리하지 않는다.
- `site2.js` 기능은 하나씩 React로 옮기고 검증 후 제거한다. **(완료 — 9절 참조)**
- 승인된 개발 도구는 `sass`, Playwright, Vitest다. 그 외 라이브러리는 사용자 승인 없이 추가하지 않는다.
- 순수 리팩터링은 `baseline`을 갱신하지 않고 `verify`를 통과해야 한다.

## 2. 현재 문제와 해결 방향

| 문제 | 해결 |
|---|---|
| 페이지마다 Header·Footer 배치 반복 | `PageShell`로 통합 |
| 페이지마다 SEO 태그 반복 | typed metadata 데이터와 공통 출력 사용 |
| ko/en 전체 TSX 생성·복제 | URL 진입점만 분리하고 실제 Page는 공유 |
| 글로벌 CSS와 순서 의존 | 전역 SCSS를 역할별 폴더와 단일 진입점으로 관리 |
| React와 DOM 직접 조작 JS 공존 | 기능별 React 이전 후 해당 JS 제거 |
| 큰 페이지 파일 | 실제 페이지는 `components/pages`, 동일 반복만 `section`으로 분리 |
| 코드·데이터·스타일 중복 | 기존 구현 검색 후 단일 원본 재사용 |
| DOM 검사와 실제 렌더 검사 분리 | 정적 검사 후 1440px·375px 브라우저 확인 |

## 3. 목표 폴더 구조

```text
src/
  app/                         # URL 진입점과 Next.js layout
    (site)/<slug>/page.tsx     # 공통 Page에 lang="ko" 전달
    (en)/en/<slug>/page.tsx    # 공통 Page에 lang="en" 전달
    (home)/                    # 한국어 홈 전용 root layout
    (en-home)/                 # 영어 홈 전용 root layout

  components/
    layout/                    # PageShell, Header, MobilePanel, Footer
    pages/                     # 실제 페이지 화면: <slug>-page.tsx
    section/                   # DOM과 의미가 같은 반복 섹션

  config/                      # 사이트 URL, 언어, 내비게이션 규칙
  data/                        # 화면 콘텐츠와 이미지 경로

  styles/
    abstracts/                 # _tokens.scss, _mixins.scss, _breakpoints.scss
    base/                      # _reset.scss, _base.scss
    layout/                    # _header.scss, _footer.scss, _shell.scss
    components/                # _hero.scss, _cards.scss, _buttons.scss
    pages/                     # _home.scss, _about.scss 등
    utilities/                 # _accessibility.scss 등
    site.scss                  # 전체 스타일의 단일 진입점

  scripts/                     # 제거 전까지 유지하는 레거시 DOM 기능
    order.json

tests/
  e2e/                         # Playwright 사용자 동작 TC
  unit/                        # Vitest 순수 함수 TC
  visual/                      # Playwright 스크린샷 기준선

i18n/                         # 다국어 공통화 전 번역 사전
public/assets/                 # 자산 (site2.css·site2.js 는 이제 없다)
scripts/                       # 빌드·생성·검증 도구
baseline/                      # 직전 승인 HTML
```

### 배치 규칙

- `app/**/page.tsx`: URL을 위한 얇은 진입점만 둔다.
- `components/pages`: ko/en이 공유하는 실제 페이지 화면을 둔다.
- `components/layout`: 모든 페이지가 공유하는 골격을 둔다.
- `components/section`: 두 페이지 이상에서 의미와 DOM이 같은 섹션만 둔다.
- `data`: 화면에 표시되는 콘텐츠를 둔다.
- `config`: URL·언어·내비게이션처럼 동작을 결정하는 값을 둔다.
- 파일은 kebab-case, 컴포넌트는 PascalCase를 사용한다.
- import 출처를 숨기는 `index.ts` 배럴 파일은 만들지 않는다.
- 기존 파일은 요청과 무관하게 한꺼번에 이동하지 않는다.

## 4. 다국어 구조

목표는 **URL 2개, 얇은 라우트 2개, 실제 화면 컴포넌트 1개**다.

```text
/about.html      ─┐
                  ├─ AboutPage ─ aboutContent[lang]
/en/about.html   ─┘
```

```tsx
// 한국어 route
export default function Page(): JSX.Element {
  return <AboutPage lang="ko" />;
}

// 영어 route
export default function Page(): JSX.Element {
  return <AboutPage lang="en" />;
}
```

```ts
type AboutContent = {
  title: string;
};

export const aboutContent = {
  ko: { title: "회사소개" },
  en: { title: "About Us" },
} satisfies Record<Lang, AboutContent>;
```

### 전환 순서

1. 홈이 아닌 대표 페이지 하나를 선택한다.
2. 실제 화면을 `components/pages/<slug>-page.tsx`로 DOM 변경 없이 옮긴다.
3. 공통 화면이 `lang: Lang`을 받아 언어 데이터를 선택하게 한다.
4. ko/en 라우트는 `lang`만 전달하도록 줄인다.
5. `make-en.mjs`가 전환된 영어 라우트를 다시 덮어쓰지 않게 한다.
6. 두 URL의 자산 경로, `html lang`, canonical, hreflang을 확인한다.
7. `build`와 `verify` 통과 후 다음 페이지로 확대한다.
8. 전체 전환 후에만 영어 TSX·`*.en.ts` 생성 로직을 제거한다.

홈은 URL과 전용 root layout을 유지하되 실제 `HomePage` 화면은 공유한다.

## 5. 스타일 규칙

- 목표 스타일 방식은 **전역 SCSS 단일 체계**다. `.module.scss`는 사용하지 않는다.
- SCSS 도입 시 `sass`만 devDependency로 추가하고 다른 스타일 라이브러리는 넣지 않는다.
- 모든 스타일 원본은 `src/styles`에서 중앙 관리한다.
- `site.scss`는 `@use`로 partial을 불러오며 오래된 Sass `@import`는 사용하지 않는다.
- 결합 순서는 `abstracts → base → layout → components → pages → utilities`를 기본으로 한다.
- 전환 중에는 기존 `order.json`의 cascade 순서를 그대로 보존한다.
- 공통 색상·간격·폭·radius·z-index는 CSS custom property로 관리한다.
- Sass 변수와 mixin은 컴파일 시점 계산이나 실제 반복이 있을 때만 사용한다.
- 페이지 전용 선택자는 페이지 또는 섹션 접두사로 범위를 제한한다.
- 반응형 규칙은 가능한 한 대상 CSS와 같은 파일에 둔다.
- 선택자 중첩은 최대 3단계로 제한한다.
- 신규 JSX에 고정값 inline `style`을 작성하지 않는다.
- 색상·간격·정렬·크기·폰트는 반드시 SCSS class로 작성한다.
- 런타임에서만 알 수 있는 값은 CSS custom property 전달에 한해 inline style을 허용하고 이유를
  주석으로 남긴다. 정적인 배경 이미지도 가능한 한 class 또는 마크업 이미지로 옮긴다.

```css
/* 허용 */
.site-header {}
.site-header__logo {}
.about-history {}
.about-history__year {}

/* 신규 코드에서 금지 */
.box {}
.item {}
.title {}
.left {}
```

### SCSS 전환 원칙

1. `sass`를 devDependency로 추가한다.
2. 기존 CSS를 내용과 순서 변경 없이 SCSS partial로 옮긴다.
3. `site.scss`에서 기존 `order.json` 순서대로 불러온다.
4. 기존 화면이 완전히 같은지 확인한 뒤에만 nesting, mixin, token 정리를 진행한다.
5. CSS→SCSS 이동과 선택자 리팩터링을 같은 변경에서 하지 않는다.

## 6. TypeScript 규칙

- props가 있는 컴포넌트는 이름이 있는 `type` 또는 `interface`를 선언한다.
- 컴포넌트 반환 타입을 명시한다.
- export 함수의 매개변수와 반환 타입을 명시한다.
- 이벤트는 정확한 React 이벤트 타입을 사용한다.
- `children`은 `ReactNode` 또는 더 좁은 타입으로 선언한다.
- export 데이터는 별도 타입과 `satisfies`로 검증한다.
- 언어별 데이터는 `Record<Lang, ContentType>`을 기본으로 한다.
- 외부 입력은 `unknown`으로 받은 뒤 검증한다.
- 타입 import는 `import type`을 사용한다.
- `any`, `@ts-ignore`, `@ts-nocheck`, 무근거 타입 단언을 사용하지 않는다.

```tsx
type PageShellProps = {
  lang: Lang;
  slug: string;
  children: ReactNode;
};

export function PageShell(props: PageShellProps): JSX.Element {
  // 기존 DOM 순서를 유지한다.
}
```

## 7. 중복 방지 규칙

새 코드나 파일을 만들기 전에 검색한다.

```powershell
rg -n "이름|클래스|문구|데이터키" src
rg --files src/components src/data src/config src/styles
```

다음 중복은 공통화한다.

- ko/en 전체 페이지 TSX
- Header·MobilePanel·Footer 배치
- 동일 구조의 metadata와 hreflang
- 값만 다른 동일 카드·메뉴·단계 마크업
- 같은 역할의 CSS 규칙
- React와 레거시 JS의 동일 기능

다음은 최소 중복으로 허용한다.

- 언어별 URL을 위한 3~5줄 route
- Next.js가 요구하는 root layout 경계
- DOM·의미·접근성 동작이 실제로 다른 섹션

공통화 때문에 boolean props와 조건문이 늘거나 새 wrapper가 필요하면 합치지 않는다.
참조가 0개인 복사본만 제거하고 `rg`로 잔여 참조를 확인한다.

## 8. `site2.css` 제거 절차

`site2.css`는 기존 화면 보존을 위한 수동 결합 산출물이다. 최종 목표는 SCSS를 Next.js 빌드에서
직접 처리하고, 레이아웃의 외부 `site2.css` 링크와 `build-css.mjs` 의존성을 없애는 것이다.

```text
기존 CSS를 SCSS partial로 이동
→ site.scss 단일 진입점 구성
→ 사용하지 않는 선택자를 페이지 단위로 제거
→ Next.js root layout에서 site.scss import
→ 렌더·경로 검증
→ site2.css 링크와 수동 결합 단계 제거
```

점진 제거 규칙:

- 페이지 또는 컴포넌트 한 영역씩 처리한다.
- 변경 전에 대상 화면의 레이아웃·자산·스크린샷 TC를 작성하고 기존 CSS에서 통과시킨다.
- `rg`로 선택자 사용처를 확인한 뒤 참조가 없는 규칙만 제거한다.
- ko/en이 같은 컴포넌트를 쓰도록 바꾼 뒤 중복 언어 선택자를 제거한다.
- 인라인 고정 스타일은 의미 있는 class로 옮긴다.
- 매 단계에서 생성 CSS 크기와 실제 렌더를 비교한다.
- CSS `url(...)` 자산 경로가 Next 빌드 후에도 정상인지 확인한다.
- 1440px·375px, ko/en, 홈·일반 페이지를 모두 확인한다.
- `site2.css`와 SCSS를 장기간 이중 관리하지 않는다.

다음을 모두 만족한 뒤에만 수동 `site2.css`를 제거한다.

- 모든 관리 스타일의 원본이 `src/styles/**/*.scss`다.
- 네 root layout이 공통 `site.scss` 또는 필요한 홈 entry를 import한다.
- `public/assets/site2.css`를 참조하는 코드가 없다.
- `build-css.mjs`, `build:css`, CSS용 `prebuild`, `order.json`이 필요 없다.
- production build, verify, 데스크톱·모바일 렌더가 통과한다.

## 9. `site2.js` 제거 절차

> **완료 (2026-08-12).** 25개 모듈 전부 이전·제거했고 `site2.js` 는 없다(44,433 바이트 → 0).
> 아래 절차와 점검 명령은 **끝난 일의 기록**이다 — `src/scripts` 도 `order.json` 도 더 없다.
> 남은 손코딩 스크립트는 홈 전용 `public/assets/home-refresh.js` 하나뿐이며, 같은 절차로
> 옮길 수 있다. 실제로 옮기며 알게 된 것은 `refactoring-roadmap.md` 6단계에 적어 두었다.

`site2.js`는 임시 레거시 계층이며 최종 목표는 의존도 0이다.

```text
기존 동작 기록
→ 기능 하나를 React로 구현
→ 타입·빌드·DOM·브라우저 검사
→ 대응 src/scripts 파일과 order.json 항목 제거
→ site2.js 재생성
→ 다음 기능으로 이동
```

기능마다 다음을 지킨다.

- 대상 선택자, 페이지, 클릭·키보드·ARIA·class 변화를 먼저 기록한다.
- 변경 전에 해당 동작을 Playwright TC로 작성하고 기존 `site2.js`에서 통과시킨다.
- 명시적 props·state·event 타입을 사용한다.
- 컴포넌트 state와 ref를 우선하고 전역 DOM 탐색을 줄인다.
- 전역 이벤트는 `useEffect` cleanup으로 해제한다.
- React와 기존 JS를 동시에 실행하지 않는다.
- ko/en, 1440px/375px, 키보드, 콘솔, hydration을 검사한다.
- 모든 검증이 통과한 뒤에만 대응 JS를 제거한다.

```powershell
$legacyModules = Get-Content -Raw src/scripts/order.json | ConvertFrom-Json
"legacy-module-count=$($legacyModules.Count)"
"site2-js-bytes=$((Get-Item public/assets/site2.js).Length)"
```

레거시 기능이 모두 없어졌을 때만 다음을 함께 제거한다.

- 네 root layout의 `site2.js` `<Script>`
- `build:js`와 JS용 `prebuild` 단계
- `src/scripts` 결합 인프라
- `public/assets/site2.js`

## 10. Prettier·ESLint 공통 규칙

Prettier는 코드 형식, ESLint는 TypeScript·React 품질 규칙을 담당한다. SCSS 선택자와 중첩까지
강제하려면 별도 Stylelint가 필요하므로 승인 없이 추가하지 않는다.

### Prettier

- `.prettierrc.json`을 프로젝트 전체의 유일한 포맷 설정으로 사용한다.
- `semi: true`, `singleQuote: false`, `printWidth: 100`, `trailingComma: "all"`을 유지한다.
- format 스크립트 대상에 `scss`를 포함한다.
- AI가 임의의 파일만 다른 포맷으로 작성하지 않는다.
- 기능 수정과 저장소 전체 포맷 변경을 같은 작업에서 하지 않는다.

```json
"format": "prettier --write \"src/**/*.{ts,tsx,scss,json,md}\" \"*.{ts,mjs,json,md}\"",
"format:check": "prettier --check \"src/**/*.{ts,tsx,scss,json,md}\" \"*.{ts,mjs,json,md}\""
```

### ESLint 목표 규칙

- `@typescript-eslint/no-explicit-any`: `error`
- `@typescript-eslint/consistent-type-imports`: `error`
- `@typescript-eslint/explicit-module-boundary-types`: `error`
- `prefer-const`: `error`
- `eqeqeq`: `error`
- `react/forbid-dom-props`로 JSX `style` 사용 제한

현재 기존 inline style이 많으므로 다음 순서로 적용한다.

1. 신규 코드에는 inline style을 추가하지 않는다.
2. `react/forbid-dom-props`를 먼저 `warn`으로 설정한다.
3. 페이지 공통화 후 한국어 원본 기준으로 고정 inline style을 SCSS class로 옮긴다.
4. 런타임 값 예외는 최소화하고 disable 주석에 이유를 적는다.
5. 기존 경고가 0이 되면 규칙을 `error`로 올린다.

ESLint 설정을 강화할 때는 기존 오류를 대량 disable하지 않는다. 규칙별로 코드를 먼저 정리하고
`npm run lint`가 통과한 뒤 다음 규칙을 활성화한다.

## 11. 변경 전 TC 작성 원칙

순수 리팩터링은 사람이 반복 검수하는 대신 AI가 **변경 전에 기존 동작을 TC로 고정**한다.

```text
영향 범위 조사
→ 기존 코드에서 특성화 TC 작성
→ 기존 코드에서 TC 통과 확인
→ 코드 변경
→ 기대값을 바꾸지 않고 같은 TC 재실행
→ 전체 회귀 테스트
→ 통과 후 레거시 코드 제거
```

테스트 역할:

- Playwright E2E: 메뉴, 필터, 슬라이더, 언어 전환, 키보드, ARIA, URL
- Playwright visual: 1440×900·375×812, ko/en, 홈·대상 페이지
- Vitest: URL 생성, 데이터 선택, 순수 변환 함수
- `npm run verify`: DOM, 텍스트, metadata, 관리 자산 계약
- typecheck·lint·format: 정적 품질 계약

TC 작성 규칙:

- 테스트는 반드시 변경 전 코드에서 먼저 통과해야 한다.
- 구현 내부보다 사용자가 보는 입력과 결과를 검증한다.
- role, label, 기존 안정 선택자를 우선하고 테스트 때문에 DOM을 바꾸지 않는다.
- 콘솔 error, page error, hydration warning, 깨진 이미지, 가로 오버플로를 실패로 처리한다.
- visual TC는 애니메이션·폰트·이미지 로딩을 고정한 뒤 촬영한다.
- 리팩터링을 통과시키려고 기대값이나 스크린샷 기준선을 수정하지 않는다.
- 의도적인 화면·문구 변경일 때만 사용자 승인 후 기준선을 갱신한다.
- 작성한 TC는 작업 후 삭제하지 않고 회귀 테스트로 유지한다.

표준 테스트 명령 목표:

```powershell
npm run test:unit
npm run test:e2e
npm run test:visual
```

Playwright·Vitest 설정이 아직 없다면 첫 리팩터링 전에 테스트 환경만 별도 작업으로 구성하고,
기능 코드 변경과 섞지 않는다. 순수 리팩터링은 위 자동 검사가 모두 통과하면 사람의 반복 화면
검수를 요구하지 않는다. 문구·번역·디자인처럼 정답이 코드 밖에 있는 결정만 사용자에게 확인한다.

## 12. AI 작업 순서

### 시작

```powershell
Get-Content -Raw AGENTS.md
Get-Content -Raw docs/architecture.md
Get-Content -Raw docs/ai-maintenance-playbook.md
Get-Content -Raw README.md
```

수정 전에 다음을 보고한다.

- 변경 범위와 직접 수정할 원본
- 영향을 받는 생성물
- DOM 변화 여부
- 변경 전에 작성할 TC와 실행할 검증

### 수정

- 대상 TC가 기존 코드에서 통과한 뒤에만 구현을 수정한다.
- `apply_patch`로 필요한 파일만 수정한다.
- 생성된 영어 파일과 `public/assets/site2.css/js`를 직접 수정하지 않는다.
- 요청과 무관한 포맷·문구·마크업을 함께 바꾸지 않는다.
- 서로 다른 리팩터링을 한 변경에 섞지 않는다.

### 검증

```powershell
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run verify
npm run test:unit
npm run test:e2e
npm run test:visual
```

### 기준선

- 순수 리팩터링: 기준선 갱신 금지
- 승인된 화면 변경: 모든 차이가 요청과 일치할 때만 `npm run baseline`
- 예상하지 않은 차이: 기준선을 갱신하지 말고 원인을 수정

## 13. AI 실행 요청문

```text
AGENTS.md, docs/architecture.md, docs/ai-maintenance-playbook.md를 먼저 읽어라.
요청 범위 밖의 문구·DOM·URL·스타일 결과를 바꾸지 마라. 기존 구현을 먼저 검색하고 중복 코드를
만들지 마라. 모든 props와 export 경계에 타입을 명시하고 any를 사용하지 마라. ko/en URL은
유지하되 실제 화면 코드는 하나만 사용하라. 전역 SCSS 단일 체계를 사용하고 고정 inline style을
추가하지 마라. (site2.css·site2.js 는 그 방식으로 이전을 마쳤다.) 기능·영역 하나씩 이전하고 검증 후 대응 레거시 코드를
제거하라. 변경 전에 기존 구현에서 통과하는 Playwright/Vitest 특성화 TC를 작성하고, 변경 후
기대값을 수정하지 않은 같은 TC와 전체 회귀 검사를 통과시켜라. 테스트 통과 후에만 기존 코드를
제거하고, 순수 리팩터링에서는 baseline과 visual 기준선을 갱신하지 마라.
```

## 14. 완료 조건

- 요청 범위 외 변경이 없다.
- 원본과 생성물 경계를 지켰다.
- props와 export 경계에 명시적 타입이 있다.
- 새 중복 코드·데이터·스타일을 만들지 않았다.
- 신규 고정 inline style을 추가하지 않았다.
- SCSS와 기존 CSS를 같은 영역에서 이중 관리하지 않았다.
- React로 이전한 기능의 대응 JS가 제거됐다.
- 변경 전 기존 구현에서 특성화 TC가 통과했다.
- 변경 후 기대값을 수정하지 않고 같은 TC가 통과했다.
- typecheck, lint, format:check, build, verify, unit, E2E, visual TC가 통과했다.
- 콘솔 오류와 hydration warning이 없다.
- 순수 리팩터링에서 baseline과 visual 기준선을 갱신하지 않았다.
- 실행하지 못한 검증과 이유를 보고했다.

## 15. 중단 조건

다음은 임의로 결정하지 않고 사용자에게 알린다.

- 새 라이브러리·스타일 방식·배포 방식이 필요한 경우
- URL, 문구, 섹션 순서, 공개 회사 정보가 바뀌는 경우
- 공통화에 새 wrapper나 복잡한 조건 분기가 필요한 경우
- 회귀 차이가 요청 범위를 넘어가는 경우
- 다수 영어 페이지가 예상 밖으로 달라지는 경우
- 문의 폼, 404, 대표이사 영문 표기 등 결정 대기 항목을 건드리는 경우
