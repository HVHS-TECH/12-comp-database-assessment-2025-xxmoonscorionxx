var fb_gamedb;
let storage;
/**************************************************************/
// Importing all external constants & functions here
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme

//import { initializeApp, getDatabase, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, ref, set, get, update }
//    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, query, orderByChild, limitToFirst }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
//import { fb_read_sorted, fb_initialise }
//    from "../fb_io.mjs";
window.onload = sortedRead()
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

function fb_read_sorted() {
    var sortKey = "Score";
    const dbReference = query(ref(fb_gamedb, "Games/FarLands/Users"), orderByChild(sortKey), limitToFirst(5));
    get(dbReference).then((Snapshot) => {
        Snapshot.forEach(function (userScoreSnapshot) {
            var fb_data = userScoreSnapshot.val();
            if (fb_data != null) {
                console.log(fb_data.Score)
                storage = fb_data.Score;
//                leaderboard1 = fb_data
 //               console.log(leaderboard1)
//                sessionStorage.setItem("data1", leaderboard1);
            document.getElementById("#1").innerHTML= fb_data.Score()

            } else {
                console.log("something went wrong")
            }
        });

    }).catch((error) => {
        console.log(error)
    });


}

function sortedRead() {
    const userUID = sessionStorage.getItem("UID");
    fb_initialise();
    console.log("working")
    fb_read_sorted();
    const leaderboard = sessionStorage.getItem("data1")
    console.log(leaderboard)
    ;
}
