const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Programming",
    question: "Which language is used to style web pages?",
    choices: ["HTML", "CSS", "Python"],
    answer: "CSS"
  },
  {
    category: "Geography",
    question: "What is the capital of Kenya?",
    choices: ["Nairobi", "Kampala", "Lagos"],
    answer: "Nairobi"
  },
  {
    category: "Mathematics",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility"
    ],
    answer: "Central Processing Unit"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}