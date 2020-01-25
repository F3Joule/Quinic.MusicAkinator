import React, { useState, useEffect } from 'react';
import MainWithBox from '../components/MainWithBox';
import { Button } from '@material-ui/core';
import { NavButtons } from '../components/NavButton';
import { isBrowser, MobileView } from 'react-device-detect';
import DeezerProvider, { useDeezerData, DeezerData } from '../components/ResultContext';
import InputGame from '../components/InputGame';
import Player from '../components/PlaySoundButton';
import ReactMarkdown from 'react-markdown';
import { requestDeezerMusic } from '../api/AuddAPI';
import store from 'store';
import List from '../components/List';

const SCORE = 'score';

export const Game = () => {
  const {
    state: { data }
  } = useDeezerData();
  const [ score, setScore ] = useState(0);

  useEffect(() => {
    if (score === 0) {
      const data = store.get(SCORE);
      if (data === undefined) store.set(SCORE, score);

      setScore(data);
    }
  }, [ score ]);

  return (data !== undefined ? <Result data={data} win={() => store.set(SCORE, score + 1)}/> : <InputGame score={score}/>);
};

type Props = {
  data: DeezerData,
  win: () => void
}

export const Result = (props: Props) => {
  const { data, win } = props;
  const { results } = data;
  const [attemps, setAttemps] = useState(0);
  const [currentTrack, setTrack] = useState(results ? results.result[0] : undefined);
  const [currentData, setData] = useState<DeezerData>(data);
  const [youWin, setWin] = useState(true);
  const [finishGame, setFinish] = useState(false);
  const { title, preview, album: { cover } } = currentData;

  useEffect(() => {
    if (attemps > 4) {
      win();
      setFinish(true);
      return;
    }
    
    currentTrack && requestDeezerMusic(currentTrack).then(data => setData(data)).catch(console.log);

  }, [attemps, currentTrack, win]);

  const ActionButtons = () => (
    <div className='action-button'>
      <Button onClick={() => {
        setWin(false)
        setFinish(true)
      }}>CORRECT</Button>
      <Button onClick={() => {
        const i = attemps + 1;
        results && setTrack(results.result[i]);
        setAttemps(i)
      }} >INCORRECT</Button>
    </div>
  );

  const FinishGame = () => {
    return (
      <>
        <span className='Sound--result'>Winner: {`${youWin ? 'You' : 'Audd'}`}</span>
        <Button onClick={() => window.location.reload()}>TRY AGAIN</Button>
      </>
    );
  };

  const SoundContent = () => (<>
    <h4 className='title'>
      {title}
    </h4>
    <ReactMarkdown className='DfMd' source={currentTrack ? currentTrack.lyrics : ''} linkTarget='_blank' />
  </>)
 
  return (
    <MainWithBox withoutNav={isBrowser} className='box-result'>
      <div className='Result'>
        <div className='Result-left'>
          <div className='Result--image' style={{ backgroundImage: `url(${cover})` }}>
            <Player url={preview} />
          </div>
          <div className='Actions'>
            {finishGame ? <FinishGame /> : <ActionButtons />}
          </div>
        </div>
        <div className='Result-right'>
          <MobileView>
            <div className='Stats'>
              <div className='text'>NUMBER OF ATTEMPS</div>
              <div className='counter'>{attemps}</div>
            </div>
          </MobileView>
          <div className='Result--text'>
            {finishGame && results ? <List results={results.result.slice(0, attemps)}/> : <SoundContent/>}
          </div>
          {isBrowser &&
            <div className='Stats'>
              <div className='Attemps'>
                <div className='text'>NUMBER OF ATTEMPS</div>
                <div className='counter'>{5 - attemps}</div>
              </div>
              <NavButtons variant='horizontal' />
            </div>}
        </div>
      </div>
    </MainWithBox>
  );
};

export default () => <DeezerProvider><Game /></DeezerProvider>;
