const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
const myPlaylist = [];

function myList(index)
    {
        const newSong=songDatabase[index];
        myPlaylist.push(newSong);
    }
console.log("My List:");

function addSongToDatabase(song) 
{
    songDatabase.push(song);
}

  function getSongByTitle(title)
   {
    index = songDatabase.findIndex(x => x.title === title);
    const newSearchedSong = songDatabase[index];
    return newSearchedSong;
  }
  
  const searchedSong = getSongByTitle("3 nails in wood");
  console.log(searchedSong);
  
  const searchedSong2 = getSongByTitle("My baby");
  console.log(searchedSong2);

  
  
  
  function addSongToMyPlaylist(title)
   {
    index = songDatabase.findIndex(x => x.title === title);
    const newSongToAdd = songDatabase[index];
  
    myPlaylist.push(newSongToAdd);
    return myPlaylist;
  
  }
  addSongToMyPlaylist('Blacker than black');
  console.log(myPlaylist);
