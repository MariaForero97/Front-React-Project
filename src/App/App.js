import './App.css';
import { Router } from 'react-router-dom'
import React from 'react';
import { AppProvider } from '../Providers/AppProvider'
import { Solarise } from '../Services/Solarise';
import history from '../history';

function App() {
  return (
    <Router history={history}>
      <AppProvider>
        <Solarise />
      </AppProvider>
    </Router>
  );
}

export default App;
