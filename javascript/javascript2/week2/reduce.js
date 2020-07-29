/*var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) 
{
    var number = numbers[i];
    newNumbers.push(number);

    if(number % 2 == 0) {
        
        newNumbers.push(number);
    }
}
console.log("The final numbers are", newNumbers); // [1, 2, 2, 3, 4, 4]*/

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.reduce(function(newArray, number){
    newArray.push(number);

    if(number % 2 == 0) {
        /* Add it a second time. */
        newArray.push(number);
    }

    return newArray; /* This is important! */
}, []);

console.log("The final numbers are", newNumbers); // [1, 2, 2, 3, 4, 4]

