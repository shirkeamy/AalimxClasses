import React, { useContext } from "react";
import { data, address } from "../Pages/Home";

const ComponentC: React.FC = () =>{
    const userName = useContext(data);
    const userAddress = useContext(address);
    return (
        <>
            <h1>This is component C</h1>
            <p>User Name from Context hook: {userName}</p>
            <p>Address from Context hook: {userAddress}</p>
            {/* <data.Consumer>
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
            </data.Consumer> */}
        </>
    )
}

export default ComponentC;