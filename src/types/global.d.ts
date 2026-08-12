// 홈 타자기(public/assets/home-refresh.js)가 히어로 전환 주기를 읽어 간다.
// 그쪽이 React 로 넘어오면 이 선언도 함께 사라진다.
declare global {
  interface Window {
    __heroSlideMs?: number;
  }
}

export {};
