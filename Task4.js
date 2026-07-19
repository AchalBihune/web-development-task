const quizData = [
    {
        question: "1. Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "2. Which keyword declares a variable in JavaScript?",
        options: ["int", "let", "float", "char"],
        answer: "let"
    },
    {
        question: "3. Which method is used to print in the browser console?",
        options: ["alert()", "prompt()", "console.log()", "document.write()"],
        answer: "console.log()"
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const error = document.getElementById("error");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

loadQuestion();

function loadQuestion() {

    error.textContent = "";

    const current = quizData[currentQuestion];

    question.textContent = current.question;

    options.innerHTML = "";

    current.options.forEach(option => {

        const label = document.createElement("label");

        label.innerHTML = `
        <input type="radio" name="answer" value="${option}">
        ${option}
        `;

        options.appendChild(label);
    });

}

nextBtn.addEventListener("click", () => {

    const selected = document.querySelector('input[name="answer"]:checked');

    if(!selected){
        error.textContent = "Please select an answer before proceeding.";
        return;
    }

    if(selected.value === quizData[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    }
    else{
        quiz.classList.add("hide");
        result.classList.remove("hide");
        scoreText.textContent = `Your Score: ${score} / ${quizData.length}`;
    }

});