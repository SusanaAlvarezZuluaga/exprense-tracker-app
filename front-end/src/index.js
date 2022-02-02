import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TransactionListContextProvider from './contexts/TransactionList/TransactionListContextProvider';
import CategoryListContextProvider from './contexts/CategoryList/CategoryListContextProvider';
import './index.css';
ReactDOM.render(
  <BrowserRouter>
    <CategoryListContextProvider>
      <TransactionListContextProvider>
        <App />
      </TransactionListContextProvider>
    </CategoryListContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
