import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import AppShell from './AppShell';

import './main.css';

ReactDOM.render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
  document.getElementById('app-root')
);
