
function myFunction() {

    for (let index = 0; index < document.getElementsByClassName("example").length; index++) {
        document.getElementsByClassName("example")[index].style.backgroundColor = "blue";
    }
}

function ClickMeOnce() {

    document.getElementById("navHome").style.backgroundColor = "pink";
    document.getElementById("navHome").innerHTML = "emoH"
}