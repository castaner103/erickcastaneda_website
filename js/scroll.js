$(document).scroll(function(){

	var pxscrolled = $(this).scrollTop();
		console.log(pxscrolled);


$('.intro h2 img').css('top', - pxscrolled);
$('.down_click img').css('top', - pxscrolled);

if (pxscrolled > 428) {
		$('nav').fadeIn();
			// $('nav').css("display", "show");
	}
	else{
		$('nav').fadeOut();
	}

$('.intro h2 img').load;{
	alert($(this).width());
}

// var introimg = $
// 	$(window).resize(function(){
// 		$('.intro').css('height', + window)		
// 	});


});	


	// var pxscrolled = $(document).scrollTop();
	// 	console.log(pxscrolled);