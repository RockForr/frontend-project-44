import readlineSync from 'readline-sync';

const countRound = 3;

export default (rules, getQuestionsAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let round = 1; round <= countRound; round += 1) {
    const [question, correctAnswer] = getQuestionsAndAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
