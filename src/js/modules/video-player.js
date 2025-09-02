const video = document.querySelector('.video__content');
const playButton = document.querySelector('.video__play');
var toggle = false

playButton.addEventListener('click', () => {
  if (toggle) {
    video.pause()
  } else {
    video.play()
  }
  toggle = !toggle
});

video.addEventListener('play', () => {
  playButton.classList.add('hidden');
});

video.addEventListener('pause', () => {
  playButton.classList.remove('hidden');
});

export default playButton;