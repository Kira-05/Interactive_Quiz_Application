function checkAnswer(selectedIndex) {
  const question = quizData[currentQuestion];
  
  // Determine if the answer is correct
  if (selectedIndex === question.correct) {
    feedbackEl.textContent = "Correct! ";
    feedbackEl.style.color = "green";
    score++;
    correctCount++;
  } else {
    feedbackEl.textContent = `Wrong! The correct answer is ${question.choices[question.correct]}. `;
    feedbackEl.style.color = "red";
    incorrectCount++;
  }
  
  // Add detailed feedback
  const totalQuestions = quizData.length;
  const answeredSoFar = correctCount + incorrectCount;
  const percentage = Math.round((score / answeredSoFar) * 100);
  
  
  
  feedbackEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  
  // Disable all buttons after selecting an answer
  Array.from(choicesEl.children).forEach(button => button.disabled = true);
}
