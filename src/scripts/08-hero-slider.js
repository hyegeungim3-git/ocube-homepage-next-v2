  /* --- 3) 히어로 3개 비즈니스 배너 슬라이더 --- */
  (function heroSlider() {
    var hero = document.querySelector('.hero-slider, .hero');
    if (!hero) return;
    var slides = [].slice.call(hero.querySelectorAll('.hslide'));
    if (slides.length < 2) return;                       // 단일 히어로 페이지에서는 비활성
    var bars = [].slice.call(hero.querySelectorAll('.hbar'));
    var vids = [].slice.call(hero.querySelectorAll('.hslide video'));
    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mob = reduced;
    var idx = 0, timer = null, DUR = 6500;
    window.__heroSlideMs = DUR;                          // 홈 타자기(home-refresh.js)가 타이핑 속도 계산에 참조
    slides.forEach(function (s, i) {
      var slideId = s.id || 'hero-panel-' + (i + 1);
      var tabId = bars[i] && (bars[i].id || 'hero-tab-' + (i + 1));
      s.id = slideId;
      s.setAttribute('role', 'tabpanel');
      if (tabId) s.setAttribute('aria-labelledby', tabId);
      if (bars[i]) {
        bars[i].id = tabId;
        bars[i].setAttribute('role', 'tab');
        bars[i].setAttribute('aria-controls', slideId);
      }
    });
    function setSlideFocusable(slide, active) {
      slide.querySelectorAll('a[href],button,input,select,textarea,[tabindex]').forEach(function (el) {
        if (typeof el.__heroTabIndex === 'undefined') el.__heroTabIndex = el.getAttribute('tabindex');
        if (active) {
          if (el.__heroTabIndex === null) el.removeAttribute('tabindex');
          else el.setAttribute('tabindex', el.__heroTabIndex);
        } else el.setAttribute('tabindex', '-1');
      });
    }
    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        var active = i === idx;
        s.classList.toggle('on', active);
        s.setAttribute('aria-hidden', active ? 'false' : 'true');
        s.toggleAttribute('inert', !active);
        setSlideFocusable(s, active);
      });
      bars.forEach(function (b, i) {
        var active = i === idx;
        b.classList.toggle('on', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
        b.tabIndex = active ? 0 : -1;
      });
      if (!mob) vids.forEach(function (v, i) {
        if (!v) return;
        if (i === idx) { var pr = v.play && v.play(); if (pr && pr.catch) pr.catch(function () { }); }
        else { try { v.pause(); } catch (e) { } }
      });
    }
    var manualPause = false;                              // 사용자가 명시적으로 일시정지한 상태
    /* hero-hold : 타이머가 멈춘 동안 진행 바 애니메이션도 함께 멈춰 상태를 일치시킨다.
       (이게 없으면 바는 끝까지 차 있는데 슬라이드는 안 넘어가는 것처럼 보인다) */
    function stop() { if (timer) { clearInterval(timer); timer = null; } hero.classList.add('hero-hold'); }
    function start() { if (mob || manualPause) return; stop(); hero.classList.remove('hero-hold'); timer = setInterval(function () { show(idx + 1); }, DUR); }
    bars.forEach(function (b, i) {
      b.addEventListener('click', function () { show(i); start(); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Home' && e.key !== 'End') return;
        e.preventDefault();
        var next = e.key === 'Home' ? 0 : e.key === 'End' ? bars.length - 1 : i + (e.key === 'ArrowLeft' ? -1 : 1);
        next = (next + bars.length) % bars.length;
        show(next); bars[next].focus(); start();
      });
    });

    /* 이전 · 일시정지/재생 · 다음 */
    var ctrl = hero.querySelector('.hctrl');
    if (ctrl) ctrl.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.hnav') : null;
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'prev') { show(idx - 1); start(); }
      else if (act === 'next') { show(idx + 1); start(); }
      else if (act === 'toggle') {
        manualPause = !manualPause;
        hero.classList.toggle('paused', manualPause);
        b.setAttribute('aria-pressed', manualPause ? 'true' : 'false');
        b.setAttribute('aria-label', manualPause ? T.play : T.pause);
        if (manualPause) stop(); else start();
      }
    });
    /* ⚠️ 히어로는 100vh 라 hero 전체에 hover 정지를 걸면 포인터가 사실상 항상 안에 있어
       자동 전환이 영구 정지된다(실측 확인). 정지는 컨트롤 바 위에서만 건다.
       ⚠️ .hero-ctrl 은 HOME 에서 inset:0 + pointer-events:none 인 오버레이라 hover 를 못 받는다 —
       실제로 이벤트를 받는 자식(.hctrl / .hpag / .hbar-nav)에 건다. */
    hero.querySelectorAll('.hctrl, .hpag, .hbar-nav').forEach(function (el) {
      el.addEventListener('mouseenter', stop);
      el.addEventListener('mouseleave', start);
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    show(0); start();
  })();

