<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc, collection, addDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "PASTE_YOURS_HERE",
    authDomain: "growmore-investments.firebaseapp.com",
    projectId: "growmore-investments",
    storageBucket: "growmore-investments.appspot.com",
    messagingSenderId: "PASTE_YOURS_HERE",
    appId: "PASTE_YOURS_HERE"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, addDoc, updateDoc, onSnapshot };
</script>
