const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { max } = require("../database");

//using GET method
router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    res.send(titles);
  } catch (error) {
    throw error;
  }
});

//using POST method
router.post("/", async (req, res) => {
  try{
  const newMeal = {
      title: req.query.title,
      description: req.query.description,
      location: req.query.location,
      when: req.query.when,
      max_reservations: req.query.max_reservations,
      price: req.query.price,
      created_date: req.query.created_date
  }

  await knex("meal").insert(newMeal);
  res.send('New meal added');
}
  catch(error){
    throw error;
}
});

//Meal by ID(GET)
router.get("/:id", async (req, res)=>
{
  try
  {
    const mealId = await knex("meal").select('*')
        .where({'id': req.params.id});
  
  res.send(mealId);
  }
  catch(error)
  {
    throw error;
  }
});

//using PUT method...
router.put("/:id", async (req, res) =>{
try{
  await knex('meal')
      .where({'id':req.params.id})
      .update(
        {
          title: req.query.title,
          description: req.query.description,
          location: req.query.location,
          when: req.query.when,
          max_reservations: req.query.max_reservations,
          price: req.query.price,
          created_date: req.query.created_date
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


router.get("/", async(req,res)=>
{
  try
  {
    //Get meals that has a price smaller than maxPrice
    if(req.query.maxPrice)
    {
      const maxPrice = parseInt(req.query.maxPrice);
      const mealsWithLessPrice = await knex("meal")
            .select("*")
            .where("price", "<=", maxPrice);
      res.send(mealsWithLessPrice);
    }
    //Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
    else if(req.query.title)
    {
      const matchingTitles = await knex("meal")
              .select("*")
              .where("title", "like" , "%{req.query.title%}");
      res.send(matchingTitles);
    }
    //Get meals that has been created after the date
    else if(req.query.createdAfter)
    {
      const createdDate = new Date(req.query.createdAfter);
      const mealsCreatedAfter = await knex("meal")
                .select("*")
                .where("created_date", ">", createdDate);
      res.send(mealsCreatedAfter);
    }
    //Only specific number of meals-Limit
    else if(req.query.limit)
    {
      const limitNumber = parseInt(req.query.limit);
      const mealLimit = await knex("meal")
                  .select("*")
                  .limit(limitNumber);
      res.send(mealLimit);
    }
    //Get meals that still has available reservations
    else if(req.query.availableReservations)
    {
      const availableReservations = await knex("meal")
                  .select("title", "description", "location", "max_reservations")
                  .join("reservation")
                  .on("meal.id", "=", "reservation.meal_id")
                  .where("max_reservations", ">", "number_of_guests")
                  .groupBy("reservation.meal_id");
      res.send(availableReservations);
    }
    else 
    {
      res.send(await knex("meal").select(title));
    }
}
  catch(error)
  {
      throw error;

  }
});

module.exports = router;
