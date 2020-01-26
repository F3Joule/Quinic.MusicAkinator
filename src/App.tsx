import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Result from './pages/Result';
import ResultGame from './pages/ResultGame';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Result} />
          <Route path='/game' component={ResultGame} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
