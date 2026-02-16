document.querySelector("button").addEventListener("click",gradeQuiz);
let correctMessage = "you got it right!";
let incorrectMessage = "you got it wrong";
shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["font-color","text-color","color","color-text"];

    for(let i of q1Choices){
        
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i; 

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(radioElement);

        document.querySelector("#q1ChoicesDiv").append(labelElement);


    }

}

function gradeQuiz(){
    let q1userAnswer = document.querySelector("input[name=q1]:checked").value;
    let q2userAnswer = document.querySelector("#q2").value;
    let q3userAnswer = document.querySelector("#q3").value;
    let q4userAnswer = document.querySelector("#q4").value;
    let points = 0;
    
    let q5Result = document.querySelector("#guessResult5");
    if (document.querySelector("#q5A").checked && document.querySelector("#q5B").checked ) {
        points+=20;
        q5Result.textContent = correctMessage;
        q5Result.style.color = "green";
    }else{
        q5Result.textContent = incorrectMessage;
        q5Result.style.color = "red";
    }
     

   

    let result = document.querySelector("#result");

    let q1Result = document.querySelector("#guessResult1");
    let q2Result = document.querySelector("#guessResult2");
    let q3Result = document.querySelector("#guessResult3");
    let q4Result = document.querySelector("#guessResult4");

    if(q2userAnswer==2.5){
        points+=20;
        q2Result.textContent = correctMessage;
        q2Result.style.color = "green";
    }else{
        q2Result.textContent = incorrectMessage;
        q2Result.style.color = "red";
    }

    if(q1userAnswer=="color"){
        points+=20;
        q1Result.textContent = correctMessage;
        q1Result.style.color = "green";
    }else{
        q1Result.textContent = incorrectMessage;
        q1Result.style.color = "red";
    }

    if(q3userAnswer=="true"){
        points+=20;
        q3Result.textContent = correctMessage;
        q3Result.style.color = "green";
    }else{
        q3Result.textContent = incorrectMessage;
        q3Result.style.color = "red";
    }

    if(q4userAnswer==2){
        points+=20;
        q4Result.textContent = correctMessage;
        q4Result.style.color = "green";
    }else{
        q4Result.textContent = incorrectMessage;
        q4Result.style.color = "red";
    }

    result.textContent = "you got "+  points + "/100 points";

}