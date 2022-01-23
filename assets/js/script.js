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

var userScore = {
    name: "",
    scoreRecord: 0
};

//variables declarations
var containerMessage = document.getElementById('container-message');
var containerQuiz = document.getElementById('container-quiz');
var containerResults = document.getElementById('container-results');
var containerHscore = document.getElementById('container-hscore');

var formE1 = document.querySelector("#task-form");
//get items for questions
var questionList = document.getElementById('questions');

var timerEl = document.getElementById('timer');
var arefStartQuiz = document.getElementById('start-quiz');

var numQuestions = 0;
var contQuestions = 0;
var globalScore = 0;
var timeLeft = 75;
var endQuestions = false;
var userArray = [];

//Function defenition section

var saveHighScores = function () {
    var nameInput = document.querySelector("input[name='initial-name']").value;
    userScore.name = nameInput;
    userScore.scoreRecord = globalScore;
    userArray.push(userScore)
    debugger
    localStorage.setItem("userScore", JSON.stringify(userArray));
    
}

var loadTasks = function () {
    var savedScores = localStorage.getItem("userScore");
    //tasks === null
    if (!savedScores) {
        return false;
    }
    console.log(savedScores);
    savedScores = JSON.parse(savedScores);
    //loop throgh savedTasks array
    for (var i = 0; i < savedScores.length; i++) {
        //pass each task object into the createdTaskE1 function
        createHighScore(savedScores[i]);
    }

}

var createHighScore = function(savedScores){
console.log(containerHscore);
    var listScore = document.getElementById('list-scores');  
    var createLi = document.createElement('li');
    createLi.innerHTML = savedScores.name + savedScores.scoreRecord;
    listScore.appendChild(createLi);
    containerHscore.appendChild(listScore);
    console.log(containerHscore);
}

//timer for the quiz ends when the timer is equal 0
var quizTimer = function() {
    timeLeft = 75;

    // interval of the quiz
    var timeInterval = setInterval(function () {

        if (timeLeft === 0 || endQuestions === true) {
            timerEl.textContent = timeLeft;
            endQuiz(quizQuestions);
            clearInterval(timeInterval);
        } else {

        }
        timerEl.textContent = timeLeft;
        //substract to the timer
        timeLeft--;
        //1000
    }, 1000);
}

 var endQuiz = function(arrayQuestion) {
    
    numQuestions = arrayQuestion.length;
    contQuestions = 0;
    endQuestions = false;
    showResults();

   
}
//function create message with the result and for initials for the score
var showResults = function(){
    containerQuiz.style.display = "none";
    containerResults.style.display = "grid";

}


var randomdQuestions = function (arrayQuestion) {
    //reorder the array of questions in random order
    arrayQuestion = arrayQuestion.sort(function (a, b) { return 0.5 - Math.random() });
    numQuestions = arrayQuestion.length;

}

var getStart = function () {
    //fcontainer1.style.display = "none";
    containerQuiz.style.display = "none";
    containerResults.style.display = "none";
    containerHscore.style.display = "none";

}


//load questions into the html
var loadQuestions = function (arrayQuestion) {
    //get the question according index using counter and compre with the length of the array
    if (contQuestions < numQuestions) {

        //get the question
        var questionValue = arrayQuestion[contQuestions].question;
        //get the element to set the question into the elment
        var questionId = document.getElementById('title-question');
        var listQuestions = document.getElementsByClassName('list-group-item');

        questionId.textContent = questionValue;

        for (var i = 0; i < listQuestions.length; i++) {

            //set each possible answet into the list
            switch (i) {
                case 0: listQuestions[i].textContent = arrayQuestion[contQuestions].answers.a;
                    //set attribute with the option question to review later 
                    listQuestions[i].setAttribute('list-question', arrayQuestion[contQuestions].answers.a[0]);
                    break;
                case 1: listQuestions[i].textContent = arrayQuestion[contQuestions].answers.b;
                    //set attribute with the option question to review later 
                    listQuestions[i].setAttribute('list-question', arrayQuestion[contQuestions].answers.b[0]);
                    break;
                case 2: listQuestions[i].textContent = arrayQuestion[contQuestions].answers.c;
                    //set attribute with the option question to review later 
                    listQuestions[i].setAttribute('list-question', arrayQuestion[contQuestions].answers.c[0]);
                    break;
                case 3: listQuestions[i].textContent = arrayQuestion[contQuestions].answers.d;
                    //set attribute with the option question to review later 
                    listQuestions[i].setAttribute('list-question', arrayQuestion[contQuestions].answers.d[0]);
                    break;
            }
        }



    }
    else {
        alert("fin");
        containerQuiz.style.display = "none";
        endQuestions = true;
        globalScore = timeLeft;

    }
}

var startQuiz = function (event) {
    //hide the start container 
    event.preventDefault();
    containerMessage.style.display = "none";
    randomdQuestions(quizQuestions);
    containerQuiz.style.display = "flex";
    
    loadQuestions(quizQuestions);
    quizTimer()
}

var taskHandleQuiz = function (event) {

    var questionAtt = event.target.getAttribute("list-question").toLowerCase();
    console.log(questionAtt);
    console.log(quizQuestions[contQuestions].correctAnswer);
    if (quizQuestions[contQuestions].correctAnswer === questionAtt) {
        alert("correct");
        contQuestions++;
        loadQuestions(quizQuestions)

    } else {
        alert("incorrect");
        timeLeft = timeLeft -10;
        contQuestions++;
        loadQuestions(quizQuestions);
    }


}

var eventMouseover = function (event) {
    var questionAtt = event.target.getAttribute("list-question");
    if (questionAtt) {
        event.target.style.color = "orange"
        event.target.font="Arial";
        event.target.style.backgroundColor = "#8B7CCE";

    }
}

var eventMouseout = function (event) {
    // highlight the mouseout target

    var questionAtt = event.target.getAttribute("list-question");
    if (questionAtt) {
        event.target.style.color = "White"
        event.target.style.backgroundColor = "#6750CC";

    }
}

var submitEvent = function(event){
    
    event.preventDefault();
    saveHighScores();
    containerResults.style.display = "none";
    containerHscore.style.display = "flex";
    containerHscore.style.flexDirection = "column";

    
}

var clearScore = function(){

}

var handleHigh = function(event){

    var targetE1 = event.target;

    //back button clicked
    if (targetE1.matches(".bck-main")) {
        containerMessage.style.display = "flex";
        containerMessage.style.flexDirection = "column";
        getStart();
    } //clear score button was clicked
    else if (targetE1.matches(".clr-score")) {
        clearScore();
    }
}

//event for move mouse in the list
containerQuiz.addEventListener("mouseover", eventMouseover);

//event for move mouse in the list
containerQuiz.addEventListener("mouseout", eventMouseout);

//event for start the quiz
arefStartQuiz.addEventListener("click", startQuiz);

//submit the score
containerResults.addEventListener("submit", submitEvent);

//event for high score
containerHscore.addEventListener("click", handleHigh);

containerQuiz.addEventListener("click", taskHandleQuiz);

getStart();
loadTasks();