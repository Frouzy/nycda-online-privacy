$(document).ready(function () {
	$("#answerOne").click(function() {
		alert("Super gevaarlijk!");
	});
	$("#answerTwo").click(function() {
		alert("Goed bezig!");
	});

	$("#dropbtnKind").click(function(){
        $("#kind").slideToggle("slow");
    });
    $("#dropbtnVolw").click(function(){
        $("#volw").slideToggle("slow");
    });

});