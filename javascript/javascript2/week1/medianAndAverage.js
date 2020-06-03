function getMedian(values)//here median function
{
	values.sort(function(a,b){
  	return a-b;
  });
  var half = Math.floor(values.length / 2);//median logics
  let median;
  if (values.length % 2)
  {
      median = values[half];
  }
  else
  {
      median = (values[half - 1] + values[half]) / 2.0;
  }
  return median;//returning median
}

function getAverage(arr) //function average
{
    var sum=0;
    for(var i in arr)
    {
        sum = sum + arr[i];//logic
    }
    var average=sum/arr.length;//formulae
    return average;//returning avg
}

const housePrices = [4000000, 6500000, 1400000, 70000000, 300000000, 9000000, 4400000];
function medianAverage(arrayOfNumbers)//function,price and values assigning
{
    let averageVal = getAverage(housePrices);
    let medianVal = getMedian(housePrices);

    let price = new Object();
    price.average = averageVal;
    price.median = medianVal;

    return price;
}

let price = medianAverage(housePrices)
const ulTag = document.querySelector('ul');//creating liTags and putting information into that and appending into ul
const liTag1 = document.createElement('li');
liTag1.innerHTML = "The house prices are: " + housePrices.join(", ");
ulTag.appendChild(liTag1);
const liTag2 = document.createElement('li');
liTag2.innerHTML = "The average price is: " + averageVal;
ulTag.appendChild(liTag2);
const liTag3 = document.createElement('li');
liTag3.innerHTML = "The median price is: " + medianVal;
ulTag.appendChild(liTag3);
