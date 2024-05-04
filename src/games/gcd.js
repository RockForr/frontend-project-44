import game from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min) + min);
};

const greatestCommonDivisors = (number1, number2) => {
  const divisors = [];
  for (let i = 1; i <= (number1); i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.at(-1);
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
