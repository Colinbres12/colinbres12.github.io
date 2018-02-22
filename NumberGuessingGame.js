var x = Math.floor((Math.random() * 10) + 1);
var guess = 0 ;
var number = prompt("Please guess a number between 1 and 10:", "0");
    
while (x != number) {
            guess = guess+1;
            document.getElementById("n").innerHTML = "You guessed incorrectly. You have taken " + guess +" guesses";
            var number = prompt ("Guess Again, you have guessed " + guess + " times");
       }
guess = guess + 1;
document.getElementById("n").innerHTML = "The number was " + x +", you guessed " + number + ".  You got it in " + guess +" guesses" ;
       
