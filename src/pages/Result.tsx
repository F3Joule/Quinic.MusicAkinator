import React from 'react';
import MainWithBox from '../components/MainWithBox';
import ResultComponent from '../components/ResultComponent';
import { DeezerProvider, useDeezerData } from '../components/ResultContext';
import InputSound from '../components/InputSound';

export const Result = () => {
  const {
    state: { data }
  } = useDeezerData();

  return (
    <MainWithBox className='box-result'>
      <DeezerProvider>
        {data === undefined ? <InputSound /> : <ResultComponent />}
      </DeezerProvider>
    </MainWithBox>
  );
};

export default Result;
