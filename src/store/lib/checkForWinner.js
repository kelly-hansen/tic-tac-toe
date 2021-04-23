export default function checkForWinner(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] && board[i].every(val => val === board[i][0])) {
      return board[i][0];
    }
    if (board[0][i] && board.every(arr => {
      return arr[i] === board[0][i]
    })) {
      return board[0][i];
    }
  }
  const center = board[1][1];
  if (center) {
    if (board[0][0] === center && board[2][2] === center) {
      return center;
    }
    if (board[2][0] === center && board[0][2] === center) {
      return center;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!board[i][j]) {
        return false;
      }
    }
  }
  return 'Tie';
}
