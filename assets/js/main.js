
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


// --------------------------------------- Eigene Lösung ---------------------------------------

// document.getElementById("button").addEventListener("click", () => {
//     let a = document.getElementById("farbeAuswahlen").selectedIndex;

//     if (a == 0) {
//         console.log(a)
//         document.body.style.backgroundColor = "MediumOrchid";
//     }
//     else if (a == 1) {
//         console.log(a)
//         document.body.style.backgroundColor = "DodgerBlue";
//     }
//     else if (a == 2) {
//         console.log(a)
//         document.body.style.backgroundColor = "MintCream";
//     }
//     else if (a == 3) {
//         console.log(a)
//         document.body.style.backgroundColor = "DodgerBlue";
//     }
//     else if (a == 4) {
//         console.log(a)
//         document.body.style.backgroundColor = "Goldenrod";
//     }
//     else if (a == 5) {
//         console.log(a)
//         document.body.style.backgroundColor = "Wheat";
//     }
//     else if (a == 6) {
//         console.log(a)
//         document.body.style.backgroundColor = "MediumTurquoise";
//     }
//     else if (a == 7) {
//         console.log(a)
//         document.body.style.backgroundColor = "Moccasin";
//     }
//     else if (a == 8) {
//         console.log(a)
//         document.body.style.backgroundColor = "FireBrick";
//     }
//     else if (a == 9) {
//         console.log(a)
//         document.body.style.backgroundColor = "LimeGreen";
//     }
//     else if (a == 10) {
//         console.log(a)
//         document.body.style.backgroundColor = "SlateGray";
//     } else { }
// })
// --------------------------------------- Eigene Lösung ---------------------------------------
// ---------------------------------------  Lösung Anass ---------------------------------------

// document.querySelector("body").style.background = "black"

// console.log(document.getElementById("farbeAuswahlen").selectedIndex)
// let i = document.getElementById("farbeAuswahlen").selectedIndex
// console.log(document.getElementById("farbeAuswahlen").options[i].value)
//ist gleich wie console.log(document.getElementById("farbeAuswahlen").options[i].innerHTML)

// let getFarbe = () => {
//     let j = document.getElementById("farbeAuswahlen").selectedIndex
//     let farbe = document.getElementById("farbeAuswahlen").options[j].innerHTML
//     console.log(farbe)
//     console.log(farbe.split(" "))
//     farbe = farbe.split(" ").join("")
//     return farbe
// }
// document.getElementById("button").addEventListener("click", (e) => {
//     document.querySelector("body").style.background = getFarbe()
// })
// ---------------------------------------  Lösung Anass ---------------------------------------
