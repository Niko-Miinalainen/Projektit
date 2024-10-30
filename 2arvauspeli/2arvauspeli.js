let vastaus = Math.floor(Math.random() * 10) + 1;
let arvaukset = 0;

function arvaus(num) {
  let arvaus = num;
  if (arvaus == vastaus) {
    alert("Arvaus on OIKEIN!");
  } else if (arvaukset == 2) {
    alert("Arvaukset loppui. Oikea vastaus oli: " + vastaus);
    vastaus = Math.floor(Math.random() * 10) + 1;
    arvaukset = 0;
  } else if (arvaus > vastaus) {
    alert("Luku on pienempi!");
    arvaukset++;
  } else if (arvaus < vastaus) {
    alert("Luku on suurempi!");
    arvaukset++;
  }
  event.preventDefault();
}
