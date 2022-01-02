import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./configFirebase";

export const getUserData = async (userId) => {
  const trainerDoc = doc(db, "users", userId);
  const toReturn = (await getDoc(trainerDoc)).data();
  toReturn.id = userId;
  return toReturn;
};

export const setTrainerDoc = async (trainerId, data) => {
  const trainerDoc = doc(db, "users", trainerId);
  return await setDoc(trainerDoc, data);
};
export const createColleciontWhenUserCreate = async (
  name,
  email,
  userId,
  trainerId = false
) => {
  try {
    let userObject = {
      isProtege: trainerId ? true : false,
      name,
      email,
      registerTime: new Date(),
      onlineTime: new Date(),
      description: "Brak opisu",
      messages: [],
      polls: [],
      calendar: [],
    };

    if (trainerId) {
      userObject = {
        ...userObject,
        payedFrom: null,
        payedTo: null,
        trainer: trainerId,
      };
    } else {
      userObject = {
        ...userObject,
        proteges: [],
      };
    }

    await setDoc(doc(db, "users", userId), userObject);

    if (trainerId) {
      const trainerData = await getUserData(trainerId);
      trainerData.proteges.push(userId);
      await setTrainerDoc(trainerId, trainerData);
      await createNewMessageDoc(trainerId, userId);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDiets = async (userId, setter = () => {}) => {
  let diets = [];
  const dietCollectionRef = await getDocs(
    collection(db, "users", userId, "diets")
  );
  dietCollectionRef.forEach((doc) => {
    diets.push({ id: doc.id, data: doc.data() });
  });
  setter(diets);
  return diets;
};

export const setProtegeDocInCollection = async (
  protegeId,
  payload,
  collection = "diets"
) => {
  payload.time = new Date();
  const id = await createNewDoc(protegeId, collection, payload);
  return { id, data: payload };
};

export const getTrainings = async (userId, setter = () => {}) => {
  let trainings = [];
  const trainingCollectionRef = await getDocs(
    collection(db, "users", userId, "trainings")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  setter(trainings);
  return trainings;
};

export const getTrainerQuestionaires = async (userId, setter = () => {}) => {
  let trainings = [];
  const trainingCollectionRef = await getDocs(
    collection(db, "users", userId, "questionaires")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  setter(trainings);
  return trainings;
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

export const getAllProteges = async (userId) => {
  let trainerProteges = (await getUserData(userId)).proteges;
  trainerProteges = await Promise.all(
    trainerProteges.map(async (item) => {
      return await getUserData(item);
    })
  );

  return trainerProteges;
};

export const getMessageId = async (protegeId, setter) => {
  const q = query(
    collection(db, "messages"),
    where("protegeId", "==", protegeId)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setter(doc.id);
  });
};

export const createNewMessageDoc = async (userId, protegeId) => {
  const docRef = await addDoc(collection(db, "messages"), {
    protegeId: protegeId,
    trainerId: userId,
    messages: [],
  });
};

export const getMessagesArray = async (userId, setter, isOrder, limitCount) => {
  const q = query(collection(db, "messages"), where("trainerId", "==", userId));
  const querySnapshot = await getDocs(q);
  let arr = [];
  querySnapshot.forEach((doc) => {
    if (doc.data().messages.length > 0) {
      arr.push({ id: doc.id, data: doc.data() });
    }
  });
  if (isOrder) {
    arr.sort((a, b) => {
      return b.data.lastUpdate - a.data.lastUpdate;
    });
  }
  if (limitCount) arr = arr.slice(0, limitCount);
  setter(arr);
};

export const getMessageObject = async (messageId) => {
  const docRef = doc(db, "messages", messageId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export const getProtegeName = async (protegeId) => {
  const docRef = doc(db, "users", protegeId);
  const docSnap = await getDoc(docRef);

  return docSnap.data().name;
};

export const getProtegeEmail = async (protegeId) => {
  const docRef = doc(db, "users", protegeId);
  const docSnap = await getDoc(docRef);

  return docSnap.data().email;
};

export const getRealTimeMessages = (messageId, setter) => {
  const unsub = onSnapshot(doc(db, "messages", messageId), (doc) => {
    setter(doc.data().messages);
  });
  return unsub;
};

export const pushNewMessage = async (messageId, data) => {
  const messageDoc = doc(db, "messages", messageId);
  await updateDoc(messageDoc, {
    lastUpdate: Date.now(),
    messages: arrayUnion(data),
  });
};

export const getProtegeTrainerId = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  return docSnap.data().trainer;
};

export const getProtegeLastDiet = async (protegeId) => {};

export const getProtegeLastTraining = async (protegeId) => {};

export const getProtegeLastMeasurment = async (protegeId) => {};
