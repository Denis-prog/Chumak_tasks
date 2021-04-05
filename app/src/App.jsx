import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import HistoryPage from './Component/HistoryPage';
import GameOverPage from './Component/GameOverPage';
import { useStore } from './context';
import { counterRepeatAC } from './store/actionCreators';
import './App.scss';

function App() {
  const { dispatch, state: { health, minValueIndicator } } = useStore();
  let timer = null;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(123);
      dispatch(counterRepeatAC());
    }, 1000);
    return () => {
      console.log(12121212);
      clearInterval(timer);
    };
  }, [dispatch]);

  if (health === minValueIndicator) {
    return <GameOverPage />
  }

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/history" exact component={HistoryPage} />
    </>
  );
}

export default App;
