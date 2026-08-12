  /* --- 3-b) 모바일/reduced-motion : 단일 히어로 영상 제거 + 포스터 배경 대체(데이터·LCP) --- */
  (function heroVideoMobile() {
    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!(reduced || matchMedia('(max-width:900px)').matches)) return;
    document.querySelectorAll('.hero video').forEach(function (v) {
      if (v.closest('.hslide')) return;                  // 4배너 슬라이더는 자체 처리
      var hero = v.closest('.hero'), poster = v.getAttribute('poster');
      if (hero && poster) {
        hero.style.backgroundImage = 'url("' + poster + '")';
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';
      }
      v.remove();
    });
  })();

