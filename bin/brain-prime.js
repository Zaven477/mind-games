#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const prime1 = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = (min, max) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const result = getRandomInt(min, max);
    const result1 = prime1(result);
    readlineSync.question(`Question: ${result}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === result1) {
      console.log('Correct!');
    }
    if (answer !== result1) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result1}'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(prime(2, 10));
