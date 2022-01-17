var timerEl = document.getElementById('timer');
var buttonEl = document.getElementById('start-quiz');

var score = 0;


function quizTimer() {
    var timeLeft = 60;
  
    // interval of the quiz
    var timeInterval = setInterval(function() {

      if (timeLeft === 0){
        timerEl.textContent = timeLeft;
        endQuiz();
        clearInterval(timeInterval);
      }else {
        
      }
      timerEl.textContent = timeLeft;
      timeLeft--;
    }, 1000);
}

function endQuiz(){

}

//quizTimer();

buttonEl.addEventListener("click", quizTimer);