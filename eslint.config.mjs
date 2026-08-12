import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // src/scripts 는 site2.js(레거시 바닐라)를 조각으로 관리하는 폴더다.
  // 조각 단위로는 문법이 완결되지 않고(외곽 IIFE 여닫이), 분리 전에도 린트 대상이
  // 아니었으므로 제외한다 — 이어붙인 산출물이 바이트 동일한지가 이 폴더의 검증이다.
  globalIgnores([".next/**", "out/**", "public/**", "src/scripts/**"]),
  {
    rules: {
      // 원본 마크업을 그대로 옮기는 저장소라 <img> 를 next/image 로 바꾸지 않는다.
      "@next/next/no-img-element": "off",
      // 홈 전용 home-refresh.css 는 아직 <link> 로 건다 (4단계 대상은 site2.css 였다).
      // 그것까지 SCSS 로 옮기면 이 예외도 없앤다.
      "@next/next/no-css-tags": "off",

      // ── 플레이북 10절의 목표 규칙 ──────────────────────────────────────────
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "prefer-const": "error",
      // != null 은 "null 도 undefined 도 아니다" 를 뜻하는 관용구다. !== null 로 바꾸면
      // undefined 가 통과해 동작이 달라진다 — 규칙을 코드에 맞추지 않고 의도를 규칙에 적는다.
      eqeqeq: ["error", "always", { null: "ignore" }],
    },
  },
  {
    // 고정 inline style 금지 — 지금은 기존 코드에 많이 남아 있어 warn 으로 시작한다.
    // 플레이북 10절이 정한 순서: ①신규 코드에 추가하지 않는다 ②warn ③기존 것을 옮긴다
    // ④경고가 0 이 되면 error 로 올린다. 지금은 ②단계다.
    files: ["src/**/*.tsx"],
    rules: {
      "react/forbid-dom-props": ["warn", { forbid: ["style"] }],
    },
  },
  {
    // 생성물은 사람이 고치는 파일이 아니다. 원본(한국어 화면·데이터)에서 규칙을 지키면 된다.
    // 여기까지 규칙을 걸면 생성기가 만든 결과를 손으로 고치게 되어 다음 생성에서 사라진다.
    files: ["src/app/(en)/**", "src/app/(en-home)/**", "src/data/*.en.ts"],
    rules: {
      "react/forbid-dom-props": "off",
    },
  },
]);
