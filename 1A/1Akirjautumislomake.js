function tarkista() {
  let etuNimi = document.getElementById("nimi").value;
  let salaSana = document.getElementById("salasana").value;
  let sahkoPosti = document.getElementById("sähköposti").value;
  let palaute = document.getElementById("textarea").value;
  let radio1 = document.getElementById("radio1").checked;
  let radio2 = document.getElementById("radio2").checked;
  let checkBox1 = document.getElementById("checkbox1").checked;
  let checkBox2 = document.getElementById("checkbox2").checked;
  let checkBox3 = document.getElementById("checkbox3").checked;

  if (etuNimi.trim() == "") {
    alert("Etunimi puuttuu");
  } else if (sahkoPosti.trim() == "") {
    alert("Sähköposti puuttuu");
  } else if (salaSana.trim() == "") {
    alert("Salasana puuttuu");
  } else if (palaute.trim() == "") {
    alert("Palaute on tyhjä");
  } else if (radio1 == false && radio2 == false) {
    alert("Paljonko pidät roskapostista?");
  } else if (checkBox1 == false && checkBox2 == false && checkBox3 == false) {
    alert("Mistä pidit eniten?");
  } else {
    alert("Lähetys onnistu!");
  }
  event.preventDefault();
}

function tyhjenna() {
  document.getElementById("form").reset();
}
