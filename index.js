const readlineSync = require("readline-sync");
var score = 0;

const name = readlineSync.question("What's your name: ");
console.log(name);

console.log("Welcome " + name);
console.log(
  "Let's start the quiz!! I really wanna know how well you know me!!"
);

const age = readlineSync.question(
  "Can you guess my age? Is is greater than 25? "
);
if (age > 25) {
  score--;
} else {
  score++;
}

const city = readlineSync.question("Do I live in Chennai? ");
if (city === "yes") {
  score++;
} else {
  score--;
}

function play(question, answer) {
  const userAns = readlineSync.question(question);

  if (userAns === answer) {
    score++;
  } else {
    score--;
  }
}

play("What's my fav color? ", "Blue");

const questionOne = {
  question: "Which is my favorite Sports? ",
  answer: "Football",
};

const questionTwo = {
  question: "Which is my favorite food? ",
  answer: "Pizza",
};

play(questionOne.question, questionOne.answer);
play(questionTwo.question, questionTwo.answer);

console.log(`Quiz ends here. Your score is ${score}`);
