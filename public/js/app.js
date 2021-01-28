const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

messageOne.textContent = ''
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const city = search.value

  messageOne.textContent = 'Loading...'
  messagetwo.textContent = ''
  fetch('/weather?address=' + city).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOne.textContent = data.error
      } else {
        const {forecast: {weather_descriptions, temperature, feelslike }, location} = data
        messageOne.textContent = location
        messagetwo.textContent = `${weather_descriptions} with a temperature of ${temperature} degrees and a feel like ${feelslike} degrees`
      }
    })
  })
})