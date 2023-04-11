// The api only calls Wieliczka, due to the fact that I couldn't figure out how to import the lat and lon into the url
// The lat and lon are set to 50 and 20, which is Wieliczka's lat and lon
// The temperature is also wrong

let weatherData = {
  key: '3947b8b6134ac7f0e1850edc4680e82c',

  fetchCity: function (lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=50&lon=20&appid=3947b8b6134ac7f0e1850edc4680e82c') 
    .then((res) => res.json())
    .then((data) => this.display(data));
  },
  display: function(data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector('.cityName').innerText = "Weather in " + name
    document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector('.description').innerText = description
    document.querySelector('.temp').innerText = temp + "°C"
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%"
    document.querySelector('.wind').innerText = "Wind speed: " + speed + " km/h"
  }
}

// Having trouble trying to import the lon and lat into the url

// console.log(fetchCity('austin'))
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.key}`)
// `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.key}`

// 'https://api.openweathermap.org/data/2.5/weather?' 
//     + lat + 
//     '&' 
//     + lon +
//      '&appid='
//      + this.key