import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);

  return data.reduce((acc, line) => {

    const power = {
      red: 0,
      green: 0,
      blue: 0,
    };

    line.split(': ')[1]
      .split('; ')
      .map((round) => {
        round.split(', ')
          .map((turn) => {
            const [count, color] = turn.split(' ');

            if (power[color] < Number(count)) {
              power[color] = count;
            }
          });
      });

    const cubesPower = Object.values(power).reduce((acc, value)=>{
      return acc * value
    }, 1)

    return acc + cubesPower;
  }, 0);
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
