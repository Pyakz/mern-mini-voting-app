import React, { useEffect } from 'react';
import HomePage from './components/containers/Home';
import LoginPage from './components/containers/Login';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';
import { useSelector }from 'react-redux';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth.isLoggedIn)
  return (
    <div className="App">
      <Switch >
        <PrivateRoute  exact path='/' component={HomePage} />
        <Route exact path ='/auth' component={LoginPage} />
        <Route exact path ='*' render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
