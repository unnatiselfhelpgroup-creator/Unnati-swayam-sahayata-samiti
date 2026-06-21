import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const form = document.querySelector("form");
if (form) {
    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        data.status = "Pending";
        data.createdAt = serverTimestamp();
        await addDoc(collection(db, form.dataset.collection), data);
        alert("सफलतापूर्वक सबमिट किया गया!");
        window.location.reload();
    };
}
