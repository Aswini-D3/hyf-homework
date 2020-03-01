const firstWords = ["Brilliant", "Perfect", "Make", "Dream", "Be", "Try", "Find", "Everything", "Be", "Happy"]
const secondWords = ["Future", "Person", "Easy", "Big", "Happy", "Again", "Yourself", "Counts", "Patient","Endings"];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const startupName =firstWords[randomNumber] + secondWords[randomNumber];
console.log("The startup: " + startupName  +" contains " + startupName.length +" characters") ;