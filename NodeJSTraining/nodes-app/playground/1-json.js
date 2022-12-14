
const fs = require("fs")

const book = {

    title: "Saving private ryan",
    author: "steven spielberg"

}

//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)
//console.log(bookJSON.title)

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.title)
//console.log(parsedData.author)

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
console.log(bookJSON.title)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
console.log(parsedData.title)


fs.writeFileSync("1-json.json",bookJSON)

