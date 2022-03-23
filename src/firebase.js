import { initializeApp } from "firebase/app";
import "firebase/auth";

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

export function logginWithGoogle() {
  let provider = new app.auth.GoogleAuthProvider();
  return app
    .auth()
    .signInWithPoup(provider)
    .then((snap) => snap.user);
}
