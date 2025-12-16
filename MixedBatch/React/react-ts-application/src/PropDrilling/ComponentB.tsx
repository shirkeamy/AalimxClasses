import React from "react";
import ComponentC from "./ComponentC";

interface ComponentBProps {
    userName: string;
}

const ComponentB: React.FC<ComponentBProps> = (props: ComponentBProps) =>{
    const { userName } = props;
    return (
        <>
            <ComponentC userName={userName} />
        </>
    )
}

export default ComponentB;