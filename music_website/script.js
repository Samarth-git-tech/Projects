const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const seek = document.getElementById("seek");
const songName = document.getElementById("songName");

const songs = [
  { name: "Song 1", src: "songs/song1.mp3" },
  { name: "Song 2", src: "songs/song2.mp3" }
];

let index = 0;

// song load function
function loadSong(i) {
  index = i;
  songName.innerText = songs[index].name;
  audio.src = songs[index].src;
}

loadSong(index);

// play/pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.innerText = "▶ Play";
  }
});

// next
nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.innerText = "⏸ Pause";
});

// prev
prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.innerText = "⏸ Pause";
});

// seek bar update
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    seek.value = (audio.currentTime / audio.duration) * 100;
  }
});

// seek change
seek.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seek.value / 100) * audio.duration;
  }
});