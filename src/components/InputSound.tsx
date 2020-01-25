import React from 'react';
import { TextField } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';

export const InputSound = () => {
  return (
    <div className='Input-music'>
      <TextField id='standard-basic' label='Hint Text' />
      <div className='icon'>
        <MicIcon />
      </div>
    </div>
  );
};

export default InputSound;
