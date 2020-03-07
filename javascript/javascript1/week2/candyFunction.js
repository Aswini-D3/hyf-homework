let boughtCandyPrices=[];
let price;
const amountToSpend=Math.random() * 100;

function addCandy(candyType, weight)
{
    
    if(candyType=="Sweet")
    {
        price=0.5*weight;
        boughtCandyPrices.push(price);
    }
    else if(candyType=="Chocolate")
    {
        price=0.7*weight;
        boughtCandyPrices.push(price);
    }
    else if(candyType=="Toffee")
    {
        price=1.1*weight;
        boughtCandyPrices.push(price);
    }
    else
    {
        candyType="Chewing Gum";
        price=0.03*weight;
        boughtCandyPrices.push(price);

    }
    return boughtCandyPrices.toString();
}
function canBuyMoreCandy()
{
    addCandy('sweet', 20); 
    addCandy('chocolate' , 12) ;
    addCandy ('toffee' , 10) ;
    addCandy('chewing gum', 6);

    let totalPrice=0;
    n=0;
    while(n<boughtCandyPrices.length){
        n++;
        totalPrice=totalPrice+boughtCandyPrices[n];
    }
    console.log("Total price is:" +totalPrice);
    console.log("The amount to spend: "  +amountToSpend);
    if (totalPrice <= amountToSpend) {

        console.log ("You can buy more, so please do!") ;
        return true;
        
    }
    else {

        console.log ("Enough candy for you!") ;
        return false;
        
    }
}
console.log (boughtCandyPrices);
const result=canBuyMoreCandy();
console.log(result);


