const startScreen = document.getElementById("startScreen")
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
//variable to track question index
var i = 0

var myQuestions = [
    {
        question: "What color is the sky?",

        answers: {
            a: "red",
            b: "green",
            c: "blue"
        },
        correctAnswer: "c"
    },
    {
        question: "What color is red?",

        answers: {
            a: "red",
            b: "green",
            c: "blue"
        },
        correctAnswer: "a"
    },
    {
        question: "What color is the sky?",

        answers: {
            a: "red",
            b: "green",
            c: "blue"
        },
        correctAnswer: "c"
    },
]

//Display quiz from array when user presses start
function buildQuiz() {
    quizContainer.innerHTML = `<h3>${myQuestions[i].question}</h3>
        <form id="quizForm">
            <input type="radio" id="a" name="${myQuestions[i].answers} value="a">
            <label for="a">${myQuestions[i].answers.a}</label><br>
            <input type="radio" id="b" name="${myQuestions[i].answers} value="b">
            <label for="b">${myQuestions[i].answers.b}</label><br>
            <input type="radio" id="c" name="${myQuestions[i].answers} value="c">
            <label for="c">${myQuestions[i].answers.c}</label><br>
        </form>`
}

function answerCheck () {
    var userAnswer = document.querySelector()

}

btn.onclick = function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class", "hidden")
    quizContainer.removeAttribute('class', 'hidden')
    buildQuiz()
}