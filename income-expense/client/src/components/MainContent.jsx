import React, { useState, useEffect } from "react";

import TableData from "./TableData";

// Axios
import { getIncomes, getExpenses, addIncome, addExpense } from "../axios";

function MainContent() {
  // State for form
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  // State for get data
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const submitHandler = () => {
    const temp = {
      amount: Number(amount),
      name,
    };
    switch (type) {
      case "income":
        addIncome(temp, (data) => setIncomes(data));
        break;
      case "expense":
        addExpense(temp, (data) => setExpenses(data));
        break;
    }
    console.log({ amount, name, type });
  };

  useEffect(() => {
    getIncomes((data) => setIncomes(data));
    getExpenses((data) => setExpenses(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col-6 mx-auto text-center">
          <h3>Income Expense Tracker</h3>
          <hr />
          <div className="mb-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type="number"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <select
              className="form-select form-select-sm"
              onChange={(e) => setType(e.currentTarget.value)}
              value={type}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="mb-3">
            <button
              onClick={submitHandler}
              className="btn btn-outline-success w-100"
            >
              + Add Data
            </button>
          </div>
          <div className="row">
            <div className="col">
              <h5>Incomes</h5>
              <hr />
              <TableData data={incomes}></TableData>
            </div>
            <div className="col">
              <h5>Expenses</h5>
              <hr />
              <TableData data={expenses}></TableData>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;