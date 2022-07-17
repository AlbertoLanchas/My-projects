const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0; // rewind to the start
  audio.play();
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
  a;
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
