var enterButton = document.getElementById("painike")
enterButton.addEventListener("click", uusi)

var input = document.getElementById("laatikko")
input.addEventListener("keypress", uudempi)

var ul = document.querySelector("ul")

function syöttöPituus(){
    return input.value.length
}

function luoLista(){
    var li = document.createElement("li")
    if (input.value != ""){
        li.appendChild(document.createTextNode(input.value))
            ul.appendChild(li)
            input.value = ""
    }
    function tehty(){
        li.classList.toggle("done")
    }
    li.addEventListener("click", tehty())

    var poisto = document.createElement("button")
    poisto.appendChild(document.createTextNode("X"))
    li.appendChild(poisto)
    poisto.addEventListener("click", poistaTehtävä)
    function poistaTehtävä(){
        li.classList.add("delete")
    }
}

function uusi(){
    if (syöttöPituus() > 0){
        luoLista()
    }
}
function uudempi(event){
    if (syöttöPituus() > 0 && event.which === 13)
        luoLista()
}