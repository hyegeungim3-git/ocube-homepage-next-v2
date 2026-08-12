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

