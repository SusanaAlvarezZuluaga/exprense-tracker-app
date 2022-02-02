import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';

import './styles.css';

function AddTransactionPage(s) {
  const [type, setType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const transactionListContext = useContext(TransactionListContext);
  const { transactionList, setTransactionList } = transactionListContext;
  console.log(transactionListContext);

  const redirect = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    const newTransaction = {
      type: type,
      paymentMethod: paymentMethod,
      category: category,
      date: date,
      category: category,
      amount: amount,
      name: name,
      description: description,
    };
    setTransactionList([...transactionList, newTransaction]);
    redirect('/');
  }

  return (
    <div class="AddTransactionPage">
      <div class="header-container">
        <div class="return-arrow">
          <Link to="/">
            <span class="material-icons md-24">arrow_back</span>
          </Link>
        </div>
        <div class="add-transaction-page-title">ADD TRANSACTION </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="form">
          <div class="labels">
            <div>Type:</div>
            <div>Payment Method:</div>
            <div>Date:</div>
            <div>Category:</div>
            <div>Amount:</div>
            <div>Name:</div>
            <div>Description:</div>
          </div>

          <div class="inputs">
            <div class="transaction-type-buttons">
              <div
                class="transaction-button"
                id="incomeButton"
                onClick={() => {
                  setType('Income');
                }}
              >
                Income
              </div>
              <div
                class="transaction-button"
                id="expenseButton"
                onClick={() => {
                  setType('Expense');
                  console.log('expense');
                }}
              >
                Expense
              </div>
            </div>
            <div class="transaction-payment-method-holder">
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div class="transaction-date-holder">
              <input
                type="date"
                class="date-picker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div class="transaction-category-holder">
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div class="transaction-amount-holder">
              <input
                type="number"
                placeholder="€"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div class="transaction-name-holder">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="transaction-description-holder">
              <input
                type="textarea"
                placeholder="short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="add-button">
          Save
        </button>
      </form>
    </div>
  );
}
export default AddTransactionPage;
