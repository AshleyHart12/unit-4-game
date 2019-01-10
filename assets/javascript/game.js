// Have player press any key to begin (did not work....)
$(document).ready(function() {

    
        // VARIABLES DEFINED
        // computer number must be between 19-120
    var computerNumber = [] 
    for (var i = 12; i <= 120; i++) {
        computerNumber.push(i);
    }
    

    userScore =0;
    wins = 0;
    losses = 0;

    // computer picks random number 19-120
    randomNumber = computerNumber[Math.floor(Math.random() * computerNumber.length)]; 
    console.log(randomNumber);

    redcrystal = 0;
    bluecrystal = 0;
    yellowcrystal = 0;
    greencrystal = 0;

          
    // Start of the game - 
    //  roundStart = function() {
        
        bluecrystal = 
        Math.floor(Math.random() * 12) + 1;
        redcrystal = 
        Math.floor(Math.random() * 12) + 1;
        greencrystal = 
        Math.floor(Math.random() * 12) + 1;
        yellowcrystal = 
        Math.floor(Math.random() * 12) + 1;
//  };

    function reset() {
        console.log('resetting')
        computerNumber = Math.floor(Math.random() * 120-19 +1);
        $("#computerNumber").text("Number to Match: " + computerNumber);
        userScore = 0;
        $("#currentScore").text("Your Current Number: " + 0);
    }
                        
 
        
        function scoreCheck (){
            console.log("Checking score")
            console.log(randomNumber);
            console.log("userScore: " + userScore);
            if (userScore === randomNumber) {
                console.log("you won!");
                wins++;
                $("#wins").text("Wins: " + wins);
                reset();
                alert("Congrats, smarty pants! You win!");
            }
            else if (userScore > randomNumber) {
                console.log("Lose");
                losses++;
                $("#losses").text("Losses: " + losses);
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
                $("#currentScore").text("Your Current Score: " + userScore);
                scoreCheck();
                                    
	});
           
    

    $("#blue").on("click", function() {
        userScore = userScore + bluecrystal;
                $("#currentScore").text("Your Current Score: " + userScore)
                scoreCheck();
    });

    $("#green").on("click", function() {
        userScore = userScore + bluecrystal;
                $("#currentScore").text("Your Current Score: " + userScore)
                scoreCheck();
    });

    $("#yellow").on("click", function() {
        userScore = userScore + yellowcrystal;
        userScore = userScore + bluecrystal;
        $("#currentScore").text("Your Current Score: " + userScore)
        scoreCheck();
    });
});                             
    
 
    
    
        

