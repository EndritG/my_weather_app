//http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=37.8267,-122.4233
// Prishtina http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.6629,21.1655
//Prizren   http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.2171,20.7436
// api Los Angelos // https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW5kcml0ZyIsImEiOiJjbDBjZzhhZDgwczk2M2pxc3IyamdjanIzIn0.FEEK_cKhKbH_UksuxY62iQ

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

geocode('Prishtina', (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
