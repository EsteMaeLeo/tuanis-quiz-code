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

var viewScore = document.getElementById('view-score');
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
var fileScore = "";

//Function defenition section
//saving the scores into localstorage first read if there is previous local and put into the array to add and save with the new results
var saveHighScores = function () {
    var nameInput = document.querySelector("input[name='initial-name']").value;
    userScore.name = nameInput;
    userScore.scoreRecord = globalScore;

    //var oldtimes to read the previous
    var oldItems = JSON.parse(localStorage.getItem('userArray'));
    if (oldItems) {
        // with the old record need now append the new record
        oldItems.push(userScore);
        localStorage.setItem("userArray", JSON.stringify(oldItems));
        fileScore = oldItems;

    } else {
        //if not old data save the current score to localstorage
        userArray.push(userScore)
        localStorage.setItem("userArray", JSON.stringify(userArray));
        fileScore = userScore;
    }

    document.querySelector("input[name='initial-name']").value = " ";

}

//load the data from the localstora
var loadScore = function () {

    var savedScores = localStorage.getItem("userArray");
    //tasks === null
    if (!savedScores) {
        return false;
    }

    savedScores = JSON.parse(savedScores);
    fileScore = savedScores;
    removeListHighScore();
    //loop throgh savedTasks array
    for (var i = 0; i < savedScores.length; i++) {
        //pass each task object into the createHighScore function
        createHighScore(savedScores[i], i);
    }
}

//create list of the high scores
var createHighScore = function (savedScores, line) {

    //add 1 to line because start 0
    line++;

    var listScore = document.getElementById('list-scores');
    var createLi = document.createElement('li');
    createLi.className = "score-item";
    createLi.setAttribute('li-name-score', savedScores.name);
    createLi.innerHTML = line + ". " + "Name: " + savedScores.name + " Score: " + savedScores.scoreRecord;
    listScore.appendChild(createLi);

    var tagScore = document.getElementById('span-score');
    tagScore.textContent = savedScores.scoreRecord;

}

//remove the list in the html to create again the list
var removeListHighScore = function () {

    for (var i = 0; i < fileScore.length; i++) {
        var listScore = document.querySelector(".score-item[li-name-score='" + fileScore[i].name + "']");
        if (listScore) {
            listScore.remove();
        }

    }
}

//timer for the quiz ends when the timer is equal 0
var quizTimer = function () {
    timeLeft = 75;

    // interval of the quiz
    var timeInterval = setInterval(function () {

        if (timeLeft <=0 || endQuestions === true) {
            //if end of questions or time end the quiz
            timerEl.textContent = timeLeft;
            endQuiz(quizQuestions);
            clearInterval(timeInterval);
        } else {

        }
        timerEl.textContent = timeLeft;
        //substract to the timer
        timeLeft--;

    }, 1000);
}

//function end of the quiz show results and clear variables
var endQuiz = function (arrayQuestion) {

    numQuestions = arrayQuestion.length;
    contQuestions = 0;
    endQuestions = false;
    showResults();


}
//function create message with the result and for initials for the score
var showResults = function () {
    //remove previous list
    removeListHighScore();
    containerQuiz.style.display = "none";
    timerEl.textContent = "";
    var tagScore = document.getElementById('span-score');
    tagScore.textContent = globalScore;
    //show the box of the results
    containerResults.style.display = "flex";
    containerResults.style.flexDirection = "column";

}

//function to sort in random order the questiions
var randomdQuestions = function (arrayQuestion) {
    //reorder the array of questions in random order
    arrayQuestion = arrayQuestion.sort(function (a, b) { return 0.5 - Math.random() });
    numQuestions = arrayQuestion.length;

}

//function to hide the containers only display the container with the message
var getStart = function () {

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

        containerQuiz.style.display = "none";
        endQuestions = true;
        globalScore = timeLeft;

    }
}

//start function prevent the default display container questions
var startQuiz = function (event) {
    //hide the start container 
    event.preventDefault();
    containerMessage.style.display = "none";
    randomdQuestions(quizQuestions);
    containerQuiz.style.display = "flex";
    //load question
    loadQuestions(quizQuestions);
    //start the counter time
    quizTimer()
}

//handle the click in the list for each response of the questions
var taskHandleQuiz = function (event) {

    var questionAtt = event.target.getAttribute("list-question").toLowerCase();

    //validate the click with the correct answer
    if (quizQuestions[contQuestions].correctAnswer === questionAtt) {

        contQuestions++;
        var questionAtt = document.getElementById("question-message");
        //put message correct
        questionAtt.style.opacity = "0.5";
        questionAtt.style.fontSize = "x-large";
        questionAtt.textContent = "Correct :-)";
        questionAtt.style.borderBottom = "solid #F1E0FF"
        loadQuestions(quizQuestions)

    } else {

        timeLeft = timeLeft - 10;
        contQuestions++;
        var questionAtt = document.getElementById("question-message");
        //put message incorrect
        questionAtt.style.opacity = "0.5";
        questionAtt.style.fontSize = "x-large";
        questionAtt.textContent = "Incorrect :-(";
        questionAtt.style.borderBottom = "solid #F1E0FF"
        loadQuestions(quizQuestions);
    }


}

//mouse is over the list
var eventMouseover = function (event) {
     // highlight the mouseout target
    var questionAtt = event.target.getAttribute("list-question");
    if (questionAtt) {
        event.target.style.color = "orange"
        event.target.font = "Arial";
        event.target.style.backgroundColor = "#8B7CCE";

    }
}

// when the mouse is out
var eventMouseout = function (event) {
   

    var questionAtt = event.target.getAttribute("list-question");
    if (questionAtt) {
        event.target.style.color = "White"
        event.target.style.backgroundColor = "#6750CC";

    }
}

//function submit save the results
var submitEvent = function (event) {

    event.preventDefault();
    saveHighScores();
    loadScore();

    //clear styles and display container results
    var questionAtt = document.getElementById("question-message");
    questionAtt.textContent = " ";
    questionAtt.style.borderBottom = null

    containerResults.style.display = "none";
    containerHscore.style.display = "flex";
    containerHscore.style.flexDirection = "column";


}

//clear values localstorage and list
var clearScore = function () {

    localStorage.clear();
    removeListHighScore();
    containerHscore.style.display = "none";
    fileScore = [];
    containerHscore.style.display = "flex";
    containerHscore.style.flexDirection = "column"

    var questionAtt = document.getElementById("question-message");
    questionAtt.textContent = " ";
    questionAtt.style.borderBottom = null
}

//handle the event for the container of scores
var handleHigh = function (event) {

    var targetE1 = event.target;

    //back button clicked
    if (targetE1.matches(".bck-main")) {
        containerMessage.style.display = "flex";
        containerMessage.style.flexDirection = "column";
        timerEl.textContent = " ";
        var questionAtt = document.getElementById("question-message");
        questionAtt.textContent = " ";
        questionAtt.style.borderBottom = null
        getStart();
    } //clear score button was clicked
    else if (targetE1.matches(".clr-score")) {
        clearScore();
    }
}

//show the scores and load themm
var eventScoresList = function (even) {

    event.preventDefault();
    timerEl.textContent = "";
    containerQuiz.style.display = "none";
    containerResults.style.display = "none";
    containerMessage.style.display = "none";

    loadScore();

    containerHscore.style.display = "flex";
    containerHscore.style.flexDirection = "column";
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

viewScore.addEventListener("click", eventScoresList)

getStart();
