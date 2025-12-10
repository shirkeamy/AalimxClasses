import React from 'react';

interface IButtonProps {
    value: string;
    className: string;
    id: string;
    index?: number;
}

const ButtonWrapper: React.FC<IButtonProps> = (props: IButtonProps) => {
    const { value, id, className, index } = props;

    return (
        <>
            {/* <input type="button" value={`${index}`} className="" id="" /> */}
            <input type="button" value={value} className={`btn ${className}`} id={id} />
        </>
    );
}

export default ButtonWrapper;