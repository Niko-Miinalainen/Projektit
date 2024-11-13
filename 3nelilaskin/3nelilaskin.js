let luku = [];
let functio = [];
let näyttö = "";

// päivittää näytön
function naytto() {
  näyttö = "";
  for (let i = 0; i < luku.length; i++) {
    näyttö += luku[i];
    if (functio.length > i) {
      näyttö += functio[i];
    }
  }
  document.getElementById("taulu").innerHTML = näyttö;
}

// lisää laskutoimittimet
function toiminto(funktio) {
  if (functio.length < luku.length) {
    functio.push(funktio);
    naytto();
  }
}

//lisää numerot ja pilkut
function numeronlisays(num) {
  if (luku.length <= functio.length || luku.length == 0) {
    luku.push(num);
  } else {
    luku[luku.length - 1] += num;
  }
  naytto();
}

// summa näppäin
function yhtasuuri() {
  let summa = [];
  for (let i = 0; i < luku.length; i++) {
    summa.push(luku[i]);
    if (functio.length > i) {
      summa.push(functio[i]);
    }
  }
  resetoi();
  luku.push(eval(summa.join("")));
  näyttö = "" + luku[0];
  document.getElementById("taulu").innerHTML = näyttö;
}

// poistaa viimeisinmän osuuden
function miniresetoi() {
  if (luku.length <= functio.length) {
    functio.pop();
  } else {
    luku.pop();
  }
  naytto();
}

//resetoi duhh
function resetoi() {
  luku.length = 0;
  functio.length = 0;
  näyttö = "";
  document.getElementById("taulu").innerHTML = "";
}
