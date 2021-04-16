import React, { useState } from 'react';

function GameBoard(props) {
  const [gameMatrix, setGameMatrix] = useState([[null, null, null], [null, null, null], [null, null, null]]);

  function handleBoxClick() {
    props.toggleTurn();
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
