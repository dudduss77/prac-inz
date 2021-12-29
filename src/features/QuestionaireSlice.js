import { createSlice } from '@reduxjs/toolkit'


const swapArrayElements = (arr, indexA, indexB) => {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };

const initialState = [
    {
      type: 0,
      question: "",
      answer: "",
      checkbox: [],
      img: [],
    },
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
  ]

export const questionaireSlice = createSlice({
  name: 'questionaire',
  initialState,
  reducers: {
    addQuestion: (state, action) => { state.push(    {
        type: 0,
        question: "Przykładowe pytanie",
        answer: "",
        checkbox: [],
        img: []
      })},
    updateQuestion: (state, action) => state.map((item, i) => action.payload.id === i ? {...item, ...action.payload } : item),
    deleteQuestion: (state, action) => state.filter((item, i) => action.payload.id !== i),
    swapQuestion: (state, action) => {
        swapArrayElements(state, action.payload[0], action.payload[1]);
    },
    copyQuestion: (state, action) => {
        state.push(state[action.payload.id])
    },
    addCheckBox: (state, action) => {
        if(state[action.payload.id].checkbox)
            state[action.payload.id].checkbox.push({
              name: "Dodaj nową opcje",
              checked: false,
            })
        else
            state[action.payload.id].checkbox = [{
              name: "Dodaj nową opcje",
              checked: false,
            }]
    },
    updateCheckboxName: (state, action) => {
        state[action.payload.id].checkbox[action.payload.checkboxId].name = action.payload.name;
    },
    updateAnswer: (state, action) => {
        state[action.payload.id].answer = action.payload.answer;
    },
    toggleChecked: (state, action) => {
      state[action.payload.id].checkbox[action.payload.checkboxId].checked = !state[action.payload.id].checkbox[action.payload.checkboxId].checked;
    },
    checkRadio: (state, action) => { 
      state[action.payload.id].checkbox.map((item, i) => {
        item.checked = (i === action.payload.checkboxId);
        return item;
      })
    },
    updateImg: (state, action) => { 
      state[action.payload.id].img = action.payload.img;
    },

  },
})

// Action creators are generated for each case reducer function
export const { 
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
    updateImg
} = questionaireSlice.actions

export default questionaireSlice.reducer