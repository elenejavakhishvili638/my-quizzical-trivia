import { configureStore } from "@reduxjs/toolkit";
import holdAnswerReducer from "./holdAnswerSlice";
import correctAnswerReducer from "./correctAnswerSlice";

const store = configureStore({
  reducer: {
    answer: holdAnswerReducer,
    answers: correctAnswerReducer,
  },
});

export default store;
