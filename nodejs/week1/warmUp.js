class Circle 
{
    constructor(r) {
        this.radius = r;
    }
    getArea() {
        return(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    getCircumference() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    getDiameter()
    {
        return(2 * this.radius).toFixed(2);
    }
}
let radius = 10;
let circle = new Circle(radius);
console.log(`Area for radius ${radius} is ${circle.getArea()}`);
console.log(`Circumference for radius ${radius} is ${circle.getCircumference()}`);
console.log(`Diameter for radius ${radius} is ${circle.getDiameter()}`);
/*Circle class is used to hold the value of the radius. It has one constructor. It takes the radius as an argument and assigns it to the local variable radius.
This class also has two methods getArea() and getPerimeter() to get the area and perimeter of a circle for the current radius. toFixed(2) is used to change the calculated value to two decimal places.
In this example, we are creating one variable radius(this is a different variable) with value 10.
We are creating one Circle object by passing the value of radius to its constructor.
Finally, we are printing the area and perimeter of the circle.*/