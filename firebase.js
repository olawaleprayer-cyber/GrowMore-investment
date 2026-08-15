<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc, collection, addDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCiX9H4H_sR_pCIUoJ1NQOSISC221qQDyw",
    authDomain: "growmore-investments.firebaseapp.com",
    projectId: "growmore-investments",
    storageBucket: "growmore-investments.appspot.com",
    messagingSenderId: "633069707266",
    appId: "1:633069707266:web:de27c2071f4f2bb5e7071b"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc, collection, addDoc, updateDoc, onSnapshot };
</script>
