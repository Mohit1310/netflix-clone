import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNuzy_c14hW6GfNiKS5Inv7-tbUv05wrs",
    authDomain: "netflix-clone-c6541.firebaseapp.com",
    projectId: "netflix-clone-c6541",
    storageBucket: "netflix-clone-c6541.appspot.com",
    messagingSenderId: "640412368311",
    appId: "1:640412368311:web:00e5ef48337865780f3c32"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;
