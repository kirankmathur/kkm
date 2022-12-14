//import chalk from 'chalk';
const chalk = require('chalk')

const yargs = require('yargs')

//console.log(process.argv)

//console.log(yargs.argv)

yargs.version('1.1.0')

// Command Prompt --> node yargs.js add --title="MAN MADETITLE"
// Command Prompt --> node yargs.js add --title="MAN MADETITLE" --body=" MEN MADEBODY",km yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
            title: {
                describe: 'Note ADD title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: "Note Body",
                demandOption: true,
                type: 'string'
            }
    },
    handler: function (argv) {

        //console.log('Adding a new note !!',argv)
        console.log(' \n Title !!' + argv.title)
        console.log(' \n Title !!' + argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {

        console.log('Removing the note !!')
    }

})

yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function () {

        console.log('Listing the notes !!')
    }

})

yargs.command({
    command: 'read',
    describe: 'Reading the notes',
    handler: function () {

        console.log('Reading the notes !!')
    }

})
// yargs.parse();

console.log(yargs.argv)