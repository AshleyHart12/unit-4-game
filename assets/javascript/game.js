// Have player press any key to begin (did not work....)
$(document).ready(function() {

    
        // VARIABLES DEFINED
        // computer number must be between 19-120
    var computerNumber = [] 
    for (var i = 12; i <= 120; i++) {
        computerNumber.push(i)
        
    }

    userScore =0;
    wins = 0;
    losses = 0;

    // computer picks random number 19-120
    randomNumber = computerNumber [Math.floor(Math.random() * computerNumber.length)]; 
    console.log(randomNumber);

    redcrystal = 0;
    bluecrystal = 0;
    yellowcrystal = 0;
    greencrystal = 0;

          
    // Start of the game - 
    // roundStart = function() {
        
        bluecrystal = 
        Math.floor(Math.random() * 12) + 1;
        redcrystal = 
        Math.floor(Math.random() * 12) + 1;
        greencrystal = 
        Math.floor(Math.random() * 12) + 1;
        yellowcrystal = 
        Math.floor(Math.random() * 12) + 1;
    // };

    function reset() {
        console.log('resetting')
        computerNumber = Math.floor(Math.random() * 120-19 +1);
        $("computerNumber").text(computerNumber);
        userScore = 0;
        $("currentScore").text(0);
    }
                        
                
    // roundStart();
        
		// function congrats () {
		// 	alert("Congrats, smarty pants! You win!");
		// 	wins++;
		// 	$("#wins").append(wins);
		// 	reset();
		// }

		// function wompwomp() {
		// 	alert("Sorry, dude. You lose.");
		// 	losses++;
		// 	$("#losses").append(losses);
		// 	reset();
		// }
        
        function scoreCheck (){
            console.log("Checking score")
            if (userScore === computerNumber) {
                wins++;
                $("#wins").append(wins);
                reset();
                alert("Congrats, smarty pants! You win!");
            }
            else if (userScore > computerNumber) {
                losses++;
                $("#losses").append(losses);
			    reset();
                alert("Sorry, dude. You lose.");
                
        }
        };

    console.log(redcrystal, bluecrystal, yellowcrystal, greencrystal); // SUCCESS
                    
    // end Start Game Function
    
    $("#computerNumber").append(randomNumber); 
    $("#currentScore").append(userScore);


     $("#red").on("click", function() {
        userScore = userScore + redcrystal;
                $("#currentScore").text(userScore);
                scoreCheck();
                                    
	});
           
    

    $("#blue").on("click", function() {
        userScore = userScore + bluecrystal;
                $("#currentScore").text(userScore)
                scoreCheck();
    });

    $("#green").on("click", function() {
        userScore = userScore + greencrystal;
                $("#currentScore").text(userScore)
                
				if (userScore === computerNumber) {
					congrats();
				}
				else if (userScore > computerNumber) {
						wompwomp()
					};
    });

    $("#yellow").on("click", function() {
        userScore = userScore + yellowcrystal;
                 $("#currentScore").text(userScore)
                 
				 if (userScore === computerNumber) {
					congrats();
				}
				else if (userScore > computerNumber) {
						wompwomp()
					}
    });
});                             
    
 
    
    
        

