const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");


//using GET method
router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("review").select("meal_id", "title","description","stars");
    res.send(titles);
  } catch (error) {
    throw error;
  }
});

//using POST method
router.post("/", async (req, res) => {
  try {	
  const {title, description, stars, meal_id, created_date}=req.body;
  console.log(req.body);
  const newReviewId = await knex("review").insert(
    {
      title:title,
      description:description,
      stars:stars,
      meal_id:meal_id,
      created_date:created_date
  
    }
  );
  res.json(`Created review with ${newReviewId}`);
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
    const reviewId = await knex("review").select('*')
        .where({id: req.params.id});
    if(reviewId.length===0){
      res.send("Review not found with ID");
    }
    else{
  
  res.send(reviewId);
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
  await knex('review')
      .where({'id':req.params.id})
      .update(
        {
            title: req.query.number_of_title,
            description: req.query.meal_description,
            meal_id: req.query.meal_id,
            created_date: req.query.created_date,
            stars: req.query.stars
        })
      
    res.send('Review updated');
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
    await knex("review")
        .where({'id': req.params.id}).delete();
    res.send('Review Deleted');
  }
  catch(error)
  {
    throw error;
  }
});

module.exports = router;