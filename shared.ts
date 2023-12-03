import { readFile } from 'fs/promises';

export async function readData(path?: string) {
  const fileName = path || process.argv[2];
  return (await readFile(fileName)).toString().trim().split('\n');
}
