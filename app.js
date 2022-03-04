//http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=37.8267,-122.4233
// Prishtina http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.6629,21.1655
//Prizren   http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.2171,20.7436
// api Los Angelos // https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW5kcml0ZyIsImEiOiJjbDBjZzhhZDgwczk2M2pxc3IyamdjanIzIn0.FEEK_cKhKbH_UksuxY62iQ
const request = require('request');
const chalk = require('chalk');

// const unit = 'm';
// const url = `http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.2171,20.7436&units=${unit}`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     let unitName = unit === 'm' ? 'degrees' : 'fahrenheit';
//     const weather = response.body;

//     console.log(
//       `Name: ${chalk.yellow(weather.location.name)} Country: ${chalk.yellow(
//         weather.location.country
//       )}  Region: ${chalk.yellow(
//         weather.location.region
//       )} Weather Description: ${chalk.yellow(
//         weather.current.weather_descriptions
//       )}`
//     );
//     console.log(
//       `It is currently ${chalk.green(
//         weather.current.temperature
//       )} ${unitName} out. There is a ${chalk.green(
//         weather.current.precip
//       )} % chance of rain`
//     );
//   }
// });

const geoCodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW5kcml0ZyIsImEiOiJjbDBjZzhhZDgwczk2M2pxc3IyamdjanIzIn0.FEEK_cKhKbH_UksuxY62iQ&limit=1';
request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location.Try another search.');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});

//folderi 6 video 9 callback abstraction
