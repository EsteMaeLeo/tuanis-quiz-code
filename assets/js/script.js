var timerEl = document.getElementById('timer');
var buttonEl = document.getElementById('start-quiz');
//start container
var scontainerEl = document.getElementById('start-container');
//container with question
var qcontainerE1 = document.getElementById('qqcontainer');
//elment to delete
var tdeletestart = document.querySelector("#start-container");
//keep backup start container 
var bckstart;

var score = 0;

//start quiz function
function startQuiz(event) {
    //hide the start container 
    bckstart = tdeletestart;
    tdeletestart.remove();
    qcontainerE1.style.visibility = 'visible';
    quizTimer()
}

function quizTimer() {
    var timeLeft = 60;

    // interval of the quiz
    var timeInterval = setInterval(function () {

        if (timeLeft === 0) {
            timerEl.textContent = timeLeft;
            endQuiz();
            clearInterval(timeInterval);
        } else {

        }
        timerEl.textContent = timeLeft;
        timeLeft--;
        //1000
    }, 100);
}

function endQuiz() {
    var tasksToDoE1 = document.querySelector("#qqcontainer");
    tasksToDoE1.remove();
    tasksToDoE1 = document.querySelector("#section-quiz");
    tasksToDoE1.appendChild(bckstart);
    qcontainerE1.style.visibility = 'hidden';

   
}



//quizTimer();
qcontainerE1.style.visibility = 'hidden';
//function listen click and trigger the timer of the quiz
buttonEl.addEventListener("click", startQuiz);



//questions for the quiz
var quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Cascading Stylesheet",
            b: "Hypertext Markup Language",
            c: "Hyper Markup Language",
            d: "JavaScript Object Notation"
        }
        ,
        correctAnswer: "b",
    }
]

