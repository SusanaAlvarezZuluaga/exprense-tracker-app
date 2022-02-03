import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import CategoryCardHolder from '../../components/CategoryCardHolder';
import TransactionCard from '../../components/TransactionCard';
import NavBar from '../../components/NavBar';

import './styles.css';
function EditPage() {
  const [transactionList, setTransactionList] = useState([]);

  axios.defaults.withCredentials = true;
  async function getTransactions() {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/transactions'
      );
      console.log(response.data);
      setTransactionList(response.data);
    } catch (err) {
      console.log('err');
    }
  }
  useEffect(() => getTransactions(), []);
  return (
    <div className="edit-page">
      <div className="header-container">
        <div className="page-title">EDIT</div>
      </div>

      <div className="small-container">
        <div className="small-container-title">Categories</div>
        <div className="small-container-info-holder">
          <CategoryCardHolder />
        </div>
      </div>

      <div className="small-container">
        <div className="small-container-title">
          Transactions
          <span className="material-icons md-24">add_circle_outline</span>
        </div>
        <div className="small-container-info-holder">
          <div className="transactions-holder">
            {transactionList.map((transaction) => (
              <TransactionCard key={transaction.id} {...transaction} />
            ))}
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
export default EditPage;
