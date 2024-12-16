function uusi() {
  //aikaa käytetään id tekemiseen
  let aika = new Date().getTime().toString();
  console.log(aika);
  //tekee divin
  let uus = document.createElement("div");
  uus.id = "div_" + aika;
  uus.draggable = true;
  uus.addEventListener("dragstart", function () {
    siirrä(event);
  });
  console.log(uus);
  document.getElementById("aloittavat").appendChild(uus);
  document.getElementById("div_" + aika).classList.add("tehtävä");
  //tekee tekstin
  let tiedot = document.getElementById("uusi").value;
  let uusp = document.createElement("p");
  uusp.id = "p_" + aika;
  console.log(uusp);
  document.getElementById("div_" + aika).appendChild(uusp);
  document.getElementById("p_" + aika).innerHTML = tiedot;
  //tekee poisto näppäimen
  let uusk = document.createElement("img");
  uusk.id = "k_" + aika;
  uusk.src = "8kuva.png";
  uusk.addEventListener("click", function () {
    poista("div_" + aika);
  });
  console.log(uusk);
  document.getElementById("div_" + aika).appendChild(uusk);
}
//poistaa osion
function poista(num) {
  document.getElementById(num).remove();
}

function siirrä(e) {
  e.dataTransfer.setData("id", e.target.id);
}

function saakotiputtaa(e) {
  e.preventDefault();
}

function tiputa(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("id");
  e.target.appendChild(document.getElementById(data));
}
