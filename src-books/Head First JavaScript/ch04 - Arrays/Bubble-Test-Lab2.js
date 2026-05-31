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

// displaying the results
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
