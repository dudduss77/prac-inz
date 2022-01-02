import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessageObject } from "../firebase/dataFirebase";

export const loadMessagesFromDb = createAsyncThunk(
  "messages/load",
  async (messagesId) => {
    const messageObject = await getMessageObject(messagesId);
    return messageObject.messages;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(loadMessagesFromDb.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectMessages = (state) => state.chat;

export const { addNewMessage } = chatSlice.actions;

export default chatSlice.reducer;
