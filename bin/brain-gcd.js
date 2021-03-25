#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}`
  + ' '
  + `${Math.floor(Math.random() * (max - min + 1)) + min}`;

const array = (num) => {
  const arr1 = num.split(' ');
  const arr = [Number(arr1[0]), Number(arr1[1])];
  return arr;
};

const gcd1 = (arr) => {
  let a = arr[0];
  let b = arr[1];
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return String(a);
};

const gcd = (min, max) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numbers = getRandomInt(min, max);
    const arr2 = array(numbers);
    const gcd2 = gcd1(arr2);
    readlineSync.question(`Question: ${numbers}`);
    const answer = readlineSync.question('Your answer:');
    if (gcd2 === answer) {
      console.log('Correct!');
    }
    if (gcd2 !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd2}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
gcd(10, 20);
