import game from '../index.js';
import getRandomInt from '../utility.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionsAndAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
