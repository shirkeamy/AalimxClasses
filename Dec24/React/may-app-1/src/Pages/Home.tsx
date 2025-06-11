import { useState } from "react";

const Home: React.FC = () => {

  // let count = 0;
  const [count, setCount] = useState<number>(0);

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <h2>Counter: {count}</h2>
      <input
        type="button"
        value="Add"
        className="btn btn-primary btn-sm"
        onClick={() => { setCount(count + 1) }}
      />
    </div>
  );
}

export default Home;