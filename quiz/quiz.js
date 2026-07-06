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
    },

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


//taragetting the items

const questionText = document.getElementById("question-text");

const optionBtn = document.getElementsByClassName("option-btn");

const nextBtn = document.getElementById("next-btn");

const  scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;

let score = 0;

let hasAnswered = false;


// a function to the load question

function loadQuestion() {
    hasAnswered = false;


    const current = quizQuestions[currentQustionIndex];

    questionText.textContent = current.question;

    // using forEach to loop through the options

    optionBtn.forEach(function (button, index){
        button.textContent = current. options[index];
        button.style.backgroundColor = "";
    })

}