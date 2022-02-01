import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
// We include PersistGate as part of the procss top persist state to browser storage
//We also wrap our app in PersisteGate like seen below, wewill specify one paramtr and that is the persistor we wrote into our redux store component
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

ReactDOM.render(
  // We add the store to our provider here
  <Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
