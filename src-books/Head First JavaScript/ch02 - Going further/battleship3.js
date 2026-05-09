// with version 3 trying to solve the problem that hitting three times 
// the same locations will sink the ship 

// ☑ Generate the ship location randomly
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

// three boolean to recognise if a location was already hit
let location1Hit = false;
let location2Hit = false;
let location3Hit = false;

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
		if (guess == location1) {
			// location1 was hit
			// check, if it was already hit
			if (location1Hit == false) {
				// first time, set hit to true
				location1Hit = true;
				hits = hits + 1;
				alert("HIT!");
			} else {
				alert("You already hit that location! Try again!");
			}
		} else if (guess == location2) {
			// location2 was hit
			// check, if it was already hit
			if (location2Hit == false) {
				// first time, set hit to true
				location2Hit = true;
				hits = hits + 1;
				alert("HIT!");
			} else {
				alert("You already hit that location! Try again!");
			}
		} else if (guess == location3) {
			// location3 was hit
			// check, if it was already hit
			if (location3Hit == false) {
				// first time, set hit to true
				location3Hit = true;
				hits = hits + 1;
				alert("HIT!");
			} else {
				alert("You already hit that location! Try again!");
			}
		} else {
			alert("MISS!");
		}

		// ☑ Check if ship has been sunk
		if (hits == 3) {
			isSunk = true;
			alert("You sank my battleship!");
		}

	}
}

// ☑ Display stats to user
let stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3 / guesses);
alert(stats);