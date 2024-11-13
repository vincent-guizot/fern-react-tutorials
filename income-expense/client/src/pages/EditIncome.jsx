import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

import { getIncomeById, editIncome } from "../axios";

function EditIncome() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  const submitHandler = () => {
    editIncome(id, amount, name);
    navigate("/")
  };

  useEffect(() => {
    // console.log(id);
    getIncomeById(id, (data) => {
      setAmount(data.amount);
      setName(data.name);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto text-center">
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
              <button
                onClick={submitHandler}
                className="btn btn-outline-success w-100"
              >
                + Edit Income
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditIncome;
