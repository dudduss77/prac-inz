import { doc, setDoc } from "firebase/firestore";
import { db } from "./configFirebase";

export const createColleciontWhenUserCreate = async (userName, userId) => {
  try {
    await setDoc(doc(db, "users", userId), {
      isProtege: false,
      name: userName,
      diets: [],
      trainings: [],
      messages: [],
      polls: [],
      calendar: [],
      proteges: [],
    });
  } catch (error) {
    console.log(error);
  }
};