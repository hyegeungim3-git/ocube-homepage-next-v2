  /* --- 1-b) 광폭 비교표: 가로 스크롤 래퍼 자동 적용(모바일 오버플로 방지) --- */
  (function wrapTables() {
    document.querySelectorAll('table.cmp').forEach(function (tb) {
      if (tb.parentElement && tb.parentElement.classList.contains('cmp-scroll')) return;
      var wrap = document.createElement('div');
      wrap.className = 'cmp-scroll';
      wrap.tabIndex = 0;
      var caption = tb.querySelector('caption');
      wrap.setAttribute('aria-label', (caption ? caption.textContent.trim() : T.table) + T.tableHint);
      tb.parentNode.insertBefore(wrap, tb);
      wrap.appendChild(tb);
    });
  })();

