import React from 'react';
import GameBoard from './GameBoard';
import { useSelector } from 'react-redux';
import { selectGameStatus } from '../store/gameStatus';

function Page() {
  const { turn, winner } = useSelector(selectGameStatus);

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
      <GameBoard />
    </div>
  );
}

export default Page;
