//Bringing Dependencies

const meals = require("../data/meals");
const reviews = require("../data/reviews");

//JSON response for with corresponding ID
app.get('/meals/:id', (req,res)=>{
    const id = Number(req.params.id);
    const meal = meals.filter(meal=>meal.id === id);
    res.send(meal);
    if(mealId.length === 0){
        res.status(401).send('Not found meal');
}
    else{
        res.send(meal);
    }
    
});

//JSON response for meals that has a price smaller than maxPrice
app.get('/meals', (req,res)=>{
    if(req.query.maxPrice){
        const maxPrice = Number(req.params.maxPrice);
        const mealSmallerThanMaxPrice = meals.filter((meal)=>meal.price <= maxPrice);
        res.send(mealSmallerThanMaxPrice);
    }
//JSON response to Get meals that partially match a title.
    else if(req.query.title){
        const mealTitle = (req.query.title).toLowerCase();
        const matchedMealTitle = meals.filter((meal)=>meal.title.toLowerCase().includes(mealTitle));
        res.send(matchedMealTitle);
    }
//JSON response  to Get meals that has been created after the date
    else if(req.query.createdAfter){
        const createdDate = new Date(req.params.createdAfter);
        const mealsCreatedAfter = meals.filter((meal)=>new Date(meal.createdAt) > createdDate);
        res.send(mealsCreatedAfter);
    }
//JSON response to  get Only specific number of meals
    else if(req.query.limit){
        const limit = Number(req.params.limit);
        const limitNumber = meals.slice(0, limit);
        res.send(limitNumber);
    }
    else{
        //JSON response for all meals
        res.send(meals);

        
    }

});
module.exports = app;