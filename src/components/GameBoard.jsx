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
    return false;
  }

  function playAgain() {
    setGameMatrix([[null, null, null], [null, null, null], [null, null, null]]);
    props.setWinner(false);
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
        {props.winner && <button onClick={playAgain}>Play Again?</button>}
      </div>
    </>
  );
}

export default GameBoard;
