console.log("%cregistration.mjs running", "color: blue;")
var UID1;
function saveSubmit() {
    var UID1 = sessionStorage.getItem("UID");
    console.log("%cIt works", "color: blue;");

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if(UID1 !== 'undefined') {
        window.location.replace("../index.html");

    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }
    sessionStorage.setItem("Name", name);
    sessionStorage.setItem("age", age);
      
}