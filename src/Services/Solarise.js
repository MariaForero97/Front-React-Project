import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HeaderComponent } from '../Components/Header/HeaderComponent';
import LoginComponent from '../Components/Login/LoginComponent';
import { LoginProvider } from '../Providers/LoginProvider';
import history from '../history';

function Solarise() {
  /*  const {

    } = React.useContext()*/

  return (
    <React.Fragment>

      <HeaderComponent />

      <BrowserRouter history={history}>
        < Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Switch>
          <Route exact path="/login"  > <LoginComponent /></Route>


        </Switch>
      </BrowserRouter>
    </React.Fragment >
  );
}

export { Solarise }