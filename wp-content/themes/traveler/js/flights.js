Date.locale = {
    month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    short_names: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

var Explore = Explore || {};

Explore.Options = {
  earliestDeparture: 4,
  defaultReturn: 7,
  minAutocompleteCharacters: 4,

  dayOptions: function(){ var dayopts = "";
                 for(var i = 1; i < 32; i++) {  dayopts += "<option value=\"" + i + "\">" + i + "</option>"; }
                 return dayopts; }(),
  monthOptions: function(){  var monthopts = "";
                             for(var i = 0; i < 12; i++)
                             {  monthopts += "<option value=\"" + (i+1) + "\">" + Date.locale.short_names[i] + "</option>"; }
                             return monthopts; }(),
  yearOptions: function(){  var today = new Date();
                            var yearopts = "";
                            for(var i = today.getFullYear(); i <= new Date(today.getFullYear(), today.getMonth(), today.getDay()+362).getFullYear(); i++)
                            {  yearopts += "<option value=\"" + i + "\">" + i + "</option>"; }
                            return yearopts; }()

}

$(function(){
 var today = new Date();
  var earliestDeparture = new Date(today.getFullYear(), today.getMonth(), today.getDate()+Explore.Options.earliestDeparture);
  var defaultReturn = new Date(earliestDeparture.getFullYear(), earliestDeparture.getMonth(), earliestDeparture.getDate()+Explore.Options.defaultReturn);
  //setup calendars
if($("#field-depart-date").val() != '')
{
     var arr = $("#field-depart-date").val().split('/');
    $("#searchAir\\.segments0\\.departDate\\.day").val(arr[0]);
    $("#searchAir\\.segments0\\.departDate\\.month").val(arr[1]);
    $("#searchAir\\.segments0\\.departDate\\.year").val(arr[2]);  
}
$("#field-depart-date").change(function(){
    var arr = $("#field-depart-date").val().split('/');
    $("#searchAir\\.segments0\\.departDate\\.day").val(arr[0]);
    $("#searchAir\\.segments0\\.departDate\\.month").val(arr[1]);
    $("#searchAir\\.segments0\\.departDate\\.year").val(arr[2]);
});


if($("#field-return-date").val() != '')
{
    var arr = $("#field-return-date").val().split('/');
    $("#searchAir\\.segments1\\.departDate\\.day").val(arr[0]);
    $("#searchAir\\.segments1\\.departDate\\.month").val(arr[1]);
    $("#searchAir\\.segments1\\.departDate\\.year").val(arr[2]);
}
$("#field-return-date").change(function(){
    var arr = $("#field-return-date").val().split('/');
    $("#searchAir\\.segments1\\.departDate\\.day").val(arr[0]);
    $("#searchAir\\.segments1\\.departDate\\.month").val(arr[1]);
    $("#searchAir\\.segments1\\.departDate\\.year").val(arr[2]);
});

  

    //disable/enable
    if($("input[name=returnOrOneWay]").val() == 'R')
    {
        $("#field-return-date").removeAttr('disabled');
        $( "#field-return-date").removeClass('disable_input');   
    } else {
        $("#field-return-date").attr("disabled", "disabled");
        $( "#field-return-date").addClass('disable_input')
     }
  
    $("input[name=returnOrOneWay]").change(function(event){
     var x = $("#returnOrOneWay")
     //alert($(this).val());
     if($(this).val() == 'R'){

        $("#field-return-date").removeAttr('disabled');
        $( "#field-return-date").removeClass('disable_input')
        
     } else {
       $("#field-return-date").attr("disabled", "disabled");
        $( "#field-return-date").addClass('disable_input')
     }
  }); 

  //setup validation, copy
  $("#explore-flights, #explore-hotels form, #explore-cars form").submit(function(event){
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
     if($("input[name=returnOrOneWay]:checked").val() == 'R'){
        $("#searchAir\\.segments1\\.departCity").val($("#searchAir\\.segments0\\.arrivalCity").val());
        $("#searchAir\\.segments1\\.arrivalCity").val($("#searchAir\\.segments0\\.departCity").val());
        $("#searchAir\\.segments0\\.cabinIndicator").val($("#cabClassSelect").val());
        $("#searchAir\\.segments1\\.cabinIndicator").val($("#cabClassSelect").val());
     } else {
        $("#searchAir\\.segments1\\.departCity").val("");
        $("#searchAir\\.segments1\\.arrivalCity").val("");
        $("#searchAir\\.segments0\\.cabinIndicator").val($("#cabClassSelect").val());
        $("#searchAir\\.segments1\\.cabinIndicator").val("");
     }
     $(".explore-data-copy").each(function(){
        $(this).val($("#" + $(this).attr('idref').replace(/\./g, "\\.")).val());
     });

     //return false;
     return $(".explore-error", this).size() == 0;

   });
});
