
const songs = [
  "Have A Cigar.mp3",
  "Shine On You Crazy Diamond (Part I-V).mp3 ",
  "Shine On You Crazy Diamond (Part VI-IX).mp3" ,
  "Welcome To The Machine.mp3" ,
  "Wish You Were Here.mp3" 
];

const createSongList = () => {
  const list = document.createElement('ol');

  for(let i = 0; i < songs.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}

document.getElementById('songList').appendChild(createSongList());

songList.onclick = (e) => {
  // console.log(e)
  const clickedItem = e.target;
  const source = document.getElementById('source');
  source.src = 'music/' + clickedItem.innerText;
  console.log(clickedItem.innerText);

  document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
  document.getElementById('currentSong').innerText = clickedItem.innerText;


  player.load();
  player.play();
}