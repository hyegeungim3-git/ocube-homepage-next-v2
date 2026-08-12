  /* --- 솔루션 상단: 이동한 문구가 밝은 영역에 올라오면 색 전환 --- */
  (function solCopyTravel() {
    var copy = document.querySelector(".sol-copy"), body = document.querySelector(".sol-body");
    if (!copy || !body) return;
    var ticking = false;
    var lessMotion = matchMedia("(prefers-reduced-motion: reduce)");
    function upd() {
      ticking = false;
      var c = copy.getBoundingClientRect(), b = body.getBoundingClientRect();
      var start = c.height, end = c.height / 2;          // 본문 상단이 화면 아래 → 문구 중앙까지
      var p = start === end ? 1 : (start - b.top) / (start - end);
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      copy.style.setProperty("--p", lessMotion.matches ? 1 : p.toFixed(3));
      copy.classList.toggle("on-light", p >= 1);
    }
    addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(upd); }
    }, { passive: true });
    addEventListener("resize", upd);
    upd();
  })();

/* 회사소개: Hero 포인터 시차 + 스크롤 연동 비전 장면 */
(function aboutExperience() {
  var hero = document.querySelector('.about-hero');
  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (hero && !reduceMotion.matches) {
    var orbit = hero.querySelector('.about-hero-orbit');
    if (orbit) {
      var heroTicking = false;
      var heroPoint = { x: 0, y: 0 };
      function paintHero() {
        heroTicking = false;
        orbit.style.setProperty('--about-x', heroPoint.x.toFixed(1) + 'px');
        orbit.style.setProperty('--about-y', heroPoint.y.toFixed(1) + 'px');
      }
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        heroPoint.x = ((e.clientX - r.left) / r.width - .5) * 28;
        heroPoint.y = ((e.clientY - r.top) / r.height - .5) * 20;
        if (!heroTicking) {
          heroTicking = true;
          requestAnimationFrame(paintHero);
        }
      }, { passive: true });
      hero.addEventListener('pointerleave', function () {
        heroPoint.x = 0;
        heroPoint.y = 0;
        paintHero();
      }, { passive: true });
    }
  }

  var vision = document.querySelector('.about-vision');
  if (!vision || reduceMotion.matches) return;
  var panels = [].slice.call(vision.querySelectorAll('[data-vision-panel]'));
  var buttons = [].slice.call(vision.querySelectorAll('[data-vision-jump]'));
  var visionHead = vision.querySelector('.about-vision-head');
  var visionHeadLabel = vision.querySelector('[data-vision-head-label]');
  var visionHeadTitle = vision.querySelector('[data-vision-head-title]');
  if (!panels.length) return;
  var active = -1;
  var visionTicking = false;

  function setVision(index) {
    index = Math.max(0, Math.min(panels.length - 1, index));
    if (index === active) return;
    active = index;
    var currentPanel = panels[index];
    if (visionHeadLabel) visionHeadLabel.textContent = currentPanel.getAttribute('data-vision-label') || '';
    if (visionHeadTitle) visionHeadTitle.textContent = currentPanel.getAttribute('data-vision-title') || '';
    if (visionHead) {
      visionHead.classList.remove('is-changing');
      void visionHead.offsetWidth;
      visionHead.classList.add('is-changing');
    }
    panels.forEach(function (panel, i) {
      panel.classList.toggle('is-active', i === index);
      panel.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });
    buttons.forEach(function (button, i) {
      button.classList.toggle('is-active', i === index);
      button.setAttribute('aria-pressed', i === index ? 'true' : 'false');
    });
  }

  function updateVision() {
    visionTicking = false;
    var rect = vision.getBoundingClientRect();
    var travel = Math.max(1, vision.offsetHeight - innerHeight);
    var progress = Math.max(0, Math.min(1, -rect.top / travel));
    setVision(Math.min(panels.length - 1, Math.floor(progress * panels.length)));
  }

  buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      var top = scrollY + vision.getBoundingClientRect().top;
      var travel = Math.max(1, vision.offsetHeight - innerHeight);
      var target = index === panels.length - 1 ? .92 : index / panels.length;
      scrollTo({ top: top + travel * target, behavior: 'smooth' });
    });
  });
  addEventListener('scroll', function () {
    if (!visionTicking) {
      visionTicking = true;
      requestAnimationFrame(updateVision);
    }
  }, { passive: true });
  addEventListener('resize', updateVision, { passive: true });
  updateVision();
})();

