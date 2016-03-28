$(document).ready(function(){
	$(".ad-nav-spy").affix({
        offset: { 
            top: $(".container").offset().top-100,
            bottom: $('.footer').outerHeight(true) + 40
     	}
    });
	
	var containerCenter = $('.ad-sup-pro-c').width()/2;
	$(".ad-sup-pro-c").CloudCarousel({
		xPos:containerCenter,
		yPos:100,
		buttonLeft: $('.ad-sup-pro-cl'),
		buttonRight: $('.ad-sup-pro-cr'),
		altBox: $(".ad-sup-pro-ct"),
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$(".ad-sup-enter-c").CloudCarousel({
		xPos:containerCenter,
		yPos:100,
		buttonLeft: $('.ad-sup-enter-cl'),
		buttonRight: $('.ad-sup-enter-cr'),
		altBox: $(".ad-sup-enter-ct"),
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$(".ad-sup-med-c").CloudCarousel({
		xPos:containerCenter,
		yPos:100,
		buttonLeft: $('.ad-sup-med-cl'),
		buttonRight: $('.ad-sup-med-cr'),
		altBox: $(".ad-sup-med-ct"),
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});
});