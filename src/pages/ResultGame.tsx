import React from 'react';
import MainWithBox from '../components/MainWithBox';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { NavButtons } from '../components/NavButton';

export const Result = () => {
  let attemps = 6;

  const ActionButtons = () => (
    <>
      <Button>CORRECT</Button>
      <Button>INCORRECT</Button>
    </>
  );

  const FinishGame = () => {
    return (
      <>
        <span className='Sound--result'>Winner: Audd</span>
        <Button>TRY AGAIN</Button>
      </>
    );
  };

  return (
    <MainWithBox withoutNav>
      <div className='Result'>
        <div className='Result-left'>
          <div className='Result--image'>
            <Button className='Play--button'>
              <PlayArrowIcon />
            </Button>
          </div>
          <div className='Actions'>
            {attemps < 5 ? <ActionButtons /> : <FinishGame />}
          </div>
        </div>
        <div className='Result-right'>
          <div className='Result--text'>
            <h4 className='title'>
              Daft Punk - Harder, Better, Faster, Stronger
            </h4>
            <p>
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
            </p>
          </div>
          <div className='Stats'>
            <div className='Attemps'>
              <div className='text'>NUMBER OF ATTEMPS</div>
              <div className='counter'>0</div>
            </div>
            <NavButtons variant='horizontal' />
          </div>
        </div>
      </div>
    </MainWithBox>
  );
};

export default Result;
