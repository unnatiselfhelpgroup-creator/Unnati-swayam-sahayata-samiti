import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
window.checkCert = async function () {
    const certNo = document.getElementById("certInput").value.trim();
    const result = document.getElementById("resultBox");
    const snap = await getDoc(doc(db, "Certificates", certNo));
    result.style.display = "block";
    result.innerHTML = snap.exists() ? `<h3>✅ मान्य: ${snap.data().name}</h3>` : "<h3>❌ अमान्य</h3>";
};
