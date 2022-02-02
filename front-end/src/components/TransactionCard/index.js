import './styles.css';
function TransactionCard(props) {
  const { type, paymentMethod, category, amount, name } = props;
  return (
    <div class="transaction-card">
      <div class="transaction-category">
        {category}
        {/* <span class="material-icons md-24 dark">local_grocery_store</span> */}
      </div>
      <div class="transaction-info">
        <div class="transaction-name"> {name}</div>
        <div class="transaction-payment-method"> {paymentMethod} </div>
      </div>
      <div class="transaction-amount-expense">$ {amount}</div>
    </div>
  );
}
export default TransactionCard;
