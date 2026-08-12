/* --- 시연 영상 IO 재생: video.demovid — 화면에 보일 때만 재생, 벗어나면 정지 --- */
(function demoVids() {
  var vids = [].slice.call(document.querySelectorAll('video.demovid'));
  if (!vids.length) return;
  var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (rm) return; /* 모션 최소화: 포스터만 표시 */
  if (!('IntersectionObserver' in window)) { vids.forEach(function (v) { v.play && v.play().catch(function(){}); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting && e.intersectionRatio >= .35) { v.play && v.play().catch(function(){}); }
      else { v.pause && v.pause(); }
    });
  }, { threshold: [0, .35] });
  vids.forEach(function (v) { io.observe(v); });
})();

