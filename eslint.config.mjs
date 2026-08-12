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
      // site2.css 를 원본 그대로(같은 파일·같은 순서) 링크해야 화면이 1픽셀도 안 바뀐다.
      // Next 의 CSS 파이프라인을 태우는 것은 스타일 분리 단계에서 다시 판단한다.
      "@next/next/no-css-tags": "off",
    },
  },
]);
