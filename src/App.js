import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/demos" component={DemoPage} />
      </Switch>
    </div>
  );
};

export default App;
