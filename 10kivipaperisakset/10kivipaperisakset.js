let tasapelit = 0;
let voitot = 0;
let tappiot = 0;

function resetoi() {
  tasapelit = 0;
  voitot = 0;
  tappiot = 0;
  document.getElementById("pisteytys").innerHTML =
    "Voitot/Tasapelit/Tappiot: " + voitot + "/" + tasapelit + "/" + tappiot;
}

function arvaus(käsi) {
  let kone = Math.floor(Math.random() * 100);
  if (kone == 0) {
    document.getElementById("tulos").innerHTML =
      "Hullu itsemurha pommittaja hyökkäsi! PELI ON OHI!";
    alert("Hullu itsemurha pommittaja hyökkäsi! PELI ON OHI!");
    resetoi();
  } else if (kone < 34) {
    if (käsi == "kivi") {
      document.getElementById("tulos").innerHTML =
        "Mollemilla on kivi, tasapeli!";
      tasapelit++;
    }
    if (käsi == "paperi") {
      document.getElementById("tulos").innerHTML =
        "Paperi voittaa kiven, Pelaaja voitti!";
      voitot++;
    }
    if (käsi == "sakset") {
      document.getElementById("tulos").innerHTML =
        "Kivi voittaa sakset, Tietokone voitti!";
      tappiot++;
    }
  } else if (kone >= 34 && kone <= 66) {
    if (käsi == "paperi") {
      document.getElementById("tulos").innerHTML =
        "Mollemilla on paperi, tasapeli!";
      tasapelit++;
    }
    if (käsi == "sakset") {
      document.getElementById("tulos").innerHTML =
        "Sakset voittaa paperin, Pelaaja voitti!";
      voitot++;
    }
    if (käsi == "kivi") {
      document.getElementById("tulos").innerHTML =
        "Paperi voittaa kiven, Tietokone voitti!";
      tappiot++;
    }
  } else if (kone > 66) {
    if (käsi == "sakset") {
      document.getElementById("tulos").innerHTML =
        "Mollemilla on sakset, tasapeli!";
      tasapelit++;
    }
    if (käsi == "kivi") {
      document.getElementById("tulos").innerHTML =
        "Kivi voittaa sakset, Pelaaja voitti!";
      voitot++;
    }
    if (käsi == "paperi") {
      document.getElementById("tulos").innerHTML =
        "Sakset voittaa paperi, Tietokone voitti!";
      tappiot++;
    }
  }
  document.getElementById("pisteytys").innerHTML =
    "Voitot/Tasapelit/Tappiot: " + voitot + "/" + tasapelit + "/" + tappiot;
}
