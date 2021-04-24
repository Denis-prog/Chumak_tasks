import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { observer } from 'mobx-react';
import ErrorIndicator from './Component/Common/ErrorIndicator';
import Preloader from './Component/Common/Preloader';
import HomePage from './Component/HomePage';
import AuthPage from './Component/AuthPage';
import state from './State';
import './app.scss';


const App = observer(function App() {

  const { getSavedUserData, isFetching, isError } = state;

  useEffect(() => {
    getSavedUserData();
  }, []);

  if (isError) {
    return <ErrorIndicator />
  }

  return (
    <Router>
      <div className="app">
        <div className="app__pages">
          <Route exact path="/auth" render={() => <AuthPage />} />
          <Route exact path="/" render={() => <HomePage />} />
          {isFetching && <Preloader />}
        </div>
      </div>
    </Router>
  );

});

export default App;
