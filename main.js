'use strict';

function generateRandom() {
  let number = '';

  while (number.length < 4) {
    let digit = Math.floor(Math.random() * 9 + 1).toString();

    if (!number.includes(digit)) {
      number += digit
    }
  }
  return number;
}

function checkNumbers(secretNum, userAttemptNum) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (userAttemptNum.length !== 4) {
      return `\n Wrong number! Please, enter 4 digits number here!`;
    }

    if (secretNum.charAt(i) === userAttemptNum.charAt(i)) {
      bulls++;
    } else if (secretNum.includes(userAttemptNum[i]) === true) {
      cows++
    }
  }
  return `\n ${userAttemptNum} ${bulls} bulls ${cows} cows`
}

function  init() {
  let secretNum = generateRandom();
  let promptString = `\n Please, enter 4 digits number`;

  for (let i = 0; ; i++) {
    let userAttemptNum = prompt(promptString, 0);
    let result = checkNumbers(secretNum, userAttemptNum);
    promptString += result;

    if (secretNum === userAttemptNum) {
      promptString += result;
      return alert(`${promptString} \n VICTORY! You guessed the number.`)
    }
  }
}

init();

