let name;
let age;
console.log("%cregistration.mjs running", "color: blue;")
var UID1;
function saveInfo() {
    name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    console.log("%cIt works", "color: blue;")
}
function redirectHub() {
    UID1 = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");



    if (UID1 !== 'undefined') {
        if (UID1 !== null) {

            console.log("set")
            setTimeout(() => { //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
                window.location.replace("../index.html");
            }, 1000);


        } else {
            document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";
        }


    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }


}