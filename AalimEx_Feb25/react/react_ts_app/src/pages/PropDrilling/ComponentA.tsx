import React from "react";
import ComponentB from "./ComponentB";

interface IComponentAProps {
    Count: number;
}

const ComponentA: React.FC<IComponentAProps> = (props: IComponentAProps) => {

    const { Count }: IComponentAProps = props;

    return (
        <>
            <h2>
                Component A
            </h2>
            <ComponentB Count={Count}  />
        </>
    )
}

export default ComponentA;
