//start screen user sees on load
const startScreen = document.getElementById("startScreen")
//start button
const btn = document.getElementById("btn");
const subLine = document.getElementById("subLine")
const quizContainer = document.getElementById('quizContainer')
const scoreSaver = document.getElementById('scoreSaver')
//When the game ends, this div presents the time score
const currentScore = document.getElementById('currentScore')
//variable to track question index
var i = 0
const initialsBtn = document.getElementById('initialsBtn')
const savedScores = document.getElementById('savedScores')
const hiddenScores = document.getElementById('hiddenScores')


var myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    answers: [
      "js",
      "javascript",
      "script"
    ],
    correctAnswer: "script"
  },
  {
    question: "To access an HTML element from JavaScript, you can use this method:",

    answers: [
      "setAttribute",
      "getElementById",
      "getItem"
    ],
    correctAnswer: "getElementById"
  },
  {
    question: "How do you create a function in JavaScript?",

    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function.myFunction()"
    ],
    correctAnswer: "function myFunction()"
  },
  {
    question: "Which statement tells the browser to write 'Hello Dolly' inside an HTML element with id='demo'?",

    answers: [
      "demo.innerHTML='Hello Dolly';",
      "document.getElementById('demo').innerHTML='Hello Dolly';",
      "document.getElementById('demo')= innerHTML('Hello Dolly');"
    ],
    correctAnswer: "document.getElementById('demo').innerHTML='Hello Dolly';"
  },
  {
    question: `javascript elements are executed in what order?`,

    answers: [
      "variables, functions, event listeners",
      "functions, variables, others",
      "in the sequence they are written"
    ],
    correctAnswer: "in the sequence they are written"
  },
  {
    question: `used to declare a javascript variable`,

    answers: [
      "function",
      "var",
      "//"
    ],
    correctAnswer: "var"
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
    console.log(`index is ${i}`)
    console.log(`myQuestions length is ${myQuestions.length}`)
    //if the quiz is over
    if (myQuestions.length == i) {
      //end the quiz
      endGame()
    } else {
      //rebuild the quiz question
      buildQuiz()
    }
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
  clearInterval(timer)

  if (window.confirm("GAME OVER: Would you like to save your score?")) {
    highScore()
  } else {
    location.reload()
  }

}

function highScore() {
  quizContainer.setAttribute('class', 'hidden')
  scoreSaver.removeAttribute('class', 'hidden')
  //add HTML to id=currentScore to display time score
  currentScore.innerHTML = `Your score is ${time}`
}

// function displayScores() {
//   savedScores.textContent = displayedScoreArray
// }

function printHighscores(){
  var highScoresParse = JSON.parse(localStorage.getItem('highScores') || [])
  console.log("hs", JSON.stringify(highScoresParse))
  // var highScoresString = JSON.stringify(highScoresParse)
  savedScores.textContent += `initials: ${highScoresParse[0].initials}, score ${highScoresParse[0].score}`; 
}

var initials = document.getElementById('initials')
var scoreArray = JSON.parse(window.localStorage.getItem("scoreArray")) || [];

initialsBtn.onclick = function scoreSave() {
  var newScore = {
    'initials': initials.value,
    'score': time
  }

  scoreArray.push(newScore)

  localStorage.setItem('highScores', JSON.stringify(scoreArray))

  location.reload()
}

// savedScores.textContent = JSON.parse(localStorage.getItem('highScores'))

//when user clicks start, the timer starts and quiz is built
btn.onclick = function hideStart() {
  startScreen.setAttribute("class", "hidden")
  subLine.setAttribute("class", "hidden")
  quizContainer.removeAttribute('class', 'hidden')

  timer = setInterval(handleTimer, 1000);
  timerEl.textContent = time;

  buildQuiz()
}
printHighscores()

//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData
