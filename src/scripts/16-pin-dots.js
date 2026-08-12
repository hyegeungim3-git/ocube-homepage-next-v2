  /* --- 4) What We Do 핀드 : 진행 도트를 항목 리빌과 동기화 --- */
  (function pinDots() {
    var secs = [].slice.call(document.querySelectorAll('.pinsec'));
    if (!secs.length) return;
    secs.forEach(function (sec) {
      var items = [].slice.call(sec.querySelectorAll('.pin-item'));
      var dots = [].slice.call(sec.querySelectorAll('.pin-progress i'));
      if (!items.length || !dots.length) return;
      function sync() {
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var cur = -1;
        items.forEach(function (it, i) { if (it.getBoundingClientRect().top < vh * 0.75) cur = i; });
        dots.forEach(function (d, i) { d.classList.toggle('on', i <= cur); });
      }
      var last = 0;
      addEventListener('scroll', function () { var n = Date.now(); if (n - last < 110) return; last = n; sync(); }, { passive: true });
      addEventListener('resize', sync, { passive: true });
      sync(); setTimeout(sync, 600);
    });
  })();

