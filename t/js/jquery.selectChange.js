jQuery.fn.selectChange = function(options) {
	if (options) jQuery.extend(options);
	return this.each( function() {
		var thisSel = jQuery(this);
		thisSel.wrap('<span><'+'/span>');
		thisSel.after('<span><'+'/span>');
		var thisNext = thisSel.next();
		var thisParent = thisSel.parent();
		thisSel.css({
			'display':'inline',
			'left':0,
			'opacity':0,
			'position':'absolute',
			'text-align':'left',
			'visibility':'visible',
			'z-index':1
			});
		thisParent.addClass().css({
			'display':'inline-block',
			'left':0,
			'position':'relative',
			'top':0,
			'text-align':'right',
			'vertical-align':'middle',
			'z-index':0
			});
		thisNext.addClass(options).css({
			'display':'block',
			'white-space':'nowrap'
			});
		thisSel.bind('change',function() {
			jQuery(this).next().text(this.options[this.selectedIndex].text);
			}).bind('resize',function() {
			jQuery(this).parent().width( jQuery(this).width()+'px' );
			});
		thisSel.trigger('change').trigger('resize');
		});
	}
