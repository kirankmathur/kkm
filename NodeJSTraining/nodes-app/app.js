const fs = require('fs')
//fs.writeFileSync('notes.txt','This file was created by node.js by kiran')
//const args = process.argv.slice(2);
//console.log(" args[0] "+args[0]);
fs.appendFileSync('notes.txt','\n appended this line .....')
//fs.appendFileSync('notes.txt','\n '+args[0]);