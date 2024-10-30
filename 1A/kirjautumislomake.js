function tarkista(){

    let etuNimi = document.getElementById("nimi").value
    let salaSana = document.getElementById("salasana").value
    let sahkoPosti = document.getElementById("sähköposti").value
    let palaute = document.getElementById("textarea").value
    let radio1 = document.getElementById("radio1").checked
    let radio2 = document.getElementById("radio2").checked
    let checkBox1 = document.getElementById("checkbox1").checked
    let checkBox2 = document.getElementById("checkbox2").checked
    let checkBox3 = document.getElementById("checkbox3").checked
    let checkBox4 = document.getElementById("checkbox4").checked

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
    else if (radio1 || radio2 == false){
        alert("Valitse jotain")
    }
    else if (checkBox1 || checkBox2 || checkBox3 || checkBox4 == true){
        alert("Lähetetty")
    }
    else{
        alert("Jotain puuttuu")
    }
    event.preventDefault();
}

function tyhjenna(){
    document.getElementById("form").reset();
}