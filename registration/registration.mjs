console.log("%cregistration.mjs running", "color: blue;")
var UID;

function saveSubmit() {
    console.log("%cIt works", "color: blue;")

    let name = document.getElementById("name").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    UID = sessionStorage.getItem("UID");
    if(UID != null) {
        window.location.replace("../index.html");
    } else {
        document.getElementById("statusMessage2").innerHTML = "You Are Not Logged In With Google!";

    }
    sessionStorage.setItem("Name", name);
    sessionStorage.setItem("dateOfBirth", dateOfBirth);
    
}