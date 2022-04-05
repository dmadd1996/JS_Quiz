const startScreen = document.getElementById("startScreen")
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")

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
    }
]

function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class","hidden")
}

function buildQuiz(){}



btn.onclick = function btnSwitch () {

    console.log("start>next")

    if("btn.innerText === 'START'"){
        btn.innerText = "NEXT";
        hideStart()
    }    
}