import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HeaderComponent } from '../Components/Header/HeaderComponent';
import LoginComponent from '../Components/Login/LoginComponent';
import history from '../history';
import { ModalComponent } from "../Components/Modal/ModalComponent";
import { AppContext } from '../Providers/AppProvider';

function Solarise() {

  const {
    userLogged,
    openModalInfo,
    setOpenModalInfo,
    modalInfo,
    openModalTitle,
  } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <BrowserRouter history={history}>
        <Switch>
          {(Object.entries(userLogged).length < 1 &&
            < Route exact path="/">
              <Redirect to="/login" />
            </Route>
          )}
          {(Object.entries(userLogged).length > 2 &&
            < Route exact path="/">
              <Redirect to="/inicio" />
            </Route>
          )}

          <Route exact path="/login"  >
            <LoginComponent />
          </Route>

          {(Object.entries(userLogged).length > 2 &&
            <Route exact path="/inicio"  >
              <HeaderComponent />
            </Route>
          )}
        </Switch>
      </BrowserRouter>

      {
        !!openModalInfo && (
          <ModalComponent
            title={openModalTitle}
            show={openModalInfo}
            modalinfo={modalInfo}
            onHide={() => setOpenModalInfo(false)}
          />
        )
      }
    </React.Fragment >
  );
}

export { Solarise }