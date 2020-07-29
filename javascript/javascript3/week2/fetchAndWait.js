//USing .then()
  //Fetch some data from an api. and
  //After that data has been fetched, wait 3 seconds
  //Log out the data from the api
//part 1    
fetchMoviesUsingThen=()=>{
    const url='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
    fetch(url)
    .then(json=>json.json())
    .then(listOFMovies=>
       {
         listOFMovies.forEach(movies => {console.log(movies)
           });// end of foreach loop
          })
            .catch(err=>console.log(err))
    }// end of fetchDataUsingThen
    setTimeout(fetchMoviesUsingThen(),3000)

//part 2
    //using async and await 
     fetchMoviesUsingAsync=async()=>{
       try{
          const url='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
          const fetchMovies=await fetch(url)
          const listOfMovies=await fetchMovies.json();
              listOfMovies.forEach(movies => {console.log(movies)
              });
             }
                catch(error){
                 console.log(error)
                               }
    }//end of  fetchMoviesUsingAsync function
