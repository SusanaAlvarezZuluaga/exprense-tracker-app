import './styles.css';

function TransactionCard({ type, paymentMethod, category, amount, name }) {
  return (
    <div className="transaction-card">
      <div className="transaction-category">
        {category}
        {/* <span className="material-icons md-24 dark">local_grocery_store</span> */}
      </div>
      <div className="transaction-info">
        <div className="transaction-name"> {name}</div>
        <div className="transaction-payment-method"> {paymentMethod} </div>
      </div>
      <div className="transaction-amount-expense">$ {amount}</div>
    </div>
  );
}
export default TransactionCard;
