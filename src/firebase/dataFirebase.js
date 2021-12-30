import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./configFirebase";

export const createColleciontWhenUserCreate = async (userName, userId, trainerId = false) => {
  try {
    const userObject = {
      isProtege: trainerId ? true : false,
      name: userName,
      messages: [],
      polls: [],
      calendar: [],
    }
    if(trainerId) 
      userObject.trainer = trainerId
    else
      userObject.proteges = []

    await setDoc(doc(db, "users", userId), userObject);

    if(trainerId) {
      const trainerDoc = doc(db, "users", trainerId);
      const trainerData = (await getDoc(trainerDoc)).data();
      trainerData.proteges.push(userId);     
      await setDoc(trainerDoc, trainerData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTrainerDiets = async (userId, setter) => {
  let diets = [];
  const dietCollectionRef = await getDocs(
    collection(db, "users", userId, "diets")
  );
  dietCollectionRef.forEach((doc) => {
    diets.push({ id: doc.id, data: doc.data() });
  });
  setter(diets);
};

export const getTrainerTrainings = async (userId, setter) => {
  let trainings = [];
  const trainingCollectionRef = await getDocs(
    collection(db, "users", userId, "trainings")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  setter(trainings);
};

export const getTrainerQuestionaires = async (userId, setter) => {
  let trainings = [];
  const trainingCollectionRef = await getDocs(
    collection(db, "users", userId, "questionaires")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  setter(trainings);
};

export const createNewDoc = async (userId, subCollecion, data) => {
  const docRef = await addDoc(
    collection(db, "users", userId, subCollecion),
    data
  );
  return docRef.id;
};

export const updateDocFun = async (userId, subCollecion, docId, data) => {
  const updateDocRef = doc(db, "users", userId, subCollecion, docId);
  await updateDoc(updateDocRef, data);
};

export const deleteDocFun = async (userId, docId, subCollecion) => {
  await deleteDoc(doc(db, "users", userId, subCollecion, docId));
};
