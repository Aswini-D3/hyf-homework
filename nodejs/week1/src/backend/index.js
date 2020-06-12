var express = require('express'); // call express
var app = express(); // define our app using express

//creating meal route
var reservations = require('./routes/reservations');
app.use('/reservations', reservations);

// Listen to port 8084
app.listen(8084, function () {
    console.log('Dev app listening on port 8084!');
  });



