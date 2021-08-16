import Admin from 'components/Admin';
import { NotFound, PrivateRoute } from 'components/Common';
import Login from 'features/auth/pages/Login';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
