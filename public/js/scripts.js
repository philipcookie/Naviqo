console.log("I AM LINKED");

$(document).ready(function() {

	var count = 0;

	$('input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$(this).parent().closest('div.search_result').addClass("selected");
			count++;
			$("body").overhang({
				type: "confirm",
				message : "Request a proposal from " + count + " vendors.",
				primary: "#116990", 
				accent: "#FC9923", 
				});
		} else {
			count--;
			$(this).parent().closest('div.search_result').removeClass("selected");
		}
	});
});