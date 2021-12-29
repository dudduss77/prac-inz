import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/configFirebase";

export const loadQuestionairesFromDb = createAsyncThunk(
  "questionaire/load",
  async ({ userId, questId }) => {
    const questDocRef = doc(db, "users", userId, "questionaires", questId);
    const docSnap = await getDoc(questDocRef);
    return docSnap.data();
  }
);

const swapArrayElements = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

const initialState = {
  name: "Nowa ankieta",
  questionList: [
    {
      type: 0,
      question: "",
      answer: "",
      checkbox: [],
      img: [],
    },
  ],
  // {
  //   type: 1,
  //   question: "Długa odpowiedz ?",
  //   answer: "odp",
  //   checkbox: [],
  //   img: [],
  // },
  // {
  //   type: 2,
  //   question: "Wielokrotny wybór ?",
  //   checkbox: [
  //     {
  //       name: "pozycja 1",
  //       checked: false,
  //     },
  //     {
  //       name: "pozycja 2",
  //       checked: true,
  //     },
  //     {
  //       name: "pozycja 3",
  //       checked: false,
  //     }
  //   ],
  //   img: []
  // },
  // {
  //   type: 3,
  //   question: "Jednokrotny wybór ?",
  //   checkbox: [
  //     {
  //       name: "pozycja 1 jedno",
  //       checked: false,
  //     },
  //     {
  //       name: "pozycja 2 jedno",
  //       checked: true,
  //     },
  //     {
  //       name: "pozycja 3 jedno",
  //       checked: false,
  //     }
  //   ],
  //   img: []
  // },
  // {
  //   type: 4,
  //   question: "Upload zdjęć ?",
  //   checkbox: [],
  //   img: []

  // },
};

export const questionaireSlice = createSlice({
  name: "questionaire",
  initialState,
  reducers: {
    resetQuestionaireState: () => {
      return initialState;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    addQuestion: (state, action) => {
      state.questionList.push({
        type: 0,
        question: "Przykładowe pytanie",
        answer: "",
        checkbox: [],
        img: [],
      });
    },
    updateQuestion: (state, action) => {
      return {
        ...state,
        questionList: state.questionList.map((item, i) =>
          action.payload.id === i ? { ...item, ...action.payload } : item
        ),
      };
    },
    deleteQuestion: (state, action) =>
      state.questionList.filter((item, i) => action.payload.id !== i),
    swapQuestion: (state, action) => {
      swapArrayElements(
        state.questionList,
        action.payload[0],
        action.payload[1]
      );
    },
    copyQuestion: (state, action) => {
      state.questionList.push(state.questionList[action.payload.id]);
    },
    addCheckBox: (state, action) => {
      if (state.questionList[action.payload.id].checkbox)
        state.questionList[action.payload.id].checkbox.push({
          name: "Dodaj nową opcje",
          checked: false,
        });
      else
        state.questionList[action.payload.id].checkbox = [
          {
            name: "Dodaj nową opcje",
            checked: false,
          },
        ];
    },
    updateCheckboxName: (state, action) => {
      state.questionList[action.payload.id].checkbox[
        action.payload.checkboxId
      ].name = action.payload.name;
    },
    updateAnswer: (state, action) => {
      state.questionList[action.payload.id].answer = action.payload.answer;
    },
    toggleChecked: (state, action) => {
      state.questionList[action.payload.id].checkbox[
        action.payload.checkboxId
      ].checked =
        !state.questionList[action.payload.id].checkbox[
          action.payload.checkboxId
        ].checked;
    },
    checkRadio: (state, action) => {
      state.questionList[action.payload.id].checkbox.map((item, i) => {
        item.checked = i === action.payload.checkboxId;
        return item;
      });
    },
    updateImg: (state, action) => {
      state.questionList[action.payload.id].img = action.payload.img;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuestionairesFromDb.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  resetQuestionaireState,
  updateName,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  swapQuestion,
  copyQuestion,
  addCheckBox,
  updateCheckboxName,
  updateAnswer,
  toggleChecked,
  checkRadio,
  updateImg,
} = questionaireSlice.actions;

export default questionaireSlice.reducer;
