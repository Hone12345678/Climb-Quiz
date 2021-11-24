
//setting variabls
var startQuizBtnEl = document.querySelector("#startQuizBtn");
var questionsList = document.querySelector(".containerQuestions");
var qTimer = document.getElementById('quizTimer');
var nextButton = document.getElementById('nextButton');
var displayResults = document.querySelector(".containerResults");
var i = 0;
var timeLeft;
var choicesEl = document.getElementById("choices")

// starts the quiz and timer
startQuizBtnEl.addEventListener("click", startTheQuiz, countdown(), );

 function startTheQuiz (){
   
    //displays the question to the user
    var startLanding = document.querySelector(".container");
    startLanding.classList.add("hide");
   
    
    //displays the questions to the user

    //hides the landing page from the user
    questionsList.classList.remove("hide");
    
    // when 'next' button is clicked the if else statement increments until all questions have been displayed
   nextQuestion()
    

};

function nextQuestion (){


    // if(i < 3) {
    //     i++;
    // } else {
        
    //     questionsList.classList.add("hide");
    //     displayResults.classList.remove("hide");
    // }
        

//accesses the quiz questions stored in 'questionsArray.js
var questionTextForHTML = questions[i]
var questionArea = document.getElementById("climbQuestions");
questionArea.textContent = questionTextForHTML.question

choicesEl.innerHTML = ""

questionTextForHTML.choices.forEach( function(choices, index){
    var choiceBtns = document.createElement("button");
    choiceBtns.setAttribute("class", "choices")
    choiceBtns.setAttribute("value", choices)
    choiceBtns.textContent = index + 1 + ": " + choices
    choiceBtns.onclick = questionClick;
    choicesEl.appendChild(choiceBtns)
})
 
}

function questionClick(){
    //this . value to compare the anwers !==


    i++
if (i === questions.length){
    alert("quiz has ended")
}else{
    nextQuestion();
}


    console.log(i)


}





// start timer Start
//  countdown timer starts once 'Start the Quiz!' has been clicked
function countdown(timeLeft) {
    var timeLeft = 75;

    setInterval(function() {
        qTimer.textContent = "Time Remaining: " + timeLeft;
        if(timeLeft === 0) {
            qTimer.textContent = "Times Up!"
            clearInterval(timeLeft);
            questionsList.classList.add("hide");
        }else{
            timeLeft--;
        }

    },1000);

}
// end timer end

// need to figure out how to make the quiz answers store a value of correct or incorrect


// END






























// var quizBegin =document.getElementById("container")
// beginquiz.addEventListener(click,"#startQuizbtn",)
