function uusi() {
  let aika = new Date().getTime().toString();
  console.log(aika);
  let uus = document.createElement("div");
  uus.id = "div_" + aika;
  console.log(uus);
  document.getElementById("aloittavat").appendChild(uus);
  document.getElementById("div_" + aika).classList.add("tehtävä");

  let tiedot = document.getElementById("uusi").value;
  let uusp = document.createElement("p");
  uusp.id = "p_" + aika;
  console.log(uusp);
  document.getElementById("div_" + aika).appendChild(uusp);
  document.getElementById("p_" + aika).innerHTML = tiedot;

  let uusk = document.createElement("img");
  uusk.id = "k_" + aika;
  uusk.src = "8kuva.png";
  uusk.onclick = 'poista("div_' + aika + '")';
  console.log(uusk);
  document.getElementById("div_" + aika).appendChild(uusk);
}

function poista(num) {
  document.getElementById(num).remove();
}
