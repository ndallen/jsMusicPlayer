
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

const playAudio = () => {
  if(player.readyState) {
    player.play();
  }   
}

const pauseAudio = () => {
  player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = (e) => {
  const volume = e.target.value;
  player.volume = volume;
}

const updateProgress = () => {
   if (player.currentTime > 0) {
   const progressBar = document.getElementById('progress');
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
  }
  // console.log(progressBar.value + "Progress Bar value");
  // console.log(player.currentTime + "Current Time");
  // console.log(player.duration + "Duration");
 
 
