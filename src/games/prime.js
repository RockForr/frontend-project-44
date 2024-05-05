import game from '../index.js';
import getRandomInt from '../utility.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const getQuestionsAndAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
