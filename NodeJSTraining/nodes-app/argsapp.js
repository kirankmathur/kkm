//import chalk from 'chalk';
const chalk = require('chalk')


console.log(chalk.white('Success NAREN VISHNU'));

console.log(' printing array '+process.argv)

console.log(' \n  printing arg ....' + process.argv[2])

const getNotes = require('./notes.js')

const command = process.argv[2]

if(command === 'add')
{
    console.log(' \n ADDING LOGIC HERE')
}
else if(command === 'remove')
{
    console.log(' \n REMOVE LOGIC HERE')
}
else
{
    console.log(' \n NO LOGIC HERE')
}


// node argsapp.js add
// node argsapp.js add --title="Legend"