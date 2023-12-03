import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  const maxCubes = {
    red: 12,
    green: 13,
    blue:14,
  }
   return data.reduce((acc, line,idx)=>{
     const validMoves =  line.split(': ')[1]
       .split("; ")
       .map((moves)=>{
         let turns = moves.trim().split(', ')
         return turns.every((entry)=>{
           const [qty, color] = entry.split(' ')
           return maxCubes[color] >= Number(qty)
         })
       }).every((el)=>el)
     return validMoves?acc+ (idx+1): acc
   }, 0)

}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
