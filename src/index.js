import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { store } from './store';
import { apiSlice } from './store/feature/api/apiSlice';
import ErrorBoundary from './pages/ErrorBoundry';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <ErrorBoundary>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
    </ApiProvider>
  </ErrorBoundary>
);
