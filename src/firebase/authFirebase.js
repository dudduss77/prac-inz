import './configFirebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const createUser = async (email, pass, err = console.log) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        return userCredential
    } catch(error) {
        switch(error.code) {
            case "auth/email-already-in-use": 
                err("Podany adres email jest już zajęty!");
            break;
            default:
                err(error.code);
            break;
          }
    }

}

export { createUser };