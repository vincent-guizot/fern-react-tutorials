import React, { useState, useEffect } from "react";
// React Icons
import { AiFillFire } from "react-icons/ai";

function BasicHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Use Effect jalan ketika component di execute");
  }, []); // akan di jalankan sekali

  useEffect(() => {
    console.log("Jalan ketika state count ada perubahan");
  }, [count]); // akan dijalan ketika state count ada perubahan

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="container">
        <h1>
          <AiFillFire className="me-2"></AiFillFire>
          React Tutorials
        </h1>
        <button onClick={clickHandler} className="btn btn-sm btn-success">
          Click Me
        </button>
      </div>
    </>
  );
}

export default BasicHooks;
