
//setting variabls
var startQuizBtnEl = document.querySelector("#startQuizBtn");
var questionsList = document.querySelector(".containerQuestions");
var qTimer = document.getElementById('quizTimer');
var nextButton = document.getElementById('nextButton');
var displayResults = document.getElementById('.containerResults');



var i = -1;

startQuizBtnEl.addEventListener("click", startTheQuiz, countdown);
 
 function startTheQuiz (){

    


    //displays the question to the user
    var startLanding = document.querySelector(".container");
    startLanding.classList.add("hide");
    
    //displays the questions to the user

    //hides the landing page from the user
    questionsList.classList.remove("hide");

    nextButton.addEventListener("click", nextQuestion);
    function nextQuestion (){

        if(i < 3) {
            i++;
        } else {
            

            questionsList.classList.add("hide");
            displayResults.classList.remove("hide");



        }
            
    

    //accesses the quiz questions stored in 'questionsArray.js
    var questionTextForHTML = questions[i].question
    var questionArea = document.getElementById("climbQuestions");
    questionArea.innerHTML = questionTextForHTML
    // content-question.append(questionArea);

    return i
    
   }
};


function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        qTimer.textContent = "Time Remaining: " + timeLeft;
        if(timeLeft=== 0) {
            qTimer.textContent = "Times Up!"
            clearInterval(timeInterval);
            questionsList.classList.add("hide");
        }else{
            timeLeft--;
        }
 
    },1000);
    
}
countdown();

// if they click start quiz button click event triggers function with Quiz

//where to create the buttons?

























// var quizBegin =document.getElementById("container")
// beginquiz.addEventListener(click,"#startQuizbtn",)
