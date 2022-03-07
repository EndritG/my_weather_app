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

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      let unitName = unit === 'm' ? 'degrees' : 'fahrenheit';
      const weather = response.body;
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
        `It is currently ${chalk.green(
          weather.current.temperature
        )} ${unitName} out. There is a ${chalk.green(
          weather.current.precip
        )} % chance of rain`
      );
    }
  });
};

module.exports = forecast;
