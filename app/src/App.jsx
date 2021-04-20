import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from './Component/HomePage';
import AuthPage from './Component/AuthPage';
import './app.scss';
import state from './State';

const App = function App() {

  const { getAuthUserData } = state;

  useEffect(() => {
    getAuthUserData();
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="app__pages">
          <Route exact path="/auth" render={() => <AuthPage />} />
          <Route exact path="/" render={() => <HomePage />} />
        </div>
      </div>
    </Router>
  );

};

export default App;
