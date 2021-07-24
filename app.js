const express = require('express');

const app = express();

app.use(express.static('public'));

// create our first amazing route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/index.html');
});

// http://localhost:8080/home
app.get('/home', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// http://localhost:8080/home/leo.rawlison?search=whateverneedstobesearched
//
app.get('/users/:whatever', (request, response, next) => {
  console.log(request.params);
  console.log(request.query);
  // response.sendFile(__dirname + '/views/home.html');
});

app.listen(8080, () => console.log('Im listening on port 8000!'));
