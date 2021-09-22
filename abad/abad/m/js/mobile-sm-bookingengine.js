function init_datePicker(form) {
    /* SHOW HIDE DEPENDING ON CURRENT HOTEL */
    var hotel_id = $('#hotel_id').val();
    var form_hotel_id = $(form).attr('data-hotel_id');
    /* COMMON DATA INIT */
    var $common = $(form).find('.common');
    var lengthOfStay = 1;
    // temp is used to ignore uglify inside tasks
    var temp = $common.attr('data-lengthOfStay');
    if (temp) {
      lengthOfStay = parseInt(temp, 10);
    }
    var checkInDate = new Date();
    temp = $common.attr('data-checkInDate');

    if (temp == 'Tomorrow') {
        checkInDate = new Date(checkInDate.getTime() + (24 * 60 * 60 * 1000));
    }

    var checkOutDate = new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000 * lengthOfStay);

    $(form).find('.arrival-date-input').val(moment(checkInDate).format('YYYY-MM-DD'));
    $(form).find('.departure-date-input').val(moment(checkOutDate).format('YYYY-MM-DD'));
}


function sm_update_booking_engine_hotels() {
    var $option = $('.sm_booking_form #booking-engine-groups').find('option:selected');
    var group_id = $option.attr('data-group_id');
    $('.sm_booking_form #booking-engine-hotels').empty();
    $('.sm_booking_form #booking-engine-hotels-clone option').each(function() {
        if (group_id === $(this).attr('data-group_id')) {
            $('.sm_booking_form #booking-engine-hotels').append($(this).clone());
        }
    });
}
function sm_update_booking_engine_forms(hotel_id) {
    var form = $('form.sm_booking_form');
    var form_hotel_id = $(form).attr('data-hotel_id');
    if (hotel_id !== form_hotel_id) {
        $(beFormData.data).each(function() {
            $(this.engines).each(function() {
                if (parseInt(this.propertyId) === parseInt(hotel_id)) {
                    if (this.bookingType === 'form') {
                        $(form).removeClass('booking-button');
                    } else if (this.bookingType === 'button') {
                        $(form).addClass('booking-button');
                    }
                    $(form).attr('data-hotel_id', this.propertyId);
                    $(form).attr('data-engine', this.bookingEngine);
                    $(form).attr('data-group_id', this.propertyId);
                    $(form).attr('action', this.bookingURL);
                    if (this.openInNewWindow === 'true') {
                        $(form).attr('target', '_blank');
                    } else {
                        $(form).attr('target', '_parent');
                    }

                    var f_adults = $(form).find('select#adults_id');
                    var f_child = $(form).find('select#children_id');
                    var f_promo = $(form).find('.promo-block');
                    var f_checkIn = $(form).find('.arrival-date-input');
                    var f_checkOut = $(form).find('.departure-date-input');
                    var f_submitBtn = $(form).find('.btn');
                    if ($(f_adults).find('option').length !== this.adult) {
                        $(f_adults).empty()
                        for (i = 1; i <= this.adult; i++) {
                            $(f_adults).append('<option value="' + i + '">' + i + '</option>');
                        }
                    }
                    $(f_adults).val(this.adults).change();
                    if (($(f_child).find('option').length - 1) !== this.child) {
                        $(f_child).empty()
                        for (i = 0; i <= this.child; i++) {
                            $(f_child).append('<option value="' + i + '">' + i + '</option>');
                        }
                    }
                    if (this.bookingType === 'button') {
                        $(form).find('toHide').hide();
                    }
                    if (this.showPromocode === 'true') {
                        $(f_promo).removeClass('hidden');
                    } else {
                        $(f_promo).addClass('hidden')
                    }

                    $(f_child).val(this.children).change();
                    var child_title = 'Age : ' + this.childMinAge + '-' + this.childMaxAge + ' Years';
                    $(f_child).val(this.children).attr('title', child_title);
                    $(f_submitBtn).val(this.resBtnName).removeAttr('title');
                    $(form).find('#property_id').val(this.propertyId);
                    var common = $(form).find('.common');
                    $(common).attr('data-checkindate', this.checkInDate);
                    $(common).attr('data-lengthofstay', this.lengthOfStay);
                    $(common).attr('data-childminage', this.childMinAge);
                    $(common).attr('data-childmaxage', this.childMaxAge);
                    init_datePicker(form);
                }
            });
        });
    }
}

function init_sm_booking_engine() {
    var device = $('#device').val();
    var is_chain = ($('#parent_hotel_id').length && $('#hotel_id').length) ? true : false;
    var is_parent = (is_chain && $('#parent_hotel_id').val() === $('#hotel_id').val()) ? true : false;
    var websiteMessagingStatus = $('#websiteMessagingStatus').val();

    $('.sm_booking_form #booking-engine-groups').on('change', function() {
        sm_update_booking_engine_hotels();
        var $option = $('.sm_booking_form #booking-engine-hotels').find('option:selected');
        var hotel_id = $option.attr('data-hotel_id');
        sm_update_booking_engine_forms(hotel_id);
        // toggle_other_links_display();
        if (websiteMessagingStatus === 'True') {
            formInitSiteMessaging($('.sm_booking_form #booking-engine-hotels').find('option:selected').attr('data-hotel_id'), device, is_parent, is_chain);
        }
    });
    
    $('.sm_booking_form #booking-engine-hotels').on('change', function() {
        var $option = $('.sm_booking_form #booking-engine-hotels').find('option:selected');
        var hotel_id = $option.attr('data-hotel_id');
        sm_update_booking_engine_forms(hotel_id);
        // toggle_other_links_display();
        if (websiteMessagingStatus === 'True') {
            formInitSiteMessaging($(this).find('option:selected').attr('data-hotel_id'), device, is_parent, is_chain);
        }
    });
    
}

var is_chain = ($('#parent_hotel_id').length && $('#hotel_id').length) ? true : false;
if (is_chain) {
    init_sm_booking_engine();
}

init_datePicker('#booking-form'); // required in both chain and single hotels

