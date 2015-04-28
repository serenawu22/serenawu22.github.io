$(document).ready(function(){
	
	// $('.overlay').fadeIn(3000);
	$('.header-container').fadeIn(3000);

	$("#owl-demo").owlCarousel({
 		autoPlay: 7000, 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true
  });

	$('.mail').click(function() {
		$('#modal-container').show();
	});
	
	$('.modal-footer > *, #modal-overlay').click(function() {
        $('#modal-container').hide();
    });

	function parallax(){
    var scrolled = $(window).scrollTop();
        $('#blurb-container').css('top', -(scrolled * .1) +'px')
         // -(scrolled * .6) alters the speed at which the thing moves
	}
	function revparallax(){
    var scrolled = $(window).scrollTop();
        $('#blurb-container').css('top', ((scrolled -180)* 3.5) +'px')
         // -(scrolled * .6) alters the speed at which the thing moves
	}

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height >= 180 & height <= 460) {
			$('#blurb-container').css('opacity', '1');
			revparallax();
		}
		else{
			$('#blurb-container').css('opacity', '0');
		}
	});
	
});
	// $(document).keypress(function() {
 //   $('.dropdown-menu').toggle();
 // });
	// $('.sublist-container'){
	// 	if(!$(this).hasClass("selected")) {
	// 		$(this).addClass("selected");
	// 	}
	// }

	// $(window).scroll(function() {
	// 	var height = $(window).scrollTop();
	// 	console.log(height);
	// });
	
//             function parallax(){
//     		var scrolled = $(window).scrollTop();
//         	$('#blurb-container').css('top', -(scrolled * .1) +'px')
//         }
//          // -(scrolled * .6) alters the speed at which the thing moves
// 		$(window).scroll(function() {
// 			    parallax();
// 			});
		        
// 			}
	

	// $('#blurb-container').hide();

	// $('#scroll-container').fadeIn(3000);

	// $('body').scroll(function(direction){
	// 	if (direction == "down") {
	// 		$('#bottom-bar').addClass('sticky');
	// 	} else {
	// 		$('#bottom-bar').removeClass('sticky');
	// 	}
	// });

	// $('#left').hover(function() {
	// 	if (!$('#left').hasClass('overlay-l')) {
	// 		$('#left').addClass('overlay-l');
	// 	} else {
	// 		$('#left').removeClass('overlay-l');
	// 	}
	// });

	// $('#right').hover(function() {
	// 	if (!$('#right').hasClass('overlay-r')) {
	// 		$('#right').addClass('overlay-r');
	// 	} else {
	// 		$('#right').removeClass('overlay-r');
	// 	}
	// });
