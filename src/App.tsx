import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home';
import Seacrh from './pages/Search';
import Game from './pages/Game';
import Result from './pages/Result';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/search' component={Seacrh}/>
        <Route path='/game' component={Game}/>
        <Route path='/result' component={Result}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
