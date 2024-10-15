const createQuizButton = document.getElementById("create-quiz");
const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-container");

createQuizButton.addEventListener("click", createQuiz);

async function createQuiz() {
  const difficulty = document.getElementById("difficulty").value;
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value;

  const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${type}&category=${category}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayQuiz(data.results);
  } catch (error) {
    console.error("Error fetching trivia:", error);
  }
}

function displayQuiz(questions) {
  quizContainer.innerHTML = ""; // Limpiar contenido anterior
  scoreContainer.innerHTML = ""; // Limpiar puntaje anterior
  let score = 0;

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<h3>${index + 1}. ${decodeHtml(
      question.question
    )}</h3>`;

    const answers = [...question.incorrect_answers];
    if (question.type === "multiple") {
      answers.push(question.correct_answer);
      shuffleArray(answers);
    }

    answers.forEach((answer) => {
      const answerButton = document.createElement("button");
      answerButton.classList.add("answer");
      answerButton.innerText = decodeHtml(answer);
      answerButton.addEventListener("click", () => {
        if (answer === question.correct_answer) {
          score += 100;
        }
        checkAnswers();
      });
      questionElement.appendChild(answerButton);
    });

    quizContainer.appendChild(questionElement);
  });

  function checkAnswers() {
    if (index === questions.length - 1) {
      scoreContainer.innerHTML = `Puntaje Final: ${score}`;
      quizContainer.innerHTML = ""; // Limpiar las preguntas
    }
  }
}

// Función para decodificar HTML
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Función para mezclar las respuestas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
