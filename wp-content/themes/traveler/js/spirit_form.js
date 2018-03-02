
var len = $("#number-passenger option").length;
$("#number-passenger" ).change(function() {
	
	var selected = $("option:selected", this).text();
	
  	var i;
	for (i = 1; i <= len; i++) 
  	{
  		var elem = $('#'+"group-passenger"+ i);
  		if(i<=selected){
  			enableEmlement(elem, true);
  		}
  		else
  		{
  			enableEmlement(elem, false);
  		}
  	}
  	
  	
});

function enableEmlement(element, isEnable)
{
	if (isEnable)
		element.css("display","block");
	else
		element.css("display","none");		
}

//type of passenger
function actionTypePassenger(element)
{
	var name = $(element).attr('name');
	var selected = $("option:selected", element).text();
	var elem = $('#'+"type-" + name);
	if(selected == "Adult" )
	{
		enableEmlement(elem, false);
		
	}
	else
	{
		enableEmlement(elem, true);
		if(selected == "Pensioner" )
		{	
			//var kids = elem.children();
			elem.children("*").css('display', "block");
			elem.children("*").last().css('display', "none");
		}
		else
		{
			elem.children("*").css('display', "none");
			elem.children("*").last().css('display', "block");
		}
		
	}
}
for (i = 1; i <= len; i++) 
  	{
		$("[name='passenger"+i+"']").change(function() {
			actionTypePassenger($(this));
		});
  	}
