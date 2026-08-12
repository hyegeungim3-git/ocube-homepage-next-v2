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
    mailSubject: function (type, name) { return '[OCUBE enquiry] ' + type + ' - ' + name; },
    mailType: 'Type: ', mailName: 'Name / company: ', mailFrom: 'Reply to: '
  } : {
    overview: function (label) { return label + ' 전체 보기'; },
    openMenu: '메뉴 열기', closeMenu: '메뉴 닫기',
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
