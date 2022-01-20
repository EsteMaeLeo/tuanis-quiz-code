///questions for the quiz
var quizQuestions = [
    {
        question: "This allows JS Scripts and applications to perform different actions based on given conditions",
        answers: {
            a: "a- Variables",
            b: "b- Loops",
            c: "c- Conditional Statement",
            d: "d- Stacks"
        }
        ,
        correctAnswer: "c",
    },
    {
        question: "JavaScript is interpreted by ___",
        answers: {
            a: "a- Server",
            b: "b- Client",
            c: "c- Object",
            d: "d- None of the above"
        }
        ,
        correctAnswer: "b",
    },
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: {
            a: "a- numbers",
            b: "b- booleans",
            c: "c- strings",
            d: "d- all of the above"
        }
        ,
        correctAnswer: "d",
    },
    {
        question: "Inside which HTML element do we put the javascript?",
        answers: {
            a: "a- <h1>",
            b: "b- <js>",
            c: "c- <script>",
            d: "d- <head>"
        }
        ,
        correctAnswer: "c",
    },
    {
        question: " What does DOM stand for?",
        answers: {
            a: "a- Discover Object Mechanism",
            b: "b- Document Object Model",
            c: "c- Discover Object Mechanism",
            d: "d- Desktop Object Model"
        }
        ,
        correctAnswer: "c",
    },
    {
        question: " Is JavaScript case sensitive language?",
        answers: {
            a: "a- No",
            b: "b- Depends on the browser",
            c: "c- Depends on the platform",
            d: "d- Yes"
        }
        ,
        correctAnswer: "d",
    },
    {
        question: "Method used to select the element with a given identifier represented by the HTML element property ID?",
        answers: {
            a: "a- getElementByClassName() method",
            b: "b- getElementById() method",
            c: "c- getId()",
            d: "d- getElementByTagName()"
        }
        ,
        correctAnswer: "b",
    },
    {
        question: "What is the symbol used for the INCREMENT operator in JS?",
        answers: {
            a: "a- *",
            b: "b- ++",
            c: "c- =",
            d: "d- =="
        }
        ,
        correctAnswer: "b",
    },
    {
        question: "Which funtion is used when a JS application must ensure that the user gets the information that is displayed?",
        answers: {
            a: "a- Alert box",
            b: "b- Prompt Box",
            c: "c- Combo Box",
            d: "d- Confirm Box"
        }
        ,
        correctAnswer: "a",
    },
    {
        question: "File extension for external JS files",
        answers: {
            a: "a- .javascript",
            b: "b- .js",
            c: "c- .jscript",
            d: "d- .script"
        }
        ,
        correctAnswer: "b",
    }
]

//get the main 
var sectionQuiz = document.querySelector("#section-quiz");

var submitEl =document.querySelector(".resultscore");

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
    var targetE1 = event.target;
    event.preventDefault();
    console.log(targetE1);
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
    
    var qqcontainer = document.querySelector("#qqcontainer");
    var  qqClass = qqcontainer.classList
    qqcontainer.classList.remove("qcontainer");
    console.log(qqClass);
    //qqClass.remove("qcontainer");
    //qqcontainer.remove();


    //tasksToDoE1 = document.querySelector("#section-quiz");
    //tasksToDoE1.appendChild(bckstart);
    //qcontainerE1.style.visibility = 'hidden';
    showResults();

   
}
//function create message with the result and for initials for the score
function showResults(){

    //create an elemente DIV
    var showEl = document.createElement("div");
    showEl.className = "show-results";

    var h3El = document.createElement("h3");
    h3El.className = "h3-results";
    h3El.innerHTML = "All done!";
    showEl.appendChild(h3El);

    h3El = document.createElement("h3");
    h3El.className = "h3-results";
    h3El.innerHTML = "Your final score is " + "<span>" + score + "</span></h3>";
    showEl.appendChild(h3El);

    h3El = document.createElement("label");
    h3El.setAttribute("for", "initials");
    h3El.innerHTML = "Enter initials:"
    showEl.appendChild(h3El);

    h3El = document.createElement("input");
    h3El.setAttribute("type", "type");
    h3El.setAttribute("name", "initials" );
    h3El.setAttribute("id", "input-init" );
    showEl.appendChild(h3El);

    h3El = document.createElement("button");
    h3El.setAttribute("type", "submit");
    h3El.setAttribute("name", "initials" );
    h3El.setAttribute("id", "btn-init" );
    h3El.className = "btn-results";
    h3El.innerHTML = "Submit"
    showEl.appendChild(h3El);
    submitEl.appendChild(showEl);
    sectionQuiz.appendChild(submitEl);
}

function showHighScore(){
console.log("submit");
}

//quizTimer();
qcontainerE1.style.visibility = 'hidden';
//function listen click and trigger the timer of the quiz
buttonEl.addEventListener("click", startQuiz);

submitEl.addEventListener("submit", showHighScore);


var highScores = {
    initials: "",
    score: 0
}
