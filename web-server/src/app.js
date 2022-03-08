const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
//  Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//setup static
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather APP',
    name: 'Endrit Germizaj',
    fTitle: 'Weather Application 2022',
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Endrit Germizaj',
    fTitle: 'Weather Application 2022',
  });
});
app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text',
    title: 'Help Me',
    name: 'Endrit Germizaj',
    fTitle: 'Weather Application 2022',
  });
});
app.get('/weather', (req, res) => {
  res.send('This is Weather Page');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

//folder 7 video 5 serving css
