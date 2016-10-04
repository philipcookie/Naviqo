console.log("I AM LINKED");

$(document).ready(function() {

	$('input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$(this).parent().closest('div.search_result').addClass("selected");
		} else {
			$(this).parent().closest('div.search_result').removeClass("selected");
		}
	});
});