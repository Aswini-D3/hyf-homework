//Bringing dependencies

const reservations = require("../data/reservations");

//JSON response for all reservations
app.get('/reservations', (req,res)=>{
    res.send(reservations);
});

//JSON response for reservations with id
app.get('/reservations/:id', (req,res)=>{
    const id = Number(req.params.id);
    console.log(req.params.id);
    const reservationId = reservations.filter(reservation=>reservation.id === id);
    res.send(reservationId); 

});
module.exports=app;


