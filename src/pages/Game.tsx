import React from 'react';
import MainWithBox from '../components/MainWithBox';
import InputSound from '../components/InputSound';
import { Button } from '@material-ui/core';
export const Game = () => {
    return <MainWithBox className='box-center'>
        <div>
            <h4 className='title'>RIDDLE YOUR SONG</h4>
            <InputSound/>
            <span>
                <div className='counter'>0</div>
                <div>Number of wins</div>
                <Button>FINISH GAME</Button>
            </span>
        </div>    
    </MainWithBox>
}

export default Game;