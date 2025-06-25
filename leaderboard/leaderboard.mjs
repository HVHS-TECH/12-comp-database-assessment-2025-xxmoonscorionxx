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
import { getDatabase, ref, set, get, update, query, orderByChild, limitToFirst, limitToLast }
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
    const dbReference = query(ref(fb_gamedb, "Games/FarLands/Users"), orderByChild(sortKey), limitToLast(5));
    get(dbReference).then((snapshot) => {
        let scores = []
        snapshot.forEach(function (userScoreSnapshot) {
            console.log(userScoreSnapshot.val())
            var fb_data = userScoreSnapshot.val();
            if (fb_data != null) {
                //  console.log(fb_data);
                scores.push(fb_data)
            } else {
                console.log("something went wrong")
            }

            console.log(scores)
            scores.sort((a, b) => { return b.Score - a.Score }) //Help received for this line
            console.log(scores)

        });
        document.getElementById("#1").innerHTML = "#1      " + scores[0].Name + "      Score:" + scores[0].Score;
        document.getElementById("#2").innerHTML = "#2      " + scores[1].Name + "      Score:" + scores[1].Score;
        document.getElementById("#3").innerHTML = "#3      " + scores[2].Name + "      Score:" + scores[2].Score;
        document.getElementById("#4").innerHTML = "#4      " + scores[3].Name + "      Score:" + scores[3].Score;
        document.getElementById("#5").innerHTML = "#5      " + scores[4].Name + "      Score:" + scores[4].Score;
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
