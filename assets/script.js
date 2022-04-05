const startScrn = document.getElementById("startScrn")
const btn = document.getElementById("btn");

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
}

function buildQuiz(){}



btn.onclick = function btnSwitch () {

    console.log("poopoo")

    if("btn.innerText === 'START'"){
        btn.innerText = "NEXT";
        hideStart()
    }

    
}