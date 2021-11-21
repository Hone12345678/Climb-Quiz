
//setting variabls
var startQuizBtnEl = document.querySelector("#startQuizBtn");
var questionsList = document.querySelector(".container-questions");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var nextButton = document.getElementById('nextButton');

var i = 0;

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

        i++;
    console.log(i)
    
    }

    //accesses the quiz questions stored in 'questionsArray.js
    var questionTextForHTML = questions[i].question
    var questionArea = document.getElementById("climbQuestions");
    questionArea.innerHTML = questionTextForHTML
    // content-question.append(questionArea);

    return i
    

};






function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        if(timeLeft=== 0) {
            timerEl.textContent = "Times Up!"
            clearInterval(timeInterval);
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
