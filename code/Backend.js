document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();

 
  const correctAnswers = {
    q1: 'a',  
    q2: 'b',  
    q3: 'b',
    q4: 'a',
    q5: 'b'
  };

  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
    const answerElement = document.getElementById(`${key}-answer`);

    if (userAnswer) {
      if (userAnswer.value === correctAnswers[key]) {
        score++;
        answerElement.textContent = "✅ Correct";
        answerElement.style.color = "green";
      } else {
        answerElement.textContent = `❌ Wrong (Correct: ${getAnswerText(key, correctAnswers[key])})`;
        answerElement.style.color = "red";
      }
    } else {
      answerElement.textContent = `❌ Not Answered (Correct: ${getAnswerText(key, correctAnswers[key])})`;
      answerElement.style.color = "red";
    }
  }

  document.getElementById("result").innerHTML = `<h2 style="color: black; text-align: center; margin-top: 20px;">You scored ${score} out of ${totalQuestions}</h2>`;
});

function getAnswerText(questionId, correctValue) {
  const label = document.querySelector(`input[name="${questionId}"][value="${correctValue}"]`).parentElement;
  return label.textContent.trim();
}
document.getElementById('restart-btn').addEventListener('click', function () {
  const answerTexts = document.querySelectorAll('.correct-answer');
  answerTexts.forEach(el => {
    el.textContent = "";
    el.style.color = "";
  });

  document.getElementById("result").innerHTML = "";
});
