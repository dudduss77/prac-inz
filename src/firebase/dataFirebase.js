import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./configFirebase";

export const createColleciontWhenUserCreate = async (userName, userId) => {
  try {
    await setDoc(doc(db, "users", userId), {
      isProtege: false,
      name: userName,
      messages: [],
      polls: [],
      calendar: [],
      proteges: [],
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTrainerDiets = async (userId, setter) => {
  let diets = [];
  const dietCollectionRef = await getDocs(collection(db, 'users', userId, "diets"))
  dietCollectionRef.forEach((doc) => {
    diets.push({id: doc.id, data: doc.data()})
  })
  setter(diets)
}