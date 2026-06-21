import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
const body = document.getElementById("volunteerBody");
async function load() {
    const snap = await getDocs(collection(db, "VolunteerRegistrations"));
    snap.forEach(d => { body.innerHTML += `<tr><td>${d.data().name}</td><td>${d.data().volunteerId}</td><td>${d.data().status}</td></tr>`; });
}
load();
