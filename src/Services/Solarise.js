import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { HeaderComponent } from '../Components/Header/HeaderComponent';
import LoginComponent from '../Components/Login/LoginComponent';
import history from '../history';
import { ModalComponent } from "../Components/Modal/ModalComponent";
import { AppContext } from '../Providers/AppProvider';
import { ProvidersComponent } from '../Components/Views/Providers/ProvidersComponent';
import { SupplierProvider } from '../Providers/SupplierProvider';

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
        {((userLogged).length < 1 &&
            < Route exact path="/">
              <Redirect to="/login" />
            </Route>
          )}
          
            < Route exact path="/">
              <Redirect to="/inicio" />
            </Route>
          

          <Route exact path="/login"  >
            <LoginComponent />
          </Route>

          
            <Route exact path="/inicio"  >
              <SupplierProvider>
                <ProvidersComponent />
              </SupplierProvider>
              
            </Route>
          
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