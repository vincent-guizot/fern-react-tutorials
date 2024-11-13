import React from "react";

import {Link} from "react-router-dom"

import { deleteIncome, } from "../axios";

function TableData(props) {
  const { data } = props;

  const deleteHandlerIncome = (id) => {
    deleteIncome(id);
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
                    onClick={() => deleteHandlerIncome(id)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/editIncome/${id}`}
                    className="btn btn-secondary me-2"
                  >
                    Edit
                  </Link>
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
