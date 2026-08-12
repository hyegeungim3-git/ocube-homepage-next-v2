  /* --- 화면 언어에 맞춘 문구 ---
     이 파일이 만들어 넣는 글자(토스트·안내·읽어주는 이름)는 화면과 같은 언어여야 한다.
     한국어 화면과 영어 화면이 같은 파일을 쓰므로 <html lang> 을 보고 고른다. */
  var EN = (document.documentElement.getAttribute('lang') || 'ko').slice(0, 2) === 'en';
  var T = EN ? {
    overview: function (label) { return label + ' overview'; },
    openMenu: 'Open menu', closeMenu: 'Close menu',
    play: 'Resume auto-rotation', pause: 'Pause auto-rotation',
    zoomDialog: 'Enlarged product screen', zoomClose: 'Close enlarged view',
    shot: 'product screen', zoomOpen: function (n) { return n + ' — view larger'; },
    mailSubject: function (type, name) { return '[OCUBE enquiry] ' + type + ' - ' + name; },
    mailType: 'Type: ', mailName: 'Name / company: ', mailFrom: 'Reply to: '
  } : {
    overview: function (label) { return label + ' 전체 보기'; },
    openMenu: '메뉴 열기', closeMenu: '메뉴 닫기',
    play: '자동 전환 재생', pause: '자동 전환 일시정지',
    zoomDialog: '제품 화면 확대 보기', zoomClose: '확대 화면 닫기',
    shot: '제품 화면', zoomOpen: function (n) { return n + ' 확대 보기'; },
    mailSubject: function (type, name) { return '[오큐브 홈페이지 문의] ' + type + ' - ' + name; },
    mailType: '문의 유형: ', mailName: '성함 / 회사: ', mailFrom: '회신 이메일: '
  };

