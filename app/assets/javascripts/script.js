$(document).ready(function(){
	$(".btn-success").on('click', function(){
		$(".correct").addClass("show");
		$(".explanation").addClass("show");	
		$(".incorrect").removeClass("show")
	});

	$(".btn-danger").on('click', function(){
		$(".correct").removeClass("show")
		$(".incorrect").addClass("show");
		$(".explanation").addClass("show");	
	});

  $(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

});


