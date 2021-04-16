import React, { useState } from 'react';

function GameBoard(props) {
  const [gameMatrix, setGameMatrix] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  function handleBoxClick(e) {
    const boxIndex = e.target.getAttribute('data-index').split('');
    if (gameMatrix[boxIndex[0]][boxIndex[1]]) {
      return;
    } else {
      setGameMatrix(prev => {
        prev[boxIndex[0]][boxIndex[1]] = props.turn;
        return prev;
      });
      props.toggleTurn();
    }
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
