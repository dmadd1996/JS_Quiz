//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
const scoreSaver = document.getElementById('scoreSaver')
//variable to track question index
var i = 0

var myQuestions = [
    {
        question: "What color is the sky?",

        answers: [
            "red",
            "green",
            "blue"
        ],
        correctAnswer: "blue"
    },
    {
        question: "What color is red?",

        answers: [
            "red",
            "green",
            "blue"
        ],
        correctAnswer: "red"
    },
    {
        question: "What color is blue?",

        answers: [
            "red",
            "green",
            "blue"
        ],
        correctAnswer: "blue"
    },
]

//Display quiz from array when user presses start
function buildQuiz() {
    quizContainer.innerHTML = `<h3>${myQuestions[i].question}</h3>
  
            
            <button id="answerA" >${myQuestions[i].answers[0]}</button>

            <button id="answerB">${myQuestions[i].answers[1]}</button>
            
            <button id="answerC">${myQuestions[i].answers[2]}</button>`

    //variables that contain id's for each button on the screen
    var answerA = document.getElementById('answerA')
    var answerB = document.getElementById('answerB')
    var answerC = document.getElementById('answerC')

    answerA.addEventListener('click', answerCheck)
    answerB.addEventListener('click', answerCheck)
    answerC.addEventListener('click', answerCheck)
}

//timer variables
let time = myQuestions.length * 30;
let timer;
const timerEl = document.getElementById('timerEl')

//timer function
function handleTimer() {
    //timer counts down
    time--;
    timerEl.textContent = time;
}

function answerCheck() {
    //console.log(this.innerText)


    if (this.innerText === myQuestions[i].correctAnswer) {
        //if answer is correct
        console.log('correct!')
        //increment the index
        i++
        //rebuild the quiz question
        buildQuiz()
    } else {
        console.log('false!')
        //deduct time
        time = time - 15
    }

    if (time <= 0) {
        endGame()
    }
}

function endGame() {
    //hide timer
    timerEl.setAttribute('class', 'hidden')
    
    //set time to zero and clear interval
    time = 0
    clearInterval(timer)

    if (window.confirm("GAME OVER: Would you like to save your score?")){
        highScore()
    }else{
        location.reload()
    }
    
}

function highScore() {
    quizContainer.setAttribute('class', 'hidden')
    scoreSaver.removeAttribute('class', 'hidden')
    //add HTML to id=currentScore to display time score
}

//when user clicks start, the timer starts and quiz is built
btn.onclick = function hideStart() {
    startScreen.setAttribute("class", "hidden")
    subLine.setAttribute("class", "hidden")
    quizContainer.removeAttribute('class', 'hidden')

    timer = setInterval(handleTimer, 1000);
    timerEl.textContent = time;

    buildQuiz()
}

// localStorage.setItem('highScores', JSON.stingify(scoreArray))
// JSON.parse(localStorage.getItem('highScores'))

// var scoreArray= [];

// var newScore = {
//     'initials': initials,
//     'score': time
// }

// scoreArray.push(newScore)

//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData