import axios from "axios";
import Swal from "sweetalert2";

const url = "https://unmarred-coral-theory.glitch.me/";

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

const deleteIncome = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}incomes/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  } catch (err) {
    Swal.fire({
      title: "Delete Error",
      text: err.message,
      icon: "error",
    });
  }
};

const deleteExpense = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${url}expenses/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  } catch (err) {
    Swal.fire({
      title: "Delete Error",
      text: err.message,
      icon: "error",
    });
  }
};

const getIncomeById = async (id, cb) => {
  try {
    const result = await axios.get(`${url}incomes/${id}`);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const editIncome = async (id, amount, name) => {
  try {
    await axios({
      method: "PUT",
      url: `${url}incomes/${id}`,
      data: {
        amount,
        name,
      },

    });
    
    Swal.fire({
      title: "Income Updated",
      text: "Income has been updated",
      icon: "success",
    })
  } catch (err) {
    console.log(err);
  }
};

export {
  getIncomes,
  getExpenses,
  addIncome,
  addExpense,
  deleteIncome,
  deleteExpense,
  getIncomeById,
  editIncome,
};
