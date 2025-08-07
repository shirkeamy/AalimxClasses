import React, { memo } from "react";

interface IOperationsProps {
    operations: string[];
    onOperationClick: () => void;
}
const Operations: React.FC<IOperationsProps> = (props: IOperationsProps) => {
    const { operations, onOperationClick } = props;
    console.log("Operations component re-rendered", operations.length);
    return (
        <>
            <input type="button" value="Add operation" onClick={onOperationClick} />
            {
                operations.map((operation: string, index: number)=>{
                    return (
                        <p>{`THis is ${operation} number ${index+1}`}</p>
                    )
                })
            }
        </>
    )
}

export default memo(Operations);