const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6dcf541fc8a41792349aa58a36003456/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Coordinate error', undefined)
        } else {
            const degree = body.currently.temperature
            const rain = body.currently.precipProbability
            callback(undefined, `${body.daily.data[0].summary} It is currently ${degree} degrees out. There is a ${rain}% chance of rain.`)
        }
    })
}

module.exports = forecast