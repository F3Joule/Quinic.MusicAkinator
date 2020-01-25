import React, { useState } from 'react';
import { TextField, makeStyles, Theme, createStyles, Backdrop, CircularProgress } from '@material-ui/core';
import { getSongDataByLyrics } from '../api/AuddAPI';
import { useDeezerData } from './ResultContext';


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
      {/* <ReactMediaRecorder
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
      /> */}
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default InputSound;
