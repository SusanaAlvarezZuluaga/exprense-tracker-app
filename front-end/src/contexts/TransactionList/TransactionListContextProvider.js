import TransactionListContext from './TransactionListContext';
import { useState } from 'react';
function TransactionListContextProvider(props) {
  const [transactionList, setTransactionList] = useState([]);
  return (
    <TransactionListContext.Provider
      value={{
        transactionList: transactionList,
        setTransactionList: setTransactionList,
      }}
    >
      {props.children}
    </TransactionListContext.Provider>
  );
}
export default TransactionListContextProvider;
