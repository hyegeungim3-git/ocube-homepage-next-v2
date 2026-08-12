  /* --- 3-c) KPI 카운트업 : [data-count] — 미발동 환경에서도 최종값 보장 --- */
  (function counters() {
    var els = [].slice.call(document.querySelectorAll('[data-count]'));
    if (!els.length) return;
    function run(el) {
      if (el.__done) return; el.__done = true;
      var to = parseFloat(el.getAttribute('data-count')) || 0;
      var t0 = null, DUR = 900;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / DUR, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      setTimeout(function () { el.textContent = to.toLocaleString(); }, DUR + 250); // rAF 정지 대비 최종값 보장
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
      }, { threshold: .4 });
      els.forEach(function (el) { io.observe(el); });
    }
    setTimeout(function () { els.forEach(run); }, 2500);   // IO 미발동 폴백
  })();

