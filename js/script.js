let closeMenu = document.querySelectorAll('li'),
    buttonMenu = document.getElementById('buttonMenu'),
    basicExampleNav = document.getElementById('basicExampleNav');

closeMenu.forEach(function(e) {
    e.addEventListener('click', function() {
      buttonMenu.classList.remove('collapsed');
      basicExampleNav.classList.remove('show');
    });
  });


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // magnific
  // $('.magnific').magnificPopup({
  //   items: [
  //     {
  //       src: 'img/2.jpg',
  //       type: 'image'
  //     },
  //     {
  //       src: 'img/8.jpg',
  //       type: 'image'
  //     },
  //     {
  //       src: 'img/9.jpg',
  //       type: 'image'
  //     },
  //     {
  //       src: 'img/10.jpg',
  //       type: 'image'
  //     },
  //     {
  //       src: 'img/11.jpg',
  //       type: 'image'
  //     },
  //     {
  //       src: 'img/12.jpg',
  //       type: 'image'
  //     }
  //   ],
  //   gallery: {
  //     enabled: true
  //   },
  //   type: 'image',
  //   removalDelay: 300,
  //   mainClass: 'mfp-fade',
    
  // });

//   $('.magnificGallery').each(function() {
//     $(this).magnificPopup({
//         delegate: 'img',
//         type: 'image',
//         gallery: {
//           enabled:true
//         }
//     });
// });


$('.magnific1').magnificPopup({
    items:
      {
        src: 'img/2.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific2').magnificPopup({
    items:
      {
        src: 'img/8.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific3').magnificPopup({
    items:
      {
        src: 'img/9.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific4').magnificPopup({
    items:
      {
        src: 'img/10.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific5').magnificPopup({
    items:
      {
        src: 'img/11.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific6').magnificPopup({
    items:
      {
        src: 'img/12.jpg'
      },
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.magnific').magnificPopup({
      items: [
        {
          src: 'img/5.jpg',
          type: 'image'
        },
        {
          src: 'img/6.jpg',
          type: 'image'
        },
        {
          src: 'img/7.jpg',
          type: 'image'
        },
      ],
      gallery: {
        enabled: true
      },
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });


    $('#btnAnim').on('click', function() {
      let animH2 = $('#animH2');
      let animH4 = $('#animH4');
      animH2.animate({fontSize: '30px'}, 400);
      animH2.animate({fontSize: '56px'}, 300);

      animH4.animate({fontSize: '16px'}, 500);
      animH4.animate({fontSize: '24px'}, 300);
    });

  
    // валидация для формы футера

    // $("#btnSend").hide();
    $("#btnSend").addClass('disabled');

		$("#emailValid").keyup(function(){
			if(validateEmail()){
        // $("#emailValid").css("border","2px solid green");
        // $("#emailValid").css("color","green");
        $("#emailValid").css({'border-bottom': '1px solid green', 'box-shadow': '0 1px 0 0 green'});
        // $("#emailMsg").html("<p class='text-success'>Validated</p>");
        $("#emailMsg").html("<p class='padd text-left'>Valid</p>");
			}else{
        // $("#emailValid").css("border","2px solid red");
        // $("#emailValid").css("color","red");
        // $("#emailMsg").html("<p class='text-danger'>Un-validated</p>");
        $("#emailMsg").html("<p class='padd text-left'>Incorrect email address</p>");
        $("#emailValid").css({'border-bottom': '1px solid red', 'box-shadow': '0 1px 0 0 red'});
			}
			buttonState();
    });
    
    $("#phoneValid").keyup(function(){
        if(validatePhone()){
          $("#phoneValid").css({'border-bottom': '1px solid green', 'box-shadow': '0 1px 0 0 green'});
          $("#phoneMsg").html("<p class='padd text-left'>Valid</p>");
        }else{
          $("#phoneValid").css({'border-bottom': '1px solid red', 'box-shadow': '0 1px 0 0 red'});
          $("#phoneMsg").html("<p class='padd text-left'>Incorrect phone number, must be +3801234567891</p>");
        }
        buttonState();
    });
  
		
	// 	$("#pass").keyup(function(){
	// 		if(validatePassword()){
	// 			$("#pass").css("border","2px solid green");
	// 			$("#passMsg").html("<p class='text-success'>Password validated</p>");
	// 		}else{
	// 			$("#pass").css("border","2px solid red");
	// 			$("#passMsg").html("<p class='text-danger'>Password not valid</p>");
	// 		}
	// 		buttonState();
	// 	});
  // });
  
	function buttonState(){
		if( validateEmail() && validatePhone() ){
      $("#btnSend").removeClass('disabled');
		}else{
			$("#btnSend").addClass('disabled');
		}
  }
  
	function validateEmail(){
		var email=$("#emailValid").val();
		 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		 if(reg.test(email)){
		 	return true;
		 }else{
		 	return false;
		 }
  }
  
  function validatePhone(){
		let phone = $("#phoneValid").val();
		 if(isNaN(phone) || phone == '' || phone == null || phone.length < 13 ){
		 	return false;
		 }else{
		 	return true;
		 }
	}
	// function validatePassword(){
	// 	var pass=$("#pass").val();
	// 	if(pass.length > 7){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}

  // $('#emailValid').focus(function() {
  //   $(this).css({'border-bottom': '1px solid #4285f4', 'box-shadow': '0 1px 0 0 #4285f4'});
  // });

  // $('#emailValid').blur(function() {
  //   $(this).css({'border-bottom': '1px solid #CED4DA', 'box-shadow': '0 0 0 0 #CED4DA'});
  //   $("#emailMsg").html("<span></span>");
  // });

  $('.focusBlur').focus(function() {
    $(this).css({'border-bottom': '1px solid #4285f4', 'box-shadow': '0 1px 0 0 #4285f4'});
  });

  $('.focusBlur').blur(function() {
    $(this).css({'border-bottom': '1px solid #CED4DA', 'box-shadow': '0 0 0 0 #CED4DA'});
    $('.msgFocusBlur').html("<span></span>");
  });


  (function emptyEmail() {
    let val = $('#emailValid').val();
    if (val == '') {
      $('#emailValid').css({'border-bottom': '1px solid #CED4DA', 'box-shadow': '0 0 0 0 #CED4DA'});
    }
  }());


  











  });