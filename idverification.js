import { db } from "./firebase-config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
window.verifyID = async function () {
    const vID = document.getElementById("idInput").value.trim();
    const result = document.getElementById("resultBox");
    const q = query(collection(db, "IDCards"), where("volunteer_id", "==", vID));
    const snap = await getDocs(q);
    result.innerHTML = !snap.empty ? `✅ मान्य: ${snap.docs[0].data().name}` : "❌ अमान्य ID";
};
