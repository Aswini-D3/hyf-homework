 /*I used here HAPPY JS for calculator service....
 Both Express and Hapi aim to be highly flexible, simple, and extensible. 
 This similarity means that both have easy-to-use APIs, they're highly modular,
  and can support your application as it grows potentially very large. */

  /* Process of the setup...
  In nodejs..   $ mkdir calc-service
                $ cd calc-service 
                $ npm init
                $ npm install --save hapi@17.x.x
                $ touch server.js
                Routes...
                $ mkdir routes 
                $ cd routes
                $ touch routes.js */

const Hapi = require('hapi');

const host = 'localhost';
const port = 3000; 

const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {

    await server.start();
    console.log("Server up and running on port: " + port);

}

//Setup the routes
require('./routes/routes')(server);

init();