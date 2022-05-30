function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play(); // if no sound exit the function
  audio.currentTime = 0; // rewind to the start
  key.classList.add('playing');
}
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const allKeys = document.querySelectorAll('.key');

allKeys.forEach((element) =>
  element.addEventListener('transitionend', removeTransition)
);
window.addEventListener('keydown', playAudio);
