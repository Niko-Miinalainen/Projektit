function tarkista() {
  let nimi = document.getElementById("nimi").value;
  let email = document.getElementById("email").value;
  let ika = document.getElementById("ika").value;
  let radio1 = document.getElementById("radio1").checked;
  let radio2 = document.getElementById("radio2").checked;
  let checkBox1 = document.getElementById("checkbox1").checked;
  let checkBox2 = document.getElementById("checkbox2").checked;
  let checkBox3 = document.getElementById("checkbox3").checked;
  let textara = document.getElementById("textara").value;
  if (nimi.trim() == "") {
    alert("Anna nimi");
  } else if (3 > nimi.length) {
    alert("Nimi on liian lyhyt");
  } else if (email.trim() == "") {
    alert("Anna sähköposti");
  } else if (emailIsValid(email) == false) {
    alert("Anna kunnollinen sähköposti");
  } else if (ika.trim() == "") {
    alert("Anna ikä");
  } else if (isNaN(ika) != false) {
    alert("Iässä ei saa olla muuta kuin numeroita!");
  } else if (radio1 == false && radio2 == false) {
    alert("Valitse pallukoita");
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Valitse laatikoita");
  } else if (textara.trim() == "") {
    alert("Anna lisäpalautetta :)");
  } else {
    alert("Kaikki on lähetetty!");
  }
  event.preventDefault();
}
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
