import { createSlice } from '@reduxjs/toolkit'


const swapArrayElements = (arr, indexA, indexB) => {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };

const initialState = [
    {
      type: 3,
      question: "Przykładowe pytanie1",
    },
    {
      type: 1,
      question: "Przykładowe pytanie2",
    },
    {
      type: 0,
      question: "Przykładowe pytanie3",
    }
  ]

export const questionaireSlice = createSlice({
  name: 'questionaire',
  initialState,
  reducers: {
    addQuestion: (state, action) => { state.push(    {
        type: 0,
        question: "Przykładowe pytanie",
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
            state[action.payload.id].checkbox.push("Dodaj nową opcje")
        else
            state[action.payload.id].checkbox = ["Dodaj nową opcje"]
    },
    updateCheckboxName: (state, action) => {
        state[action.payload.id].checkbox[action.payload.checkboxId] = action.payload.name;
    }
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
    updateCheckboxName
} = questionaireSlice.actions

export default questionaireSlice.reducer