const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoiam9yZ2VhbmRyZXNzYWxkYXJyaWFnYWdhdmlyaWEiLCJhIjoiY2pubnBpMTFjMHZhMjNxbnhoY3hsazYyaSJ9.JrVCGWob11bs_7MW-vqK9Q&limit=1'
  request({ url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable ot connect to location service!!', undefined)
    } else if(body.features.length === 0) {
      callback('Unable to find locattion, Try another search', undefined)
    } else {
      const { center, place_name } = body.features[0]
      callback(undefined, {
        latitude: center[1],
        longitude: center[0],
        location: place_name
      })
    }
  })
}

module.exports = geocode