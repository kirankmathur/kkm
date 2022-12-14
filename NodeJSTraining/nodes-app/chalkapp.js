//import chalk from 'chalk';
const chalk = require('chalk')


console.log(chalk.white('Success NAREN VISHNU'));

const fs = require('fs')
fs.appendFileSync('notes.txt',chalk.blue.bgRed.bold('\n Success NAREN VISHNU'))

console.log(chalk.blue.bgRed.bold('\n Success NAREN VISHNU'));

console.log(process.argv);

console.log(process.argv[2]);