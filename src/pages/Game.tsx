import React from 'react';
import MainWithBox from '../components/MainWithBox';
import InputSound from '../components/InputSound';
import { Button } from '@material-ui/core';
export const Game = () => {
  return (
    <MainWithBox className='box-center'>
      <div>
        <h4 className='title write'>RIDDLE YOUR SONG</h4>
        <InputSound />
        <span className='Game-box'>
          <div className='Count-box'>
            <div className='counter'>0</div>
            <div className='text'>Number of wins</div>
          </div>
          <Button className='Game-button'>FINISH GAME</Button>
        </span>
      </div>
    </MainWithBox>
  );
};

export default Game;
