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

export const getUserData = async (userId) => {
  const trainerDoc = doc(db, "users", userId);
  const toReturn = (await getDoc(trainerDoc)).data();
  toReturn.id = userId;
  return toReturn;
}

export const updateUser = async (userId, payload) => {
  const res = await updateDoc(doc(db, "users", userId), payload);
  return res;
}

export const setTrainerDoc = async (trainerId, data) => {
  const trainerDoc = doc(db, "users", trainerId);
  return (await setDoc(trainerDoc, data));
}
export const createColleciontWhenUserCreate = async (name, email, userId, trainerId = false, qustionaireId = false) => {
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
    }

    if(trainerId) {
      userObject = {
        ...userObject,
        payedFrom: null,
        payedTo: null,
        trainer: trainerId,
        isQuestionaireComplete: false
      }
    } else {
      userObject = {
        ...userObject,
        proteges: []
      }     
    }

    await setDoc(doc(db, "users", userId), userObject);

    if(trainerId) {
      const trainerData = await getUserData(trainerId)
      trainerData.proteges.push(userId);    
      await setTrainerDoc(trainerId, trainerData);

      const qustionaire = await getQuestionaire(trainerId, qustionaireId)
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
      questionList: await Promise.all(payload.questionList.map(async item => {
        if(item.type == 4)
          return { 
            ...item,
            img: await Promise.all(item.img.map(async img => {
              const { id } = await sendImage(userId, { imgData: img});
              return id;
            }))
          }
        else return { ...item }
      }))
    }

    const { id } = (await getQuestionaires(userId))[0];
    await updateDocFun(userId, "questionaires", id, toReturn);
    await updateUser(userId, {
      isQuestionaireComplete: true
    })

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

export const setProtegeDocInCollection = async (protegeId, payload, collection = "diets") => {
  payload.time = new Date();
  const id = await createNewDoc(protegeId, collection, payload)
  return {id, data: payload};
}

export const sendImage = async (userId, payload) => {
  payload.time = new Date();
  const id = await createNewDoc(userId, "images", payload)
  return {id, data: payload}; 
}

export const getImage = async (userId, imageId) => {
  const resDoc = await getDoc(doc(db, "users", userId, "images", imageId))
  return {id: imageId, data: resDoc.data()}
}

export const getTrainings = async (userId, setter = () => {}) => {
  let trainings = [];
  const trainingCollectionRef = await getDocs(
    collection(db, "users", userId, "trainings")
  );
  trainingCollectionRef.forEach((doc) => {
    trainings.push({ id: doc.id, data: doc.data() });
  });
  setter(trainings);
  return trainings
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
  return trainings
};


export const setQuestionaire = async (userId, questionaireId, data) => {
  const toReturn = await createNewDocWithCustomId(userId, "questionaires", questionaireId, data);
  return toReturn;
}

export const getQuestionaire = async (userId, id) => {
  const resDoc = await getDoc(doc(db, "users", userId, "questionaires", id));
  return { id: resDoc.id, data: resDoc.data() }
};


export const createNewDoc = async (userId, subCollecion, data) => {
  const docRef = await addDoc(
    collection(db, "users", userId, subCollecion),
    data
  );
  return docRef.id;
};

export const createNewDocWithCustomId = async (userId, subCollecion, docId, data) => {
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
  trainerProteges = await Promise.all(trainerProteges.map(async item => {
    return (await getUserData(item));
  }));

  return trainerProteges;
}
