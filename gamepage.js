// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
guess = 1;
  
// function for number guessed by user     
function submit(){
    var x = document.getElementById("guessField").value;
    if(x==y)
    {
        alert("YAY OH WOW U WINNNNNNNNNNNNNNNNNNNNN");
        guess=1;
    }
    else if(x > y){
        guess++;
        alert("BOOOOOOO TOO BIG BRUH");
    }
    else
    {
        guess++;
        alert("BOOOOOOO TOO SMALL BRUH");
    }
}
function playAgain(){
     y = Math.floor(Math.random() * 10 + 1);
}