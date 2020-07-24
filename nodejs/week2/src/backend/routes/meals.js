//Bringing Dependencies

const meals = require("../data/meals");
const reviews = require("../data/reviews");

//JSON response for with corresponding ID
app.get('/meals/:id', (req,res)=>{
    const id = Number(req.params.id);
    const meal = meals.filter(meal=>meal.id === id);
    if(mealId.length === 0){
        res.status(404).send('Not found meal');
}
    else{
        res.send(meal);
    }
    
});

app.get('/meals', (req,res)=>{
    const maxPrice = Number(req.params.maxPrice);
    const mealTitle = (req.query.title).toLowerCase();
    const createdDate = new Date(req.params.createdAfter);
    const limit = Number(req.params.limit);


//JSON response for meals that has a price smaller than maxPrice
    if(req.query.maxPrice){
        
        const mealSmallerThanMaxPrice = meals.filter((meal)=>meal.price <= maxPrice);
        if(mealSmallerThanMaxPrice.length===0)
        {
            res.send("No meal founded with the given price");
        }
        else{
        res.send(mealSmallerThanMaxPrice);
        }
    }
//JSON response to Get meals that partially match a title.
    else if(req.query.title){
        
        const matchedMealTitle = meals.filter((meal)=>meal.title.toLowerCase().includes(mealTitle));
        if(matchedMealTitle.length===0)
        {
            res.send("No meal title matched")
        }
        else{
        res.send(matchedMealTitle);
        }
    }
//JSON response  to Get meals that has been created after the date
    else if(req.query.createdAfter){
        
        const mealsCreatedAfter = meals.filter((meal)=>new Date(meal.createdAt) > createdDate);
        if(mealsCreatedAfter.length===0)
        {
            res.send("No meal created after the date");
        }
        else{
        res.send(mealsCreatedAfter);
        }
    }
//JSON response to  get Only specific number of meals
    else if(req.query.limit){
        
        const limitNumber = meals.slice(0, limit);
        if(limitNumber.length===0)
        {
            res.send("Not found with limit");
        }
        else{
        res.send(limitNumber);
        }
    }
    else{
        //JSON response for all meals
        res.send(meals);

        
    }

});
module.exports = app;