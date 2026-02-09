console.log("Running");

let correctNumber = 13;
let correctMessage = "Congrats!"

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

let incorrectResult = document.querySelector("#ir");

let highLow = document.querySelector("#HighLow")



guessButton.addEventListener("click",function(){
    if(correctNumber == guessInput.value){
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
    }else{

        incorrectResult.textContent += guessInput.value += " ";

        if(guessInput.value<correctNumber){
            highLow.textContent = "go higher"
        }else{
            highLow.textContent = "go lower"
        }
    }
});
