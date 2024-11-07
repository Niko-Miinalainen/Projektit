let array = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
let korkeus = 0;
let leveys = 0;
let arvaukset = 0;
let auki = 0;
let arvattu = 0;
let korttimäärä = 0;
let vanha1 = [];
let vanha2 = [];

function resetoi() {
  array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  korkeus = 0;
  leveys = 0;
  arvaukset = 0;
  auki = 0;
  korttimäärä = 0;
  vanha1.length = 0;
  vanha2.length = 0;
  for (let l1 = 0; l1 < 6; l1++) {
    for (let l2 = 0; l2 < 6; l2++) {
      document.getElementById("kuva" + l1 + l2).src = "kuvat/kuva0.png";
    }
  }
}

function suuruus() {
  let luku = parseInt(document.getElementById("korkeus").value);
  let luku2 = parseInt(document.getElementById("leveys").value);
  let kertoma = luku * luku2;
  if (luku > 6) {
    alert("korkeus on liian iso!");
  } else if (luku2 > 6) {
    alert("leveys on liian iso!");
  } else if (kertoma % 2 != 0) {
    alert("Kokojen kertoma ei ole parillinen!");
  } else {
    korkeus = luku;
    leveys = luku2;
    korttimäärä = (luku * luku2) / 2;
    luo();
  }
  event.preventDefault();
}

function luo() {
  for (let l1 = 0; l1 < korkeus; l1++) {
    for (let l2 = 0; l2 < leveys; l2++) {
      let kortti = Math.floor(Math.random() * korttimäärä) + 2;
      let tarkistus = 0;
      for (let l3 = 0; l3 < korkeus; l3++) {
        for (let l4 = 0; l4 < leveys; l4++) {
          if (kortti == array[l3][l4]) {
            tarkistus++;
          }
        }
      }
      if (tarkistus > 1) {
        l2--;
      } else {
        array[l1][l2] = kortti;
        document.getElementById("kuva" + l1 + l2).src = "kuvat/kuva1.png";
      }
    }
  }
}

function arvaa(l1, l2) {
  if (vanha1.length > 0 && vanha2.length > 0) {
    document.getElementById("kuva" + vanha1[0] + vanha1[1]).src =
      "kuvat/kuva1.png";
    document.getElementById("kuva" + vanha2[0] + vanha2[1]).src =
      "kuvat/kuva1.png";
    vanha1.length = 0;
    vanha2.length = 0;
  }
  if (auki == 0) {
    auki = 1;
    arvattu = array[l1][l2];
    document.getElementById("kuva" + l1 + l2).src =
      "kuvat/kuva" + arvattu + ".png";
    vanha1.push(l1);
    vanha1.push(l2);
  } else {
    auki = 0;
    arvaukset++;
    document.getElementById("kuva" + l1 + l2).src =
      "kuvat/kuva" + arvattu + ".png";
    if (arvattu == array[l1][l2]) {
      vanha1.length = 0;
    } else {
      vanha2.push(l1);
      vanha2.push(l2);
    }
  }
}
