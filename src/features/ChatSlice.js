import { createSlice } from "@reduxjs/toolkit";

//Tutaj jak juz będzie baza dodamy sobie thunk który będzie nam pobierał dane z bazy
//Co do struktury wiadomości proszę się nie wzorować bo to tylko placeholder żeby działało
//zawsze można zmienić
const initialState = [
  {
    from: 1234,
    to: 4321,
    isImage: false,
    content: "Mam problem",
    date: "1636743895032",
  },
  {
    from: 4321,
    to: 1234,
    isImage: false,
    content: "To fajnie",
    date: "1636743895035",
  },
];

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addNewMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectMessages = (state) => state.chat;

export const { addNewMessage } = chatSlice.actions;

export default chatSlice.reducer;
