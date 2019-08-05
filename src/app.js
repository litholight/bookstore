import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../src/routers/AppRouter';
import { Provider } from 'react-redux';
import store from '../src/config/store';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appStore = <Provider store={store}>
  <AppRouter />
</Provider>

ReactDOM.render(appStore, document.getElementById('app'));