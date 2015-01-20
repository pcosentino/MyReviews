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
});