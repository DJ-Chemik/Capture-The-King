import React from 'react';
import './App.css';
import InfoPage from './info-pane/InfoPage';
import UserCardsPane from './user-cards-pane/UserCardsPane';
import ResultPane from './result-pane/ResultPane';
import GamePage from './game-pane/GamePage';
import Card from './Card';
import {CardValue} from './PredefinedValues'

function App() {
  return (
    <div className="App">
      <GamePage/>
      <InfoPage/>
      <UserCardsPane/>
      <ResultPane/>
    </div>
  );
}

export default App;
