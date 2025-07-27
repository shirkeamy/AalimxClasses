import React from "react";

interface IInputWrapperProps {
    LabelText: string;
    Id: string;
    Type: "text" | "password";
    ClassName?: string;
    Name: string;
}

const InputWrapper: React.FC<IInputWrapperProps> = (props: IInputWrapperProps) => {

    const { Id, LabelText, Type, ClassName, Name }: IInputWrapperProps = props;

    return (
        <>
            <label htmlFor={Id}>{LabelText}</label>
            <input
                type={Type}
                name={Name}
                id={Id}
                className={ClassName ? `form-control ${ClassName}` : "form-control"}
            />
        </>
    )
}

export default InputWrapper;