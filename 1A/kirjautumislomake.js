function tarkista(){

    let etuNimi = document.getElementById("nimi").value
    let salaSana = document.getElementById("salasana").value
    let sahkoPosti = document.getElementById("sähköposti").value
    let palaute = document.getElementById("textarea").value
    let checkBox1 = document.getElementById("radio").value
    let checkBox2 = document.getElementById("checkbox").value

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
    else if (document.getElementById("radio").checked = false){
        alert("Valitse jotain")
    }
    else if (document.getElementById("checkbox").checked = false){
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