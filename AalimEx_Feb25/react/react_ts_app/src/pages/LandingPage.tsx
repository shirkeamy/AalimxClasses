import React, { createContext, useState } from "react";
import ComponentA from "./PropDrilling/ComponentA";

export const data = createContext("") // 1. Create context
export const data1 = createContext("") // 1. Create context

const LandingPage: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Create state
    const [useName, setUserName] = useState<string>("Amol"); // Create state
    // count = 123;
    // setCount(123)
    return (
        <>

            <div className="row">
                <div className="col-12 text-center">
                    <h1>Welcome to React</h1>\
                    <h3>Count is {count}</h3>
                    <data.Provider value={useName} > // 2. Provider
                        <data1.Provider value="Pune" > // 2. Provider
                            <ComponentA Count={count} />
                        </data1.Provider>
                    </data.Provider>
                    <button type="button" onClick={() => { setCount(count + 1) }}>Increment</button>
                </div>
            </div>

        </>
    )
}

export default LandingPage;