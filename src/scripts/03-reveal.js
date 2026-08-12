  /* --- 1) 스크롤 리빌 : IO 우선 + 스크롤 폴백 (IO 미발동 환경에서도 콘텐츠가 숨겨지지 않도록) --- */
  (function reveal() {
    var els = [].slice.call(document.querySelectorAll('.rv, .reveal'));
    if (!els.length) return;
    function show(el) { el.classList.add('in'); }
    function drop(el) { var k = els.indexOf(el); if (k > -1) els.splice(k, 1); }
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = els.length - 1; i >= 0; i--) {
        var r = els[i].getBoundingClientRect();
        if (r.top < vh * 0.92) { show(els[i]); els.splice(i, 1); }   // 지나간 요소도 반드시 표시
      }
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); drop(e.target); } });
      }, { threshold: .1, rootMargin: '0px 0px -6% 0px' });
      els.slice().forEach(function (el) { io.observe(el); });
    }
    var last = 0;
    function onScroll() { var n = Date.now(); if (n - last < 120) return; last = n; check(); }
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll, { passive: true });
    check(); setTimeout(check, 600); setTimeout(check, 1800);
  })();

