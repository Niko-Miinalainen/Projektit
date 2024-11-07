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
let korttimäärä = 0;

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
}

function suuruus() {
  let luku = parseInt(document.getElementById("korkeus").value) - 1;
  let luku2 = parseInt(document.getElementById("leveys").value) - 1;
  if (luku > 5) {
    alert("korkeus on liian iso!");
  } else if (luku2 > 5) {
    alert("leveys on liian iso!");
  } else if ((luku * luku2) % 2 != 0) {
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
  for (let l1 = 0; li < korkeus; l1++) {
    for (let l2 = 0; l2 < leveys; l2++) {
      let kortti = Math.floor(Math.random() * 8) + 2;
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
        document.getElementById("kuva" + l1 + l2).src = "kuva" + kortti;
      }
    }
  }
}

function arvaa(luku1, luku2) {}
