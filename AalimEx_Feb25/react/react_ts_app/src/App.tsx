import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let userName: string = "Peter";
  let users: string[] = ["Peter", "Sam", "John", "Dan", "Berray"]
  return (
    <>
      <div className="App">
        <h1 className='text-danger'>Welcome, {userName}</h1>
        <ul key={"user-list"}>
          {
            users.map((user: string, index: number) => {
              return (
                <li key={`user-list-item-${index}`}>{user}</li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <h1>Second Div</h1>
      </div>
    </>
  );
}

export default App;
