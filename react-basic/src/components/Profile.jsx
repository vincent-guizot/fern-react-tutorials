import React from "react";
import './Profile.css';

function Profile(props) {
  const {name, hobby} = props; // destructuring
  return (
    <div>
      <h3>Halo, {name}</h3>
      <p>My Hobby is {hobby}</p>
    </div>
  );
}

export default Profile;
