import React, { useState } from 'react';
import { TextField, makeStyles, Theme, createStyles, Backdrop, CircularProgress, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import { getSongDataByLyrics, getSongDataByMedia } from '../api/AuddAPI';
import { useDeezerData } from './ResultContext';
import { ReactMediaRecorder } from 'react-media-recorder';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export const InputSound = () => {
  const { set } = useDeezerData();
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
              getSongDataByLyrics(lyrics).then(data => set(data as any));
            }
            setOpen(true);
            event.preventDefault();
          }
        }}
      />
      <ReactMediaRecorder
        audio
        blobPropertyBag={{
          type: "audio/wav"
        }}
        render={({ status, startRecording, stopRecording }) => {
          return <div className={isRecording ? 'icon active' : 'icon'}>
            <IconButton
              // TODO: disable button, when there's an error with recorder
              // disabled={status === 'idle' ? false : true}
              onClick={() => {
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
          console.log('Audio blob', blobUrl);
          getSongDataByMedia(blobUrl);
        }}
      />
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default InputSound;
