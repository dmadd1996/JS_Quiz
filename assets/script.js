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
  var highScores = JSON.parse(localStorage.getItem('highScores') || [])
  console.log("hs", highScores)
  for (let i = 0; i < highScores.length; i++) {

    savedScores.textContent = highScores; 
  }
}

var initials = document.getElementById('initials')
var scoreArray = [];

initialsBtn.onclick = function ScoreSave() {
  var newScore = {
    'initials': initials.value,
    'score': time
  }

  scoreArray.push(newScore)
  console.log(scoreArray)

  localStorage.setItem('highScores', JSON.stringify(scoreArray))
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
  printHighscores()
}

//     https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//     plus you need https://developer.mozilla.org/en-US/docs/Web/API/FormData for getting the FormData

//You may want to approach it as follows:
// • Create a whole function to print the highscores, that ulitmately you'll call along with your buildQuiz function. So, maybe just call it printHighscores
// • In this function, you can include your current line 156, something like
// var highscores = JSON.parse(localStorage.getItem('highScores') || [])
// the || [] at the end is just saying OR set to an empty array, by the way.
// • Also within the function, you will want to run your loop, either a for loop or a forEach would work great! This is where you can create the elements document.createElement("li)" and then you can set the textContext of the element you created from your highscores array.
// • Then, also within the for loop, you can append the element to wherever you'd like your high scores to show on the page.
