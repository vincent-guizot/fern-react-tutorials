import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

function CRD() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Belajar react basic",
      status: true,
    },
  ]);

  const [task, setTask] = useState("");

  const submitHandler = () => {
    let id = todos[todos.length - 1].id + 1;
    let status = false;
    let newTodo = {
      id,
      task,
      status,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteHandler = (id) => {
    let tempTodos = [...todos];
    tempTodos = tempTodos.filter((todo) => todo.id !== id);
    setTodos(tempTodos);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>CREATE READ DELETE</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <h3>Todos</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.length > 0 ? (
                  todos.map((todo) => {
                    const { id, task, status } = todo;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{task}</td>
                        <td>{status ? "Done" : "In Progress"}</td>
                        <th>
                          <button
                            onClick={() => deleteHandler(id)}
                            className="btn btn-sm btn-danger"
                          >
                            <AiOutlineDelete className="me-2"></AiOutlineDelete>
                            Delete
                          </button>
                        </th>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Tidak ada tasks</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h3>Form</h3>
            <div className="mb-3">
              <label className="form-label">Task</label>
              <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input your task"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={submitHandler}
                type="submit"
                className="btn w-100 btn-success"
              >
                Submit task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CRD;
