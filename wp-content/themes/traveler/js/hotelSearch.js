$("#explore-hotels form").submit(function(event){

    //Location
    // For PICKUP

    if($("#searchCar\\.segments0\\.pickupCity").val() != null)
    {
        var pickupCity = $("#searchCar\\.segments0\\.pickupCity").val();
        $("#searchCar\\.segments0\\.dropoffCity").val(pickupCity);
    }

    if($("#field-hotel-checkin").val() != null)
    {
        var arr = $("#field-hotel-checkin").val().split('/');
        $("#searchHotelV2\\.segments0\\.checkinDate\\.day").val(arr[0]);
        $("#searchHotelV2\\.segments0\\.checkinDate\\.month").val(arr[1]);
        $("#searchHotelV2\\.segments0\\.checkinDate\\.year").val(arr[2]);
    }



    if($("#field-hotel-checkout").val() != null)
    {
        var arr = $("#field-hotel-checkout").val().split('/');
        $("#searchHotelV2\\.segments0\\.checkoutDate\\.day").val(arr[0]);
        $("#searchHotelV2\\.segments0\\.checkoutDate\\.month").val(arr[1]);
        $("#searchHotelV2\\.segments0\\.checkoutDate\\.year").val(arr[2]);
    }
    if($("#field-hotel-room-num").val() != null)
    {
        var arr = $("#field-hotel-room-num").val();
        $("#searchHotelV2\\.roomCount").val(arr);
    }
    if($("#field-hotel-adult").val() != null)
    {
        var arr = $("#field-hotel-adult").val();
        $("#searchHotelV2\\.segments0\\.guestCount").val(arr);
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