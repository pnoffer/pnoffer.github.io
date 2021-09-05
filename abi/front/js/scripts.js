var lang=$('#lang').val();
var rtl=false;
if(lang=="ar"){

rtl=true;}

setSizes();
$(window).bind('load',function(){
	if($('.lazy').length > 0) {
 		/*$('.lazy').Lazy();*/
 		$('.lazy').each(function(){
 			var obj = $(this);
 			var objImg = obj.attr('data-src');
 			if(obj.is("div")){
			    obj.css('background-image','url('+objImg+')');
			} 
			else {
			    obj.attr('src',objImg);
			}
 		});
 	}
});
$(document).ready(function(){
	$('.nested-list, .submenunav').click(function(event) {
		if($(window).width() <= 960) {	
			event.preventDefault();
			if($(this).parent('li').find('ul').is(':visible')) {
				$(this).parent('li').find('ul').slideUp('fast');
				$(this).parent('li').removeClass('expanded');
			}
			else {
				$(this).parent('li').find('ul').slideDown('fast');
				$(this).parent('li').addClass('expanded');
			}
		}
	});

	setSizes();
		doScrollEffects();
	$('.banner-item').hover(function(){
		if($(window).width() > 1050) {
			var obj = $(this);
			var id = obj.attr('id');
			_animate_banner(id);
		}
		
	},function(){
		if($(window).width() > 1050) {
			_animate_banner(0);
		}
	});
	/*$('.gallery-style-3').find('.tab-item').hover(function(){
		var obj = $(this);
		var id = parseInt(obj.attr('id').replace('tab-item-',''));
		$('.gallery-style-3').find('.gal-item').css('display','none');
		$('.gallery-style-3').find('#gal-item-'+id).css('display','block');
	});*/
	
	$(".awards-slider").slick({
	  infinite: true,
	  fade:true,
	  rtl:rtl,
	  dots:true,
	  speed:1300,
	  pauseOnHover:false,
	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false,
	  slidesToShow: 4,
      slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		}
	  ]
	});
	$(".gallery-style-2-slider").slick({
	  infinite: true,
	  fade:false,
	  dots:false,
	  rtl:rtl,
	  pauseOnHover:false,
	  	  autoplay: true,
	  	  speed:1300,
  	  autoplaySpeed: 5000,
  	  adaptiveHeight:true,
	  arrows:true,
	  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-chevron-right"></i></button>'
	});
	$(".gallery-style-full-slider").slick({
	  infinite: true,
	  fade:false,
	  dots:true,
	  speed:1300,
	  pauseOnHover:false,
	  	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false
	});

	$(".dining-slider").slick({
	  infinite: true,
	  fade:true,
	  dots:false,
	  speed:1300,
	   rtl:rtl,
	  pauseOnHover:false,
	  	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false,
	 asNavFor: '.dining-slider-logos'
	});
	$(".dining-slider-logos").slick({
	  infinite: true,
	  fade:false,
	  dots:false,
	  arrows:false,
	  speed:1300,
	   rtl:rtl,
	  slidesToShow: 6,
	  slidesToScroll:6,
	  asNavFor: '.dining-slider',
	  focusOnSelect: true,
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 340,
		  settings: {
			slidesToShow: 2,
			slidesToScroll:2
		  }
		},
		 {
		  breakpoint: 260,
		  settings: {
			slidesToShow: 1,
			slidesToScroll:1
		  }
		}
	  ]
	});
	/*$(".dining-slider-logos .dining-logo").hover(function(){
		var obj = $(this);
		obj.parent().parent().parent().click();
	});*/

	var slideTimer;
    $('.dining-slider-logos').on('mouseenter', '.slick-slide', function (e) {
        var $currTarget = $(e.currentTarget);
        $('.dining-slider-logos .slick-slide').removeClass('slick-current');
        $currTarget.addClass('slick-current');

        slideTimer = setTimeout(function () {
            var index = $('.dining-slider-logos').find('.slick-current').data('slick-index');
            var slickObj = $('.dining-slider').slick('getSlick');
            slickObj.slickGoTo(index);
        }, 300);
    }).on('mouseleave', '.slick-slide', function (e) {
        clearTimeout(slideTimer);
    }); 






	$(".gallery-style-3-slider").slick({
	  infinite: true,
	  rtl:rtl,
	  fade:true,
	  dots:false,
	  arrows:false,
	  speed:1300,
	  pauseOnHover:false,
	  	  autoplay: true,
  	  autoplaySpeed: 5000,
	  adaptiveHeight:true,
	 asNavFor: '.gallery-style-3-tabs'
	});
	$(".gallery-style-3-tabs").slick({
	  infinite: true,
	  fade:false,
	  dots:false,
	  arrows:true,
	  speed:1300,
	  rtl:rtl,
	  slidesToShow: 6,
	  slidesToScroll:6,
	  variableWidth: true,
	  pauseOnHover:false,
	  asNavFor: '.gallery-style-3-slider',
	  focusOnSelect: true,
	  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 340,
		  settings: {
			slidesToShow: 2,
			slidesToScroll:2
		  }
		},
		 {
		  breakpoint: 260,
		  settings: {
			slidesToShow: 1,
			slidesToScroll:1
		  }
		}
	  ]
	});

	var slideTimer1;
    $('.gallery-style-3-tabs').on('mouseenter', '.slick-slide', function (e) {
        var $currTarget = $(e.currentTarget);
        $('.gallery-style-3-tabs .slick-slide').removeClass('slick-current');
        $currTarget.addClass('slick-current');

        slideTimer1 = setTimeout(function () {
            var index = $('.gallery-style-3-tabs').find('.slick-current').data('slick-index');
            var slickObj = $('.gallery-style-3-slider').slick('getSlick');
            slickObj.slickGoTo(index);
        }, 300);
    }).on('mouseleave', '.slick-slide', function (e) {
        clearTimeout(slideTimer1);
    }); 

	$(".gallery-style-4-slider").slick({
	  infinite: true,
	  fade:true,
	  rtl:rtl,
	  dots:false,
	  arrows:true,
	  speed:1300,
	  pauseOnHover:false,
	  	  autoplay: true,
  	  autoplaySpeed: 5000,
	  adaptiveHeight:true,
	  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-chevron-right"></i></button>',
	 asNavFor: '.gallery-style-4-thumbnails'
	});
	$(".gallery-style-4-thumbnails").slick({
	  infinite: true,
	  fade:false,
	  rtl:rtl,
	  dots:false,
	  arrows:true,
	  speed:1300,
	  slidesToShow: 6,
	  slidesToScroll:6,
	  asNavFor: '.gallery-style-4-slider',
	  focusOnSelect: true,
	  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 340,
		  settings: {
			slidesToShow: 2,
			slidesToScroll:2
		  }
		},
		 {
		  breakpoint: 260,
		  settings: {
			slidesToShow: 1,
			slidesToScroll:1
		  }
		}
	  ]
	});

	$(".gallery-awards").slick({
	  infinite: true,
	  fade:false,
	  rtl:rtl,
	  dots:false,
	  arrows:true,
	  speed:1300,
	  slidesToShow: 6,
	  slidesToScroll:6,
	  focusOnSelect: true,
	  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		  }
		},
		{
		  breakpoint: 340,
		  settings: {
			slidesToShow: 2,
			slidesToScroll:2
		  }
		},
		 {
		  breakpoint: 260,
		  settings: {
			slidesToShow: 1,
			slidesToScroll:1
		  }
		}
	  ]
	});


	$(".gallery-images").slick({
	  infinite: true,
	  fade:true,
	  rtl:rtl,
	  dots:false,
	  speed:1300,
	  pauseOnHover:false,
	  	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false,
	 asNavFor: '.gallery-thumbnails'
	});
	$(".gallery-thumbnails").slick({
	  infinite: true,
	  fade:false,
	  dots:false,
	  rtl:rtl,
	  speed:1300,
	  arrows:false,
	  asNavFor: '.gallery-images',
	  focusOnSelect: true,
	  vertical: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      verticalSwiping: true,
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			verticalSwiping: false,
			vertical: false,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			verticalSwiping: false,
			vertical: false,
		  }
		},
		{
		  breakpoint: 340,
		  settings: {
			slidesToShow: 2,
			slidesToScroll:2,
			verticalSwiping: false,
			vertical: false,
		  }
		},
		 {
		  breakpoint: 260,
		  settings: {
			slidesToShow: 1,
			slidesToScroll:1,
			verticalSwiping: false,
			vertical: false,
		  }
		}
	  ]
	});

	$(".other-restaurants-slider").slick({
	  infinite: true,
	  fade:false,
	  dots:true,
	  rtl:rtl,
	  speed:1300,
	  arrows:false,
	  pauseOnHover:false,
	  autoplay: true,
  	  autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		}
	  ]
	});

	$(".home-slider").slick({
	  infinite: true,
	  fade:true,
	  rtl:rtl,
	  dots:true,
	  speed:1300,
	  pauseOnHover:false,
	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false
	});
	$(".inner-banner-slider").slick({
	  infinite: true,
	  rtl:rtl,
	  fade:true,
	  dots:true,
	  speed:1300,
	  pauseOnHover:false,
	  autoplay: true,
  	  autoplaySpeed: 5000,
	  arrows:false
	});

});
$(window).bind("load",function(){
	setSizes();
		doScrollEffects();
});
$(window).bind("resize",function(){
	setSizes();
	doScrollEffects();
});
function _animate_banner(id)
{
	if(id != 0)
	var ind = id.replace('banner-','') - 1;
	$('.banner-item').each(function(){
		var obj1 = $(this);
		var id1 = obj1.attr('id');
		var ind1 = id1.replace('banner-','') - 1;
		if(id1 != id) {
			if(id == 0) {
				obj1.css('width',_banner_width());
				obj1.css('left',(_banner_width() * ind1));
			}
			else {
				obj1.css('width',_banner_width_small());
				if(ind1 > ind) {
					var ac = 1;
					var sc = ind1 - 1;
				}
				else {
					var sc = ind1;
					var ac = 0;
				}
				var l = (_banner_width_small() * sc) + (ac * _banner_width_active());
				obj1.css('left',l);
			}
		}
		else {
			obj1.css('width',_banner_width_active());
			obj1.css('left',(_banner_width_small() * ind1));
			
		}
	});
}
function fadeBookingFrame()
{
	$('body').addClass('overhiddem');
	$('.close-link').fadeIn('fast');
	$('.booking-form').fadeIn('fast');
}
function hideBookingFrame()
{
	$('.close-link').fadeOut('fast');
	$('.booking-form').fadeOut('fast',function(){
		$('body').removeClass('overhiddem');
	});
}

$(window).scroll(function() {
  doScrollEffects();
});

function setSizes()
 {
 	if($(window).width() > 1050) {
 		$('.banner-item').css({
	 		'width':_banner_width(),
	 		'height':_banner_height()
	 	});
	 	$('.banner-item').each(function(){
	 		var obj1 = $(this);
			var id1 = obj1.attr('id');
			var ind = id1.replace('banner-','') - 1;
			var l = ind * _banner_width();
			obj1.css('left',l);
	 	});
	 	$('.banners').css({
	 		'height':_banner_height()
	 	});
	 	$('.slider-item').css({
	 		'width':$(window).width(),
	 		'height':$(window).height()
	 	});
 	}
 	else {
 		$('.booking-form').css({
	 		'height':$(window).height()
	 	});
 	}
 }

 function _banner_width()
 {
 	var ww = $(window).width();
 	var bannerWidth = ww / 3;
 	return bannerWidth;
 }
function _banner_height()
{
	var wh = $(window).height();
 	var headerHeight = $('header').height();
 	var bannerHeight = wh - headerHeight;
 	return bannerHeight;
}
function _banner_width_small()
{
	var ww = $(window).width();
 	var bannerWidth = ww * 0.2;
 	return bannerWidth;
}
function _banner_width_active()
{
	var ww = $(window).width();
 	var bannerWidth = ww * 0.6;
 	return bannerWidth;
}


function doScrollEffects() {
 var ScrollTop=$(window).scrollTop();
 	var WindowHeight = $(window).height();
 
 if($('.section_aboutus').length>0){
     
     var check=$('.section_aboutus').offset().top - (WindowHeight/2); 
     if(check<ScrollTop){
         if($('.home_iframe.active').length==0){
         $('.home_iframe').addClass('active');  
         //var src=$('.home_iframe iframe').attr('data-src');
         $('.home_iframe .description').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/HQuGjNEkpgQ?rel=0&modestbranding=0&autohide=1&mute=0&showinfo=0&color=white&controls=1&autoplay=1&vq=hd1080&enablejsapi=1" frameborder="0" allow="accelerometer;autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen  allow="autoplay"></iframe>');}
         
     }
 }
 

	//var check=WindowHeight-($('header').height());
	var headerH = $('header').height();
	if(ScrollTop >= headerH) {
		$('body').addClass('fixed_header');
	}
	else{
		if($('body').length>0){
			$('body').removeClass('fixed_header');
		}
	}

	$('.trans').each(function () {

		var Obj = $(this);

		var ObjTopPos = Obj.offset().top - (WindowHeight);

		if (ScrollTop >= ObjTopPos) {

			if (!Obj.hasClass('ActiveItem')) {

				Obj.addClass('ActiveItem');

			}

		} else if (ScrollTop < ObjTopPos - 50) {

			if (Obj.hasClass('ActiveItem')) {

				Obj.removeClass('ActiveItem');

			}

		} else {



		}

	});

}

function menuBtn(){
	if($('.menu-button.active').length>0){
		$('.menu-button, ul.primary').removeClass('active');
		}
		else {
		$('.menu-button, ul.primary').addClass('active');	
	}
}



function change_booking_fields(tp)
{
	for(var i = 0;i<booking_frames.length;i++) {
		if(booking_frames[i] == tp) {
			$('.'+booking_frames[i]+'-frame').removeClass('inactive');
			$('.'+booking_frames[i]+'-frame').addClass('active');
			$('.'+booking_frames[i]+'-tab').addClass('active');
		}
		else {
			if(!$('.'+booking_frames[i]+'-frame').hasClass(tp+'-frame')) {
				$('.'+booking_frames[i]+'-frame').removeClass('active');
				$('.'+booking_frames[i]+'-frame').addClass('inactive');
				$('.'+booking_frames[i]+'-tab').removeClass('active');
			}
		}
	}
	$('input[name="type"]').val(tp);
}

function change_booking_refid(tp,id)
{
	for(var i = 0;i<booking_frames.length;i++) {
		if(booking_frames[i] == tp) {
			$('.'+booking_frames[i]+'-frame').removeClass('inactive');
			$('.'+booking_frames[i]+'-frame').addClass('active');
			$('.'+booking_frames[i]+'-tab').addClass('active');
		}
		else {
			$('.'+booking_frames[i]+'-frame').removeClass('active');
			$('.'+booking_frames[i]+'-frame').addClass('inactive');
			$('.'+booking_frames[i]+'-tab').removeClass('active');
		}
	}
	$('input[name="type"]').val(tp);
}
function choose_booking_option(elem,tp,id)
{
	$('.'+tp+'-option').removeClass('active');
	$('#'+tp+'-option-'+id).addClass('active');
	$('input[name="'+tp+'-refid"]').val(id);
}

/*function show_offers(e,elem)
{
	e.preventDefault();
	var obj = $(elem);
	var href = obj.attr('href').replace('#','');
	if(!obj.hasClass('active')) {
		if(href == '*') {
			$('.offer-item-transition').fadeIn('fast');
		}
		else {
			$('.offer-item-transition').each(function(){
				if($(this).hasClass('offer-'+href)) {
					if(!$(this).is(':visible'))
						$(this).fadeIn('fast');
				}
				else {
					if($(this).is(':visible'))
						$(this).fadeOut('fast');
				}
			});
		}
		$('ul.portfolio-tabs li a').removeClass('active');
		obj.addClass('active');
	}
}*/

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
        if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		}
		$(this).addClass("active");
    });
    
    if($('#modal_click').length > 0) $('#modal_click').trigger('click');
});