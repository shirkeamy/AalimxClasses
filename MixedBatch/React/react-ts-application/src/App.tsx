import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let username: string = "Guest";

  return (
    <>
      <div className="App">
        <h1>{username}</h1>
        <p>
          {
            5 + 6
          }
        </p>
      </div>
      <div className="App-header">
        Lorem ipsum dolor sit amet.
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore cumque obcaecati et ut, vero nulla earum doloribus nam magni enim ea? Sint delectus reprehenderit dignissimos recusandae facere eligendi odit!
      </p>
      <h1>
        End of the content
      </h1>
    </>
  );
}

export default App;
