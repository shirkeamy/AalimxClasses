import React from "react";
import { data, address } from "../Pages/Home";

const ComponentC: React.FC = () =>{
    
    return (
        <>
            <h1>This is component C</h1>
            <data.Consumer>
                {
                    (user) => {
                        return (
                            <address.Consumer>
                                {
                                    (Addr) => {
                                        return (
                                            <>
                                                <p>User Name from Context: {user}</p>
                                                <p>Address from Context: {Addr}</p>
                                            </>
                                        )
                                    }
                                }
                            </address.Consumer>
                        )
                    }
                }
            </data.Consumer>
        </>
    )
}

export default ComponentC;