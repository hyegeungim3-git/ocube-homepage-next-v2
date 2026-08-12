/* ===== OCUBE v2 공통 스크립트 (자연 스크롤 테마) ===== */
(function () {
  'use strict';

  /* --- 화면 언어에 맞춘 문구 ---
     이 파일이 만들어 넣는 글자(토스트·안내·읽어주는 이름)는 화면과 같은 언어여야 한다.
     한국어 화면과 영어 화면이 같은 파일을 쓰므로 <html lang> 을 보고 고른다. */
  var EN = (document.documentElement.getAttribute('lang') || 'ko').slice(0, 2) === 'en';
  var T = EN ? {
    overview: function (label) { return label + ' overview'; },
    openMenu: 'Open menu', closeMenu: 'Close menu',
    play: 'Resume auto-rotation', pause: 'Pause auto-rotation',
    zoomDialog: 'Enlarged product screen', zoomClose: 'Close enlarged view',
    shot: 'product screen', zoomOpen: function (n) { return n + ' — view larger'; },
    mailSubject: function (type, name) { return '[OCUBE enquiry] ' + type + ' - ' + name; },
    mailType: 'Type: ', mailName: 'Name / company: ', mailFrom: 'Reply to: '
  } : {
    overview: function (label) { return label + ' 전체 보기'; },
    openMenu: '메뉴 열기', closeMenu: '메뉴 닫기',
    play: '자동 전환 재생', pause: '자동 전환 일시정지',
    zoomDialog: '제품 화면 확대 보기', zoomClose: '확대 화면 닫기',
    shot: '제품 화면', zoomOpen: function (n) { return n + ' 확대 보기'; },
    mailSubject: function (type, name) { return '[오큐브 홈페이지 문의] ' + type + ' - ' + name; },
    mailType: '문의 유형: ', mailName: '성함 / 회사: ', mailFrom: '회신 이메일: '
  };

  /* --- 2) 모바일 메뉴 --- */
  (function mobileNav() {
    var t = document.querySelector('.m-toggle'), p = document.querySelector('.m-panel');
    if (!t || !p) return;
    var desktop = matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');
    var sourceItems = document.querySelectorAll('.nav-menu .nav-item');
    var directContact = p.querySelector('a[href*="contact"]');
    var inerted = [];
    p.id = p.id || 'mobile-menu';
    t.setAttribute('aria-controls', p.id);
    t.setAttribute('aria-expanded', 'false');

    if (sourceItems.length) {
      var accordion = document.createElement('div');
      accordion.className = 'm-accordion';
      sourceItems.forEach(function (item, index) {
        var top = item.querySelector(':scope > a');
        var dropdown = item.querySelector(':scope > .dropdown');
        if (!top || !dropdown) return;
        var labelCopy = top.cloneNode(true);
        var caret = labelCopy.querySelector('.badge-caret');
        if (caret) caret.remove();
        var label = labelCopy.textContent.trim();
        var section = document.createElement('section');
        section.className = 'm-acc-item';
        var trigger = document.createElement('button');
        var triggerId = 'm-acc-trigger-' + (index + 1);
        var panelId = 'm-acc-panel-' + (index + 1);
        trigger.type = 'button';
        trigger.id = triggerId;
        trigger.className = 'm-acc-trigger';
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-controls', panelId);
        var triggerLabel = document.createElement('span');
        triggerLabel.textContent = label;
        var icon = document.createElement('span');
        icon.className = 'm-acc-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = '';
        trigger.appendChild(triggerLabel);
        trigger.appendChild(icon);

        var panel = document.createElement('div');
        panel.id = panelId;
        panel.className = 'm-acc-panel';
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-labelledby', triggerId);
        panel.hidden = true;
        var overviewHref = top.getAttribute('href');
        if (overviewHref) {                       // 대메뉴가 링크가 아니면 전체 보기 항목을 만들지 않는다
          var overview = document.createElement('a');
          overview.className = 'm-acc-overview';
          overview.href = overviewHref;
          overview.textContent = T.overview(label);
          panel.appendChild(overview);
        }
        dropdown.querySelectorAll('.dd-group').forEach(function (group) {
          var mobileGroup = document.createElement('div');
          mobileGroup.className = 'm-acc-group';
          var heading = group.querySelector('.dd-h');
          if (heading) {
            var mobileHeading = document.createElement('p');
            mobileHeading.className = 'm-acc-heading';
            mobileHeading.textContent = heading.textContent;
            mobileGroup.appendChild(mobileHeading);
          }
          group.querySelectorAll(':scope > a').forEach(function (link) {
            mobileGroup.appendChild(link.cloneNode(true));
          });
          panel.appendChild(mobileGroup);
        });
        section.appendChild(trigger);
        section.appendChild(panel);
        accordion.appendChild(section);
      });
      p.textContent = '';
      p.appendChild(accordion);
      if (directContact) {
        var contact = directContact.cloneNode(true);
        contact.classList.add('m-direct');
        p.appendChild(contact);
      }
    }

    var accordionTriggers = p.querySelectorAll('.m-acc-trigger');
    function collapse(trigger) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', 'false');
      trigger.closest('.m-acc-item').classList.remove('open');
      if (panel) panel.hidden = true;
    }
    function collapseAll(except) {
      accordionTriggers.forEach(function (trigger) {
        if (trigger !== except) collapse(trigger);
      });
    }
    accordionTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var opening = trigger.getAttribute('aria-expanded') !== 'true';
        collapseAll(trigger);
        var panel = document.getElementById(trigger.getAttribute('aria-controls'));
        trigger.setAttribute('aria-expanded', String(opening));
        trigger.closest('.m-acc-item').classList.toggle('open', opening);
        if (panel) panel.hidden = !opening;
      });
    });
    function setBackgroundInert(active) {
      if (!('inert' in HTMLElement.prototype)) return;
      if (active) {
        inerted = [];
        Array.prototype.forEach.call(document.body.children, function (el) {
          if (el === p || el.classList.contains('gnb') || el.tagName === 'SCRIPT') return;
          inerted.push({ el: el, value: el.inert });
          el.inert = true;
        });
        document.querySelectorAll('.gnb .logo,.gnb .nav-menu,.gnb .cta-btn').forEach(function (el) {
          inerted.push({ el: el, value: el.inert });
          el.inert = true;
        });
      } else {
        inerted.forEach(function (record) { record.el.inert = record.value; });
        inerted = [];
      }
    }
    function getFocusable() {
      var panelItems = [].slice.call(p.querySelectorAll('button:not([disabled]),a[href]:not([tabindex="-1"])'))
        .filter(function (el) { return el.getClientRects().length > 0; });
      return [t].concat(panelItems);
    }
    function close(returnFocus) {
      p.classList.remove('open');
      document.body.classList.remove('m-lock');
      setBackgroundInert(false);
      t.setAttribute('aria-expanded', 'false');
      t.setAttribute('aria-label', T.openMenu);
      t.textContent = 'Menu';
      collapseAll();
      if (returnFocus) t.focus();
    }
    t.addEventListener('click', function () {
      if (p.classList.contains('open')) {
        close(false);
        return;
      }
      p.classList.add('open');
      document.body.classList.add('m-lock');
      setBackgroundInert(true);
      t.setAttribute('aria-expanded', 'true');
      t.setAttribute('aria-label', T.closeMenu);
      t.textContent = 'Close';
    });
    p.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { close(false); });
    });
    addEventListener('keydown', function (e) {
      if (!p.classList.contains('open')) return;
      if (e.key === 'Escape') {
        close(true);
        return;
      }
      if (e.key !== 'Tab') return;
      var focusable = getFocusable();
      var first = focusable[0], last = focusable[focusable.length - 1];
      var currentIndex = focusable.indexOf(document.activeElement);
      if (currentIndex === -1 || (e.shiftKey && document.activeElement === first)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
    desktop.addEventListener('change', function (e) { if (e.matches) close(false); });
  })();

  /* --- 2-b) 현재 페이지 내비게이션 표시 --- */
  (function currentNavigation() {
    var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    function targetName(link) {
      try {
        var url = new URL(link.getAttribute('href'), location.href);
        return (url.pathname.split('/').pop() || 'index.html').toLowerCase();
      } catch (e) { return ''; }
    }
    document.querySelectorAll('.nav-menu a, .m-panel a, .fb-links a, .subnav a').forEach(function (link) {
      if (targetName(link) === current) link.setAttribute('aria-current', 'page');
    });
    document.querySelectorAll('.nav-menu .nav-item').forEach(function (item) {
      if (item.querySelector('[aria-current="page"]')) item.classList.add('is-current');
    });
    document.querySelectorAll('.m-acc-item').forEach(function (item) {
      if (item.querySelector('[aria-current="page"]')) item.classList.add('is-current');
    });
  })();

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

  /* --- 3-d2) 인증·특허·저작권 갤러리 필터 (company) --- */
  (function certFilter() {
    var bar = document.querySelector('.cert-filter');
    if (!bar) return;
    var tabs = [].slice.call(bar.querySelectorAll('.case-tab'));
    // 증서(.cert-card)·구축실적(.ref-card) 공용
    var cards = [].slice.call(document.querySelectorAll('.cert-card[data-cat],.ref-card[data-cat]'));
    if (!cards.length) return;
    var count = document.querySelector('[data-cert-count]');
    // 해당 분류에 아무것도 없을 때 빈 화면만 남지 않도록 안내를 띄운다
    var empty = document.querySelector('[data-filter-empty]');
    function apply(cat) {
      var n = 0;
      cards.forEach(function (c) {
        var show = cat === 'all' || c.getAttribute('data-cat') === cat;
        c.classList.toggle('is-hidden', !show);
        if (show) n++;
      });
      if (count) count.textContent = n;
      if (empty) empty.hidden = n > 0;
    }
    bar.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.case-tab') : null;
      if (!b) return;
      tabs.forEach(function (t) { t.classList.toggle('active', t === b); t.setAttribute('aria-pressed', t === b ? 'true' : 'false'); });
      apply(b.getAttribute('data-cat'));
    });
    apply('all');
  })();

  /* --- 3-f) 제품 화면 확대 + 기능 카드 포인터 미리보기 --- */
  (function productLightbox() {
    var imgs = [].slice.call(document.querySelectorAll('img.shot'));
    var shotButtons = [].slice.call(document.querySelectorAll('[data-shot]'));
    if (!imgs.length && !shotButtons.length) return;
    var dialog = null, lastFocus = null;
    function close() {
      if (!dialog || !dialog.classList.contains('open')) return;
      document.body.classList.remove('lb-open');
      dialog.classList.remove('open');
      dialog.setAttribute('aria-hidden', 'true');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function build() {
      dialog = document.createElement('div');
      dialog.className = 'lightbox';
      dialog.setAttribute('role', 'dialog');
      dialog.setAttribute('aria-modal', 'true');
      dialog.setAttribute('aria-label', T.zoomDialog);
      dialog.setAttribute('aria-hidden', 'true');
      dialog.innerHTML = '<button class="lb-close" type="button" aria-label="' + T.zoomClose + '">×</button><img class="lb-img" alt="">';
      document.body.appendChild(dialog);
      dialog.addEventListener('click', function (e) { if (e.target === dialog || e.target.classList.contains('lb-close')) close(); });
      dialog.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { e.preventDefault(); close(); }
        else if (e.key === 'Tab') { e.preventDefault(); dialog.querySelector('.lb-close').focus(); }
      });
    }
    function openSource(src, alt) {
      if (!dialog) build();
      lastFocus = document.activeElement;
      var image = dialog.querySelector('.lb-img');
      image.src = src; image.alt = alt || '';
      document.body.classList.add('lb-open');
      dialog.classList.add('open');
      dialog.setAttribute('aria-hidden', 'false');
      dialog.querySelector('.lb-close').focus();
    }
    imgs.forEach(function (img) {
      if (img.closest('a,button')) return;
      img.classList.add('zoomable'); img.tabIndex = 0; img.setAttribute('role', 'button');
      img.setAttribute('aria-label', T.zoomOpen(img.alt || T.shot));
      function openImage() {
        openSource(img.currentSrc || img.src, img.alt);
      }
      img.addEventListener('click', openImage);
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openImage(); } });
    });
    shotButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        openSource(button.getAttribute('data-shot'), button.getAttribute('data-shot-alt') || '');
      });
    });
  })();

  (function pointerPreview() {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    var cards = [].slice.call(document.querySelectorAll('[data-preview]'));
    if (!cards.length) return;
    var preview = document.createElement('figure');
    preview.className = 'hover-preview';
    preview.setAttribute('aria-hidden', 'true');
    preview.innerHTML = '<img alt="">';
    document.body.appendChild(preview);
    var image = preview.querySelector('img');
    function place(e) {
      var width = 360, height = 250, gap = 22;
      var x = e.clientX + gap, y = e.clientY + gap;
      if (x + width > innerWidth - 12) x = e.clientX - width - gap;
      if (y + height > innerHeight - 12) y = Math.max(12, innerHeight - height - 12);
      preview.style.left = x + 'px'; preview.style.top = y + 'px';
    }
    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function (e) {
        image.src = card.getAttribute('data-preview');
        image.alt = card.getAttribute('data-preview-alt') || '';
        place(e); preview.classList.add('show');
      });
      card.addEventListener('mousemove', place, { passive: true });
      card.addEventListener('mouseleave', function () { preview.classList.remove('show'); });
    });
  })();

})();

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

/* 문의 폼: 서버 저장 없이 사용자의 이메일 앱에 작성 내용을 전달한다. */
(function contactMail() {
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var type = document.getElementById('f-type').value;
    var name = document.getElementById('f-name').value.trim();
    var email = document.getElementById('f-mail').value.trim();
    var message = document.getElementById('f-msg').value.trim();
    var subject = T.mailSubject(type, name);
    var body = [
      T.mailType + type,
      T.mailName + name,
      T.mailFrom + email,
      '',
      '문의 내용',
      message
    ].join('\n');
    if (status) status.textContent = '이메일 앱에서 내용을 확인한 뒤 전송해 주세요. 앱이 열리지 않으면 sales@ocube.co.kr로 보내 주세요.';
    window.location.href = 'mailto:sales@ocube.co.kr?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
