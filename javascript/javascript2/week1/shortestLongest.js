//code for longest word
function longestWord(arr) 
{ 
    let longestWord;
    let longestlength= 0;//logic here
    for(let i=0; i<arr.length; i++)
    {
    if(arr[i].length > longestlength)//logic here
    {
      longestlength = arr[i].length;
      longestWord= arr[i];
     }
    }
     return longestWord;
}
     
    //code for shortest word
      function shortestWord(arr) 
    {

      var shortestWord;
      var shortestLength = arr[0].length;//logic here
      for(var i = 1; i < arr.length; i++)
      {
       if(arr[i].length < shortestLength)//logic here
       {
      shortestLength = arr[i].length;   
      shortestWord = arr[i];            
      }
        }
    return shortestWord;
    }
    
    console.log(shortestWord(['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium']));
    console.log(longestWord(['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium']));