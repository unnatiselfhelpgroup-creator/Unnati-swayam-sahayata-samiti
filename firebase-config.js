// firebase-config.js - पूर्ण सेटअप
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";

// आपके प्रोजेक्ट सेटिंग्स (स्क्रीनशॉट से प्राप्त)
const firebaseConfig = {
    apiKey: "AIzaSyCNEZ03VUTOD-eJjPsMP4b0Ykh4eiigqPQ",
    authDomain: "ngo-certificate-system.firebaseapp.com",
    projectId: "ngo-certificate-system",
    storageBucket: "ngo-certificate-system.firebasestorage.app",
    messagingSenderId: "664351169113",
    appId: "1:664351169113:web:3c476e199d369615c6ef48"
};

// ऐप इनिशियलाइज़ेशन
const app = initializeApp(firebaseConfig);

// एक्सपोर्ट्स
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
