import game from '../index.js';
import getRandomInt from '../utility.js';

const rules = 'What number is missing in the progression?';

const progression = () => {
  const arr = [];
  arr[0] = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  for (let i = 1; i <= 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
};

const getQuestionsAndAnswer = () => {
  const progress = progression();
  const randomIndex = getRandomInt(0, 9);
  const missElement = progress[randomIndex];
  progress[randomIndex] = '..';

  const question = `${progress.join(' ')}`;
  const correctAnswer = `${missElement}`;

  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionsAndAnswer);
};
