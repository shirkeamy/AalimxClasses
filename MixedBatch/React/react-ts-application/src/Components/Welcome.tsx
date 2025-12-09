import React from "react"

interface IWelcomePorps {
    userName: string;
}

const Welcome: React.FC<IWelcomePorps> = ({userName}) => {
    return (
        <>
            <h2>Welcome, {userName}</h2>
        </>
    )
}

export default Welcome;