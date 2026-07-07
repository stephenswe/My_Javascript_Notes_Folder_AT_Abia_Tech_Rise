const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "High Text Markup Language",
        "Hyper Text Markup Language",
        "Hyper Transfer Markup Language",
        "High Transfer Machine Language"
      ],
      correctIndex: 1
    },
    {
    question: "Which method selects the FIRST matching element?",
    options: [
      "querySelectorAll()",
      "getElementsByClassName()",
      "querySelector()",
      "getAllElements()"
    ],
    correctIndex: 2
    },
    {
         question: "Which event fires when a button is clicked?",
    options: [
      "\"hover\"",
      "\"submit\"",
      "\"click\"",
      "\"load\""
    ],
    correctIndex: 2
    } ,
    {
         question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Display Output Mode",
      "Direct Order Machine"
    ],
    correctIndex: 0

    }
]

// Targeting the items
const questionText = document.getElementById("question-text");
const optionBtn = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function loadQuestion () {
    hasAnswered = false;

    const current = quizQuestions[currentQuestionIndex];
    questionText.textContent = current.question;

    // using forEach to loop through the options
optionBtn.forEach(function(button, index) {
    button.textContent = current.options[index];
    button.style.backgroundColor = "";
});
}


//This function is for checking your answer
function checkAnswer (selectedIndex) {
  if (hasAnswered) {
    return;
  }
  hasAnswered = true; 
  const current = quizQuestions
  [currentQuestionIndex];
  const correctIndex = current.correctIndex;

  if (selectedIndex === correctIndex) {
    optionBtn[selectedIndex].style.backgroundColor = "green";
    score = score + 1;
  } else {
    optionBtn[selectedIndex].style.backgroundColor = "red";
    optionBtn[correctIndex].style.backgroundColor = "green";
  }
  nextBtn.style.display = "block";
}

// Moving to the next question
function nextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    document.getElementById("question-text").style.display = "none";
  optionBtn.forEach (function (button) {
    button.style.display = "none";
  });
  nextBtn.style.display = "none";
  scoreText.style.display = "block";
  scoreText.textContent = "You scored " + score + "out of" + quizQuestions.length; 
  }
}

optionBtn.forEach(function (button, index) {
  button.addEventListener("click", function() {
    checkAnswer(index);
  });
})

nextBtn.addEventListener("click", nextQuestion);
loadQuestion();