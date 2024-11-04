import React from "react";
import { Link } from "react-router-dom";

const people = [
  {
    id: 1,
    name: "Adnan",
  },
  {
    id: 2,
    name: "Firman",
  },
  {
    id: 3,
    name: "Kivlan",
  },
  {
    id: 4,
    name: "Oscar",
  },
  {
    id: 5,
    name: "Rachma",
  },
  {
    id: 6,
    name: "Fauzan",
  },
];

function About() {
  return (
    <>
      <div>
        <h3>About</h3>
        <p>This is a About page</p>
        <h5>Our Team:</h5>
        <ul>
          {people.map((person) => {
            return (
              <li key={person.id}>
                <Link to={`/people/${person.id}`}>{person.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default About;
