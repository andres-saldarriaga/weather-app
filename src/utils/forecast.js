const request = require('request')

const forecast = (lat, lng, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=2a8e5f4e478ca13c1ba677c5ac84baac&query=' + lat + ',' + lng
  request({ url, json: true}, (error, {body}) => {
    if(error) {
        callback('unable to connect to weather service!!', undefined)
      } else if(body.error) {
        callback(body.error.info, undefined)
      } else {
        const { temperature, feelslike, weather_descriptions } = body.current
        callback(undefined, {
          temperature,
          feelslike,
          weather_descriptions
        });
      }
  })
}

module.exports = forecast