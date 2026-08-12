  /* --- 3-f) FAB : 맨 위로 (전 페이지 공통) --- */
  (function fabStack() {
    var fab = document.createElement('div');
    fab.className = 'fab-stack';
    fab.innerHTML =
      '<button class="fab-btn fab-top" type="button" aria-label="' + T.toTop + '">' +
        '<svg viewBox="0 0 17 19" width="16" height="18" aria-hidden="true"><path d="M1 8l7.3-7 7.3 7M8.3 1v17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>';
    document.body.appendChild(fab);
    var topBtn = fab.querySelector('.fab-top');
    function toggle() { fab.classList.toggle('show', (window.scrollY || document.documentElement.scrollTop || 0) > 500); }
    addEventListener('scroll', toggle, { passive: true });
    toggle(); setTimeout(toggle, 400);
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  })();

