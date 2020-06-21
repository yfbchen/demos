import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/demos" component={DemoPage} />
        <Route path="/demos/calculator" component={Calculator} />
      </Switch>
    </div>
  );
};

export default App;
