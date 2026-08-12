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

