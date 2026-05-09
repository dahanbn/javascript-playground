// here a the three location variables, and we set a ship at location 3, 4 & 5
let location1 = 3;
let location2 = 4;
let location3 = 5;

// three more to deal with user guess
let guess;
let hits = 0;
let guesses = 0;

// finally the variable that shows if a ship is sunk
let isSunk = false;

// main loop that runs until the ship is sunk
// ☑ create loop and get user guess
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	
	// ☑ Check user guess
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number between 0 and 6!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			hits = hits +1;
		    alert("HIT!");	
			// ☑ Check if ship has been sunk
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			} 
		} else {
			alert("MISS");
		}
	}
}

// ☑ Display stats to user
let stats = "You took " + guesses + " guesses to sink the battleship, " +
				"which means your shooting accuracy was " + (3/guesses);
alert(stats);