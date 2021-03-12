const apiURL = "https://openweathermap.org/data/2.5/forecast?=5604473&appid=4ba8e18b879f91c8c2f3e2cf0ebf901a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.getElementById('current-temp');
    temperature.textContent = jsBoject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent = imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);
  });