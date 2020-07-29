function  displayWithThen(time){// promsie using then
    return new Promise((resolve)=>{
        setTimeout(resolve,time*1000)
    })
}
displayWithThen(3)
 .then(() => {
     console.log('Hello,I am called asynchronously'); // logged out after 3 seconds
    })


//When you have written the promise, use it with async/await

function  displayWithAsync(time){   //promise, use it with async/await
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("I am called asynchronously")
        },time*1000)
    })
}
async function getData()
{
    let data=await displayWithAsync(4);// logged out after 4 seconds
    console.log(data)
}
getData();










