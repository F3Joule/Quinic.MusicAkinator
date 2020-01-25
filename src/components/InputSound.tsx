import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { TextField, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';

export const InputSound = () => {
  const [lyrics, setLyrics] = useState<string | null>(null);
  var isRecording = false;

  return (
    <div className='Input-music'>
      <TextField
        id='lyricsInput'
        label='Input lyrics part'
        required
        onChange={event => {
          setLyrics(event.target.value);
        }}
      />
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording }) => (
          <div className='icon'>
            <IconButton
              onClick={() => {
                isRecording = !isRecording;
              }}>
              <MicIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        )}
    </div>
  );
};

export default InputSound;
