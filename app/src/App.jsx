import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { observer } from 'mobx-react';
import ErrorIndicator from './Component/Common/ErrorIndicator';
import Preloader from './Component/Common/Preloader';
import HomePage from './Component/Page/HomePage';
import AuthPage from './Component/Page/AuthPage';
import state from './State';
import './app.scss';

const App = observer(function App() {

  const { getSavedUserData, isFetching, isError } = state;

  useEffect(() => {
    getSavedUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return <ErrorIndicator />
  }

  return (
    <Router>
      <div className="app">
        <div className="app__pages">
          <Switch>
            <Route exact path="/auth" render={() => <AuthPage />} />
            <Route exact path="/" render={() => <HomePage />} />
          </Switch>
          {isFetching && <Preloader />}
        </div>
      </div>
    </Router>
  );

});

export default App;
