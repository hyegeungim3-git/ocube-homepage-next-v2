import { defineConfig } from "@playwright/test";

// 이 사이트는 output:"export" 정적 산출물이라 `next start` 를 쓸 수 없다.
// out/ 을 그대로 내려주는 tests/static-server.mjs 를 띄우고 그 위에서 검사한다.
// → 검사 대상은 항상 "방금 빌드한 결과물" 이다. npm run build 를 먼저 돌릴 것.
const PORT = 4321;
const BASE = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : [["list"]],
  timeout: 60_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      // 글꼴 안티에일리어싱 정도의 미세 차이는 통과, 레이아웃이 밀리면 실패
      maxDiffPixelRatio: 0.002,
      threshold: 0.2,
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  use: {
    baseURL: BASE,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    locale: "ko-KR",
    timezoneId: "Asia/Seoul",
  },
  // 스크린샷 기준선은 스펙 파일 옆 __screenshots__ 한 곳에 모은다 (= tests/visual/__screenshots__).
  // visual 프로젝트의 testDir 이 tests/visual 이므로 {testDir} 하나면 된다
  // ({testFileDir} 은 testDir 기준 상대경로라 여기서는 빈 문자열이 되어 저장소 밖으로 나간다).
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  projects: [
    {
      name: "e2e",
      testDir: "./tests/e2e",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "visual",
      testDir: "./tests/visual",
      use: {
        viewport: { width: 1440, height: 900 },
        // 자동 전환 히어로·마퀴·리빌을 이 한 줄로 잠재운다.
        // 사이트가 감축 모션을 이미 지원하므로(=CSS 가 최종 상태로 고정) 결정적인 그림이 나온다.
        reducedMotion: "reduce",
      },
    },
  ],
  webServer: {
    command: "node tests/static-server.mjs",
    url: `${BASE}/index.html`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
