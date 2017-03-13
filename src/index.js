/**
 * Index
 * 
 * Root element, hooks React to DOM.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './components/AppRoutes';

import './css/index.css';

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('root')
);
