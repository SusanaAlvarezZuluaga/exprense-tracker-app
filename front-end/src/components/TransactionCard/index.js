import './styles.css';

function TransactionCard({
  type,
  category_icon,
  payment_method,
  category_name,
  amount,
  name,
}) {
  return (
    <div className="transaction-card">
      <div className="transaction-category">
        <span className="material-icons md-24 dark">{category_icon}</span>
        {category_name}
      </div>
      <div className="transaction-info">
        <div className="transaction-name"> {name}</div>
        <div className="transaction-payment-method"> {payment_method} </div>
      </div>
      <div
        className={
          type == 'expense'
            ? 'transaction-amount expense'
            : 'transaction-amount income'
        }
      >
        $ {amount}
      </div>
    </div>
  );
}
export default TransactionCard;
