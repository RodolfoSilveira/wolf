import './config/ReactotronConfig';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import history from './services/history';
import Routes from './routes';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
