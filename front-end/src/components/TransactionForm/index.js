import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';
import CategoryPicker from '../CategoryPicker';
import './styles.css';

function TransactionForm() {
  const [type, setType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showCategories, setShowCategorories] = useState(false);

  const transactionListContext = useContext(TransactionListContext);
  const { transactionList, setTransactionList } = transactionListContext;

  const redirect = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
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
    console.log(newTransaction);
    setTransactionList([...transactionList, newTransaction]);
    redirect('/edit');
  }
  return (
    <>
      <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-info">
          <div className="labels">
            <div className="label">Type:</div>
            <div className="label">Payment Method:</div>
            <div className="label">Date:</div>
            <div className="label">Category:</div>
            <div className="label">Amount:</div>
            <div className="label">Name:</div>
            <div className="label">Description:</div>
          </div>

          <div className="inputs">
            <div className="transaction-type-buttons">
              <div
                className={
                  type === 'income'
                    ? 'transaction-button selected-button'
                    : 'transaction-button'
                }
                id="incomeButton"
                onClick={() => {
                  setType('income');
                }}
              >
                Income
              </div>
              <div
                className={
                  type === 'expense'
                    ? 'transaction-button selected-button'
                    : 'transaction-button'
                }
                id="expenseButton"
                onClick={() => {
                  setType('expense');
                }}
              >
                Expense
              </div>
            </div>

            <select
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="cash">Cash</option>
              <option value="other">other</option>
            </select>

            <input
              type="date"
              className="date-picker"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            {category === '' ? (
              <div
                className="transaction-button"
                id="expenseButton"
                onClick={() => setShowCategorories(!showCategories)}
              >
                Select a Category
              </div>
            ) : (
              <div>
                <span
                  class="material-icons"
                  onClick={() => setShowCategorories(!showCategories)}
                >
                  edit
                </span>
                {category}
              </div>
            )}

            <input
              type="number"
              placeholder="€"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              type="textarea"
              placeholder="short description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          Save
        </button>
      </form>

      {showCategories ? (
        <CategoryPicker
          setCategory={setCategory}
          setShowCategorories={setShowCategorories}
        />
      ) : null}
    </>
  );
}
export default TransactionForm;
