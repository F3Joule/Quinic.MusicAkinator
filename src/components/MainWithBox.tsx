import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

type Props = {
  className?: string;
};

export const Box: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div className='main center-box'>
      <div className={'Box ' + className}>{children}</div>
      <NavButtons />
    </div>
  );
};

export default Box;

const NavButtons = () => {
  return (
    <div className='NavButtons'>
      <Button className='NavButton'>
        <SearchIcon />
      </Button>
      <Button className='NavButton'>
        <SportsEsportsIcon />
      </Button>
    </div>
  );
};
