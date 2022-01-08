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
  startAfter,
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

export const updateUser = async (userId, payload) => {
  const res = await updateDoc(doc(db, "users", userId), payload);
  return res;
};

export const setTrainerDoc = async (trainerId, data) => {
  const trainerDoc = doc(db, "users", trainerId);
  return await setDoc(trainerDoc, data);
};
export const createColleciontWhenUserCreate = async (
  name,
  email,
  userId,
  trainerId = false,
  qustionaireId = false
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
        isQuestionaireComplete: false,
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

      const qustionaire = await getQuestionaire(trainerId, qustionaireId);
      await setQuestionaire(userId, qustionaire.id, qustionaire.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const completeProtegeQuestionaire = async (userId, payload) => {
  try {
    const toReturn = {
      name: payload.name,
      time: new Date(),
      questionList: await Promise.all(
        payload.questionList.map(async (item) => {
          if (item.type == 4)
            return {
              ...item,
              img: await Promise.all(
                item.img.map(async (img) => {
                  const { id } = await sendImage(userId, { imgData: img });
                  return id;
                })
              ),
            };
          else return { ...item };
        })
      ),
    };

    const { id } = (await getQuestionaires(userId))[0];
    await updateDocFun(userId, "questionaires", id, toReturn);
    await updateUser(userId, {
      isQuestionaireComplete: true,
    });

    return id;
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

export const sendImage = async (userId, payload) => {
  payload.time = new Date();
  const id = await createNewDoc(userId, "images", payload);
  return { id, data: payload };
};

export const getImage = async (userId, imageId) => {
  const resDoc = await getDoc(doc(db, "users", userId, "images", imageId));
  return { id: imageId, data: resDoc.data() };
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

export const getQuestionaires = async (userId, setter = () => {}) => {
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

export const setQuestionaire = async (userId, questionaireId, data) => {
  const toReturn = await createNewDocWithCustomId(
    userId,
    "questionaires",
    questionaireId,
    data
  );
  return toReturn;
};

export const getQuestionaire = async (userId, id) => {
  const resDoc = await getDoc(doc(db, "users", userId, "questionaires", id));
  return { id: resDoc.id, data: resDoc.data() };
};

export const createNewDoc = async (userId, subCollecion, data) => {
  const docRef = await addDoc(
    collection(db, "users", userId, subCollecion),
    data
  );
  return docRef.id;
};

export const createNewDocWithCustomId = async (
  userId,
  subCollecion,
  docId,
  data
) => {
  const docRef = await setDoc(
    doc(db, "users", userId, subCollecion, docId),
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

export const getProtegeLastDiet = async (protegeId, setter) => {
  let diets = [];

  const dietCollectionRef = await getDocs(
    collection(db, "users", protegeId, "diets")
  );
  dietCollectionRef.forEach((doc) => {
    diets.push({ id: doc.id, data: doc.data() });
  });
  diets.sort((a, b) => a.data.time - b.data.time);
  setter(diets[diets.length - 1]);
  return diets[diets.length - 1];
};

export const getProtegeLastTraining = async (protegeId, setter) => {
  let trainings = [];

  const trainingCollectionRef = await getDocs(
    collection(db, "users", protegeId, "trainings")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  trainings.sort((a, b) => a.data.time - b.data.time);
  setter(trainings[trainings.length - 1]);
  return trainings[trainings.length - 1];
};

export const sendMeasurement = async (userId, payload) => {
  payload.time = new Date();
  const id = await createNewDoc(userId, "measurement", payload);
  return { id, data: payload };
};

export const sendBodyPhoto = async (userId, payload) => {
  payload.time = new Date();
  const id = await createNewDoc(userId, "bodyPhoto", payload);
  return { id, data: payload };
};

export const getMeasurements = async (userId) => {
  const q = query(
    collection(db, "users", userId, "measurement"),
    orderBy("time", "desc")
  );

  let toReturn = await getDocs(q);
  toReturn = toReturn.docs.map((item) => ({ id: item.id, data: item.data() }));
  return toReturn;
};

export const getLastMeasurement = async (userId) => {
  const q = query(
    collection(db, "users", userId, "measurement"),
    orderBy("time", "desc"),
    limit(1)
  );

  let toReturn = await getDocs(q);
  toReturn = toReturn.docs.map((item) => ({ id: item.id, data: item.data() }));
  return toReturn[0];
};

export const getLastBodyPhoto = async (userId) => {
  const q = query(
    collection(db, "users", userId, "bodyPhoto"),
    orderBy("time", "desc"),
    limit(1)
  );

  let toReturn = await getDocs(q);
  toReturn = toReturn.docs.map((item) => ({ id: item.id, data: item.data() }));
  return toReturn[0];
};

export const getLastBodyPhotos = async (userId) => {
  const q = query(
    collection(db, "users", userId, "bodyPhoto"),
    orderBy("time", "desc")
  );

  let toReturn = await getDocs(q);
  toReturn = toReturn.docs.map((item) => ({ id: item.id, data: item.data() }));
  return toReturn;
};

export const getCalendarDay = async (userId, day, month, year) => {
  const q = query(
    collection(db, "users", userId, "calendar"),
    where("day", "==", day),
    where("month", "==", month),
    where("year", "==", year)
  );

  let toReturn = await getDocs(q);
  toReturn = toReturn.docs.map((item) => ({ id: item.id, data: item.data() }));
  return toReturn;
};

export const getProtegeLastMeasurment = async (protegeId) => {};

export const getProductList = async (startAf, searchValue) => {
  let q;
  if (startAf) {
    if (searchValue) {
      q = query(
        collection(db, "productList"),
        where("name", ">=", searchValue),
        where("name", "<=", searchValue + "\uf8ff"),
        startAfter(startAf),
        limit(25)
      );
    } else
      q = query(collection(db, "productList"), startAfter(startAf), limit(25));
  } else {
    if (searchValue) {
      q = query(
        collection(db, "productList"),
        where("name", ">=", searchValue),
        where("name", "<=", searchValue + "\uf8ff"),
        limit(25)
      );
    } else q = query(collection(db, "productList"), limit(25));
  }
  let toReturn = await getDocs(q);
  const lastVisable = toReturn.docs[toReturn.docs.length - 1];
  toReturn = toReturn.docs.map((item) => item.data());
  return { toReturn, lastVisable };
};

export const createNewProduct = async (product) => {
  const docRef = await addDoc(collection(db, "productList"), product);
};
