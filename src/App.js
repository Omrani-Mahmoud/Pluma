import React from 'react';
import { Router, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from './Views/Login/SignIn';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
          <Router  history={history}>
          <Switch >
          <Route component={SignIn} exact path='/'/> 
          {/* <Route component={Home}  path='/home'/> */}
          {/* <ProtectedRoute  component={Home}  path='/home' /> */}

            {/* <ProtectedRoute  component={Dashboard}  path='/home' /> */}
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
