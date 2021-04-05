import React from 'react';
import Game from './Component/Game';
import GameOverPage from './Component/GameOverPage';
import { useStore } from './context';
import './App.scss';

function App() {
  const { state: { health, minValueIndicator } } = useStore();

  if (health === minValueIndicator) {
    return <GameOverPage />
  }

  return (
    <>
      <Game />
    </>
  );
}

export default App;
