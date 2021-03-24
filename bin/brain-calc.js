#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt1 = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}`
  + ' '
  + '+'
  + ' '
  + `${Math.floor(Math.random() * (max - min + 1)) + min}`;

const getRandomInt2 = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}`
  + ' '
  + '*'
  + ' '
  + `${Math.floor(Math.random() * (max - min + 1)) + min}`;

const getRandomInt3 = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}`
  + ' '
  + '-'
  + ' '
  + `${Math.floor(Math.random() * (max - min + 1)) + min}`;

const sum = (str) => {
  const arr = str.split(' ');
  let result1 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '+') {
      result1 += Number(arr[i]);
    }
  }
  return String(result1);
};

const multiplication = (str1) => {
  const arr1 = str1.split(' ');
  let result2 = 1;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== '*') {
      result2 *= Number(arr1[i]);
    }
  }
  return String(result2);
};

const difference = (str2) => {
  const arr2 = str2.split(' ');
  const arr3 = String(Number(arr2[0]) - Number(arr2[2]));
  return arr3;
};

const calc = (min, max) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const result1 = getRandomInt1(min, max);
  const result2 = getRandomInt2(min, max);
  const result3 = getRandomInt3(min, max);
  const res1 = sum(result1);
  const res2 = multiplication(result2);
  const res3 = difference(result3);
  readlineSync.question(`Question: ${result1}`);
  const answer1 = readlineSync.question('Your answer:');
  if (res1 === answer1) {
    console.log('Correct!');
  }
  if (res1 !== answer1) {
    console.log(`${answer1} is wrong answer ;(. Correct answer was ${res1}`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  readlineSync.question(`Question: ${result2}`);
  const answer2 = readlineSync.question('Your answer:');
  if (res2 === answer2) {
    console.log('Correct!');
  }
  if (res2 !== answer2) {
    console.log(`${answer2} is wrong answer ;(. Correct answer was ${res2}`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  readlineSync.question(`Question: ${result3}`);
  const answer3 = readlineSync.question('Your answer:');
  if (res3 === answer3) {
    console.log('Correct!');
  }
  if (res3 !== answer3) {
    console.log(`${answer3} is wrong answer ;(. Correct answer was ${res3}`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};
console.log(calc(1, 15));
