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

