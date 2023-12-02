import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);
  let count = 0;

  for (const line of data) {
    const d = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ]
      .reduce((acc, word, index) => {
        return acc.replaceAll(word, word + (index + 1) + word);
      }, line)
      .split('')
      .map(Number)
      .filter(Boolean);
    const sum = d[0].toString().concat(d[d.length - 1].toString());
    count += parseInt(sum);
  }
  return count;
}

const answer = await day1b();
console.log(chalk.bgBlueBright('Your Answer:'), chalk.green(answer));
