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
    <div className="home" style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a generic demo application built with React and TypeScript. It demonstrates basic state management, effects, and UI components. Feel free to explore and modify the code to learn more about React!</p>
      <section style={{ marginTop: "1.5rem" }}>
        <h2>Counter Example</h2>
        <p>Below are two independent counters to demonstrate useState and useEffect hooks:</p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <h3>Counter A: {count}</h3>
            <button className="btn btn-primary btn-sm m-1" onClick={() => setCount(count + 1)}>Add</button>
            <button className="btn btn-secondary btn-sm m-1" onClick={() => setCount(count - 1)} disabled={count === 0}>Subtract</button>
          </div>
          <div>
            <h3>Counter B: {count1}</h3>
            <button className="btn btn-primary btn-sm m-1" onClick={() => setCount1(count1 + 1)}>Add 1</button>
            <button className="btn btn-secondary btn-sm m-1" onClick={() => setCount1(count1 - 1)} disabled={count1 === 0}>Subtract 1</button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>About This Page</h2>
        <ul>
          <li>Demonstrates useState and useEffect hooks</li>
          <li>Shows how to manage multiple pieces of state</li>
          <li>Provides a simple, interactive UI for experimentation</li>
          <li>Intended for learning and demonstration only</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;