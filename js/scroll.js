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
});	

		
	


$(document).ready(function(){
	
	setTimeout(function() { 
		var introheight = $('.intro h2 img').height();
		console.log('initial load, intro height', introheight);
		$('.intro').height(introheight);
	}, 100);

	// console.log(introheight);
	$(window).resize(function(){
				var introheight = $('.intro h2 img').height();
			$('.intro').height(introheight);

	}).trigger('resize');

});

	// var pxscrolled = $(document).scrollTop();
	// 	console.log(pxscrolled);