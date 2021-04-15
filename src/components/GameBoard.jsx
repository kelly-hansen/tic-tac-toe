import React, { useState } from 'react';

function GameBoard(props) {
  const [gameMatrix, setGameMatrix] = useState([['O', 'X'], [], []]);

  return (
    <div className="board">
      {
        gameMatrix.map((row, i) => {
          return (
            <div key={'row' + i} className="row">
              <div className="box">{row[0]}</div>
              <div className="box">{row[1]}</div>
              <div className="box">{row[2]}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default GameBoard;
