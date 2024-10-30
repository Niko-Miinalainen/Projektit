function tarkista() {
  let nimi = document.getElementById("nimi").value;
  let email = document.getElementById("email").value;
  let ika = document.getElementById("ika").value;
  let pudotus = document.getElementById("pudotus").value;
  let radio1 = document.getElementById("radio1").checked;
  let radio2 = document.getElementById("radio2").checked;
  let checkBox1 = document.getElementById("checkbox1").checked;
  let checkBox2 = document.getElementById("checkbox2").checked;
  let checkBox3 = document.getElementById("checkbox3").checked;

  if (nimi.trim() == "") {
    alert("Anna nimi");
  } else if (3 > nimi.lenght) {
    alert("Nimi on liian lyhyt");
  }
  if (email.trim() == "") {
    alert("Anna sähköposti");
  } else if (emailIsValid(sahkoposti)) {
  } else {
    alert("Anna oikea sÃ¤hkÃ¶postiosoitteesi");
    lomake.email.focus();
    return false;
  }
  if (ika.trim() == "") {
    alert("Anna ikä");
  } else if (isNaN(ika) != false) {
    alert("Iässä ei saa olla muuta kuin numeroita!");
  }
  if (radio1 == false && radio2 == false) {
    alert("Valitse pallukoita");
  }
  if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Valitse laatikoita");
  }
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
