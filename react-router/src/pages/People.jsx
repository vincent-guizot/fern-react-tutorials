import React from "react";
import { useParams } from "react-router-dom";

function People() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h3>People</h3>
        <p>This is a People page</p>
        <p>This person id is {id}</p>
      </div>
    </>
  );
}

export default People;
