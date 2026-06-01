// bubble scores
let scores = [ 60, 50, 60, 58, 54, 54,
	           58, 50, 52, 54, 48, 69,
			   34, 55, 51, 52, 44, 51,
			   69, 64, 66, 55, 52, 61, 
			   46, 31, 57, 52, 44, 18,
			   41, 53, 55, 61, 51, 44 ];

let highScore = 0;
			   
for (let i = 0; i < scores.length; i++) {
	let output = "Bubble solution #" + i + 
				    " score: " + scores[i];
	console.log(output);
					
	if (scores[i] > highScore) {
		highScore = scores[i];
	}
}

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
	if (scores[i] == highScore) {
		// best solution to add at the end of an array
		// is to use arrayname.push
		// bestSolutions.push(i);
		
		// alternative solution without push
		// this solution is overkill
		// if (bestSolutions.length == 0) {
		// 	bestSolutions[0] = i;
		// 	console.log("Here I am!" + bestSolutions);
		// } else {
		// 	
		// 	console.log("2nd time or later: " + i + " " + bestSolutions.length);
		// 	bestSolutions[bestSolutions.length] = i;
		// }
		
		// simpler alternative without array.push
		// because length of an undefined array is 0 and that means you will write
		// the first entry at index 0, and so on
		
		bestSolutions[bestSolutions.length] = i;
	}
}

// displaying the results
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest score: " + bestSolutions);