// 가입하기 버튼 누르면 필수정보창 띄우기
$('#join').on('click', function(e) {
  let req = $('input[type="text"]').val().length;
  if(req > 0) {

  } else {
    e.preventDefault();
    $('.red-alert-req').css('visibility', 'visible');
  }
});

// input 포커스 했을 때
$('.inputbox').focusin(function() {
  $(this).addClass('inputboxact')
  $(this).val('');
});

// input id 포커스 아웃 했을 때
$('.inputbox[name="userid"]').focusout(function() {
    let id = $('.inputbox[name="userid"]').val().length;
    $(this).removeClass('inputboxact')
    $(this).val();
    if(id == 0) {
      $('.id').children('.red-alert-req').css('visibility', 'visible');
    } else {
      $('.id').children('.red-alert-req').css('visibility', 'hidden');
    }
    if(id < 5 || id > 20) {
      $('.id').children('.red-alert').css('visibility', 'visible');
    } else {
      $('.id').children('.red-alert').css('visibility', 'hidden');
    }
    if(id >=5 && id < 20) {
      $('.id').children('.green-alert').css('visibility', 'visible');
    } else {
      $('.id').children('.green-alert').css('visibility', 'hidden');
    }
});

// input pw 포커스 아웃 했을 때
$('.inputbox[name="userpw"]').focusout(function() {
  let pw = $('.inputbox[name="userpw"]').val().length;
  $(this).removeClass('inputboxact')
  $(this).val();
  if(pw == 0) {
    $('.pw').children('.red-alert-req').css('visibility', 'visible');
  } else {
    $('.pw').children('.red-alert-req').css('visibility', 'hidden'); 
  }
  if(pw < 8 || pw > 16)  {
    $('.pw').children('.red-alert').css('visibility', 'visible');
    $('.pw-icon img').attr('src', './images/m_icon_pw_step_10.png');
    $('.pw-icon').children('.red-alert').css('visibility', 'visible');
  } else {
    $('.pw').children('.red-alert').css('visibility', 'hidden'); 
    $('.pw-icon img').attr('src', './images/m_icon_pw_step_01.png');
    $('.pw-icon').children('.red-alert').css('visibility', 'hidden');
  }
  if(pw >=8 && pw <16) {
    $('.pw-icon').children('.green-alert').css('visibility', 'visible');
    $('.pw-icon img').attr('src', './images/m_icon_pw_step_04.png');
  } else {
    $('.pw-icon').children('.green-alert').css('visibility', 'hidden');
    $('.pw-icon img').attr('src', './images/m_icon_pw_step_10.png');
  }
});

// input pwchk 포커스 아웃 했을 때
$('.inputbox[name="userpwchk"]').focusout(function() {
  let pwchk = $('.inputbox[name="userpwchk"]').val().length;
  let pwchkval = $('.inputbox[name="userpw"]').val().length;
    $(this).removeClass('inputboxact')
    $(this).val();
  if(pwchk == 0) {
    $('.pwchk').children('.red-alert-req').css('visibility', 'visible');
  } else {
    $('.pwchk').children('.red-alert-req').css('visibility', 'hidden');
  }
  if(pwchk != pwchkval) {
    $('.pwchk').children('.red-alert').css('visibility', 'visible');
  } else {
    $('.pwchk').children('.red-alert').css('visibility', 'hidden');
  }
  if(pwchk == pwchkval && pwchk != 0) {
    $('.pwchk-icon img').attr('src', './images/m_icon_pw_step_07.png');
  } else {
    $('.pwchk-icon img').attr('src', './images/m_icon_pw_step_02.png'); 
  }
});

// input name 포커스 아웃 했을 때
$('.inputbox[name="username"]').focusout(function() {
  let name = $('.inputbox[name="username"]').val().length;
  $(this).removeClass('inputboxact');
  $(this).val();
  if(name == 0) {
    $('.name').children('.red-alert-req').css('visibility', 'visible');
  } else {
    $('.name').children('.red-alert-req').css('visibility', 'hidden');
  }
});

// input year 포커스 아웃했을 때
$('.inputbox[name="useryear"]').focusout(function() {
  let year = $('.inputbox[name="useryear"]').val().length;
  $(this).removeClass('inputboxact')
  $(this).val();
  if(year == 0) {
    $('.birth').children('.red-alert-year').css('visibility', 'visible');
  } else {
    $('.birth').children('.red-alert-year').css('visibility', 'hidden');
  }
});

// month가 0일 경우
$('#month').focusout(function() {
  let month = $('#month').val().length;
  if(month == 1) {
    $('.birth').children('.red-alert-month').css('visibility', 'visible');
  } else {
    $('.birth').children('.red-alert-month').css('visibility', 'hidden');
  }
});

// input date 포커스 아웃했을 때
$('.inputbox[name="userdate"]').focusout(function() {
  let year = $('.inputbox[name="userdate"]').val().length;
  $(this).removeClass('inputboxact')
  $(this).val();
  if(year == 0) {
    $('.birth').children('.red-alert-date').css('visibility', 'visible');
  } else {
    $('.birth').children('.red-alert-date').css('visibility', 'hidden');
  }
});

// 성별 클릭 했을 때
$('.gender label').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('radiochk');
});