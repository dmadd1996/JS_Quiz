const startScreen = document.getElementById("startScreen")
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')

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
]
function buildQuiz(){
    for (var i = 0; i < myQuestions.length; i++){
        // console.log(myQuestions[i].answers)
        // let quizQuestion = document.createElement('h3')
        // let optionContainer = document.createElement('button class="btn-outline-primary"')
        // let quizOption = document.createElement('button class="btn-outline-primary"')

        // quizQuestion.textContent = myQuestions[i].question

        quizContainer.innerHTML = `<h3>${myQuestions[i].question}</h3>
        <form action="/action_page.php">
            <input type="radio" id="a" name="${myQuestions[i].answers} value="a">
            <label for="a">${myQuestions[i].answers.a}</label><br>
            <input type="radio" id="b" name="${myQuestions[i].answers} value="b">
            <label for="b">${myQuestions[i].answers.b}</label><br>
            <input type="radio" id="c" name="${myQuestions[i].answers} value="c">
            <label for="c">${myQuestions[i].answers.c}</label><br>
        </form>`
    }

}

buildQuiz()

btn.onclick = function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class","hidden")
    quizContainer.removeAttribute('class', 'hidden')
}