#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const progression = (min, max) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const length = 10;
    const step = getRandomInt(min, max);
    const num = getRandomInt(min, max);
    const hidden = getRandomInt(0, length - 1);
    const array = [];
    for (let j = 0; j < length; j += 1) {
      array.push(step * j + num);
    }
    array[hidden] = '..';
    const answer1 = String(step * hidden + num);
    const result = array.join(' ');
    readlineSync.question(`Question: ${result}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === answer1) {
      console.log('Correct!');
    }
    if (answer !== answer1) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${answer1}`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(progression(2, 5));
