import React, { useState, useCallback } from "react";
import Operations from "../components/Operations";

const UseCallBackHook: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [operation, setOperation] = useState<string[]>([])

    const doOperation = useCallback(() => {
        setOperation((rest) => [...rest, 'new operation'])
    }, [operation])

    return (
        <>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusantium labore possimus.
            </p>

            <Operations operations={operation} onOperationClick={doOperation} />
            <h3>count: {count}</h3>
            <input type="button" value="Add" onClick={() => { setCount(count + 1) }} />

        </>
    )
}

export default UseCallBackHook;