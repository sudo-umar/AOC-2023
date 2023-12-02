import {readData} from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);
  const re = /\d/g;
  let count = 0;
  for (const text of data) {
    const digits = text.match(re);
    if (digits) {
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      count += parseInt(firstDigit.concat(lastDigit));
    }
  }
  return count;
}

const answer = await day1a();
console.log(chalk.bgBlue('Your Answer:'), chalk.green(answer));
