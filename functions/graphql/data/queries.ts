import * as fs from 'fs';

let q = '';

const queriesRootDirectory = __dirname + '/queries';
const fileNames = fs.readdirSync(queriesRootDirectory);

fileNames.forEach((fn) => {
  q += fs.readFileSync(queriesRootDirectory + '/' + fn) + '\n';
});

export const queries = q;
