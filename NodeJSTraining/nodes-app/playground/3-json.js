
const fs = require("fs")


const dataBuffer = fs.readFileSync("3-json.json")
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)

user.name = "Naren"
user.age = "17"

const userJSON = JSON.stringify(user)

fs.writeFileSync('3-json.json',userJSON)



