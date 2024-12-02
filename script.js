const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Who is the founder of Microsoft?",
      choices: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
      correct: 1,
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
];
let currentQuestion = 0;
let score = 0;
let correctCount = 0; // Tracks correct answers
let incorrectCount = 0; // Tracks incorrect answers

// DOM Elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(index));
    choicesEl.appendChild(button);
  });

  feedbackEl.classList.add("hidden"); // Hide feedback for the next question
  nextBtn.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
  const question = quizData[currentQuestion];
  
  // Check if the selected answer is correct
  if (selectedIndex === question.correct) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
    correctCount++; // Increment correct count
  } else {
    feedbackEl.textContent = `Wrong! The correct answer is ${question.choices[question.correct]}.`;
    feedbackEl.style.color = "red";
    incorrectCount++; // Increment incorrect count
  }
  
  // Append current correct and incorrect counts to the feedback
  feedbackEl.textContent += ``;
  
  // Show feedback and enable the "Next" button
  feedbackEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
}

function showResult() {
  resultEl.classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}.`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  correctCount = 0; // Reset correct count
  incorrectCount = 0; // Reset incorrect count
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", restartQuiz);

// Load the first question
loadQuestion();
