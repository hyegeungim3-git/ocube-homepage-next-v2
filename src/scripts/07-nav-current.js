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

