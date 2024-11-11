import axios from "axios";
import Swal from "sweetalert2";

const url = "http://localhost:3000/";

const getIncomes = async (cb) => {
  try {
    const results = await axios({
      method: "GET",
      url: url + "incomes",
    });

    cb(results.data);
    //   console.log(results.data);
  } catch (err) {
    console.log(err);
  }
};

const getExpenses = async (cb) => {
  try {
    const results = await axios({
      method: "GET",
      url: url + "expenses",
    });

    cb(results.data);
    //   console.log(results.data);
  } catch (err) {
    console.log(err);
  }
};

const addIncome = async (income, cb) => {
  const { amount, name } = income;
  try {
    const result = await axios({
      method: "POST",
      url: url + "incomes",
      data: {
        amount,
        name,
      },
    });
    //   console.log(result);
    getIncomes(cb);
    Swal.fire({
      title: "Income added",
      text: "An Income has been added to your trackers",
      icon: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

const addExpense = async (expense, cb) => {
  try {
    const { amount, name } = expense;
    const result = await axios({
      method: "POST",
      url: url + "expenses",
      data: {
        amount,
        name,
      },
    });
    //   console.log(result);
    getExpenses(cb);
    Swal.fire({
      title: "Expense added",
      text: "An Expense has been added to your trackers",
      icon: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

export { getIncomes, getExpenses, addIncome, addExpense };
