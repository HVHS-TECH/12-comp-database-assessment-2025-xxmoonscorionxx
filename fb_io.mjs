var fb_gamedb;
var userUID;
var userName;


/**************************************************************/
// Importing all external constants & functions here
/**************************************************************/
import { initializeApp, getDatabase, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, ref, set, get, update }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
/**************************************************************/
// Exporting functions to be used in main.mjs
/**************************************************************/
export {
 fb_initialise
};
function fb_initialise() {
    console.log('%c fb_initialise(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const firebaseConfig = {
        apiKey: "AIzaSyAQ4FYhhhVQvTWxBJstBPqUEM7k1z3HNCs",
        authDomain: "comp-2025-william-kan.firebaseapp.com",
        databaseURL: "https://comp-2025-william-kan-default-rtdb.firebaseio.com",
        projectId: "comp-2025-william-kan",
        storageBucket: "comp-2025-william-kan.firebasestorage.app",
        messagingSenderId: "928584832942",
        appId: "1:928584832942:web:caa21627c817d307485a3f",
        measurementId: "G-L6S6H3WPXE"
    };
    // Initialize Firebase
    const FB_GAMEAPP = initializeApp(firebaseConfig);
    fb_gamedb = getDatabase(FB_GAMEAPP);
    console.info(fb_gamedb);
}