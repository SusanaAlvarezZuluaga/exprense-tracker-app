import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionListContext from '../../contexts/TransactionList/TransactionListContext';
import CategoryPicker from '../CategoryPicker';
import './styles.css';
import axios from 'axios';
function TransactionForm() {
  const [type, setType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showCategories, setShowCategorories] = useState(false);

  const redirect = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      type: type,
      payment_method: paymentMethod,
      category_id: categoryId,
      date: date,
      amount: amount,
      name: name,
      description: description,
    };
    const response = await axios.post(
      'http://localhost:4000/api/transactions',
      newTransaction
    );
    console.log(response);
    //setTransactionList([...transactionList, newTransaction]);
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
            {!categoryId ? (
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
                {categoryId}
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
          setCategoryId={setCategoryId}
          setShowCategorories={setShowCategorories}
        />
      ) : null}
    </>
  );
}
export default TransactionForm;
