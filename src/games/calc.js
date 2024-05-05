import game from '../index.js';
import getRandomInt from '../utility.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getQuestionsAndAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt(1, 20);
  const randomOperator = operators[getRandomInt(0, 3)];

  let expression;
  switch (randomOperator) {
    case '+':
      expression = num1 + num2;
      break;

    case '-':
      expression = num1 - num2;
      break;

    default:
      expression = num1 * num2;
  }

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = expression.toString();

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
