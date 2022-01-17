import fetch from 'node-fetch';

const URL = 'https://goweather.herokuapp.com/weather/Wroclaw'

const response = await fetch(URL);
const data = await response.json();

let counter = 0;

data.forecast.forEach(el => {
  if(el.temperature.replace(/[^\d.-]/g, '') > 15) {
    counter++;
  }
})

if(counter >0) {
  console.log(`W ciągu najbliższych 3 dni temperatura powyżej 15 stopni będzie ${counter} razy`)
} else 
console.log('W ciągu najbliższych 3 dni nie będzie temperatury powyżej 15 stopni')
