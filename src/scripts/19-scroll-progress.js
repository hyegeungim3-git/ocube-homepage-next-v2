/* --- 스크롤 프로그레스 바 (마크업 주입, rAF 스로틀) --- */
(function scrollProgress() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var bar = document.createElement('div');
  bar.className = 'scroll-progress'; bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  function paint() {
    ticking = false;
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0) + ')';
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
  paint();
})();

