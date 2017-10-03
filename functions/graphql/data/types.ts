import * as fs from 'fs';

let t = '';

const typesRootDirectory = __dirname + '/types';
const fileNames = fs.readdirSync(typesRootDirectory);

fileNames.forEach((fn) => {
  t += fs.readFileSync(typesRootDirectory + '/' + fn) + '\n';
});

export const types = t;
