import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCjx49UnZSFN3V09ZfjcNFDuvFBueQE7p8",
  authDomain: "redux-and-graphql.firebaseapp.com",
  projectId: "redux-and-graphql",
  storageBucket: "redux-and-graphql.appspot.com",
  messagingSenderId: "705514826995",
  appId: "1:705514826995:web:4e2d6fcb730ae784f9db86",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function updateDB(array, uid) {
  try {
    const docRef = await addDoc(collection(db, "favs"), {
      array,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export function logginWithGoogle() {
  let provider = new app.auth.GoogleAuthProvider();
  return app
    .auth()
    .signInWithPoup(provider)
    .then((snap) => snap.user);
}
