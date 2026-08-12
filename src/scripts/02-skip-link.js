  /* --- 0) 전 페이지 본문 바로가기 + main 기준점 보강 --- */
  (function pageAccessibility() {
    var main = document.querySelector('main');
    if (!main) return;
    if (!main.id) main.id = 'main-content';
    if (document.querySelector('.skip')) return;
    var skip = document.createElement('a');
    skip.className = 'skip';
    skip.href = '#' + main.id;
    skip.textContent = T.skip;
    document.body.insertBefore(skip, document.body.firstChild);
  })();

