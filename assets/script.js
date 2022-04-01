function startQuiz() {
  start.setAttribute('class', 'hide');
  quizContainer.removeAttribute('class', 'hide')
  submitButton.removeAttribute('class', 'hide');
  timer = setInterval(handleTimer, 1000);
  timerEl.textContent = time;
  buildQuiz()
}

function handleTimer() {
  //timer counts down
  time--;
  timerEl.textContent = time;

  //but not negatively
  if (time === -1) {
    //just in case, but not necessary because...
    clearInterval(timer);
    //the alert stops the timer anyways
    showResults()
  }
}

function highScore() {

}

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  submitButton.setAttribute('class', `btn btn-block btn-warning`)

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
        `<input class="btn-check" type="radio" id="btn-check-outline" name="question${questionNumber}" value="${letter}">
          <label class="btn btn-outline-primary d-block" for="btn-check-outlined">
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        //adding bootstrap style to make questions sit on top of one another
        `<div class="slide">
          <div class="font-weight-bold"> ${currentQuestion.question} </div>
          <div class="mb-20"> ${answers.join("")} </div>
        </div>`
      );
    }
  );



  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');

}

function showResults() {

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total and confirm save score, else reload
  if (confirm(`Quiz Over: You got ${numCorrect} out of ${myQuestions.length} correct. 
  Save your score?`) === true) {
    //prompt initials and add to high score ul and reload, else just reload
    if (prompt(`Type initials below:`) === true) {
      //highScore();
      location.reload()
    }else {
      location.reload()
    }
  }else {
    location.reload()
  };
}

const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startBtn = document.getElementById('startBtn');
const start = document.getElementById('start');
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];
let time = myQuestions.length * 1;
let timer;
const timerEl = document.getElementById('timerEl')

// Kick things off
//buildQuiz();

// Event listeners
startBtn.addEventListener('click', startQuiz)
console.log(startQuiz)
submitButton.addEventListener('click', showResults);
