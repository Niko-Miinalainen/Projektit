function tarkista(){

    let etuNimi = document.getElementById("nimi").value
    let salaSana = document.getElementById("salasana").value
    let sahkoPosti = document.getElementById("sähköposti").value
    let palaute = document.getElementById("textarea").value
    let checkBox1 = document.querySelector("radio").checked
    let checkBox2 = document.querySelector("checkbox").checked

    if (etuNimi.trim() == ""){
        alert("Etunimi puuttuu")
    }
    else if (sahkoPosti.trim() == ""){
        alert("Sähköposti puuttuu")
    }
    else if (salaSana.trim() == ""){
        alert("Salasana puuttuu")
    }
    else if (palaute.trim() == ""){
        alert("Palaute on tyhjä")
    }
    else if (checkBox1 == false){
        alert("Valitse jotain")
    }
    else if (checkBox2 == false){
        alert("Valitse jotain")
    }
    else{
        alert("Lähetetty")
    }
    event.preventDefault();
}

function tyhjenna(){
    document.getElementById("form").reset();
}