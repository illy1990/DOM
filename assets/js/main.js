
function myFunction() {

    for (let index = 0; index < document.getElementsByClassName("example").length; index++) {
        document.getElementsByClassName("example")[index].style.backgroundColor = "blue";
    }
}

function ClickMeOnce() {

    document.getElementById("navHome").style.backgroundColor = "pink";
    document.getElementById("navHome").innerHTML = "emoH"
}

function formular() {
    var VorName = document.getElementById("vorname").value;
    var NachName = document.getElementById("nachname").value;

    if (document.getElementById("mySelect1").selected) { var Land = "Australia" }
    else if (document.getElementById("mySelect2").selected) { var Land = "Canada" }
    else { var Land = "USA" }
    let output = "Full Name: " + VorName + " " + NachName + " Land: " + Land

    console.log(output)
}

function ClickMeTwice() {
    document.getElementById("navHome").style.backgroundColor = "#f6c89f";
    document.getElementById("navNews").style.backgroundColor = "#ffe7d1"
    document.getElementById("navContact").style.backgroundColor = "#4b8e8d";
    document.getElementById("navChange").style.backgroundColor = " #396362";

    for (let index = 0; index < document.getElementsByClassName("nav").length; index++) {
        document.getElementsByClassName("nav")[index].style.color = "black";
    }

    for (let index = 0; index < document.getElementsByClassName("active").length; index++) {
        document.getElementsByClassName("active")[index].style.color = "black";
    }
}
