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

    redcrystal = 0;
    bluecrystal = 0;
    yellowcrystal = 0;
    greencrystal = 0;




    // Supposed to press key to begin
    // document.onkeyup = function startGame() {
    randomNumber = computerNumber [Math.floor(Math.random() * computerNumber.length)];  // computer puts random number on board
    console.log(randomNumber); //SUCCESS!

                
    // Start of the game - 
    roundStart = function() {
        
        bluecrystal = 
        Math.floor(Math.random() * 12) + 1;
        redcrystal = 
        Math.floor(Math.random() * 12) + 1;
        greencrystal = 
        Math.floor(Math.random() * 12) + 1;
        yellowcrystal = 
        Math.floor(Math.random() * 12) + 1;
    } ;
                        
                
    roundStart();
        

        
    console.log(redcrystal, bluecrystal, yellowcrystal, greencrystal); // SUCCESS
                    
    // end Start Game Function
    
    $("#computerNumber").append(randomNumber); // keeps adding the numbers together when pressing a key - need to RESTART everytime and clear previous number


     $("#red").on("click", function() {
        
        userScore = userScore + redcrystal;
        $("#currentScore").text(userScore)
    })

    $("#blue").on("click", function() {
        userScore = userScore + bluecrystal;
        $("#currentScore").text(userScore)
    })

    $("#green").on("click", function() {
        userScore = userScore + greencrystal;
        $("#currentScore").text(userScore)
    })

    $("#yellow").on("click", function() {
        userScore = userScore + yellowcrystal;
         $("#currentScore").text(userScore)
    })
                                
                
            
    console.log(userScore); // Shows as 0 - but at least it is showing up now :)

    $("#currentScore").append(userScore);

    // How to Win - User Guesses must equal Current number to Match

    if (userScore > computerNumber) {
        alert("Sorry, try again!");
        losses = losses +1
        $("#losses").text(losses);
        roundStart();
        console.log(losses);
    }
    if (userScore === computerNumber) {
        alert("You did it, great job! ");
        wins = wins +1;
        $("#wins").text(wins);
        roundStart();
        console.log(wins);


    }
}); // Closing of On Ready
    // });
    
        

