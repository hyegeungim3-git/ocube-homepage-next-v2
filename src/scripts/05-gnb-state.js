  /* --- 1-c) GNB 상태 : 히어로 위 투명 → 스크롤 시 솔리드 (i-bricks 패턴) --- */
  (function gnbState() {
    var g = document.querySelector('.gnb');
    if (!g) return;
    if (!document.querySelector('.hero')) {              // 히어로 없는 페이지(privacy 등)
      g.classList.add('scrolled');
      document.body.classList.add('no-hero');
      return;
    }
    function upd() { g.classList.toggle('scrolled', (window.scrollY || document.documentElement.scrollTop || 0) > 30); }
    addEventListener('scroll', upd, { passive: true });
    addEventListener('resize', upd, { passive: true });
    upd(); setTimeout(upd, 300);
  })();

