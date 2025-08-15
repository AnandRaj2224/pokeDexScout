import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUpsLRDt8dugKIjSOGi6AsmqHgomes0xg",
  authDomain: "pokedexscout.firebaseapp.com",
  projectId: "pokedexscout",
  storageBucket: "pokedexscout.firebasestorage.app",
  messagingSenderId: "462131651962",
  appId: "1:462131651962:web:be5193c728d5eccee3a2c3",
  measurementId: "G-LBG16CCLRX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");