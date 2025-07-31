import React, { useState } from "react";

const LandingPage: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Create state
    // count = 123;
    // setCount(123)
    return (
        <>

            <div className="row">
                <div className="col-12 text-center">
                    <h1>Welcome to React</h1>\
                    <h3>Count is {count}</h3>
                    <button type="button" onClick={() => { setCount(count + 1) }}>Increment</button>
                </div>
            </div>

        </>
    )
}

export default LandingPage;