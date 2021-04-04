import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import HistoryList from './Component/HistoryPage';
import './App.scss';
import { useStore } from './context';
import { counterRepeatAC } from './store/actionCreators';

function App() {
  const { dispatch } = useStore();
  
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(counterRepeatAC());
    }, 1000);
    return () => {
      console.log(12121212);
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/history" exact component={HistoryList} />
    </>
  );
}

export default App;
