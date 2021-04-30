import playGame from "../index.js";
import random from "../random.js";

const condition = "What number is missing in the progression?";

const generateQuestionAndCorrectAnswer = () => {
  const lengthProgression = 10;
  const stepProgression = random(2, 5);
  const startNum = random(0, 20);
  const hiddenNumIndex = random(0, lengthProgression - 1);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(stepProgression * i + startNum);
  }

  progression[hiddenNumIndex] = "..";
  const correctAnswer = stepProgression * hiddenNumIndex + startNum;

  const question = progression.join(" ");
  return [question, String(correctAnswer)];
};
const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;