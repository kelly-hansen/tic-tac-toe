import React, { useState } from 'react';
import GameBoard from './GameBoard';

function Page() {
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(false);

  function toggleTurn() {
    setTurn(prevTurn => prevTurn === 'O' ? 'X' : 'O');
  }

  return (
    <div className="page">
      <h1>Tic-Tac-Toe</h1>
      {winner ?
        <h3 className="blue">
          {winner === 'Tie' ? 'Tie Game!' : winner + ' Won!'}
        </h3>
        :
        <h3>
          {`${turn}'s Turn`}
        </h3>
      }
      <GameBoard turn={turn} toggleTurn={toggleTurn} winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default Page;
