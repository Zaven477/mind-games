import playGame from "../index.js";
import random from "../random.js";

const isEven = num => num % 2 === 0;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateQuestionAndCorrectAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return [question, correctAnswer];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;