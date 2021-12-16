
jQuery(document).ready(function(jQuery) {
  	jQuery("li.submenu a").click(function(){
		if(jQuery(this).parent().hasClass("submenu"))
		{
			jQuery('.submenu-list').hide()
			jQuery('.submenu').removeClass('active');
			jQuery('.submenu a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery(this).parent().addClass('active');
			jQuery(this).siblings().slideDown("slow");
		}
	});
	jQuery(".list-actions a.close").click(function(){
		jQuery(this).parent().parent().hide();
		jQuery(this).parent().parent().siblings().hide();
	});
	jQuery(".list-actions a.minimize").click(function(){
		//jQuery(this).parent().parent().hide();
		jQuery(this).parent().parent().siblings().hide();
	});
	jQuery(".list-actions a.maximize").click(function(){
		//jQuery(this).parent().parent().hide();
		jQuery(this).parent().parent().siblings().slideDown();
	});
	jQuery('#keyboard').click(function(){
		if(jQuery(this).is(':checked')){
			jQuery('#keyboard_ad').hide();
			jQuery('#keyboard_display').show();
		} else{
			jQuery('#keyboard_ad').show();
			jQuery('#keyboard_display').hide();
		}
	});
	jQuery('.key').bind('click',function(){
		alert(jQuery(this).html());	
	});
	
	
	
	
		// menu
		
	//menu_extras

		
	
});




function submit(){
	document.forms[0].submit();
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}



