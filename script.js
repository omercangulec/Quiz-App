const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.querySelector('.quiz-header');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const curQuiz = document.querySelector('.curQuiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    createQuestion();
  } else {
    result();
    submitBtn.textContent = 'Reload';
    submitBtn.addEventListener('click', () => window.location.reload());
  }
});

function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function createQuestion() {
  deselectAnswers();

  curQuiz.innerText = `Question: ${currentQuiz + 1} of 4`;
  questionEl.innerText = quizData[currentQuiz].question;
  a_text.innerText = quizData[currentQuiz].a;
  b_text.innerText = quizData[currentQuiz].b;
  c_text.innerText = quizData[currentQuiz].c;
  d_text.innerText = quizData[currentQuiz].d;
}
createQuestion();

function result() {
  const html = `
    <h2 id="question">You answerd ${score}/4 questions correctly </h2>
  `;
  quiz.innerHTML = '';
  quiz.insertAdjacentHTML('afterbegin', html);
}
