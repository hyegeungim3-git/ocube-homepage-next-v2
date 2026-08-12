/* --- CI 로고 포인터 틸트: 커서를 따라 3D 기울기 (fine pointer 전용, lerp) --- */
(function ciTilt() {
  var stage = document.querySelector('.ci-stage'), el = document.querySelector('.ci-tilt');
  if (!stage || !el) return;
  if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var tx = 0, ty = 0, cx = 0, cy = 0, raf = null, over = false;
  function loop() {
    cx += (tx - cx) * .12; cy += (ty - cy) * .12;
    el.style.transform = 'perspective(900px) rotateX(' + (-cy).toFixed(2) + 'deg) rotateY(' + cx.toFixed(2) + 'deg)';
    if (over || Math.abs(cx) > .05 || Math.abs(cy) > .05) raf = requestAnimationFrame(loop);
    else { el.style.transform = ''; raf = null; }
  }
  stage.addEventListener('pointerenter', function () { over = true; });
  stage.addEventListener('pointermove', function (e) {
    var r = stage.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - .5) * 18;   /* ±9deg */
    ty = ((e.clientY - r.top) / r.height - .5) * 14;
    if (!raf) raf = requestAnimationFrame(loop);
  });
  stage.addEventListener('pointerleave', function () { over = false; tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });
})();

