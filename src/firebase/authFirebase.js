import "./configFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";

const auth = getAuth();

const errDecode = (errCode, err = console.log) => {
  console.log(errCode);
  switch (errCode.code) {
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
};

const signIn = async (email, pass, err = console.log) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    return userCredential;
  } catch (error) {
    errDecode(error, err);
  }
};

const createUser = async (email, pass, err = console.log) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    return userCredential;
  } catch (error) {
    errDecode(error, err);
  }
};

const resetPassword = async (email, err = console.log) => {
  try {
    const userCredential = await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    errDecode(error, err);
  }
};

// const getUserData = async (callback) => {
//   onAuthStateChanged(auth, (user) => {
//     if(user) {
//       console.log(user)
//       callback(user)
//     } else {
//       console.log("pending")
//     }
//   })
// }

const getUserIddd = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      console.log(user)
      callback(user.uid)
    } else {
      console.log("pending")
    }
  })
};



const getUserData = async ( err = console.log) => {
    try {
        const user = getAuth().currentUser;
        console.log(user);
        return user
    } catch(error) {
        errDecode(error, err)
    }
}
// setTimeout(async () => {
    const auths = getAuth();
    const user = auths.currentUser;
    console.log("trap", user);
// }, 5000)

export { createUser, signIn, resetPassword, getUserIddd, auth };
