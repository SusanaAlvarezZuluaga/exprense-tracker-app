import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TransactionListContextProvider from './contexts/TransactionList/TransactionListContextProvider';
import './index.css';
ReactDOM.render(
  <BrowserRouter>
    <TransactionListContextProvider>
      <App />
    </TransactionListContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
