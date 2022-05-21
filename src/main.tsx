import { ErrorBoundary } from 'components/ErrorBoundary';
import { store } from 'modules/main/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyles } from 'utils';

import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <Provider store={store}>
    <GlobalStyles />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
);
