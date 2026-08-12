import { defineConfig } from "vitest/config";
import path from "node:path";

// 단위 테스트는 순수 함수·데이터 계약만 본다 (플레이북 11절).
// 브라우저가 필요한 것은 전부 Playwright 쪽이라 여기서는 node 환경으로 충분하다.
export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    // Playwright 스펙을 vitest 가 주워가지 않도록 명시적으로 막는다
    exclude: ["tests/e2e/**", "tests/visual/**", "node_modules/**"],
    reporters: ["default"],
  },
});
