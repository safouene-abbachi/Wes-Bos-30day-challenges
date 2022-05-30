window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // if no sound exit the function
  audio.currentTime = 0; // rewind to the start
  audio.play();
});
