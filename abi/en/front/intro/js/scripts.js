setSizes();
$(document).ready(function(){
	setSizes();
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


	$(".home-slider").slick({
	  infinite: true,
	  fade:true,
	  dots:true,
	  arrows:false
	});

});
$(window).bind("load",function(){
	setSizes();
});
$(window).bind("resize",function(){
	setSizes();
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