  /* --- 3-d) 구축 사례 필터 (references) --- */
  (function caseFilter() {
    var bar = document.querySelector('.case-filter');
    if (!bar) return;
    var tabs = [].slice.call(bar.querySelectorAll('.case-tab'));
    var cards = [].slice.call(document.querySelectorAll('.case-card[data-line]'));
    var domains = [].slice.call(document.querySelectorAll('.case-domain'));
    bar.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('.case-tab') : null;
      if (!b) return;
      var line = b.getAttribute('data-line');
      tabs.forEach(function (t) { t.classList.toggle('active', t === b); t.setAttribute('aria-pressed', t === b ? 'true' : 'false'); });
      cards.forEach(function (c) {
        var show = line === 'all' || (c.getAttribute('data-line') || '').split(/\s+/).indexOf(line) > -1;
        c.classList.toggle('is-hidden', !show);
      });
      domains.forEach(function (d) {
        var any = d.querySelector('.case-card:not(.is-hidden)');
        d.style.display = any ? '' : 'none';
      });
    });
  })();

