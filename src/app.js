$(function(){

	// Include the css
	const css = require('./app.scss');

	// Definining variables
	var rowCount = 0;
	var words = [
		"Ander","Abuis","Baard","Bench","Bende","Boord","Braaf","Braam","Brood","Check","Drank","Draag","Drugs","Faalt","Fabel","Fiets","Files","Graaf","Graan","Graat","Groen","Groot","Hallo",
		"Hecht","Jacht","Jemig","Nooit","Paard","Paars","Plaag","Quota","Schop","Schot","Tabak","Trein","Trouw","Vrouw","Waard","Wagen","Water","Woord","Zagen","Zomer","Zucht","Zwart"];
	
	// Pick random word from the list
	var answer = words[Math.floor(Math.random() * words.length)];
	var answerArray = answer.split('');

	// Log the answer in the console
	console.log(answer);

	// Get the first character of the picked word
	var firstChar = answer.charAt(0);

	// Manipulate the content and css of the first input field
	$("#letter0_0").val(firstChar);
	$("#letter0_0").css("background-color", "red");

	// Function gets executed when the Check button is clicked
	$("#check").click(function() {
		// Input variable
		var input;
		// For loop that loops through all the 5 input fields
		for(var i = 0 ; i < 5; i++){
			// Gets the input fields to check afterwards
			input = $("#letter"+rowCount+'_'+i);

			// Makes the input yellow if the letter is correct but not in the right input field
			if (answerArray.includes(input.val())) {
				input.css("background-color", "yellow");
			}

			// Makes the input red if the letter is correct at the same input field and add it to next row
			if (input.val() === answerArray[i]){
				input.css("background-color", "red");
				// Only make inputs in next row red if word is not guessed yet
				$("#letter"+(rowCount+1)+'_'+i).css("background-color", "red");
				$("#letter"+(rowCount+1)+'_'+i).val(input.val());
			}
		}

		// After 5 tries it's game over and the program stops
		if (rowCount > 3) {
			$("#result").text("Helaas, probeer het opnieuw!");
		}

		// Code to check if the input is correct 
		var correct = true;
		for (var i = 0 ; i < 5; i++){
			input = $("#letter"+rowCount+'_'+i);
			if (input.val() != answerArray[i]){
				correct = false;
			}
		}

		// If correct is true let the player know
		if (correct) {
			$("#result").text("Het woord is goed, je hebt gewonnen!");
		}

		// After every try we have to add 1 to the rowCount
		rowCount++;

		// If incorrect after a try we have to manipulate the first input field again
		if (!correct) {
			$("#letter"+rowCount+'_0').val(answer.charAt(0));
			$("#letter"+rowCount+'_0').css("background-color", "red");
		}

	});

});