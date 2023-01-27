// 가입하기 버튼 누르면 필수정보창 띄우기
$('#join').on('click', function(e) {
  let req = $('input[type="text"]').val().length;
  if(req > 0) {
  } else {
    e.preventDefault();
    $('.red-alert-req').css('visibility', 'visible');
  }
});

// input 눌렀을 때
$('.inputbox').focusin(function() {
  $(this).addClass('inputboxact')
  $(this).val('');
});

// input 안 눌렀을 때
$('.inputbox').focusout(function() {
    let req = $('input[type="text"]').val().length;
    $(this).removeClass('inputboxact')
    $(this).val();
    if(req == 0) {
      $('.id').children('.red-alert-req').css('visibility', 'visible');
    } else {
      $('.id').children('.red-alert-req').css('visibility', 'hidden');
    }
    if(req < 5 || req > 20 ) {
      $('.id').children('.red-alert').css('visibility', 'visible');
    } else {

    }
});

