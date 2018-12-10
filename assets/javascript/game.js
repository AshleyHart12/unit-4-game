// Have player press any key to begin
$(document).ready(function() {
// VARIABLES DEFINED
var computerNumber = [] 
    for (var i = 12; i <= 120; i++) {
        computerNumber.push(i)
    
    }
 userScore =0;

randomNumber = computerNumber [Math.floor(Math.random() * computerNumber.length)]; 

redcrystal = 0;
bluecrystal = 0;
yellowcrystal = 0;
greencrystal = 0;


// Start of game - Computer picks random number to match, assigns crystals different values

// Press any key to begin
document.onkeyup = function startGame() {
    randomNumber = computerNumber [Math.floor(Math.random() * computerNumber.length)];  // computer puts random number on board
     console.log(randomNumber); //SUCCESS!

    for (var i = 0; i < randomNumber; i++); 

    
        

     // document.getElementById(randomNumber).append //HELP 
    //   ("computerNumber");

    roundStart = function() {
        
         redcrystal, bluecrystal, greencrystal, yellowcrystal = 
         Math.floor(Math.random() * 12) + 1;
    } 
                         
         
         roundStart();

       $("#red").click(function () {
           userScore = userScore + redcrystal;
           $("currentScore").innerHTML(" " + userScore);
           
       });
          
        console.log(redcrystal, bluecrystal, yellowcrystal, greencrystal);
                      
    }; // end Start Game Function

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

    
    }); // closes ALL functions
    
        

