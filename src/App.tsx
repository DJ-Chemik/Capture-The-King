import React from 'react';
import './App.css';
import InfoPane from './info-pane/InfoPane';
import UserCardsPane from './user-cards-pane/UserCardsPane';
import ResultPane from './result-pane/ResultPane';
import GamePane from './game-pane/GamePane';
import { AppWrapper } from './StyledComponents';

function App() {
  return (
    <AppWrapper>
      <GamePane/>
      <InfoPane/>
      <UserCardsPane/>
      <ResultPane/>
    </AppWrapper>
  );
}

export default App;
