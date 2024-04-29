import game from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min) + min);
};

const getQuestionsAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 20);
  const randomOperator = operators[getRandomInt(0, 3)];

  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = (eval(`${num1} ${randomOperator} ${num2}`)).toString();

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
