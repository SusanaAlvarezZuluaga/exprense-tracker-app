import { useNavigate } from 'react-router-dom';
import TransactionForm from '../../components/TransactionForm';

import './styles.css';

function AddTransactionPage(s) {
  const redirect = useNavigate();
  return (
    <div className="AddTransactionPage">
      <div className="header-container">
        <div className="page-title">
          <span
            className="material-icons arrow-icon"
            onClick={() => redirect('/')}
          >
            arrow_back
          </span>
          ADD TRANSACTION
        </div>
      </div>
      <TransactionForm />
    </div>
  );
}
export default AddTransactionPage;
