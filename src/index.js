import readlineSync from "readline-sync";

const roundsCount = 3;

const playGame = (condition, getQuestionAndAnswer) => {
  const name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${name}`);
  console.log(condition);

  for (let i = 0; i < roundsCount; i += 1) {
    const [getQuestion, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${getQuestion}`);
    const answer = readlineSync.question("You answer:");
    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playGame;