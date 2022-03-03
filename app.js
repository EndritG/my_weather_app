//http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=37.8267,-122.4233
// Prishtina http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.6629,21.1655
const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=42.6629,21.1655';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
