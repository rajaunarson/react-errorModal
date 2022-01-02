import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allreducer from './reducers';
import { Provider } from 'react-redux';
//import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(allreducer);

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
