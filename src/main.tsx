import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'utils';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
