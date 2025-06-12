import { useState, useEffect } from "react";

const Home: React.FC = () => {

  // let count = 0;
  const [count, setCount] = useState<number>(0);
  const [count1, setCount1] = useState<number>(0);

  useEffect(() => {
    console.log("UseEffect called without dependancies");
  })

  useEffect(() => {
    console.log("UseEffect called with dependancies for first time only");
  }, [])

  useEffect(() => {
    console.log("UseEffect called with dependancies for every change in count", count * 2);

  }, [count1])


  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <h2>Counter: {count}</h2>
      <input
        type="button"
        value="Add"
        className="btn btn-primary btn-sm m-3"
        onClick={() => { setCount(count + 1) }}
      />
      <input
        type="button"
        value="Add 1"
        className="btn btn-primary btn-sm m-3"
        onClick={() => { setCount1(count1 + 1) }}
      />
    </div>
  );
}

export default Home;