const express = require("express");
const router = express.Router();
const knex = require("../database");


/*Get Method	
    router.get("/", async (request, response) => {
      try {
      const meals = await knex("meal").select(knex.raw("DISTINCT meal.id, meal.title, meal.description, meal.price, sum(reservation.number_of_guests)"))
      .leftJoin(knex.raw("reservation ON reservation.meal_id=meal.id"))
      .groupBy("meal.id")
      console.log(meals);
        res.send(meals);
       } catch (error) {
         throw error;
      }
     });*/

// GET method
router.get("/", async (req, res) => {
  try {
    const {
      maxPrice,
      availableReservations,
      title,
      createdAfter,
      limit } = req.query
let meals = await knex('meal');

 // Get meals price smaller than maxPrice
    if (maxPrice) {
      const mealMaxPrice = parseInt(maxPrice)
      meals = await knex('meal')
      .select('*')
      .where('price', '<',mealMaxPrice)
    }
    // Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
    if(title) {
      meals = await knex('meal')
      .select('*')
      .where('title', 'like' , `%${title}%`)
 } 
//Get meals that has been created after the date
 if(createdAfter) {
    const afterDate = new Date(createdAfter)
      meals = await knex('meal')
      .select('*')
      .where('created_date', '>' ,afterDate)
    } 
    // Only specific number of meals
    if (limit) {
      const mealLimit = parseInt(limit)
        meals = await knex('meal')
        .select('*')
        .limit(mealLimit)
      }
      // Get meals that still has available reservations
    if(availableReservations) {
          meals = await knex('meal').select(knex.raw('meal.id, meal.title,meal.max_reservations, COALESCE(SUM(reservation.number_of_guests))'))
          .leftJoin(knex.raw('reservations ON reservation.meal_Id = meal.id'))
          .where(knex.raw('max_reservations > reservation.number_of_guests'))
          .groupBy('reservation.id')
        }
  res.send(meals)
  } 
  catch (error) 
  {
    throw error;
  }
});



    // Returns meal by id	
    router.get("/:id", async (req, res)=>
    {
    try
    {
    const mealId = await knex("meal").select('*')
        .where({id: req.params.id});
    if(mealId.length===0){
      res.send("Meal not found with ID");
    }
    else{
  
  res.send(mealId);
  }
  }
  catch(error)
  {
    throw error;
  }
  });

// Post Method
router.post("/", async (req, res) => {
try {	
const {title, description, location, when, max_reservations, price, created_date}=req.body;
console.log(req.body);
const newMealId = await knex("meal").insert(
  {
    title:title,
    description:description,
    location:location,
    when:when,
    max_reservations:max_reservations,
    price:price,
    created_date:created_date

  }
);
res.json(`Created meal with ${newMealId}`);
}
catch (error) {
  throw error;
}
});



    /*router.post("/", async (req, res) => {
      try {
        const newMeals = {
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          when: req.body.when,
          max_reservations: req.body.max_reservations,
          price: req.body.price,
          created_date: req.body.created_date
        }
        await knex('meal').insert(newMeals)
        res.send(`Created new meal with ${newMeals.title}`)
      } catch (error) {
        throw error;
      }
    });*/


// Put method
router.put("/:id", async (req, res) =>{
  try{
    await knex('meal')
        .where({'id':req.params.id})
        .update(
          {
              title: req.query.title,
              description: req.query.meal_description,
              location: req.query.location,
              when: req.query.when,
              max_reservations: req.query.max_reservations,
              price:req.query.price,
              created_date:req.query.created_date
          })
        
      res.send('Meal updated');
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
    await knex("meal")
        .where({'id': req.params.id}).delete();
    res.send('Meal Deleted');
  }
  catch(error)
  {
    throw error;
  }
});

module.exports = router;
