function showResult() {
    resultEl.classList.remove("hidden");
    document.getElementById("quiz").classList.add("hidden");
    
    const percentage = Math.round((score / quizData.length) * 100);
    scoreEl.textContent = `You scored (${score} out of ${quizData.length}).`;
  
    // Provide encouragement based on the final score
    if (percentage === 100) {
      scoreEl.textContent += " Perfect score! Outstanding work! 🎉";
    } else if (percentage >= 75) {
      scoreEl.textContent += " Great effort! You did very well! 👍";
    } else if (percentage >= 50) {
      scoreEl.textContent += " Not bad, but there's room for improvement! 💪";
    } else {
      scoreEl.textContent += " Don't worry, you'll get better with practice! 🌟";
    }
  }
  