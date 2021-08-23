const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6dfb2655f6ed5b8cf11ac32ad4be9d9c&query='+ latitude + ',' + longitude + '&units=f'
//console.log(url)
    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) 
        } else if (!body.current) {
            callback('Unable to find location.  Try another search.', undefined)
        } else {
            const data = body.current
          
            callback(undefined, 
                data.weather_descriptions[0] + ' right now.  Currently '+ data.temperature + ' degrees.  It feels like ' + data.feelslike +'.' + '  The humidity is currently ' + data.humidity + '% with winds ' + data.wind_dir + ' at ' + data.wind_speed + ' mph.'
            )
        }
    }) 
}

module.exports = forecast