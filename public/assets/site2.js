/* ===== OCUBE v2 공통 스크립트 (자연 스크롤 테마) ===== */
(function () {
  'use strict';

  /* --- 화면 언어에 맞춘 문구 ---
     이 파일이 만들어 넣는 글자(토스트·안내·읽어주는 이름)는 화면과 같은 언어여야 한다.
     한국어 화면과 영어 화면이 같은 파일을 쓰므로 <html lang> 을 보고 고른다. */
  var EN = (document.documentElement.getAttribute('lang') || 'ko').slice(0, 2) === 'en';
  var T = EN ? {
    mailSubject: function (type, name) { return '[OCUBE enquiry] ' + type + ' - ' + name; },
    mailType: 'Type: ', mailName: 'Name / company: ', mailFrom: 'Reply to: '
  } : {
    mailSubject: function (type, name) { return '[오큐브 홈페이지 문의] ' + type + ' - ' + name; },
    mailType: '문의 유형: ', mailName: '성함 / 회사: ', mailFrom: '회신 이메일: '
  };

})();

/* 문의 폼: 서버 저장 없이 사용자의 이메일 앱에 작성 내용을 전달한다. */
(function contactMail() {
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var type = document.getElementById('f-type').value;
    var name = document.getElementById('f-name').value.trim();
    var email = document.getElementById('f-mail').value.trim();
    var message = document.getElementById('f-msg').value.trim();
    var subject = T.mailSubject(type, name);
    var body = [
      T.mailType + type,
      T.mailName + name,
      T.mailFrom + email,
      '',
      '문의 내용',
      message
    ].join('\n');
    if (status) status.textContent = '이메일 앱에서 내용을 확인한 뒤 전송해 주세요. 앱이 열리지 않으면 sales@ocube.co.kr로 보내 주세요.';
    window.location.href = 'mailto:sales@ocube.co.kr?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
