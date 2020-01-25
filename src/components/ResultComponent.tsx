import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Button } from '@material-ui/core';

export const Result = () => {
  return (
    <div className='Result'>
      <div className='Result--image'>
        <Button className='Play--button'>
          <PlayArrowIcon />
        </Button>
      </div>
      <div className='Result--text'>
        <h4 className='title'>Daft Punk - Harder, Better, Faster, Stronger</h4>
        <p>
          Work it Make it Do it Makes us Harder Better Faster Stronger More than
          Hour Our Never Ever After Work is Over
        </p>
      </div>
    </div>
  );
};

export default Result;
