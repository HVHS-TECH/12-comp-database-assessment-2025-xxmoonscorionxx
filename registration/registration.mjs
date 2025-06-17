console.log("%cregistration.mjs running", "color: blue;")

function saveSubmit() {
    console.log("%cIt works", "color: blue;")

    var name = document.getElementById("name").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    	sessionStorage.setItem("Name", name);
        sessionStorage.setItem("dateOfBirth", dateOfBirth);
        window.location.replace("../index.html");
}