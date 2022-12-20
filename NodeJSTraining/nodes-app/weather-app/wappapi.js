const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=d69a7070827d14e1f187f97d428a9dab&query=37.8267,-122.4233'

const url = 'http://api.weatherstack.com/current?access_key=d69a7070827d14e1f187f97d428a9dab&query=13.0827,80.2707'

request({url: url}, (error, response) => {

    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.current)

})