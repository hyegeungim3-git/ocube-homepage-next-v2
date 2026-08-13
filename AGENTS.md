# 프로젝트 AI 작업 규칙

작업 전에 이 문서를 먼저 읽는다.

> **이 저장소는 무엇인가** — 오큐브 홈페이지의 **정본**이다(2026-08-13 확정).
> `non-developer-handoff-notes` 인수인계 패키지의 로드맵대로 리팩터링한 판이며,
> 시작점은 먼저 만든 판 `ocube-next` 의 커밋 `acb8393` 스냅샷이었다.
> 그 판은 지금 보관(읽기 전용) 상태이고, 두 판의 화면·기능이 같음은 확인해 두었다.

## 1. 문서 적용 우선순위

**현재 구현을 설명하는 문서** (충돌하면 이쪽이 우선)

1. 이 `AGENTS.md`
2. `docs/architecture.md` (구조와 확장 원칙)
3. `README.md` (실행·검증 방법)

**앞으로 적용할 목표와 계획** (아직 구현된 상태로 간주하지 않는다)

4. `docs/refactoring-roadmap.md` (단계별 할 일 — 체크되지 않은 항목은 미구현)
5. `docs/ai-maintenance-playbook.md` (전환 규칙)
6. `docs/non-developer-handoff-notes.txt` (인수인계 시 유의사항 원문)

한 단계가 통과하면 **같은 변경에서** 위쪽 현재 문서(1~3)도 함께 갱신한다.
충돌하면 승인된 단계가 끝나기 전까지 현재 문서가 우선한다.
판단이 어려우면 임의로 정하지 말고 사용자에게 알린다.

## 2. 프로젝트 개요

- 프로젝트명: OCUBE Homepage — Next.js 이관본
- 목적: **현재 운영 중인 오큐브 홈페이지를 화면·콘텐츠 변경 없이** Next.js 구조로 옮긴다
- 현재 단계: 1단계(구조 이관) 완료 / 2단계(콘텐츠 데이터화) 진행 중 / 영문판 23쪽 운영 중
- 지원 환경: 데스크톱 + 모바일 웹, 정적 호스팅(GitHub Pages)
- 기준 언어: 한국어(정본) + 영어(`/en/*`, 한국어에서 생성), Asia/Seoul

### 이 프로젝트의 최우선 제약

**이 저장소가 정본이다(2026-08-13 사용자 확정).** 회사 홈페이지의 기준 소스이며 콘텐츠 변경도
여기서 한다. `ocube-next`(먼저 만든 판)는 GitHub 에서 보관 처리(읽기 전용)했다 — 참고용으로만 본다.
두 판의 화면·기능이 같음은 확인돼 있다(로드맵 '원본과의 대조 검수'·'마지막 적대 검증').

- 공개 주소(정본): https://hyegeungim3-git.github.io/ocube-homepage-next-v2/
- 보관본: https://hyegeungim3-git.github.io/ocube-homepage-next/ (읽기 전용, 갱신하지 않는다)
- 구버전(참고용, 수정하지 않음): `codex` 저장소 `public/` — https://hyegeungim3-git.github.io/ocube-homepage-final/
- 구조 문서: `docs/architecture.md`
- 회귀 기준선: `baseline/` · 검사 도구: `scripts/verify-fidelity.py`
- 배포: `.github/workflows/deploy.yml`

## 4. 작업 시작 전 절차

1. `docs/architecture.md` 로 현재 구조를 확인한다.
2. 비슷한 처리가 이미 있는지 `src/components/layout`·`src/data` 를 먼저 본다.
3. 변경 범위와 검증 방법을 정리한다.
4. 새 기술 결정이 필요하면 구현 전에 알린다.

## 5. 프로젝트 구조

`docs/architecture.md` 참조.

## 6. 구현 원칙

- 마크업을 통째로 다시 쓰지 않는다. 기존 컴포넌트와 `src/data` 를 재사용한다.
- 화면에 보이는 한국어는 `<T l={lang}>`, 속성값은 `t(lang, …)`, 자산 경로는
  `assetPath(path, lang)` 로 감싼다 — 빠뜨리면 영어 화면에서만 한국어가 남는다.
- 여러 페이지가 공유하는 값만 `src/data` 로 뺀다. 한 페이지 전용 문구를 성급히 공통화하지 않는다.
- 컴포넌트로 묶을 때 **DOM 이 달라지면 안 된다.** 래퍼 `<div>`·`<span>` 을 추가하지 않는다
  (필요하면 `<Fragment>` 를 쓴다).
- 공백·`<wbr>`·주석 위치까지 지금 DOM 그대로 유지한다 (게이트가 이 차이를 잡는다).

## 7. 기술 및 라이브러리

- React + TypeScript(strict). `any`·`@ts-ignore` 로 타입 검사를 우회하지 않는다.
- 런타임 의존성은 next·react·react-dom **뿐이다.** 승인 없이 라이브러리를 추가하지 않는다.
- 스타일은 **전역 SCSS 하나**다. `src/styles/site.scss` 를 루트 레이아웃이 import 하고
  Next 가 컴파일한다. 일반 CSS·CSS Modules·Tailwind·CSS-in-JS 를 섞지 않는다.

## 8. 상태 및 데이터

- 이 사이트는 정적이다. 클라이언트 상태 관리 라이브러리를 도입하지 않는다.
- 동작은 **`src/components/behavior/` 의 클라이언트 컴포넌트**가 담당한다.
  네 루트 레이아웃은 `<ClientBehaviors lang=… />` 하나만 부른다 — 기능을 옮길 때
  레이아웃 네 곳을 다시 손대지 않는다.
- 손코딩 스크립트는 홈 전용 `public/assets/home-refresh.js` 하나만 남았다(6단계 범위 밖).
  **DOM 을 직접 조작하므로 하이드레이션 이후에 실행해야 한다** — 인라인 `<script>` 로 두면
  React 가 재삽입해 두 번 실행된다. `next/script` 의 `afterInteractive` 로 로드한다.
- 여러 컴포넌트가 나눠 갖는 상태(모바일 메뉴 열림, 헤더 스크롤)는 `behavior/` 안의 작은
  바깥 저장소에 둔다. `PageShell` 로 올리면 화면 본문까지 클라이언트 번들로 들어간다.
- 새 동작을 만들 때: 브라우저 상태(스크롤·미디어 쿼리)는 `useEffect`+`useState` 가 아니라
  `useSyncExternalStore` 로 읽는다. 효과 안에서 setState 하면 린트가 막는다.

## 9. 테스트 및 검증

```text
개발 서버:      npm run dev
정적 검사:      npm run lint
타입 검사:      npm run typecheck
포맷 검사:      npm run format:check
회귀 게이트:    npm run verify      ← 직전 승인본(baseline/)과 DOM 이 같은지
단위 검사:      npm run test:unit
동작 검사:      npm run test:e2e    ← out/ 을 보므로 build 를 먼저
화면 검사:      npm run test:visual
기준선 갱신:    npm run baseline / npm run test:visual:approve  ← 승인된 변경에만
production build: npm run build
```

### 변경 전에 먼저 할 일

**코드를 고치기 전에 그 동작을 검사로 고정한다.** 새로 쓴 검사가 **지금 코드에서 먼저
통과**해야 하고, 고친 뒤에는 **기대값을 바꾸지 않은 같은 검사**가 다시 통과해야 한다.
통과시키려고 기대값이나 기준선을 먼저 바꾸지 않는다. (플레이북 11절)

### 완료 조건

- [ ] `npm run build` 통과
- [ ] `npm run typecheck` · `npm run lint` · `npm run format:check` 통과
- [ ] **`npm run verify` 전항목 통과** — 불일치가 나오면 그것이 이번에 바꾼 것과
      정확히 일치하는지 확인하고, 맞으면 `npm run baseline` 으로 기준선을 갱신한다
- [ ] `npm run test:unit` · `npm run test:e2e` · `npm run test:visual` 통과
- [ ] 순수 리팩터링이면 **기준선(baseline·스크린샷)을 갱신하지 않고** 통과
- [ ] 실행하지 못한 검증은 이유와 함께 보고

## 10. 금지 사항

- 요청받지 않은 문구·섹션 순서·마크업을 함께 바꾼다
- 게이트 불일치를 확인하지 않고 기준선부터 갱신한다
- 검증을 실행하지 않고 완료로 보고한다
- 게이트를 느슨하게 고쳐 통과시킨다
- 새 라이브러리를 승인 없이 추가한다

## 11. 현재 작업

### 이 판(v2)의 진행 상황 — `docs/refactoring-roadmap.md` 기준

- [x] **Stage 0** `ocube-next@acb8393` 스냅샷 복제 · 인수인계 문서 설치 · 시작점 검증(576/576)
- [x] **Stage 0.5** 저장소 전체 포맷 정규화 (`format:check` 가 시작부터 빨간불이었다)
- [x] **Stage 0.6** 줄바꿈 LF 고정 (clone 직후 `format:check` 가 깨지던 문제)
- [x] **로드맵 1단계** 테스트 환경 — Vitest 76건 · Playwright e2e 186건 · visual 32장
- [x] 영어 생성물 바로잡기 — 구조화 데이터가 한국어로 나가던 것 · 생성기가 포맷을 깨던 것
- [x] **로드맵 2단계** `PageShell`·`PageMeta` (46개 화면 파일 −1,185줄) +
      화면을 `components/pages` 로 이동·라우트 축소(3단계와 함께)
- [x] **로드맵 3단계** 다국어 코드 통합 — 화면 코드 한 벌 · 생성기 제거 · `src` −7,575줄
- [x] **로드맵 4단계** SCSS 전환 · `site2.css` 제거 — 스크린샷 32장 갱신 없이 통과
- [x] **로드맵 5단계** Prettier·ESLint 통일 — lint 0 error / inline style 86건은 warn 단계
- [x] **로드맵 6단계** `site2.js` React 이전 — **25/25 모듈** (44,433 바이트 → 0, 파일 제거)

한 단계씩 진행하고, 통과한 뒤에 다음 단계로 넘어간다. 여러 단계를 한 변경에 섞지 않는다.

### 다음 사람에게 — 로드맵 1~6단계는 끝났다

**여섯 단계가 모두 통과했다.** 무엇을 왜 그렇게 했는지는 `docs/refactoring-roadmap.md` 에
단계별로 적혀 있고, 그 안에는 **틀렸던 판단과 그걸 잡아낸 방법**도 함께 있다.

이 저장소에서 이어서 할 만한 것:

1. **`home-refresh.js` 이전** — 남은 유일한 손코딩 스크립트(홈 타자기 등). 6단계와 같은
   절차를 그대로 반복하면 된다. 6단계 절차는 25번 검증됐다.
2. **결정 대기 3건 처리** — 문의 폼 실제 전송 방식 · 404 전용 화면 · 대표이사 영문 표기.
3. **인라인 style 86건** — 지금은 warn 이다. 규칙을 error 로 올리려면 먼저 걷어내야 한다.
4. **데이터화 잔여** — README "빼지 않은 것" 기준을 다시 볼 만해지면.

**무엇을 하든 순서는 같다**: 기대값을 고치지 않고 통과하는 TC 를 먼저 확인하고 → 고치고 →
`verify` 불일치가 *이번에 바꾼 것과 정확히 일치*하는지 읽고 → 그제야 기준선을 갱신한다.
기준선부터 갱신하면 놓친 회귀가 묻힌다.

### 이관기부터 이어지는 기록

- 2026-08-05 **이 저장소를 정본으로 전환.** 회귀 기준선을 `baseline/` 으로 옮겨,
  구버전 대조가 아니라 '직전 승인본 대조' 로 검사한다.
- 2026-08-05 **영문판 23쪽 완료.** (2026-08-12 3단계에서 생성 방식을 걷어냈다 —
  이제 화면 코드는 두 언어가 하나를 함께 쓰고, 번역은 `i18n/*.json` 에서 그리는 시점에
  조회한다. 상세는 `docs/architecture.md`.)
- 완료: 23페이지 구조 이관, 공통 셸·푸터 컴포넌트화, Pages 자동 배포,
  언어 전환 버튼(KR/EN)·hreflang·사이트맵 46, 게이트 확장(48쪽·판번호),
  `site2.css` → SCSS 전환, `site2.js` 25모듈 → React 이전 후 제거
- 진행 중: 콘텐츠 데이터화(~29%) — 히어로·카드·단계·사례·구축사례 카드·
  솔루션 이동 문구·문의 유형까지 추출. 균일 반복 구조만 뺀다
  (교차 행·혼합 카드류는 README "빼지 않은 것" 기준 유지)
- 결정 대기(3): 문의 폼 실제 전송 방식(현재 메일 앱 열기) · 404 전용 화면 ·
  대표이사 영문 표기(Won Chang-yeon 가안)
- 2026-08-06 확인 완료 — **고객사 로고 11개·OEM 실명(business-embedded·references) 게시**와
  **Tuxera 도식 게시**는 사용자 확인으로 그대로 유지한다. 검수 A-1 은 "사용권 확인 전 금지"
  였고 그 확인이 끝난 것이므로, 이 둘을 이유로 되돌리거나 집계형으로 바꾸지 않는다.
- 구버전(`ocube-homepage-final`·Cloudflare `a/`)은 더 이상 갱신하지 않는다.
  두 곳을 함께 고쳐야 할 일이 생기면 그때 별도로 결정한다.

### 게이트가 보는 것 (2026-08-05 확장)

- 기준선은 **한국어 25쪽 + 영어 23쪽 = 48쪽 × 12항목 = 576건**을 대조한다.
- `scripts` 검사가 site2.js·site2.css 등 **관리 자산의 판번호**를 원문 패턴으로 잡는다
  (afterInteractive 스크립트는 `<script src>` 태그로 남지 않아 태그 스캔으론 안 잡힌다).
- 게이트 밖: 실제 렌더(좌표·대비·콘솔)는 실브라우저 검사로 병행한다.
