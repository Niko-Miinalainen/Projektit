let soita = null;

function sound(ääni) {
  if (soita != null) {
    soita.pause();
  }
  soita = new Audio("7äänet/" + ääni + ".mp3");
  soita.play();
}
