var word = [ "LORD NIKON", "PHREAK", "ACID BURN", "CRASH OVERRIDE", "CEREAL KILLER", "ZERO COOL", "THEPLAGUE"]
    var rand = Math.floor(Math.random() * word.length)
    var choice =  word[rand];
    var wordLength = choice.length;
    var display = wordLength;
    var win = wordLength;
    var letters = choice.split(``);
    var guessesLeft = 10;
    var output = " ";
    var userGuess = " ";
    var randWordArray = [];

    document.onkeyup = function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90){
        userGuess(event.key);
        }
    }

    console.log(display);
    console.log(letters);
    console.log(choice);
    console.log(guessesLeft);
    document.write(letters);

    for (var i = 0; i < choice.length; i++){
        if (choice[i] === ' ')
        {
        randWordArray.push('- ');
        }
        else {
        randWordArray.push('_ ');
        }
        document.getElementById("game").textContent = randWordArray.join("");
        console.log(choice[i]);
    }

    
       

   
    function userGuess(letter){
    console.log(letter);
    console.log(choice.indexOf(letter));
    if (randomWord.indexOf(letter >= 0)) {
        for (var i = 0; i < randomWord.length; i++);{
            if(choice[i] == letter){
            randWordArray[i] = choice[i];  
            }
        }
    document.getElementById("game").textContent = randWordArray.join("");
    }
    else {
        // wrong letter adds +1 to wrong counter
        if (randomWord.indexOf(letter === -1)) {
            guessesLeft--;
            console.log(guessesLeft);
            console.log(letter);
        }
    }
    }


 
   