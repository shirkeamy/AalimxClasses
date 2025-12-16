import React from "react";

interface ComponentCProps {
    userName: string;
}

const ComponentC: React.FC<ComponentCProps> = (props: ComponentCProps) =>{
    const { userName } = props;
    return (
        <>
            <h1>This is component C</h1>
            <p>Welcome, {userName}!</p>
        </>
    )
}

export default ComponentC;