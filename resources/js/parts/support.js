$(document).ready(function(){
	$(".ad-nav-spy").affix({
        offset: { 
            top: $(".container").offset().top-100
     	}
    });

	var containerCenter = $('.ad-sup-project-carousel').width()/2;
	$(".ad-sup-project-carousel").CloudCarousel({			
		xPos:containerCenter,
		yPos:150,
		buttonLeft: $('#project-carousel-left'),
		buttonRight: $('#project-carousel-right'),
		titleBox: $("#project-carousel-title"),				
		altBox: $("#project-carousel-alt"),			
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$(".ad-sup-enterprise-carousel").CloudCarousel({			
		xPos:containerCenter,
		yPos:150,
		buttonLeft: $('#enterprise-carousel-left'),
		buttonRight: $('#enterprise-carousel-right'),
		altBox: $("#enterprise-carousel-alt"),
		titleBox: $("#enterprise-carousel-title"),
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});
	$(".ad-sup-media-carousel").CloudCarousel({			
		xPos:containerCenter,
		yPos:100,
		buttonLeft: $('#media-carousel-left'),
		buttonRight: $('#media-carousel-right'),
		altBox: $("#media-carousel-alt"),
		FPS:30,
		reflHeight:0,
		reflGap:0,
		yRadius:80,
		autoRotateDelay: 1200,
		speed:0.2,
		bringToFront:true
	});	
	$('ad-sup-donate-way a').click(function (e) {
	  	e.preventDefault()
	  	$(this).tab('show')
	});
	$('[data-toggle="tooltip"]').tooltip();
});