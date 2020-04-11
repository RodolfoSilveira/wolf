import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import history from './services/history';
import Routes from './routes';

const App: React.FC = () => (
  <Router history={history}>
    <GlobalStyles />
    <ToastContainer />
    <Routes />
  </Router>
);

export default App;
