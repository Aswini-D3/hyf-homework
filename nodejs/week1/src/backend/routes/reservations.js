//We will create a module export, which will export the definition of our Routes variable
module.exports = (function() {
    'use strict';
    var reservations = require('express').Router();

    app.get(function(req, res) {
        reservation.find(function(err, reservations) {
            if (err)
                res.send(err);

            res.json(reservations);
        });
        return reservations;
    });
})();
    