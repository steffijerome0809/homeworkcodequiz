

//final code
var questions = [

    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        answer: "program"
    },
    {
        question: "Select the appropriate HTML tag for inserting a line break?",
        choices: ["lb", "br", "brbr", "break"],
        answer: "br"
    },
    {
        question: "Select the appropriate HTML tag used for the largest heading?",
        choices: ["Head", "Heading", "H6", "H1"],
        answer: "H1"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: [
            "Angular",
            "jQuery",
            "RequireJS",
            "ESLint"],

        answer: "ESLint"
    },


];

var timer = document.getElementById("timer")
var codequestion = document.getElementById("question")
var answerSelect1 = document.getElementById("answer1")
var answerSelect2 = document.getElementById("answer2")
var answerSelect3 = document.getElementById("answer3")
var answerSelect4 = document.getElementById("answer4")
var feedback = document.getElementById("feedback")
var title = document.getElementById("pageTitle")
var qNumber = 0
var timeLeft = 0
var quizTime = 0
var score = 0


// set initial timer value and fire off two functions
function quizStart() {
    timeLeft = 75
    startTimer();
    createQuestion();
}
//  function changes timer display every showTime (second)
function startTimer() {
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(showTime, 1000);
}
//  function equates a showTime to a second and determines when timer reaches zero
function showTime() {
    if (timeLeft !== 0) {
        timeLeft--
        timer.innerHTML = (timeLeft)
    }
    else {
        clearInterval(quizTime)
        quizOver();
    }
    return;
}
//  function hides initial elements and shows quiz relevant ones, then starts main quiz function
function createQuestion() {
    document.querySelectorAll(".codeQuiz").forEach(codeQuiz => { codeQuiz.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "initial" })
    CodeQuiz(qNumber);
}
//  function checks if there are anymore questions and if not ends the quiz
function CodeQuiz() {
    if (qNumber >= questions.length) {
        quizOver();
    }
    else {
        codequestion.innerHTML = (questions[qNumber].question)
        answerSelect1.innerHTML = (questions[qNumber].choices[0])
        answerSelect2.innerHTML = (questions[qNumber].choices[1])
        answerSelect3.innerHTML = (questions[qNumber].choices[2])
        answerSelect4.innerHTML = (questions[qNumber].choices[3])
    }
}
//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (questions[qNumber].answer)) {
        rightAnswer();
        qNumber++
    }
    else {
        wrongAnswer();
        qNumber++
    }
    CodeQuiz(qNumber);
}
//  this function runs when answer is right
function rightAnswer() {
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}
//  this function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 15)
    feedback.innerHTML = ("Wrong");
    setTimeout(function () { feedback.innerHTML = (""); }, 800)
}

//  this function generates the end screen and allows user to submit initials with their score
function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('center-content')
    var done = document.getElementById("done")
    var submit = document.getElementById("submit")

    timer.innerHTML = (0)

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>');

    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + '</p>');

    var submit = document.getElementById("submit")
    submit.addEventListener("click", function () {
        var value = document.getElementById('userScore').value;
        localStorage.setItem(value, score)
        window.location.href = "highscore.html"
        console.log(window.location.href);
    });
    clearInterval(quizTime)
}
