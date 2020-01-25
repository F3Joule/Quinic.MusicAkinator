import React, { FunctionComponent } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Button } from '@material-ui/core';
import { DeezerData } from './ResultContext';
import ReactAudioPlayer from 'react-audio-player';

type Props = {
  data: DeezerData
}

export const Result: FunctionComponent<Props> = ( { data } ) => {
  const { title, preview, album: { cover } } = data;
  return (
    <div className='Result'>
      <div className='Result--image' style={{ backgroundImage: `url(${cover})`}}>
      <ReactAudioPlayer
          src={preview}
      >
        <Button className='Play--button'>
          <PlayArrowIcon />
        </Button>
      </ReactAudioPlayer>
      </div>
      <div className='Result--text'>
        <h4 className='title'>{title}</h4>
        <p>
          Work it Make it Do it Makes us Harder Better Faster Stronger More than
          Hour Our Never Ever After Work is Over
        </p>
      </div>
    </div>
  );
};

export default Result;
