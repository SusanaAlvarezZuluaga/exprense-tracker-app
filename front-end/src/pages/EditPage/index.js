import { useContext } from 'react';

import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';
import CategoryCardHolder from '../../components/CategoryCardHolder';
import TransactionCard from '../../components/TransactionCard';
import NavBar from '../../components/NavBar';

import './styles.css';

function EditPage() {
  const transactionListContext = useContext(TransactionListContext);
  const { transactionList, setTransactionList } = transactionListContext;

  return (
    <div class="edit-page">
      <div class="header-container">
        <div class="page-title">EDIT</div>
      </div>

      <div class="small-container">
        <div class="small-container-title">Categories</div>
        <div class="small-container-info-holder">
          <CategoryCardHolder />
        </div>
      </div>

      <div class="small-container">
        <div class="small-container-title">
          Transactions
          <span class="material-icons md-24">add_circle_outline</span>
        </div>
        <div class="small-container-info-holder">
          <div className="transactions-holder">
            {transactionList.map((transaction) => (
              <TransactionCard {...transaction} />
            ))}
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
export default EditPage;
