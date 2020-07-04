import React from 'react';
import './App.css';
import InfoPage from './info-pane/InfoPage';
import UserCardsPane from './user-cards-pane/UserCardsPane';
import ResultPane from './result-pane/ResultPane';
import GamePage from './game-pane/GamePage';

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
