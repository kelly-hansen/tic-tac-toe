import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

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

export const selectTurn = createSelector(
  state => state.entities.turn,
  turn => turn
);
