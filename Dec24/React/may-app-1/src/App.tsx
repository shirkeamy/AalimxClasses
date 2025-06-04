import React, { useEffect } from 'react';

function App() {

  const userName: string = "John";
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h1 key={"welcome-msg"} className='text-success'>
        Welcome, {userName}
      </h1>
      <ul key={"numbers"}>
        {
          numbers.map((num: number, index: number) => {
            return (
              <li key={`number-${index}`}>{num}</li>
            )
          })
        }
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum modi, pariatur totam id eius beatae facilis eligendi blanditiis tempora adipisci enim consectetur maxime doloremque dolor nobis commodi accusantium quaerat?
      </p>
    </>
  );
}

export default App;
