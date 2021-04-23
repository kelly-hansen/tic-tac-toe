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
    },

    updateWinner: (gameStatus, action) => {
      gameStatus.winner = action.payload;
    }
  }
});

export const { nextTurn, resetTurn, updateWinner } = slice.actions;
export default slice.reducer;

export const selectGameStatus = createSelector(
  state => state.entities.gameStatus,
  gameStatus => gameStatus
);
