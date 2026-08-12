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

### 2. 공통 페이지 구조

- [ ] Header·MobilePanel·Footer를 `PageShell`로 통합
- [ ] 실제 화면을 `src/components/pages`로 이동
- [ ] `app/**/page.tsx`는 얇은 URL 진입점으로 축소
- [ ] 반복 metadata·hreflang을 typed 공통 데이터로 통합

### 3. 다국어 코드 통합

- [ ] ko/en URL은 현재대로 유지
- [ ] ko/en이 같은 Page 컴포넌트 사용
- [ ] 언어별 콘텐츠를 `Record<Lang, ContentType>`으로 관리
- [ ] 페이지별 전환 후 영어 TSX·`*.en.ts` 생성 로직 제거

### 4. SCSS 전환과 `site2.css` 제거

- [ ] `sass` 설치 및 전역 `site.scss` 구성
- [ ] 기존 CSS를 순서 변경 없이 SCSS partial로 이동
- [ ] 고정 inline style을 SCSS class로 이전
- [ ] 미사용·중복 선택자를 영역별 제거
- [ ] root layout에서 SCSS를 직접 import
- [ ] 검증 후 `site2.css`, `order.json`, `build-css.mjs` 제거

### 5. Prettier·ESLint 통일

- [ ] Prettier 대상에 `scss` 포함
- [ ] props·export 경계 타입 규칙 적용
- [ ] `any`와 타입 검사 우회 금지
- [ ] 신규 inline style 금지
- [ ] inline style lint를 `warn`으로 시작해 최종 `error` 전환

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
