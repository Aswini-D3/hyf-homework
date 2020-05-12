/*Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. The getCurrentPosition function is probably going to throw an error, 
        but that is fine. As long as you can use it as a promise.*/

        const setTimeoutPromise=new Promise((resolve)=>{
            setTimeout(()=>{
            resolve('Called after 3 seconds')
        },3000)
    })

    const getCurrentLocationpromise=new Promise((resolve)=>{

             navigator.geolocation.getCurrentPosition((pos)=>{
            const currentPosition=`Latitude:${pos.coords.latitude}   Longitude:${pos.coords.longitude}`
            resolve(currentPosition)
    })

    })

   Promise.all([setTimeoutPromise,getCurrentLocationpromise]).then((response)=>{

          console.log(response[0]);
          console.log(response[1]);     
   }).catch(()=>{
          console.log('error')  

   })