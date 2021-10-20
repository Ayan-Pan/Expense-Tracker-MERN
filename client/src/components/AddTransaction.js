import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { transactions, addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    // e.preventDefault();

    let newTransaction = {
      id: transactions.length + 1,
      text,
      amount: +amount, // parseInt(amount)
    };
    
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
