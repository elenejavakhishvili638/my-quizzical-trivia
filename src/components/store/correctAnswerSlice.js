import { createSlice } from "@reduxjs/toolkit";

const correctAnswerSlice = createSlice({
  name: "correctAnswer",
  initialState: { answers: [] },
  reducers: {
    checkAnswer(state, action) {
      console.log("choose", action.payload);
      //   let newAnswers = state.answers.filter(
      //     (item) => item.key !== action.payload.key
      //   );

      //   return { answers: [...newAnswers, action.payload] };
    },
  },
});

export const { checkAnswer } = correctAnswerSlice.actions;
export default correctAnswerSlice.reducer;
