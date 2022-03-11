

$(document).ready(function(){


	//Animation
	  AOS.init();


	// Gallery
	$('.gallyer-box-imgs img').click(function(){

		let imgsrc = $(this).attr("src");
		$('.main-box-img img').attr("src", imgsrc);
	});



    // Owl Carousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
  
});


