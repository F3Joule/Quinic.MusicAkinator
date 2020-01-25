import React from 'react';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Link } from 'react-router-dom';

const reload = (path: string) => window.location.pathname === path && window.location.reload();

type Props = {
  variant?: 'vertical' | 'horizontal';
};

export const NavButtons = (props: Props) => {
  const { variant = 'vertical' } = props;
  return (
    <div className={'NavButtons ' + variant}>
      <SearchButton/>
      <GameButton/>
    </div>
  );
};

export const GameButton = () => <Link to={'/game'} onClick={() => reload('/game')}>
  <Button className='NavButton'>
    <SportsEsportsIcon />
  </Button>
</Link>

export const SearchButton = () => <Link to={'/search'} onClick={() => reload('/search')}>
  <Button className='NavButton'>
    <SearchIcon />
  </Button>
</Link>
