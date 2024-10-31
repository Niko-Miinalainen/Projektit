let luku = [];
let functio = [];
let näyttö = "";

function naytto() {
  näyttö = "";
  for (let i = 0; 0 < luku.length; i++) {
    näyttö += luku[i];
    if (functio.length > i) {
      näyttö += functio[i];
    }
  }
  document.getElementById("taulu").innerHTML = näyttö;
}

function toiminto(funktio) {
  if (functio.length < luku.length) {
    functio.push(funktio);
    naytto();
  }
}

function numeronlisays(num) {
  if (luku.length > functio.length || luku.length == 0) {
    luku.push(num);
    naytto();
  } else {
    luku[luku.length] += num;
    naytto();
  }
}

function yhtasuuri() {}

function miniresetoi() {
  if (luku.length <= functio.length) {
    functio.pop();
  } else {
    luku.pop();
  }
  naytto();
}

function resetoi() {
  luku.length = 0;
  functio.length = 0;
  näyttö = "";
  document.getElementById("taulu").innerHTML = "";
}
