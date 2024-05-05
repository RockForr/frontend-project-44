import game from '../index.js';
import getRandomInt from '../utility.js';

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
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisors(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
