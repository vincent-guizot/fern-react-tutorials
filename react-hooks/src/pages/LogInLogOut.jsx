import React, { useState, useEffect } from "react";

function LogInLogOut() {
  const [logIn, setLogIn] = useState(false);

  const logInHandler = () => {
    console.log("User Logged In");
    localStorage.setItem("access_key","username")
    setLogIn(true);
  };

  const logOutHandler = () => {
    console.log("User Logged Out");
    localStorage.clear()
    setLogIn(false);
  }

  useEffect(() => {
    if(localStorage.getItem("access_key")){
        setLogIn(true);
    }
  })

  return (
    <>
      <div className="container">
        <h3>User Status {JSON.stringify(logIn)}</h3>
        {logIn ? (
          <button onClick={logOutHandler} className="btn btn-sm btn-danger">
            Log Out
          </button>
        ) : (
          <button onClick={logInHandler} className="btn btn-sm btn-primary">
            Log In
          </button>
        )}
      </div>
    </>
  );
}

export default LogInLogOut;
