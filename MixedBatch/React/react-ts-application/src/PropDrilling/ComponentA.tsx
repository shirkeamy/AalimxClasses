import React from "react";
import ComponentB from "./ComponentB";

interface ComponentAProps {
    userName: string;
}

const ComponentA: React.FC<ComponentAProps> = (props: ComponentAProps) =>{
    const { userName } = props;
    return (
        <>
            <ComponentB userName={userName} />
        </>
    )
}

export default ComponentA;