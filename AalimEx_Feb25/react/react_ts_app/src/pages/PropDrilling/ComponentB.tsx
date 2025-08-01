import React from "react";
import ComponentC from "./ComponentC";


interface IComponentBProps {
    Count: number;
}


const ComponentB: React.FC<IComponentBProps> = (props: IComponentBProps) => {
    const { Count }: IComponentBProps = props;
    return (
        <>
            <h2>
                Component B
            </h2>
            <ComponentC Count={Count} />
        </>
    )
}

export default ComponentB;
