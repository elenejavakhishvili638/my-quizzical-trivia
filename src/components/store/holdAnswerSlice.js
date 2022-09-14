import { createSlice } from "@reduxjs/toolkit";

const holdAnswerSlice = createSlice({
  name: "holdAnswer",
  initialState: { answer: [] },
  reducers: {
    holdAnswer(state, action) {
      console.log("choose", action.payload);
      let newAnswers = state.answer.filter(
        (item) => item.key !== action.payload.key
      );

      return { answer: [...newAnswers, action.payload] };
    },
  },
});

export const { holdAnswer } = holdAnswerSlice.actions;
export default holdAnswerSlice.reducer;
