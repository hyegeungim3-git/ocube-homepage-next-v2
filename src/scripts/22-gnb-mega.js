/* --- GNB 메가 메뉴: 내비 호버/포커스 시 간격 확장 + 전 메뉴 동시 펼침 (Seegene 패턴) --- */
(function gnbMega() {
  var gnb = document.querySelector('.gnb');
  var menu = gnb && gnb.querySelector('.nav-menu');
  if (!gnb || !menu) return;
  var desktop = matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');
  var hoverDesktop = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)');
  var timer = null;
  var resizeTimer = null;
  var hoverBound = false;
  var megaHeight = 0;
  var triggers = gnb.querySelectorAll('.nav-item > a');
  triggers.forEach(function (trigger, index) {
    var panel = trigger.nextElementSibling;
    if (panel && panel.classList.contains('dropdown')) {
      if (!panel.id) panel.id = 'gnb-panel-' + (index + 1);
      trigger.setAttribute('aria-controls', panel.id);
    }
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
  });
  function setExpanded(value) {
    triggers.forEach(function (trigger) { trigger.setAttribute('aria-expanded', String(value)); });
  }
  function measureMegaHeight() {
    var h = 0;
    gnb.querySelectorAll('.dropdown').forEach(function (d) { h = Math.max(h, d.scrollHeight); });
    megaHeight = Math.ceil(h) + 24;
    gnb.style.setProperty('--mega-h', megaHeight + 'px');
  }
  function open() {
    if (!desktop.matches) return;
    clearTimeout(timer);
    /* 메가 레이아웃의 최장 컬럼 높이를 한 번만 저장해 컬럼 이동 중 패널이 흔들리지 않게 한다. */
    gnb.classList.add('gnb-mega');
    gnb.classList.remove('gnb-hide');
    if (!megaHeight) measureMegaHeight();
    else gnb.style.setProperty('--mega-h', megaHeight + 'px');
    setExpanded(true);
  }
  function closeNow() {
    clearTimeout(timer);
    gnb.classList.remove('gnb-mega');
    setExpanded(false);
  }
  function close() { timer = setTimeout(closeNow, 140); }
  function hold() { if (gnb.classList.contains('gnb-mega')) clearTimeout(timer); }
  function bindHover(enable) {
    if (enable === hoverBound) return;
    hoverBound = enable;
    if (enable) {
      menu.addEventListener('mouseenter', open);
      gnb.addEventListener('mouseleave', close);
      gnb.addEventListener('mouseenter', hold);
    } else {
      menu.removeEventListener('mouseenter', open);
      gnb.removeEventListener('mouseleave', close);
      gnb.removeEventListener('mouseenter', hold);
      closeNow();
    }
  }
  bindHover(hoverDesktop.matches);
  hoverDesktop.addEventListener('change', function (e) { bindHover(e.matches); });
  /* 패널의 빈 영역까지 실제 GNB 박스에 포함되므로, 바깥으로 나갈 때만 닫는다. */
  menu.addEventListener('click', function (e) {
    var trigger = e.target.closest('.nav-item > a');
    if (!trigger || !desktop.matches || hoverDesktop.matches || gnb.classList.contains('gnb-mega')) return;
    e.preventDefault();
    open();
    trigger.focus();
  });
  /* 키보드 접근성 */
  menu.addEventListener('focusin', open);
  gnb.addEventListener('focusout', function (e) { if (!gnb.contains(e.relatedTarget)) close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !gnb.classList.contains('gnb-mega')) return;
    var active = document.activeElement;
    var item = active && active.closest ? active.closest('.nav-item') : null;
    var trigger = item && item.querySelector(':scope > a');
    if (trigger) trigger.focus();
    closeNow();
  });
  function invalidateMegaHeight() {
    megaHeight = 0;
    if (gnb.classList.contains('gnb-mega')) measureMegaHeight();
  }
  addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(invalidateMegaHeight, 120);
  }, { passive: true });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(invalidateMegaHeight);
  }
  desktop.addEventListener('change', function (e) {
    if (!e.matches) {
      closeNow();
      gnb.style.removeProperty('--mega-h');
      megaHeight = 0;
    }
  });
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
