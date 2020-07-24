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
    if(reservationId.length===0)
    {
        res.status(401).send('Not found reservation');
    }
    else
    {


    res.send(reservationId); 
    }

});
module.exports=app;


