import { useContext } from 'react';
import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';
import Transaction from '../../components/TransactionCard';
import './styles.css';
function EditPage() {
  const transactionListContext = useContext(TransactionListContext);
  const { transactionList, setTransactionList } = transactionListContext;
  return (
    <div class="page-container">
      <div class="header-container">
        <div class="page-title">EDIT </div>
      </div>
      <div class="content">
        <div class="transactionsHolder">
          <div class="transactionsHolderTitle">
            <div>Transactions</div>
            <div onClick="location.href='addData.html'">
              <span class="material-icons md-24">add_circle_outline</span>
              <div class="transaction-cards-holder"></div>
              {transactionList.map((transaction, index) => (
                <Transaction
                  id={index}
                  type={transaction.type}
                  paymentMethod={transaction.paymentMethod}
                  category={transaction.category}
                  date={transaction.date}
                  category={transaction.category}
                  amount={transaction.amount}
                  name={transaction.name}
                  description={transaction.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditPage;
