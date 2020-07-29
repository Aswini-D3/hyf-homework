const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");


//using GET method
router.get("/", async (request, response) => {
  try {
    const availableMeals = await knex.raw(
      "SELECT meal.*,sum(reservation.number_of_guests) Total FROM meal INNER JOIN reservation on meal.id = reservation.meal_id GROUP BY meal.id HAVING Total < max_reservations"
    );
    
    response.json(availableMeals[0]);
  } catch (error) {
    throw error;
  }
});





/*router.get("/", async (request, response) => {
  try {
  const meals = await knex("meal").select(knex.raw("DISTINCT meal.id, meal.title, meal.description, meal.price, reservation.number_of_guests"))
  .leftJoin(knex.raw("reservation ON reservation.meal_id=meal.id"))
  .groupBy("meal.id")
  console.log(meals);
    response.send(meals);
   } catch (error) {
     throw error;
  }
 });*/


//using POST method
router.post("/", async (req, res) => {
  try {	
  const {name, Email, Phone, number_of_guests, meal_id, created_date}=req.body;
  console.log(req.body);
  const newReservationId = await knex("reservation").insert(
    {
      name:name,
      Email:Email,
      Phone:Phone,
      number_of_guests:number_of_guests,
      meal_id:meal_id,
      created_date:created_date
  
    }
  );
  res.json(`Created reservation with ${newReservationId}`);
  }
  catch (error) {
    throw error;
  }
  });

//Reservation by ID
router.get("/:id", async (req, res)=>
{
  try
  {
    const reservationId = await knex("reservation").select('*')
        .where({id: req.params.id});
    if(reservationId.length===0){
      res.send("Rerservation not found with ID");

    }
  else{
  
  res.send(reservationId);
  }
}
  catch(error)
  {
    throw error;
  }
});

//using PUT method...
router.put("/:id", async (req, res) =>{
try{
  await knex('reservation')
      .where({'id':req.params.id})
      .update(
        {
            number_of_guests: req.query.number_of_guests,
            meal_id: req.query.meal_id,
            created_date: req.query.created_date
        })
      
    res.send('Reservation updated');
  }
    catch(error)
    {
      throw error;
    }
});

//using DELETE method
router.delete("/:id", async (req, res)=>
{
  try
  {
    await knex("reservation")
        .where({'id': req.params.id}).delete();
    res.send('Reservation Deleted');
  }
  catch(error)
  {
    throw error;
  }
});

module.exports = router;