import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { TextField, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import { getSongDataByLyrics } from './api/AuddAPI';

export const InputSound = () => {
  const [lyrics, setLyrics] = useState<string | null>(null);
  var isRecording = false;

  return (
    <div className='Input-music'>
      <TextField
        id='lyricsInput'
        className='InputText'
        label='Input lyrics part'
        required
        onChange={event => {
          setLyrics(event.target.value);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            if (lyrics !== null) {
              getSongDataByLyrics(lyrics);
            }

            event.preventDefault();
          }
        }}
      />
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording }) => (
          <div className='icon'>
            <IconButton
              // disabled={status === 'idle' ? false : true}
              onClick={() => {
                isRecording = !isRecording;

                if (isRecording) {
                  startRecording();
                } else {
                  stopRecording();
                }
              }}>
              <MicIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        )}
        onStop={(blobUrl: string) => {
          // TODO: call AUDD API search by media
          console.log('Audio blob', blobUrl);
        }}
      />
    </div>
  );
};

export default InputSound;
