import playGame from "../index.js";
import random from "../random.js";

const condition = "What is the result of the expression?";
const sign = "+-*";

const generateQuestionAndCorrectAnswer = () => {
  const left = random(1, 20);
  const right = random(1, 20);
  const randomSign = sign[random(0, sign.length - 1)];
  const question = `${left} ${randomSign} ${right}`;
  let correctAnswer;
  switch (randomSign) {
    case "-":
      correctAnswer = left - right;
      break;
    case "+":
      correctAnswer = left + right;
      break;
    case "*":
      correctAnswer = left * right;
      break;
  }
  return [question, String(correctAnswer)];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;