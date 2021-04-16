import React, { useState } from 'react';
import GameBoard from './GameBoard';

function Page() {
  const [turn, setTurn] = useState('O');

  function toggleTurn() {
    setTurn(prevTurn => prevTurn === 'O' ? 'X' : 'O');
  }

  return (
    <div className="page">
      <h1>Tic-Tac-Toe</h1>
      <p>It's {turn}'s turn</p>
      <GameBoard />
    </div>
  );
}

export default Page;
