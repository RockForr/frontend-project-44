import game, { getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisors = (number1, number2) => {
  let divisor = 1;
  for (let i = 1; i <= (number1); i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

const getQuestionsAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisors(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
