const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const port = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const mealRouter = require("./api/meals");
router.use("/meals", mealRouter);

const reservationRouter = require("./api/reservations");
router.use("/reservations", reservationRouter);

const reviewRouter = require("./api/reviews");
router.use("/reviews", reviewRouter);

app.use("/api", router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
