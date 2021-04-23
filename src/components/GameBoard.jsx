import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextTurn, resetTurn, updateWinner, selectGameStatus } from '../store/gameStatus';

function GameBoard(props) {
  const { turn, winner } = useSelector(selectGameStatus);
  const dispatch = useDispatch();

  const [gameMatrix, setGameMatrix] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  function handleBoxClick(e) {
    if (winner) {
      return;
    }
    const boxIndex = e.target.getAttribute('data-index').split('');
    if (gameMatrix[boxIndex[0]][boxIndex[1]]) {
      return;
    } else {
      let newMatrix = gameMatrix.slice();
      newMatrix[boxIndex[0]][boxIndex[1]] = turn;
      setGameMatrix(newMatrix);
      const newWinner = checkForWinner(newMatrix);
      if (newWinner) {
        dispatch(updateWinner(newWinner));
      } else {
        dispatch(nextTurn());
      }
    }
  }

  function checkForWinner(matrix) {
    for (let i = 0; i < 3; i++) {
      if (matrix[i][0] && matrix[i].every(val => val === matrix[i][0])) {
        return matrix[i][0];
      }
      if (matrix[0][i] && matrix.every(arr => {
        return arr[i] === matrix[0][i]
        })) {
          return matrix[0][i];
      }
    }
    const center = matrix[1][1];
    if (center) {
      if (matrix[0][0] === center && matrix[2][2] === center) {
        return center;
      }
      if (matrix[2][0] === center && matrix[0][2] === center) {
        return center;
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j= 0; j < 3; j++) {
        if (!matrix[i][j]) {
          return false;
        }
      }
    }
    return 'Tie';
  }

  function playAgain() {
    setGameMatrix([[null, null, null], [null, null, null], [null, null, null]]);
    dispatch(resetTurn());
    dispatch(updateWinner(false));
  }

  return (
    <>
      <div className="board">
        {
          gameMatrix.map((row, i) => {
            return (
              <div key={'row' + i} className="row">
                {
                  row.map((box, j) => {
                    return <div
                      key={'box' + j}
                      className="box"
                      onClick={handleBoxClick}
                      data-index={'' + i + j}
                    >{box}</div>
                  })
                }
              </div>
            )
          })
        }
      </div>
      <div>
        {winner && <button onClick={playAgain}>Play Again?</button>}
      </div>
    </>
  );
}

export default GameBoard;
