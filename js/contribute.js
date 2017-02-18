// Marjolein Koudijs
$(document).ready(function () {
	
	//Empty input fields Nieuwbrief on click
	$("#inputName").click(function() {
		this.value = "";
	});
	$("#inputMail").click(function() {
		this.value = "";
	});

	// Check for empty fields and warn user
	$("#verstuur").click(function() {
		var naam = $("#inputName").val();
		var mail = $("#inputMail").val();
		if (naam == "" || naam == "Naam") {
			alert("Vul je naam in.");
		} else if (mail == "" || mail == "Emailadres") {
			alert("Vul je emailadres in.");
		} else {
			alert("Bedankt voor je aanmelding, "+ naam);
		}
	});

	//Alert when donating on click
	$("#euro5").click(function() {
		alert("Bedankt voor jouw 5 euro!");
	});
	$("#euro10").click(function() {
		alert("Bedankt voor jouw 10 euro!");
	});
	$("#euro20").click(function() {
		alert("Bedankt voor jouw 20 euro!");
	});

});