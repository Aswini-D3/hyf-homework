var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/createMeal", window.handleCreateMealRequest).resolve();
router.on("/meal/:id", window.handleMealRequest).resolve();
router.on("/reservations", window.handleReservationsRequest).resolve();
router.on("/reservationForm", window.handleReservationFormRequest).resolve();
router.on("/reviews", window.handleReviewsRequest).resolve();
router.on("/reviewForm", window.handleReviewFormRequest).resolve();


