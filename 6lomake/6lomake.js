for (let i = 0; i < localStorage.length; i++) {
  //lataa vanhat tallennetut tiedot sivun avaamisen kohdalla
  let id = localStorage.key(i);
  let käyttis = localStorage.getItem(id);
  lista.innerHTML +=
    "<p id=" +
    id +
    ">" +
    "<b>" +
    id +
    ". " +
    "</b>" +
    käyttis +
    "</p>" +
    "<button type='button' id=" +
    id +
    " onclick='poista(this)'>Poista</button>" +
    "<br/>";
}

function tallenna() {
  // tallentaa uudet tiedot
  let enimi = document.getElementById("enimi").value + " ";
  let snimi = document.getElementById("snimi").value + " ";
  let osoite = document.getElementById("osoite").value + " ";
  let posti = document.getElementById("posti").value + " ";
  let paikka = document.getElementById("paikka").value + " ";
  let puhelin = document.getElementById("puhelin").value + " ";
  let email = document.getElementById("email").value + " ";
  if (
    // tarkistaa että kaikki osiot on täytetty
    enimi.trim() &&
    snimi.trim() &&
    osoite.trim() &&
    posti.trim() &&
    paikka.trim() &&
    puhelin.trim() &&
    email.trim()
  ) {
    let käyttäjä = [
      enimi,
      snimi,
      "<br/>",
      osoite,
      posti,
      paikka,
      "<br/>",
      puhelin,
      email,
    ];
    let tallennus = JSON.stringify(käyttäjä)
      .replace(/,/g, "")
      .replace(/"/g, "")
      .replace(/]/g, "")
      .replace(/\[/g, "");
    localStorage.setItem(localStorage.length, tallennus);
    let id = localStorage.key(localStorage.length--);
    let käyttis = localStorage.getItem(id);
    lista.innerHTML +=
      "<p id=" +
      id +
      ">" +
      "<b>" +
      id +
      "." +
      "</b>" +
      käyttis +
      "</p>" +
      "<button type='button' id=" +
      id +
      " onclick='poista(this)'>Poista</button>" +
      "<br/>";
  } else {
    alert("Jotain puuttuu!");
    event.preventDefault();
  }
}

function tyhjenna() {
  //tyhjentää kaikki tiedot
  localStorage.clear();
  location.reload();
}

function poista(pois) {
  //poistaa yksittäisen käyttäjän tiedot
  let id = pois.id;
  localStorage.removeItem(id);
  location.reload();
}
