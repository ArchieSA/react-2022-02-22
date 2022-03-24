import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import { App } from './components/app';

import { restaurants } from "./fixtures"

import {store} from './modules'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App restaurants={restaurants} />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
