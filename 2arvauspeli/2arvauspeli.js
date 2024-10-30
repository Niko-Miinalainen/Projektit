let vastaus = Math.floor(Math.random() * 10) + 1;
let arvaukset = 3;
let arvatut = [];

function arvaus(num) {
  let arvaus = num;
  if (arvaus == vastaus) {
    alert("Arvaus on OIKEIN! Se oli numero: " + vastaus);
    vastaus = Math.floor(Math.random() * 10) + 1;
    arvaukset = 3;
    arvatut.length = 0;
    document.getElementById("määrä").innerHTML = "Arvausten määrä:";
    document.getElementById("numerot").innerHTML = "Arvatut numero:";
  } else if (arvaukset == 0) {
    alert("Arvaukset loppui. Oikea vastaus oli: " + vastaus);
    vastaus = Math.floor(Math.random() * 10) + 1;
    arvaukset = 3;
    arvatut.length = 0;
    document.getElementById("määrä").innerHTML = "Arvausten määrä:";
    document.getElementById("numerot").innerHTML = "Arvatut numero:";
  } else if (arvaus > vastaus) {
    alert("Luku on pienempi!");
    arvaukset--;
    arvatut.push(arvaus);
    document.getElementById("määrä").innerHTML =
      "Arvausten määrä: " + arvaukset;
    document.getElementById("numerot").innerHTML = "Arvatut numero: " + arvatut;
  } else if (arvaus < vastaus) {
    alert("Luku on suurempi!");
    arvaukset--;
    arvatut.push(arvaus);
    document.getElementById("määrä").innerHTML =
      "Arvausten määrä: " + arvaukset;
    document.getElementById("numerot").innerHTML = "Arvatut numero: " + arvatut;
  }
  event.preventDefault();
}

function reset() {
  vastaus = Math.floor(Math.random() * 10) + 1;
  arvaukset = 3;
  arvatut.length = 0;
  document.getElementById("määrä").innerHTML = "Arvausten määrä:";
  document.getElementById("numerot").innerHTML = "Arvatut numero:";
}
