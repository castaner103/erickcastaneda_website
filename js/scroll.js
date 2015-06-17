$(document).scroll(function(){

	var pxscrolled = $(this).scrollTop();
		console.log(pxscrolled);


$('.intro h2 img').css('top', - pxscrolled);
$('.down_click').css('top', - pxscrolled);

if (pxscrolled > 428) {
		$('nav').fadeIn();
			// $('nav').css("display", "show");
	}
	else{
		$('nav').fadeOut();
	}

});	


	// var pxscrolled = $(document).scrollTop();
	// 	console.log(pxscrolled);