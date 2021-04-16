import React, { useState } from 'react';
import GameBoard from './GameBoard';

function Page() {
  const [turn, setTurn] = useState('O');
  const [winner, setWinner] = useState(false);

  function toggleTurn() {
    setTurn(prevTurn => prevTurn === 'O' ? 'X' : 'O');
  }

  return (
    <div className="page">
      <h1>Tic-Tac-Toe</h1>
      <p>{winner ? winner + ' Won!' : `It's ${turn}'s turn`}</p>
      <GameBoard turn={turn} toggleTurn={toggleTurn} winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default Page;
