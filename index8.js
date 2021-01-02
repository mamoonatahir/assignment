var random = (Math.floor(Math.random() * 10 + 1));
	document.write("<u>" + "<h1>" + "Guess number game" + " </h1>" + "</u>" + "</br>")
	var guess = prompt("Let Guess Which number i have store " )
	if (Math.floor(guess) === Math.floor(random)) {
	    document.write("<i>" + "<h1>" + "Bingo! Correct answer " + "</h1 >" + "</i >" + "</br >")
	
	} else if (Math.floor(++guess) === Math.floor(random)) {
	
	    document.write("<i>" + "<h1>" + "Close enough to the correct answer " + random + "</h1 >" + "</i >" + "</br >")
	
	} else {
	    document.write("<i>" + "<h1>" + "Try again" + "</h1 >" + "</i >" + "</br >")
	}