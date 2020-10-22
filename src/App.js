import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';

const BeveragesPage = () => (
  <div>
    <h1>
      Cafe Page
    </h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/beverages' component={BeveragesPage} />
    </div>
  );
}

export default App;
