import './configFirebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const signIn = async (email, pass, err = console.log) => {
    try {
        console.log(email, pass)
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential
    } catch(error) {
        console.log(error)
        switch(error.code) {
            case "auth/missing-email", "auth/invalid-email": 
                err("Adres Email jest niepoprawny");
            break;
            case "auth/user-not-found": 
                err("Nieprawidłowy login lub hasło");
            break;
            case "auth/wrong-password": 
                err("Hasło jest nieprawidłowe");
            break;
            default:
                err(error.code);
            break;
          }
    }

}

const createUser = async (email, pass, err = console.log) => {
    try {
        console.log(email, pass)
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        return userCredential
    } catch(error) {
        switch(error.code) {
            case "auth/email-already-in-use": 
                err("Podany adres email jest już zajęty!");
            break;
            case "auth/missing-email": 
                err("Adres Email jest niepoprawny");
            break;
            default:
                err(error.code);
            break;
          }
    }

}

export { createUser, signIn };