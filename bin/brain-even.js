#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const even = (min, max) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const result = getRandomInt(min, max);
    readlineSync.question(`Question: ${result}`);
    const answer = readlineSync.question('Your answer:');
    if (result % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (result % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (result % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (result % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(even(2, 10));
