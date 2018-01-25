var last_select_clicked = !1;
$('.st-location-name').each(function() {
    var t = $(this);
    var parent = t.closest('.st-select-wrapper');
    $(this).keyup(function(event) {
        last_select_clicked = t;
        parent.find('.st-location-id').remove();
        var locale = $('.skyscanner-search-flights-data').data('locale');
        var name = t.attr('data-name');
        var val = t.val();
        if (val.length >= 4) {
            //hatran edit   
            $.ajax({
                url: "https://twac.sabreexplore.com.au:443/citySearchJson.aj?sn=twac&ida=true",
                dataType: "jsonp",
                data: {
                    term: val
                },
                success: function( data ) {

                    if (typeof data.query.results.result == 'object') {
                        var html = '';
                        html += '<select class="st-location-id st-hidden" tabindex="-1">';
                        $.each(data.query.results.result, function(key, value) {
                            var select = value.select;
                            var display = value.display;
                            html += '<option value="' + value.select + '">' + value.display + '</option>'
                        });
                        html += '</select>';
                        parent.find('.st-location-id').remove();
                        parent.append(html);
                        html = '';
                        $('select option', parent).prop('selected', !1);
                        $('select option', parent).each(function(index, el) {
                            var country = $(this).data('country');
                            var text = $(this).text();
                            var text_split = text.split("||");
                            text_split = text_split[0];
                            var highlight = get_highlight(text, val);
                            if (highlight.indexOf('</span>') >= 0) {
                                html += '<div data-text="' + text + '" data-value="' + $(this).val() + '" class="option2">' + '<span class="label"><a href="#">' + text_split + '</a>' + '</div>'
                            }
                        });
                        $('.option-wrapper').html(html).show();
                        t.caculatePosition($('.option-wrapper'), t)
                    }
                }

            });
            //end
            /*
                            var l = locale.split('-');
                            var url = "https://autocomplete.travelpayouts.com/jravia?locale=" + l[0] + "&with_countries=false&q=" + val;
                            $.getJSON(url, function(data) {
                                if (typeof data == 'object') {
                                    if (typeof data == 'object') {
                                        var html = '';
                                        html += '<select class="st-location-id st-hidden" tabindex="-1">';
                                        $.each(data, function(key, value) {
                                            var n = value.name;
                                            if (value.name == null) {
                                                n = value.title
                                            }
                                            //html += '<option value="' + value.code + '">' + value.city_fullname + ' (' + n + ') - ' + value.code + '</option>'
                                        });
                                        html += '</select>';
                                        parent.find('.st-location-id').remove();
                                        parent.append(html);
                                        html = '';
                                        $('select option', parent).prop('selected', !1);
                                        $('select option', parent).each(function(index, el) {
                                            var country = $(this).data('country');
                                            var text = $(this).text();
                                            var text_split = text.split("||");
                                            text_split = text_split[0];
                                            var highlight = get_highlight(text, val);
                                            if (highlight.indexOf('</span>') >= 0) {
                                                html += '<div data-text="' + text + '" data-value="' + $(this).val() + '" class="option2">' + '<span class="label"><a href="#">' + text_split + '</a>' + '</div>'
                                            }
                                        });
                                        $('.option-wrapper').html(html).show();
                                        t.caculatePosition($('.option-wrapper'), t)
                                    }
                                }
                            })
                            */
        }
    });
    $(document).on('click', '.option-wrapper .option2', function(event) {
        if (last_select_clicked.length > 0) {
            var parent = last_select_clicked.closest('.st-select-wrapper');
            event.preventDefault();
            var value = $(this).data('value');
            var text = $(this).text();
            if (text != "") {
                last_select_clicked.val(value);//hatran change text to value
                last_select_clicked.attr('data-value', $(this).data('value'));
                $('select option[value="' + value + '"]', parent).prop('selected', !0);
                $('.option-wrapper').html('').hide();
                //update_link()
            }
        }
    });

    t.caculatePosition = function() {
        if (!last_select_clicked || !last_select_clicked.length) return;
        var wraper = $('.option-wrapper');
        var input_tag = last_select_clicked;
        var offset = parent.offset();
        var top = offset.top + parent.height();
        var left = offset.left;
        var width = input_tag.outerWidth();
        var wpadminbar = 0;
        if ($('#wpadminbar').length && $(window).width() >= 783) {
            wpadminbar = $('#wpadminbar').height()
        } else {
            wpadminbar = 0
        }
        top = top - wpadminbar;
        var z_index = 99999;
        var position = 'absolute';
        if ($('#search-dialog').length) {
            position = 'fixed';
            top = top + wpadminbar - $(window).scrollTop();
            z_index = 99999
        }
        wraper.css({
            position: position,
            top: top,
            left: left,
            width: width,
            'z-index': z_index
        })
    };
    $(window).resize(function() {
        t.caculatePosition()
    })

});
function getTwentyFourHourTime(amPmString) {
    var d = new Date("1/1/2013 " + amPmString);
    return d.getHours() + ':' + d.getMinutes();
}
function get_highlight(text, val) {
    var highlight = text.replace(new RegExp(val + '(?!([^<]+)?>)', 'gi'), '<span class="highlight">$&</span>');
    return highlight
}

$(function(){


//setup calendars
    // For PICKUP
    if($("#field-car-pickup-date").val() != null)
    {
        var arr = $("#field-car-pickup-date").val().split('/');
        $("#searchCar\\.segments0\\.pickupDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.pickupDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.pickupDate\\.year").val(arr[2]);
    }
    $("#field-car-pickup-date").change(function(){
        var arr = $("#field-car-pickup-date").val().split('/');
        $("#searchCar\\.segments0\\.pickupDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.pickupDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.pickupDate\\.year").val(arr[2]);
    });

    if($("#field-car-pickup-time").val() != null)
    {
        var arr = $("#field-car-pickup-time").val();
        $("#segments0\\.pickupTime").val(arr);
    }
    $("#field-car-pickup-time").change(function () {
        var arr = $("#field-car-pickup-time").val();
        $("#segments0\\.pickupTime").val(arr);
    });



    if($("#field-st-dropoff-date").val() != null)
    {
        var arr = $("#field-st-dropoff-date").val().split('/');
        $("#searchCar\\.segments0\\.dropoffDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.dropoffDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.dropoffDate\\.year").val(arr[2]);
    }
    $("#field-st-dropoff-date").change(function(){
        var arr = $("#field-st-dropoff-date").val().split('/');
        $("#searchCar\\.segments0\\.dropoffDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.dropoffDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.dropoffDate\\.year").val(arr[2]);
    });

    if($("#field-st-dropoff-time").val() != null)
    {
        var arr = $("#field-st-dropoff-time").val();
        $("#segments0\\.dropoffTime").val(arr);
    }
    $("#field-st-dropoff-time").change(function () {
        var arr = $("#field-st-dropoff-time").val();
        $("#segments0\\.dropoffTime").val(arr);
    });

//setup validation, copy
$("#explore-cars form").submit(function(event){

    //Location
    // For PICKUP

    if($("#searchCar\\.segments0\\.pickupCity").val() != null)
    {
        var pickupCity = $("#searchCar\\.segments0\\.pickupCity").val();
        $("#searchCar\\.segments0\\.dropoffCity").val(pickupCity);
    }

    if($("#field-car-pickup-date").val() != null)
    {
        var arr = $("#field-car-pickup-date").val().split('/');
        $("#searchCar\\.segments0\\.pickupDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.pickupDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.pickupDate\\.year").val(arr[2]);
    }

    if($("#field-car-pickup-time").val() != null)
    {
        var arr = $("#field-car-pickup-time").val();
        $("#searchCar\\.segments0\\.pickupTime").val(getTwentyFourHourTime(arr));
    }

    if($("#field-st-dropoff-date").val() != null)
    {
        var arr = $("#field-st-dropoff-date").val().split('/');
        $("#searchCar\\.segments0\\.dropoffDate\\.day").val(arr[0]);
        $("#searchCar\\.segments0\\.dropoffDate\\.month").val(arr[1]);
        $("#searchCar\\.segments0\\.dropoffDate\\.year").val(arr[2]);
    }
    if($("#field-st-dropoff-time").val() != null)
    {
        var arr = $("#field-st-dropoff-time").val();
        $("#searchCar\\.segments0\\.dropoffTime").val(getTwentyFourHourTime(arr));
    }
    //$(".explore-error").detach();
    // $(".explore-validate-airport",this).each(function(){
    //     var val = $(this).val();
    //     if(val == null || !(val.length == 3 || /.*\([A-Z]{3}\)/.test(val) ) ){
    //        $(this).after("<div class='explore-error'>Please select an airport or enter an airport code</div>");
    //     }
    //  });
    // $(".explore-validate-date", this).each(function(){
    //     if($(this).hasClass("disabled")) { return; }
    //     var selDate = new Date($(".year",this).val(), $(".month", this).val()-1, $(".day",this).val());
    //     if($(this).attr('dateafter')){
    //        var that = $("#" + $(this).attr('dateafter').replace(/\./g, "\\."));
    //        var thatDate = new Date($(".year",that).val(), $(".month", that).val()-1, $(".day",that).val());
    //        if(selDate < thatDate){
    //           $(this).after("<div class='explore-error'>Please select a date after " + thatDate.getDate() + "-" + Date.locale.short_names[thatDate.getMonth()] + "-" + thatDate.getFullYear() + "</div>");
    //        }
    //     }
    //     if(selDate < earliestDeparture){
    //        $(this).after("<div class='explore-error'>Please select a date after " + earliestDeparture.getDate() + "-" + Date.locale.short_names[earliestDeparture.getMonth()] + "-" + earliestDeparture.getFullYear() + "</div>");
    //     }
    // });

   // $(".explore-data-copy").each(function(){
     //   $(this).val($("#" + $(this).attr('idref').replace(/\./g, "\\.")).val());
    //});

    //return false;
    return $(".explore-error", this).size() == 0;

});
});
