$(document).ready(function(){
	$(".annals").on("mouseenter",function(){
		$(".annals-caption").slideDown();
	});
	$(".annals").on("mouseleave",function(){
		$(".annals-caption").slideUp();
	});
	$(".finance").on("mouseenter",function(){
		$(".finance-caption").slideDown();
	});
	$(".finance").on("mouseleave",function(){
		$(".finance-caption").slideUp();
	});
});