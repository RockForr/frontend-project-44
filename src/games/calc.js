import game from '../index.js';
import getRandomInt from '../utility.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculation = (num1, randomOperator, num2) => {
  let result;

  switch (randomOperator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    default:
      result = num1 * num2;
  }
  return result;
};

const getQuestionsAndAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt(1, 20);
  const randomOperator = operators[getRandomInt(0, 3)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculation(num1, randomOperator, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
