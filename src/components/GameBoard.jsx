import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBoard, gameReset,selectGameStatus } from '../store/gameStatus';

function GameBoard(props) {
  const { turn, winner, board } = useSelector(selectGameStatus);
  const dispatch = useDispatch();

  function handleBoxClick(e) {
    if (winner) {
      return;
    }
    const boxIndex = e.target.getAttribute('data-index').split('');
    if (board[boxIndex[0]][boxIndex[1]]) {
      return;
    } else {
      dispatch(updateBoard({ boxIndex, turn }));
    }
  }

  return (
    <>
      <div className="board">
        {
          board.map((row, i) => {
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
        {winner && <button onClick={() => dispatch(gameReset())}>Play Again?</button>}
      </div>
    </>
  );
}

export default GameBoard;
