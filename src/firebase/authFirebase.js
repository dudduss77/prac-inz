import './configFirebase';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";

const auth = getAuth();

const errDecode = (errCode, err = console.log) => {
    console.log(errCode)
    switch(errCode.code) {
        case "auth/missing-email": 
        case "auth/invalid-email":
            err("Adres Email jest niepoprawny");
        break;
        case "auth/email-already-in-use": 
            err("Podany adres email jest już zajęty!");
        break;
        case "auth/user-not-found": 
            err("Nieprawidłowy login lub hasło");
        break;
        case "auth/wrong-password": 
            err("Hasło jest nieprawidłowe");
        break;
        default:
            err(errCode.code);
        break;
      }
}

const signIn = async (email, pass, err = console.log) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        return userCredential
    } catch(error) {
        errDecode(error, err)
    }

}

const createUser = async (email, pass, err = console.log) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        return userCredential
    } catch(error) {
        errDecode(error, err)
    }
}

const resetPassword = async (email, err = console.log) => {
    try {
        const userCredential = await sendPasswordResetEmail(auth, email);
        return true
    } catch(error) {
        errDecode(error, err)
    }
}

export { createUser, signIn, resetPassword };