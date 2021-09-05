function decreaseqty(elem)
{
	var obj = $(elem);

	var input = obj.parent().find('input[type="integer"]');
	var v = parseInt(input.val());
	var minval = 1;
	if(input.attr('name') == 'numberofchildren')
		minval = 0;
	if(v > minval) {
		var nv = v - 1;
		input.val(nv);
		if(input.attr('name') == 'numberofchildren') {
			obj.parent().parent().find('.ages').find('.form-group').last().remove();
			if(obj.parent().parent().find('.ages').find('.form-group').length == 0)
				obj.parent().parent().find('.ages').css('display','none');
		}
		//checkChildren(elem);
	}
	else {
		return false;
	}
}
function increaseqty(elem)
{
	var obj = $(elem);
	var input = obj.parent().find('input[type="integer"]');
	var v = parseInt(input.val());
	var nv = v + 1;
	input.val(nv);
	if(input.attr('name') == 'numberofchildren')
	checkChildren(elem);
}
function checkChildren(elem)
{
	var obj = $(elem);
	var input = obj.parent().find('input[type="integer"]');
	var v = parseInt(input.val());
	var cnt = obj.parent().parent().find('.ages');
	var cages = cnt.find('input[name="ages[]"').length;
	if(cages > v) {
		for(var i =1;i<=(cages - v);i++)
			obj.parent().parent().find('.ages').find('.form-group').last().remove();
	}
	else {
		for(var i =1;i<=(v - cages);i++) {
			cages = cnt.find('input[name="ages[]"').length;
			cnt.append(age_label.replace('{age_label}',(cages + 1)));
		}
	}
	if(obj.parent().parent().find('.ages').find('.form-group').length > 0)
		obj.parent().parent().find('.ages').css('display','block');
	else
		obj.parent().parent().find('.ages').css('display','none');
}
function check_age(elem)
{
    var obj = $(elem);
    if(obj.val() > agemax) {
        alert(agemax_errormsg);
        obj.val('');
    }
}
$(document).ready(function(){
	$('.phone-format').each(function() {
		var id = $(this).attr('id');
		$("#"+id).intlTelInput({
			initialCountry: "ae",
			preferredCountries: ['ae'],
			geoIpLookup: function(callback) {
			    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
			      var countryCode = (resp && resp.country) ? resp.country : "";
			     // alert(countryCode);
			      if(countryCode != '')
			      	callback(countryCode);
			    });
			},
			hiddenInput:'mobilenumber',
			utilsScript: assetsurl+"js/intl-tel-input-master/build/js/utils.js",
		});
	});
	$.datetimepicker.setLocale(datecalendar_lang);
	$('.date-picker').each(function(){
		var obj = $(this);
		obj.datetimepicker({
			i18n:datepicker_tra,
			timepicker:false,
			format:'Y-m-d',
			minDate:obj.val(),
			defaultDate:obj.val(),
			onChangeDateTime:function(dp,$input) {
				_validateD(obj.attr('data-inputtarget'),$input.val());
			 }
		});
	});
	$('.date-picker-popup').each(function(){
		var obj = $(this);
		obj.datetimepicker({
			i18n:datepicker_tra,
			timepicker:false,
			format:'Y-m-d',
			defaultDate:$('input[name="'+obj.attr('data-inputtarget')+'"]').val(),
			minDate:$('input[name="'+obj.attr('data-inputtarget')+'"]').val(),
			onChangeDateTime:function(dp,$input) {
				_validateD(obj.attr('data-inputtarget'),$input.val());
			    $('input[name="'+obj.attr('data-inputtarget')+'"]').val($input.val());
			    _updateD(obj.attr('data-inputtarget'));
			 },
			 onGenerate:function(current_time,$input) {
			 	_updateD(obj.attr('data-inputtarget'));
			 }
		});
	});
	function _validateD(inp,dt)
	{
		var day = new Date(dt);
		var newDay = new Date(day);
		if(inp == 'checkin_date') {
			if($('input[name="'+inp+'"]').hasClass('meeting-form-date'))
				newDay.setDate(newDay.getDate());
			else
				newDay.setDate(newDay.getDate() + 1);
			var checkdate = $('input[name="checkout_date"]').val();
			var checkDay = new Date(checkdate);
			
			
			var newm = newDay.getMonth() + 1;
			if(newm < 10) newm = '0'+newm;
			var newd = newDay.getDate();
			if(newd < 10) newd = '0'+newd;
			var newdate = newDay.getFullYear()+'-'+newm+'-'+newd;
			
			if(checkDay.getTime() <= newDay.getTime()) {
				$('input[name="checkout_date"]').val(newdate);
				_updateD('checkout_date');
			}
			$('input[name="checkout_date"]').parent().find('.date-picker-popup, .date-picker').datetimepicker('setOptions', {defaultDate: newdate,'minDate':newdate});
		}
		else {
			if($('input[name="'+inp+'"]').hasClass('meeting-form-date'))
				newDay.setDate(newDay.getDate());
			else
				newDay.setDate(newDay.getDate() -1);
			var checkdate = $('input[name="checkin_date"]').val();
			var checkDay = new Date(checkdate);
			var newdate = newDay.getFullYear()+'-'+(newDay.getMonth() + 1)+'-'+newDay.getDate();
			if(checkDay.getTime() > newDay.getTime()) {
				$('input[name="checkin_date"]').val(newdate);
				_updateD('checkin_date');
			}
		}
	}
	function _updateD(inp) {
		var inpOb = $('input[name="'+inp+'"]');
		var dt = inpOb.val();
		var arr = dt.split('-');
	 	var y = arr[0];
	 	var m = arr[1];
	 	var d = arr[2];
	 	var mname = months_tra[parseInt(m) - 1];
		inpOb.parent().find('.day').html(d);
		inpOb.parent().find('.month').html(mname);
	}
	$('.time-picker').each(function(){
		var obj = $(this);
		obj.datetimepicker({
			datepicker:false,
			format:'H:i',
			minTime:booking_min_time
		});
	});
	$('.form-validator').each(function(){
	    console.log("HEREEEE");
     	var formObj = $(this);
     	var formBtn = formObj.find('input[type="submit"]');
    	 formBtn.click(function(event) {
		    event.preventDefault();
		    $('.phone-format').each(function() {
		    	var obj = $(this);
		    	var id = obj.attr('id');
		    	var intlNumber = obj.intlTelInput("getNumber");
		    	$('input[name="'+id+'"]').val(intlNumber);
		    });
		    ajaxSubmit_multipart(formObj);
	    });
   	});
});
function ajaxSubmit_multipart(formObj)
{
	var formID = formObj.attr('id');
	var formAction = formObj.attr('action');
    var formMethod = formObj.attr('method');
    var formBtn = formObj.find('input[type="submit"]');
    var formBtn_text = formBtn.val();
    formBtn.val(loading_text);
    formBtn.attr('disabled','disabled');
    formObj.find('.messages').html('');
    formObj.find('input[name="g-recaptcha-response"]').remove();
 	grecaptcha.execute(recaptcha_sitekey, {action: 'royalmform'}).then(function(token) {    
 		formObj.prepend('<input type="hidden" name="g-recaptcha-response" value="'+token+'" />');
 		var formData = new FormData(formObj[0]);
		$.ajax({
		    url:formAction,
		    type:formMethod,
		    data:formData,
		    success:function(response) {
		      if(response.result == true) {
		      	if(response.form_html) {
					$('form[name="bookingFormSubmit"]').remove();
		      		$('body').append(response.form_html);
		      		//$('form[name="bookingFormSubmit"]').remove();
		      	}
		        else if(response.message) {
		        	formObj.find('.messages').html('<div class="success">'+response.message+'</div>');
		        	$('html, body').animate({scrollTop : formObj.find('.messages').offset().top - 120},500);
		        	//alert_float('success',response.message);
		        }
		        if(response.redirect_link)
		          window.location = response.redirect_link;
		      	document.getElementById(formID).reset();
		      	//success_callback(response);
		      }
		      else {
		        if(response.errors) {
		          $.each(response.errors, function(i, val){
		            var o = formObj.find( 'input[name="'+i+'"], textarea[name="'+i+'"], select[name="'+i+'"]' );
		            if(o) {
		              o = o.parent('div');
		              o.addClass('error').append('<div class="form-error">'+val+'</div>');
		            }
		         });
		        }
		        if(response.message) {
		          formObj.find('.messages').html('<div class="error">'+response.message+'</div>');
		          //if(is_mobile) {
		            $('html, body').animate({scrollTop : formObj.find('.messages').offset().top - 120},500);
		          //}
		        }
		      }
		      formBtn.removeAttr('disabled','disabled');
		      formBtn.val(formBtn_text);
		    },
		    fail:function(response){
		      formBtn.removeAttr('disabled','disabled');
		      formBtn.val(formBtn_text);
		      formObj.find('.messages').html('<div class="error">ERROR</div>');
		      $('html, body').animate({scrollTop : formObj.find('.messages').offset().top - 120},500);
		    },
		    error:function(response){
		      formBtn.removeAttr('disabled','disabled');
		      formBtn.val(formBtn_text);
		      formObj.find('.messages').html('<div class="error">ERROR</div>');
		      $('html, body').animate({scrollTop : formObj.find('.messages').offset().top - 120},500);
		    },
		    contentType: false,
	        processData: false
		});
	});
}