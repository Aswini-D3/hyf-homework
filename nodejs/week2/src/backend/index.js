//Bringing Dependencies
const express = require('express');
const app = express()
const port = 3002;

//Response for all the meals
const allMeals = require("./routes/meals.js");
app.get("/meals", allMeals);

//Response for the meal with corresponding meal id
const mealWithId = require("./routes/meals.js");
app.get("/meals/:id", mealWithId);

//Response for all the reviews
const allReviews = require("./routes/reviews.js");
app.get("/reviews", allReviews);

//Response for the review with corresponding review id
const reviewWithId = require("./routes/reviews.js");
app.get("/reviews/:id", reviewWithId);

//Response for all the reservations
const allReservations = require("./routes/reservations.js");
app.get("/reservations", allReservations);

//Response for the reservation with corresponding reservation id
const reservationWithId = require("./routes/reservations.js");
app.get("/reservations/:id", reservationWithId);

//// Turn on that server!
app.listen(port, () => console.log(`Server listening on port ${port}!`));




