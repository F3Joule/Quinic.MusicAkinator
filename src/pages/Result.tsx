import React from 'react';
import MainWithBox from '../components/MainWithBox';
import ResultComponent from '../components/ResultComponent';
import { useDeezerData } from '../components/ResultContext';
import InputSound from '../components/InputSound';

export const Result = () => {
  const {
    state: { data }
  } = useDeezerData();

  const isResult = data === undefined;

  return (
    <MainWithBox className={isResult ? 'box-result' : 'box-center'}>
        {isResult ? <ResultComponent /> : <InputSound />}
    </MainWithBox>
  );
};

export default Result;
