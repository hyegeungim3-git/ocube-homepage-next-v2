/* --- GNB 스마트 숨김: 320px 이상에서 하강 시 숨김, 상승 즉시 복귀 (i-bricks 패턴) --- */
(function gnbHide() {
  var gnb = document.querySelector('.gnb');
  if (!gnb) return;
  var lastY = scrollY, ticking = false;
  function paint() {
    ticking = false;
    var y = scrollY;
    if (document.body.classList.contains('m-lock')) { gnb.classList.remove('gnb-hide'); lastY = y; return; }
    if (y > 320 && y > lastY + 6) gnb.classList.add('gnb-hide');
    else if (y < lastY - 4 || y <= 320) gnb.classList.remove('gnb-hide');
    lastY = y;
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }, { passive: true });
  /* 키보드 포커스가 헤더로 가면 항상 표시 */
  gnb.addEventListener('focusin', function () { gnb.classList.remove('gnb-hide'); });
})();

