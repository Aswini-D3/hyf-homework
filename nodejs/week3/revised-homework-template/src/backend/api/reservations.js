const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { max } = require("../database");

//using GET method
router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservationDetails = await knex("reservation").select("*");
    res.send(reservationDetails);
  } catch (error) {
    throw error;
  }
});

//using POST method
router.post("/", async (req, res) => {
  try{
  const newReservation = {
      number_of_guests: req.query.number_of_guests,
      meal_id: req.query.meal_id,
      created_date: req.query.created_date
  }

  await knex("reservation").insert(newReservation);
  res.send('New reservation added');
}
  catch(error){
    throw error;
}
});

//Reservation by ID
router.get("/:id", async (req, res)=>
{
  try
  {
    const reservationId = await knex("reservation").select('*')
        .where({'id': req.params.id});
  
  res.send(reservationId);
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