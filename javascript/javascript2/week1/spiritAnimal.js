const spiritAnimal=["The crying butterfly", "The fullmoon wolf", "The powerful Tiger", "The angry bird"];
const inputName=document.getElementById("name");
const input=document.getElementById("input");
const randomName=function()
{

    if(inputName==="")
    {
        input.innerHTML="Please enter name here";
    }
    else
    {
        const randomNumber = Math.floor(Math.random()*spiritAnimal.length);
        const randomSpiritAnimalName = spiritAnimal[randomNumber];
        input.innerHTML=`${inputName}` + `${randomSpiritAnimalName}`;
    }
}
document.getElementById("click").addEventListener('click', randomName);


