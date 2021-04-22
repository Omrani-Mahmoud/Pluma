import React from 'react';
import { Router, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from './Views/Login/SignIn';
import {
  RecoilRoot,
} from 'recoil';
import Home from './Views/Home/Home';
import ProtectedRoute from './ProtectedRoute'
import Mobile from './Views/Mobile';
const history = createBrowserHistory();

function App() {
  const [isMobile, setisMobile] = React.useState(false);

  const detectMob = () => {
    if ((window.innerWidth <= 1080) && (window.innerHeight <= 2400))
      setisMobile(true);
  }

  React.useEffect(() => {
    detectMob()

  }, [])
  return (

    <>
      {
        isMobile ?
          <Mobile />
          :
          (
    <BrowserRouter>
      <RecoilRoot>
          <Router  history={history}>
              <Switch >
                <Route component={SignIn} exact path='/'/> 
                <ProtectedRoute  component={Home}  path='/home' />

                {/* <Route component={Home}  path='/home'/> */}
                

                  {/* <ProtectedRoute  component={Dashboard}  path='/home' /> */}
               </Switch>
          </Router>
      </RecoilRoot>
    </BrowserRouter>
          )
}
          </>
  );
}

export default App;
