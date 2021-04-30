import playGame from "../index.js";
import random from "../random.js";

const condition = "Find the greatest common divisor of given numbers.";
const findGcd = (num1, num2) => {
  if(!num2) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};
const generateQuestionAndCorrectAnswer = () => {
  let num1 = random(1, 20);
  let num2 = random(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);
  return [question, String(correctAnswer)];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
