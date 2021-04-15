import React from 'react';
import GameBoard from './GameBoard';

function Page() {
  return (
    <div className="page">
      <h1>Tic-Tac-Toe</h1>
      <p>It's PLAYER's turn</p>
      <GameBoard />
    </div>
  );
}

export default Page;
