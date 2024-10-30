import { useState } from "react";
import "./App.css";
// import Profile from "./components/Profile";
import EventClick from "./components/EventClick"

function App() {
  // const [profiles, setProfiles] = useState([
  //   {
  //     id: 1,
  //     name: "Vincent",
  //     hobby: "Coding",
  //   },
  //   {
  //     id: 2,
  //     name: "Fauzan",
  //     hobby: "Gaming",
  //   },
  //   {
  //     id: 3,
  //     name: "Oscar",
  //     hobby: "Designing",
  //   },
  //   {
  //     id: 4,
  //     name: "Admin",
  //     hobby: "Change Data",
  //   },
  //   {
  //     id: 5,
  //     name: "Tes",
  //     hobby: "Testing",
  //   },
  // ]);

  return (
    <>
      <div>
        <h1>React Tutorial</h1>
        <hr />
        
        {/* 
        React Component, Props, Conditional Rendering
        {profiles.length > 0 ? (
          profiles.map((profile) => {
            const { id, name, hobby } = profile;
            return <Profile key={id} name={name} hobby={hobby}></Profile>;
          })
        ) : (
          <h1>Loading Data</h1>
        )} */}
        <EventClick></EventClick>
      </div>
    </>
  );
}

export default App;
