import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { TextField, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import { getSongDataByLyrics } from './api/AuddAPI';
import { useDeezerData } from './ResultContext';

export const InputSound = () => {
  const { set } = useDeezerData();
  const [lyrics, setLyrics] = useState<string | null>(null);
  // var isRecording = false;
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className='Input-music'>
      <TextField
        id='lyricsInput'
        className='InputText'
        required
        onChange={event => {
          setLyrics(event.target.value);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            if (lyrics !== null) {
              getSongDataByLyrics(lyrics).then(data => set(data as any));
            }

            event.preventDefault();
          }
        }}
      />
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording }) => {
          return <div className={isRecording ? 'icon active' : 'icon'}>
            <IconButton
              // disabled={status === 'idle' ? false : true}
              onClick={() => {
                // isRecording = !isRecording;
                setIsRecording(true);
                startRecording();

                setTimeout(() => {
                  stopRecording();
                  setIsRecording(false);
                }, 7000);
              
              }}>
              <MicIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        }}
        onStop={(blobUrl: string) => {
          // TODO: call AUDD API search by media
          console.log('Audio blob', blobUrl);
        }}
      />
    </div>
  );
};

export default InputSound;
