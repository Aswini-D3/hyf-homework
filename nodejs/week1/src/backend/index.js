// Bring in our dependencies...
const express=require('express');
const app=express();
const port = 3000;

//Creating routes...
const largemealsRouter=require('./routes/large-meals.js');
app.get('/large-meal',largemealsRouter);

const mealsRouter=require('./routes/meals.js');
app.get('/meals',mealsRouter);

const reservationRouter=require('./routes/reservation.js');
app.get('/reservation',reservationRouter);

const mealRouter=require('./routes/meal.js');
app.get('/meal',mealRouter);

const cheapmealRouter=require('./routes/cheap-meals.js');
app.get('/cheap-meal',cheapmealRouter);


//// Turn on that server!
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));



