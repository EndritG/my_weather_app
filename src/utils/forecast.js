const request = require('request');
const chalk = require('chalk');
const forecast = (latitude, longitude, callback) => {
  const unit = 'm';
  const url =
    'http://api.weatherstack.com/current?access_key=e0218cd486d15327d813a026b6310aca&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      let unitName = unit === 'm' ? 'degrees' : 'fahrenheit';
      const weather = body;
      console.log(
        `Name: ${chalk.yellow(weather.location.name)} Country: ${chalk.yellow(
          weather.location.country
        )}  Region: ${chalk.yellow(
          weather.location.region
        )} Weather Description: ${chalk.yellow(
          weather.current.weather_descriptions
        )}`
      );
      callback(
        undefined,
        `It is currently ${weather.current.temperature} ${unitName} out. There is a ${weather.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
