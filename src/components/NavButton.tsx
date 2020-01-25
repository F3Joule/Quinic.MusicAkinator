import React from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

type Props = {
  variant?: 'vertical' | 'horizontal';
};

export const NavButtons = (props: Props) => {
  const { variant = 'vertical' } = props;
  return (
    <div className={'NavButtons ' + variant}>
      <Button className='NavButton'>
        <SearchIcon />
      </Button>
      <Button className='NavButton'>
        <SportsEsportsIcon />
      </Button>
    </div>
  );
};
