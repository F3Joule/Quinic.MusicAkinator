import React from 'react';
import MainWithBox from '../components/MainWithBox';
import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { NavButtons } from '../components/NavButton';
import { isBrowser, MobileView } from 'react-device-detect';

export const Result = () => {
  let attemps = 6;

  const ActionButtons = () => (
    <div className='action-button'>
      <Button>CORRECT</Button>
      <Button>INCORRECT</Button>
    </div>
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
    <MainWithBox withoutNav={isBrowser} className='box-result'>
      <div className='Result'>
        <div className='Result-left'>
          <div className='Result--image' style={{ backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/I/414esxGXdhL._SY450_.jpg')`}}>
            <Button className='Play--button'>
              <PlayArrowIcon />
            </Button>
          </div>
          <div className='Actions'>
            {attemps < 5 ? <ActionButtons /> : <FinishGame />}
          </div>
        </div>
        <div className='Result-right'>
          <MobileView>
            <div className='Stats'>
                <div className='text'>NUMBER OF ATTEMPS</div>
                <div className='counter'>0</div>
            </div>
          </MobileView>
          <div className='Result--text'>
            <h4 className='title'>
              Daft Punk - Harder, Better, Faster, Stronger
            </h4>
            <p>
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
              Work it Make it Do it Makes us Harder Better Faster Stronger More
              than Hour Our Never Ever After Work is Over
            </p>
          </div>
          {isBrowser && 
            <div className='Stats'>
              <div className='Attemps'>
                <div className='text'>NUMBER OF ATTEMPS</div>
                <div className='counter'>0</div>
              </div>
              <NavButtons variant='horizontal' />
            </div>}
        </div>
      </div>
    </MainWithBox>
  );
};

export default Result;
