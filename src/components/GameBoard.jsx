import React, { useState } from 'react';

function GameBoard(props) {
  const [gameMatrix, setGameMatrix] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  function handleBoxClick(e) {
    if (props.winner) {
      return;
    }
    const boxIndex = e.target.getAttribute('data-index').split('');
    if (gameMatrix[boxIndex[0]][boxIndex[1]]) {
      return;
    } else {
      let newMatrix;
      setGameMatrix(prev => {
        prev[boxIndex[0]][boxIndex[1]] = props.turn;
        newMatrix = prev;
        return prev;
      });
      const winner = checkForWinner(newMatrix);
      if (winner) {
        props.setWinner(winner);
      } else {
        props.toggleTurn();
      }
    }
  }

  function checkForWinner(matrix) {
    for (let i = 0; i < 3; i++) {
      if (matrix[i][0] && matrix[i].every(val => val === matrix[i][0])) {
        return matrix[i][0];
      }
    }
    return false;
  }

  return (
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
  );
}

export default GameBoard;
