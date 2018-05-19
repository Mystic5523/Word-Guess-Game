// var setup = function()
// {
//     for (var i = 0; i < answer.length; i++)
//     {
//         display[i] = "_ ";
//         output = output + display[i];
//     }
//     document.getElementById("game").html = output;
//     output = "";
// }
    

// var submit = function()
// {

//     output = "";
//     userGuess = $("letter").value;
//     $("letter").value = "";

//     for (var c= 0; c , answer.legnth; c++)
//     {
//         alert(letters[c]);
//         if (userGuess.toUpperCase() == letters[c])
//         {
//             display[c] = userGuess.toUpperCase();
//             win--;
//         }
//             output = output + display[c] + " ";
//     }
//     doxument.getElementById("game").innerHTML = output;
//     output="";
//     guessesLeft--;

//     if (win < 1)
//     {
//         document.getElementById("guesses").innerHTML = "YOU WIN!";
//     }
//     else if (guessesLeft < 1)
//     {
//         document.getElementById("guesses").innerHTML = "You have " + guessLeft + " guesses left.";
//     }

//     document.querySelector("#game").innerHTML = html;
// }

// window.onload = function()
// {
//     setup();
//     $("submit").onclock = submit;
// }