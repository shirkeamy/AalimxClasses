import React from "react";

interface IInputWrapperProps {
    LabelText: string;
    Id: string;
    Type: "text" | "password";
    ClassName?: string;
    Name: string;
    Value: string;
    OnChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputWrapper: React.FC<IInputWrapperProps> = (props: IInputWrapperProps) => {

    const { Id, LabelText, Type, ClassName, Name, Value, OnChange }: IInputWrapperProps = props;

    return (
        <>
            <label htmlFor={Id}>{LabelText}</label>
            <input
                type={Type}
                name={Name}
                id={Id}
                className={ClassName ? `form-control ${ClassName}` : "form-control"}
                value={Value}
                onChange={OnChange}
            />
        </>
    )
}

export default InputWrapper;