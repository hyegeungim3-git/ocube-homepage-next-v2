# 프로젝트 AI 작업 규칙

`agent-rules` 템플릿을 이 프로젝트에 맞춰 채운 문서다. 작업 전에 이 문서를 먼저 읽는다.

## 1. 문서 적용 우선순위

1. 이 `AGENTS.md`
2. `agent-rules/ai-development-handoff-guidelines.md` (공통 개발 지침)
3. `docs/architecture.md` (구조와 확장 원칙)
4. `README.md` (실행·검증 방법)

충돌하면 더 구체적인 문서를 따른다. 판단이 어려우면 임의로 정하지 말고 사용자에게 알린다.

## 2. 프로젝트 개요

- 프로젝트명: OCUBE Homepage — Next.js 이관본
- 목적: **현재 운영 중인 오큐브 홈페이지를 화면·콘텐츠 변경 없이** Next.js 구조로 옮긴다
- 현재 단계: 1단계(구조 이관) 완료 / 2단계(콘텐츠 데이터화) 진행 중 / 영문판 23쪽 운영 중
- 지원 환경: 데스크톱 + 모바일 웹, 정적 호스팅(GitHub Pages)
- 기준 언어: 한국어(정본) + 영어(`/en/*`, 한국어에서 생성), Asia/Seoul

### 이 프로젝트의 최우선 제약

**이 저장소가 정본이다.** 회사 홈페이지의 기준이 되는 소스이며, 콘텐츠 변경도 여기서 한다.
다만 화면은 이미 검수를 거친 상태이므로 **바꾼 것만 정확히 바꾼다.**

- 요청받지 않은 문구·섹션 순서·마크업·URL 은 건드리지 않는다.
- 바꿀 때는 회귀 게이트로 **무엇이 달라졌는지 확인한 뒤** 기준선을 갱신한다.
- 근거(요청 출처)를 커밋 메시지에 남긴다.

## 3. 필수 참고 자료

- 공개 주소(정본): https://hyegeungim3-git.github.io/ocube-homepage-next/
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
- 여러 페이지가 공유하는 값만 `src/data` 로 뺀다. 한 페이지 전용 문구를 성급히 공통화하지 않는다.
- 컴포넌트로 묶을 때 **DOM 이 달라지면 안 된다.** 래퍼 `<div>`·`<span>` 을 추가하지 않는다
  (필요하면 `<Fragment>` 를 쓴다).
- 공백·`<wbr>`·주석 위치까지 지금 DOM 그대로 유지한다 (게이트가 이 차이를 잡는다).

## 7. 기술 및 라이브러리

- React + TypeScript(strict). `any`·`@ts-ignore` 로 타입 검사를 우회하지 않는다.
- 런타임 의존성은 next·react·react-dom **뿐이다.** 승인 없이 라이브러리를 추가하지 않는다.
- 스타일은 `public/assets/site2.css` 를 그대로 링크한다. Next 의 CSS 파이프라인으로 옮기는 것은
  화면이 안정된 뒤 별도로 판단한다.

## 8. 상태 및 데이터

- 이 사이트는 정적이다. 클라이언트 상태 관리 라이브러리를 도입하지 않는다.
- 동작은 기존 `public/assets/site2.js`(바닐라)가 담당한다.
- **site2.js 는 DOM 을 직접 조작하므로 하이드레이션 이후에 실행해야 한다.**
  인라인 `<script>` 로 두면 React 가 재삽입해 두 번 실행된다. `next/script` 의
  `afterInteractive` 로 로드한다.

## 9. 테스트 및 검증

```text
개발 서버:      npm run dev
정적 검사:      npm run lint
타입 검사:      npm run typecheck
회귀 게이트:    npm run verify      ← 직전 승인본(baseline/)과 DOM 이 같은지
기준선 갱신:    npm run baseline    ← 의도한 변경을 반영한 뒤에만
production build: npm run build
```

### 완료 조건

- [ ] `npm run build` 통과
- [ ] `npm run typecheck` · `npm run lint` 통과
- [ ] **`npm run verify` 전항목 통과** — 불일치가 나오면 그것이 이번에 바꾼 것과
      정확히 일치하는지 확인하고, 맞으면 `npm run baseline` 으로 기준선을 갱신한다
- [ ] 데스크톱(1440)·모바일(375) 실제 렌더 확인 (가로 오버플로·깨진 이미지·h1 개수)
- [ ] 콘솔 오류 0
- [ ] 실행하지 못한 검증은 이유와 함께 보고

## 10. 금지 사항

- 요청받지 않은 문구·섹션 순서·마크업을 함께 바꾼다
- 게이트 불일치를 확인하지 않고 기준선부터 갱신한다
- 검증을 실행하지 않고 완료로 보고한다
- 게이트를 느슨하게 고쳐 통과시킨다
- 새 라이브러리를 승인 없이 추가한다

## 11. 현재 작업

- 2026-08-05 **이 저장소를 정본으로 전환.** 회귀 기준선을 `baseline/` 으로 옮겨,
  구버전 대조가 아니라 '직전 승인본 대조' 로 검사한다.
- 2026-08-05 **영문판 23쪽 완료.** 한국어가 정본이고 영어 화면·데이터는
  `scripts/make-en.mjs` 가 `i18n/*.json` 사전으로 **생성**한다 —
  `src/app/(en)`·`src/app/(en-home)`·`src/data/*.en.ts` 는 직접 고치지 말 것.
  번역은 사전에 채우고 생성기를 다시 돌린다. 상세는 `docs/architecture.md`.
- 완료: 23페이지 구조 이관, 공통 셸·푸터 컴포넌트화, Pages 자동 배포,
  언어 전환 버튼(KR/EN)·hreflang·사이트맵 46, 게이트 확장(48쪽·판번호),
  `site2.css`(29모듈)·`site2.js`(25모듈) 분리 — 산출물은 prebuild 가 생성
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

- 기준선은 **한국어 25쪽 + 영어 23쪽 = 48쪽 × 11항목 = 528건**을 대조한다.
- `scripts` 검사가 site2.js·site2.css 등 **관리 자산의 판번호**를 원문 패턴으로 잡는다
  (afterInteractive 스크립트는 `<script src>` 태그로 남지 않아 태그 스캔으론 안 잡힌다).
- 게이트 밖: 실제 렌더(좌표·대비·콘솔)는 실브라우저 검사로 병행한다.
