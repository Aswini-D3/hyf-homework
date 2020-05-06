const arrayOfFunctions = [
    () => console.log("Called first function"),
    () => console.log("Called second function"),
    () => console.log("Called third function")
];

arrayOfFunctions.forEach(element => element());

//Create a function as a const and try creating a function normally. Call both functions.
 const name = function nameFinder(name){console.log("Have a nice day " + name);
}

function nameLogger(name){
    console.log("Your name is: "+ name);
}
name("Aswini");
nameLogger("Aswini");

//Create an object that has a key whose value is a function. Try calling this function
 const object = { key : () => console.log("I am a function")};

 object.key(); 