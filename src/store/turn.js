import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'turn',
  initialState: 'X',
  reducers: {
    nextTurn: (turn, action) => {
      turn = turn === 'X' ? 'O' : 'X';
    },

    resetTurn: (turn, action) => {
      turn = 'X';
    }
  }
});

export const { nextTurn, resetTurn } = slice.actions;
export default slice.reducer;
