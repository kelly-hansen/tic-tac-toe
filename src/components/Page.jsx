import React, { useState } from 'react';
import GameBoard from './GameBoard';
import { useSelector } from 'react-redux';
import { selectGameStatus } from '../store/gameStatus';

function Page() {
  const { turn } = useSelector(selectGameStatus);

  const [winner, setWinner] = useState(false);

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
      <GameBoard winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default Page;
