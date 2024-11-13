import React from "react";

import { deleteExpense } from "../axios";

function TableData(props) {
  const { data } = props;

  const deleteHandlerExpense = (id) => {
    deleteExpense(id);
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tracker) => {
            const { id, amount, name } = tracker;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>Rp. {amount}</td>
                <td>{name}</td>
                <td>
                  <button
                    onClick={() => deleteHandlerExpense(id)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>
                  <button className="btn btn-secondary me-2">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
