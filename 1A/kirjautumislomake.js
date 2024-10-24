function tarkista(){

    let etuNimi = document.getElementById("").value
    let sukuNimi = document.getElementById("").value
    let salaSana = document.getElementById("").value
    let sahkoPosti = document.getElementById("").value
    let palaute = document.getElementById("").value
    let checkBox1 = document.querySelector("").checked
    let checkBox2 = document.querySelector("").checked

    if (etuNimi.trim() = ""){
        alert("Etunimi puuttuu")
    }
    else if (sukuNimi.trim() = ""){
        alert("Sukunimi puuttuu")
    }
    else if (salaSana.trim() = ""){
        alert("Salasana puuttuu")
    }
    else if (sahkoPosti.trim() = ""){
        alert("Sähköposti puuttuu")
    }
    else if (palaute.trim() = ""){
        alert("Palaute on tyhjä")
    }
    else if (checkBox1 = false){
        alert("Valitse toinen")
    }
    else if (checkBox2 = false){
        alert("Valitse yksi")
    }
}

function tyhjenna(){
    document.getElementById("").reset();
}