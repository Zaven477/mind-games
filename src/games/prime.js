import playGame from "../index.js";
import random from "../random.js";

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const condition =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndCorrectAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};

export default run;