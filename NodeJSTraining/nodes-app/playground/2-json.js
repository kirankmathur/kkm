
const fs = require("fs")


const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
console.log(data)
console.log(data.title)
console.log(data.author)



