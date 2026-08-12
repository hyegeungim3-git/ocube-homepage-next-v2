import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 내보내기. trailingSlash:false 라야 out/business-ax.html 처럼
  // 현재 사이트와 동일한 파일명·URL 이 그대로 생성된다.
  output: "export",
  trailingSlash: false,

  // Next 는 런타임 청크를 절대경로 /_next/... 로 내보낸다.
  // GitHub Pages 프로젝트 사이트처럼 하위 경로에 올리면 그대로 404 가 나서
  // 하이드레이션이 실패하고 site2.js 도 붙지 않는다.
  // 배포 워크플로가 Pages 의 base_path 를 넣어준다. (루트 배포면 빈 값)
  assetPrefix: process.env.PAGES_BASE_PATH || undefined,

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
