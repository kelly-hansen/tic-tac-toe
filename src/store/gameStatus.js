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

    updateWinner: (gameStatus, action) => {
      gameStatus.winner = action.payload;
    },

    updateBoard: (gameStatus, action) => {
      const { boxIndex, turn } = action.payload;
      gameStatus.board[boxIndex[0]][boxIndex[1]] = turn;
    },

    gameReset: (gameStatus, action) => {
      gameStatus.turn = 'X';
      gameStatus.winner = false;
      gameStatus.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    }
  }
});

export const { nextTurn, updateWinner, updateBoard, gameReset } = slice.actions;
export default slice.reducer;

export const selectGameStatus = createSelector(
  state => state.entities.gameStatus,
  gameStatus => gameStatus
);
