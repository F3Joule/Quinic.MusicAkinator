import React, { FunctionComponent } from 'react';
import { DeezerData } from './ResultContext';
import Player from './PlaySoundButton';
import ReactMarkdown from 'react-markdown';

type Props = {
  data: DeezerData
}

export const Result: FunctionComponent<Props> = ( { data } ) => {
  const { title, preview, album: { cover }, lyrics } = data;
  return (
    <div className='Result'>
      <div className='Result--image' style={{ backgroundImage: `url(${cover})`}}>
        <Player url={preview}/>
      </div>
      <div className='Result--text'>
        <h4 className='title'>{title}</h4>
        <ReactMarkdown className='DfMd' source={lyrics} linkTarget='_blank'/>
      </div>
    </div>
  );
};

export default Result;
