const spiritAnimal=["The crying butterfly", "The fullmoon wolf", "The powerful Tiger", "The angry bird"];//given some random names
const inputName=document.getElementById("name");//inputName what we are typing
const input=document.getElementById("input");//to the output using div id
const randomName=function()//function calling
{

    if(inputName==="")
    {
        input.innerHTML="Please enter name here";
    }
    else
    {
        const randomNumber = Math.floor(Math.random()*spiritAnimal.length);//logic for random selection
        const randomSpiritAnimalName = spiritAnimal[randomNumber];//logic here for random selection
        input.innerHTML=`${inputName}` + `${randomSpiritAnimalName}`;
    }
}
document.getElementById("click").addEventListener('click', randomName);//added eventListener


