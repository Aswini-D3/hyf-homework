
//Bringing dependencies
const reviews = require("../data/reviews");

//JSON response for all reviews
app.get('/reviews', (req,res)=>{
    res.send(reviews);
});

//JSON response for reviews with id
app.get('/reviews/:id', (req,res)=>{
    const id = Number(req.params.id);
    console.log(req.params.id);
    const reviewId = reviews.filter(review=>review.id === id);
    res.send(reviewId); 

});
module.exports=app;


