import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const slice = createSlice({
  name: 'gameStatus',
  initialState: {
    turn: 'X',
    winner: false,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  },
  reducers: {
    nextTurn: (gameStatus, action) => {
      gameStatus.turn = gameStatus.turn === 'X' ? 'O' : 'X';
    },

    resetTurn: (gameStatus, action) => {
      gameStatus.turn = 'X';
    }
  }
});

export const { nextTurn, resetTurn } = slice.actions;
export default slice.reducer;

export const selectTurn = createSelector(
  state => state.entities.gameStatus.turn,
  turn => turn
);
