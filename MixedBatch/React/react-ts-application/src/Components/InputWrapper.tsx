import React from "react";

interface IInputProps {
    label: string;
    type: string;
    className?: string;
    value: string;
    id: string;
    OnChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InputWrapper:React.FC<IInputProps> = (props: IInputProps) => {

    const { className, label, type, value, id, OnChange } = props;

    return (
    <>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            name={id}
            id={id}
            value= {value}
            className= {`form-control ${className}`}
            onChange={OnChange}
            />
    </>
    )
}

export default InputWrapper;