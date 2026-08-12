  /* --- 3-e) 원클릭 복사 [data-copy] + 토스트 --- */
  (function copyBtns() {
    if (!document.querySelector('[data-copy]')) return;
    var toast = document.createElement('div');
    toast.className = 'toast'; toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
    var tid = null;
    function show(msg) {
      toast.textContent = msg; toast.classList.add('show');
      clearTimeout(tid); tid = setTimeout(function () { toast.classList.remove('show'); }, 1800);
    }
    document.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('[data-copy]') : null;
      if (!b) return;
      var v = b.getAttribute('data-copy');
      function ok() { show(T.copied(v)); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(ok, ok);
      else {
        var ta = document.createElement('textarea'); ta.value = v; document.body.appendChild(ta);
        ta.select(); try { document.execCommand('copy'); } catch (err) { } ta.remove(); ok();
      }
    });
  })();

