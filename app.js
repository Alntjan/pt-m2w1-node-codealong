const express = require('express');
const hbs = require('hbs');
const DogApi = require('doggo-api-wrapper');

const app = express();
const api = new DogApi();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// create our first amazing route
app.get('/', (request, response, next) => {
  const data = {
    name: 'DinoPug',
    // lastname: 'Shakespeare',
    breed: 'Pug',
    braincells: 2,
    description: '<span>description</span>',
    characteristics: ['cute', 'fearless', 'hungry', 'snores a lot'],
    address: {
      street: 'DinoStreet 1',
      country: 'Dinoland',
    },
  };
  response.render('index', data);
});

// http://localhost:8080/home
app.get('/home', (request, response, next) => {
  const data = {
    enemies: [
      {
        name: 'DinoBeagle',
        description: 'A Beagle with an atittude and corgi arms.',
      },
      {
        name: 'Godzilla',
        description: 'Tough enemy. Not as cute as DinoPug.',
      },
      {
        name: 'Queen Sausage Dog',
        description:
          'Her super power is having an awesome layout aka bread aka buns.',
      },
    ],
  };
  response.render('home', data);
});

app.get('/random-dog', (req, res, next) => {
  api
    .getARandomDog()
    .then((data) => {
      res.render('dog', data);
    })
    .catch((err) => console.error(err));
});

// http://localhost:8080/home/leo.rawlison?search=whateverneedstobesearched
//
app.get('/users/:whatever', (request, response, next) => {
  console.log(request.params);
  console.log(request.query);
  // response.sendFile(__dirname + '/views/home.html');
});

app.listen(8080, () => console.log('Im listening on port 8000!'));
