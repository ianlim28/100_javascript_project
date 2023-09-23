const keys = document.querySelectorAll(".key");
const note = document.querySelector(".key-pressed");

window.addEventListener("keydown", playNote);

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.dataset.note;
  //   console.log(keyNote);

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
  console.log(e.propertyName);
}

// Remove playing class
// transitionend is useful for detecting when a transition has finished and performing certain actions in response to the end of the transition
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });

function removeTransition(e) {
if (e.propertyName !== "transform") return;
this.classList.remove("playing");
}
  
  