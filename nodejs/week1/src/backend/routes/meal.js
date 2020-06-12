//Respond with the json for a random meal (including it's reviews)

//Requiring json files to get the data..require are used to consume modules. It allows you to include modules in your programs. You can add built-in core Node.js modules, community-based modules (node_modules), and local modules.
//The require function will look for files in the following order:
/*Built-in core Node.js modules (like fs)
NPM Modules. It will look in the node_modules folder.
Local Modules. If the module name has a ./, / or ../, it will look for the directory/file in the given path. It matches the file extensions: *.js, *.json, *.mjs, *.cjs, *.wasm and *.node.*/


const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");


//The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
module.exports=(req, res)=> {
  let randomMealNumber = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomMealNumber];
  const x = randomMeal.id;//Random selction of meal based on ID

  const randomMealReview = reviews.filter(review => {
    if (randomMeal.id == review.mealId) {
      res.send(review) ;//Based on reviews to get randomMeal using filter method.
    }
  });
};